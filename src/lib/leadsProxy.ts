import { ProxyAgent, fetch as undiciFetch } from "undici";

type GeoTarget =
  | string
  | { stateSlug: string; citySlug?: string | null; session?: string | null };

function normalizeTarget(
  target: GeoTarget
): { stateSlug: string; citySlug: string | null; session: string | null } {
  if (typeof target === "string") return { stateSlug: target, citySlug: null, session: null };
  return {
    stateSlug: target.stateSlug,
    citySlug: target.citySlug || null,
    session: target.session || null,
  };
}

// ---------- Reusable proxy agent ----------
export function getProxyAgent(target: GeoTarget): ProxyAgent {
  const username = process.env.IPROYAL_USERNAME;
  const password = process.env.IPROYAL_PASSWORD;
  const host = process.env.IPROYAL_HOST || "geo.iproyal.com";
  const port = process.env.IPROYAL_PORT || "12321";

  if (!username || !password) {
    throw new Error(
      "IPRoyal credentials not configured. Set IPROYAL_USERNAME and IPROYAL_PASSWORD in .env.local.",
    );
  }

  const { stateSlug, citySlug, session } = normalizeTarget(target);
  const sessionId = session || Math.random().toString(36).slice(2, 10);
  const cityPart = citySlug ? `_city-${citySlug}` : "";
  const targetedPassword = `${password}_country-us_state-${stateSlug}${cityPart}_session-${sessionId}`;
  const proxyUrl = `http://${encodeURIComponent(username)}:${encodeURIComponent(targetedPassword)}@${host}:${port}`;

  return new ProxyAgent(proxyUrl);
}

// ---------- IP checker (uses the helper) ----------
export async function getProxyIp(target: GeoTarget): Promise<string> {
  const dispatcher = getProxyAgent(target);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  let res;
  try {
    res = await undiciFetch("https://api.ipify.org?format=json", {
      dispatcher,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) throw new Error(`Upstream returned ${res.status}`);
  const data = (await res.json()) as { ip: string };
  return data.ip;
}
