import { NextResponse } from "next/server";
import { fetch as undiciFetch } from "undici";
import { getProxyAgent } from "@/lib/leadsProxy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const STRIPPED_REQUEST_HEADERS = new Set([
  "host",
  "origin",
  "referer",
  "content-length",
  "connection",
  "x-forwarded-for",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-real-ip",
  "cookie",
]);

const STRIPPED_RESPONSE_HEADERS = new Set([
  "content-length",
  "content-encoding",
  "transfer-encoding",
  "connection",
]);

async function handle(
  request: Request,
  ctx: { params: Promise<{ path?: string[] }> }
) {
  const { path } = await ctx.params;
  if (!path || path.length === 0) {
    return NextResponse.json(
      { error: "Missing target subdomain" },
      { status: 400 }
    );
  }

  const [subdomain, ...rest] = path;
  const upstreamUrl = new URL(
    `https://${subdomain}.trustedform.com/${rest.join("/")}`
  );

  // Forward query string from the incoming request
  const incoming = new URL(request.url);
  incoming.searchParams.forEach((v, k) => {
    upstreamUrl.searchParams.set(k, v);
  });

  // Resolve state slug from cookie set by /api/trustedform-script
  const cookieHeader = request.headers.get("cookie") || "";
  const m = cookieHeader.match(/(?:^|;\s*)tf_state=([^;]+)/);
  const stateSlug = m ? decodeURIComponent(m[1]) : "california";
  const dispatcher = getProxyAgent(stateSlug);

  // Forward sanitized request headers
  const fwdHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    const lower = key.toLowerCase();
    if (STRIPPED_REQUEST_HEADERS.has(lower) || lower.startsWith("sec-")) return;
    fwdHeaders[key] = value;
  });

  let body: ArrayBuffer | undefined;
  if (request.method !== "GET" && request.method !== "HEAD") {
    body = await request.arrayBuffer();
  }

  const upstream = await undiciFetch(upstreamUrl.toString(), {
    method: request.method,
    headers: fwdHeaders,
    body: body && body.byteLength ? body : undefined,
    dispatcher,
  });

  const respHeaders = new Headers();
  upstream.headers.forEach((value, key) => {
    if (STRIPPED_RESPONSE_HEADERS.has(key.toLowerCase())) return;
    respHeaders.set(key, value);
  });
  respHeaders.set("Cache-Control", "no-store");
  respHeaders.set("Access-Control-Allow-Origin", "*");

  // Rewrite TF hostnames in JS / JSON / HTML / text bodies so every
  // hardcoded URL in nested bundles also routes through this proxy.
  const ct = (upstream.headers.get("content-type") || "").toLowerCase();
  const isText =
    ct.includes("javascript") ||
    ct.includes("json") ||
    ct.includes("text/") ||
    ct.includes("html");

  const proto =
    request.headers.get("x-forwarded-proto") || incoming.protocol.replace(":", "");
  const fwdHost =
    request.headers.get("x-forwarded-host") || request.headers.get("host") || incoming.host;
  const selfOrigin = `${proto}://${fwdHost}`;

  // 204/205/304 must have null body
  const nullBody = upstream.status === 204 || upstream.status === 205 || upstream.status === 304;

  if (nullBody) {
    return new NextResponse(null, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: respHeaders,
    });
  }

  if (isText) {
    const text = await upstream.text();
    const rewritten = text
      .replace(
        /https?:\/\/api\.trustedform\.com/g,
        `${selfOrigin}/api/trustedform-proxy/api`
      )
      .replace(
        /\/\/api\.trustedform\.com/g,
        `//${fwdHost}/api/trustedform-proxy/api`
      );
    return new NextResponse(rewritten, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: respHeaders,
    });
  }

  const buf = await upstream.arrayBuffer();
  return new NextResponse(buf, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: respHeaders,
  });
}

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
export const HEAD = handle;
export const OPTIONS = handle;
