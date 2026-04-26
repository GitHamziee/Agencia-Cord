export type Lead = {
  id: string;
  receivedAt: string;
  state: string | null;
  firstName: string;
  lastName: string;
  age: string;
  zip: string;
  zipCity: string | null;
  msaSlug: string | null;
  servedCity: string | null; // The city used for iproyal targeting
  phone: string;
  interest: string;
  consent: boolean;
  certUrl: string | null;
  pingUrl: string | null;
  certToken: string | null;
};

export async function appendLeadToSheet(lead: Lead): Promise<void> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) {
    console.warn("[leads] GOOGLE_SHEETS_WEBHOOK_URL not set — skipping sheet write");
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Sheet webhook ${res.status}: ${body}`);
  }
}
