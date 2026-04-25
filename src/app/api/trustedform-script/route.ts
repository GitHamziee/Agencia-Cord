import { NextResponse } from "next/server";
import { fetch as undiciFetch } from "undici";
import { getProxyAgent } from "@/lib/leadsProxy";
import { lookupZip } from "@/lib/zipLookup";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const zip = (searchParams.get("zip") || "").trim();
  const field = searchParams.get("field") || "xxTrustedFormCertUrl";
  const useTaggedConsent = searchParams.get("use_tagged_consent") || "true";
  const l = searchParams.get("l") || `${Date.now()}${Math.random()}`;

  const geo = zip ? await lookupZip(zip) : null;
  const stateSlug = geo?.stateSlug || "california";
  const citySlug = geo?.citySlug || null;

  // Reuse an existing sticky session from cookie, or mint a new one so every
  // beacon during this visit lands on the same residential IP.
  const cookieHeader = request.headers.get("cookie") || "";
  const existingSession = cookieHeader.match(/(?:^|;\s*)tf_session=([^;]+)/);
  const session = existingSession
    ? decodeURIComponent(existingSession[1])
    : Math.random().toString(36).slice(2, 12);

  const tfUrl =
    `https://api.trustedform.com/trustedform.js?field=${encodeURIComponent(field)}` +
    `&use_tagged_consent=${encodeURIComponent(useTaggedConsent)}&l=${encodeURIComponent(l)}`;

  // Try city-targeted first; if iproyal has no IP for that city the CONNECT
  // tunnel returns 503 and undici throws — fall back to state-only.
  let res: Awaited<ReturnType<typeof undiciFetch>> | null = null;
  let effectiveCity: string | null = citySlug;
  try {
    res = await undiciFetch(tfUrl, {
      dispatcher: getProxyAgent({ stateSlug, citySlug, session }),
    });
    if (!res.ok) throw new Error(`upstream ${res.status}`);
  } catch {
    if (citySlug) {
      effectiveCity = null;
      res = await undiciFetch(tfUrl, {
        dispatcher: getProxyAgent({ stateSlug, citySlug: null, session }),
      });
    }
  }

  if (!res || !res.ok) {
    return NextResponse.json(
      { error: `Failed to load TrustedForm script: ${res?.status ?? "no response"}` },
      { status: 502 }
    );
  }

  const original = await res.text();

  // Build origin (e.g. http://localhost:3001) for absolute proxy URLs
  const reqUrl = new URL(request.url);
  const proto = request.headers.get("x-forwarded-proto") || reqUrl.protocol.replace(":", "");
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || reqUrl.host;
  const origin = `${proto}://${host}`;

  // 1) Make the script's self-discovery match our hosted path.
  // 2) Replace every absolute and protocol-relative *.trustedform.com URL with
  //    our catch-all proxy: ${origin}/api/trustedform-proxy/<subdomain>/...
  //    This catches fetch, XHR, Image(), sendBeacon, <img>, and <script> srcs.
  const scriptBody = original
    .replace(
      `'script[src*="trustedform.com"]'`,
      `'script[src*="trustedform-script"]'`
    )
    .replace(
      /https?:\/\/api\.trustedform\.com/g,
      `${origin}/api/trustedform-proxy/api`
    )
    .replace(
      /\/\/api\.trustedform\.com/g,
      `//${host}/api/trustedform-proxy/api`
    );

  const headers = new Headers({
    "Content-Type": "application/javascript; charset=utf-8",
    "Cache-Control": "no-store, max-age=0",
  });
  headers.append(
    "Set-Cookie",
    `tf_state=${encodeURIComponent(stateSlug)}; Path=/api/trustedform-proxy; SameSite=Lax`
  );
  headers.append(
    "Set-Cookie",
    `tf_city=${encodeURIComponent(effectiveCity || "")}; Path=/api/trustedform-proxy; SameSite=Lax`
  );
  headers.append(
    "Set-Cookie",
    `tf_session=${encodeURIComponent(session)}; Path=/api/trustedform-proxy; SameSite=Lax; Max-Age=600`
  );
  return new NextResponse(scriptBody, { headers });
}
