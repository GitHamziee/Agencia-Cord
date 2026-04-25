import { ProxyAgent, fetch as undiciFetch } from "undici";

// ---------- Reusable proxy agent ----------
export function getProxyAgent(stateSlug: string): ProxyAgent {
  const username = process.env.IPROYAL_USERNAME;
  const password = process.env.IPROYAL_PASSWORD;
  const host = process.env.IPROYAL_HOST || "geo.iproyal.com";
  const port = process.env.IPROYAL_PORT || "12321";

  if (!username || !password) {
    throw new Error(
      "IPRoyal credentials not configured. Set IPROYAL_USERNAME and IPROYAL_PASSWORD in .env.local.",
    );
  }

  // IProxy targeting: password_country-us_state-<slug>_session-<random>
  const session = Math.random().toString(36).slice(2, 10);
  const targetedPassword = `${password}_country-us_state-${stateSlug}_session-${session}`;
  const proxyUrl = `http://${encodeURIComponent(username)}:${encodeURIComponent(targetedPassword)}@${host}:${port}`;

  return new ProxyAgent(proxyUrl);
}

// ---------- Existing IP checker (refactored to use the helper) ----------
export async function getProxyIp(stateSlug: string): Promise<string> {
  const dispatcher = getProxyAgent(stateSlug);

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
