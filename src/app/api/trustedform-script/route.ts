import { NextResponse } from "next/server";
import { fetch as undiciFetch } from "undici";
import { getProxyAgent } from "@/lib/leadsProxy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const stateSlug = searchParams.get("state") || "california";
  const field = searchParams.get("field") || "xxTrustedFormCertUrl";
  const useTaggedConsent = searchParams.get("use_tagged_consent") || "true";
  const l = searchParams.get("l") || `${Date.now()}${Math.random()}`;

  const dispatcher = getProxyAgent(stateSlug);

  const tfUrl =
    `https://api.trustedform.com/trustedform.js?field=${encodeURIComponent(field)}` +
    `&use_tagged_consent=${encodeURIComponent(useTaggedConsent)}&l=${encodeURIComponent(l)}`;

  const res = await undiciFetch(tfUrl, { dispatcher });

  if (!res.ok) {
    return NextResponse.json(
      { error: `Failed to load TrustedForm script: ${res.status}` },
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

  return new NextResponse(scriptBody, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      // Pin state for subsequent /api/trustedform-proxy/* requests
      "Set-Cookie": `tf_state=${encodeURIComponent(stateSlug)}; Path=/api/trustedform-proxy; SameSite=Lax`,
    },
  });
}
