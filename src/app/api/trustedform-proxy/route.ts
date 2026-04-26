import { NextResponse } from "next/server";
import { fetch as undiciFetch } from "undici";
import { getProxyAgent } from "@/lib/leadsProxy";
import { resolveZip } from "@/lib/zipToMetro";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json();
  const { url, method, headers, data } = body;

  if (!url || !method) {
    return NextResponse.json({ error: "Missing url or method" }, { status: 400 });
  }

  const allowedHosts = ["api.trustedform.com", "privacy.trustedform.com"];
  const targetUrl = new URL(url);
  if (!allowedHosts.includes(targetUrl.hostname)) {
    return NextResponse.json({ error: "Disallowed host" }, { status: 403 });
  }

  const zipIn = typeof body.zip === "string" ? body.zip.trim() : "";
  const resolution = zipIn ? await resolveZip(zipIn) : null;
  const stateSlug = resolution?.msa?.stateSlug
    ?? (resolution?.zipStateCode
      ? resolution.zipStateCode.toLowerCase()
      : "california");
  const citySlug = resolution?.msa?.iproyalCity || null;
  const dispatcher = getProxyAgent({ stateSlug, citySlug });

  const upstreamHeaders: Record<string, string> = {};
  if (headers) {
    for (const key of Object.keys(headers)) {
      const lower = key.toLowerCase();
      if (
        lower === "host" ||
        lower === "origin" ||
        lower === "referer" ||
        lower.startsWith("sec-") ||
        lower === "content-length"
      ) {
        continue;
      }
      upstreamHeaders[key] = headers[key];
    }
  }
  if (data) {
    upstreamHeaders["content-type"] = headers?.["content-type"] || "application/json";
  }

  const fetchOptions: Parameters<typeof undiciFetch>[1] = {
    method,
    headers: upstreamHeaders,
    dispatcher,
  };
  if (method !== "GET" && method !== "HEAD" && data) {
    fetchOptions.body = typeof data === "string" ? data : JSON.stringify(data);
  }

  const res = await undiciFetch(url, fetchOptions);

  const resBody = await res.text();

  return new NextResponse(resBody, {
    status: res.status,
    statusText: res.statusText,
    headers: {
      "Content-Type": res.headers.get("content-type") || "text/plain",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
