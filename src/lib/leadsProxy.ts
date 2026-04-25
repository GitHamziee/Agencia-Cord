import { ProxyAgent, fetch as undiciFetch } from "undici";

export async function getProxyIp(stateSlug: string): Promise<string> {
  const username = process.env.IPROYAL_USERNAME;
  const password = process.env.IPROYAL_PASSWORD;
  const host = process.env.IPROYAL_HOST || "geo.iproyal.com";
  const port = process.env.IPROYAL_PORT || "12321";

  if (!username || !password) {
    throw new Error(
      "IPRoyal credentials not configured. Set IPROYAL_USERNAME and IPROYAL_PASSWORD in .env.local."
    );
  }

  const session = Math.random().toString(36).slice(2, 10);
  const user = `${username}-country-us-state-${stateSlug}-session-${session}`;
  const proxyUrl = `http://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}`;

  const dispatcher = new ProxyAgent(proxyUrl);

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
