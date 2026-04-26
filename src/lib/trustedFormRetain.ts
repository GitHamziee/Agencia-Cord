// Calls TrustedForm's claim/retain endpoint to permanently retain a cert
// against this account. Without this step the cert auto-deletes after
// 90 days and shows "Certificate Unretained" on the cert page.
//
// Endpoint: POST https://cert.trustedform.com/<id>
// Auth: HTTP Basic, username "API", password is the account API key.
// Body (form-urlencoded): reference, vendor, email.

export type RetainResult =
  | { ok: true; status: number; body: unknown }
  | { ok: false; status: number; body: unknown; error?: string };

export async function retainCert(
  certUrl: string,
  reference: string,
): Promise<RetainResult | null> {
  const apiKey = process.env.TRUSTEDFORM_API_KEY;
  const vendor = process.env.TRUSTEDFORM_VENDOR || "Agencia Cord";
  const email = process.env.TRUSTEDFORM_EMAIL;

  if (!apiKey) {
    console.warn("[trustedform-retain] TRUSTEDFORM_API_KEY not set — skipping retain");
    return null;
  }
  if (!email) {
    console.warn("[trustedform-retain] TRUSTEDFORM_EMAIL not set — skipping retain");
    return null;
  }

  // The cert URL we capture is e.g. https://cert.trustedform.com/abc123…
  // Posting back to the same URL is the documented retain action.
  const auth =
    "Basic " + Buffer.from(`API:${apiKey}`).toString("base64");

  const params = new URLSearchParams();
  params.set("reference", reference);
  params.set("vendor", vendor);
  params.set("email", email);

  const ctrl = new AbortController();
  const timeout = setTimeout(() => ctrl.abort(), 8000);

  try {
    const res = await fetch(certUrl, {
      method: "POST",
      headers: {
        Authorization: auth,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: params.toString(),
      signal: ctrl.signal,
    });
    const text = await res.text();
    let body: unknown = text;
    try {
      body = JSON.parse(text);
    } catch {
      // leave as text
    }
    return res.ok
      ? { ok: true, status: res.status, body }
      : { ok: false, status: res.status, body };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      body: null,
      error: e instanceof Error ? e.message : String(e),
    };
  } finally {
    clearTimeout(timeout);
  }
}
