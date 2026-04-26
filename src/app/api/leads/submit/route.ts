import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { appendLeadToSheet, type Lead } from "@/lib/leadsSheet";
import { retainCert } from "@/lib/trustedFormRetain";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const str = (k: string) =>
    typeof body[k] === "string" ? (body[k] as string) : "";

  const lead: Lead = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    state: str("stateCode") || null,
    firstName: str("firstName"),
    lastName: str("lastName"),
    age: str("age"),
    zip: str("zip"),
    zipCity: str("zipCity") || null,
    msaSlug: str("msaSlug") || null,
    servedCity: str("iproyalCity") || null,
    phone: str("phone"),
    interest: str("interest"),
    consent: !!body.consent,
    certUrl: str("xxTrustedFormCertUrl") || null,
    pingUrl: str("xxTrustedFormPingUrl") || null,
    certToken: str("xxTrustedFormCertToken") || null,
  };

  // Retain the TrustedForm cert against our account so it doesn't auto-delete
  // after 90 days. Synchronous; logs and continues if it fails.
  let retainStatus: number | null = null;
  let retainError: string | null = null;
  if (lead.certUrl) {
    const result = await retainCert(lead.certUrl, lead.id);
    if (result) {
      retainStatus = result.status;
      if (!result.ok) {
        retainError =
          (typeof result.body === "object" && result.body
            ? JSON.stringify(result.body)
            : String(result.body || result.error || "")) || null;
        console.error(
          `[lead] cert retain failed: ${result.status} ${retainError}`,
        );
      } else {
        console.log(`[lead] cert retained (${result.status})`);
      }
    }
  }

  console.log("[lead]", JSON.stringify(lead));

  let sheetError: string | null = null;
  try {
    await appendLeadToSheet(lead);
  } catch (e) {
    sheetError = e instanceof Error ? e.message : String(e);
    console.error("[lead] sheet append failed:", sheetError);
  }

  return NextResponse.json({
    ok: true,
    id: lead.id,
    certUrl: lead.certUrl,
    sheetError,
    retainStatus,
    retainError,
  });
}
