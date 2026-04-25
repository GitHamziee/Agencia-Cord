"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";

type SubmitResult = {
  ok: boolean;
  id: string;
  certUrl: string | null;
  sheetError: string | null;
};

export default function LeadForm() {
  const searchParams = useSearchParams();
  const state = searchParams.get("state") || "";

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload: Record<string, FormDataEntryValue> = Object.fromEntries(
      fd.entries()
    );
    payload.state = state;

    try {
      const res = await fetch("/api/leads/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Submit failed (${res.status})`);
      const data: SubmitResult = await res.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="p-8 rounded-2xl border border-white/[0.07] bg-surface flex flex-col items-center text-center gap-5 py-16">
        <div className="w-18 h-18 rounded-full bg-emerald-500/[0.1] border border-emerald-500/20 flex items-center justify-center w-16 h-16">
          <CheckCircle size={34} className="text-emerald-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-100 mb-3">
            Submission Received
          </h3>
          <p className="text-zinc-400 max-w-sm leading-relaxed text-sm">
            Thanks. A specialist will reach out within 24 hours.
          </p>
          <p className="mt-4 text-xs font-mono text-zinc-500 break-all">
            Ref: {result.id}
          </p>
        </div>
        <Link
          href="/leads"
          className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-2"
        >
          Submit another inquiry
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* TrustedForm */}
      <Script id="trustedform" strategy="afterInteractive">
        {`(function() {
            var tf = document.createElement('script');
            tf.type = 'text/javascript';
            tf.async = true;
            tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
              '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
              new Date().getTime() + Math.random();
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(tf, s);
          })();`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://api.trustedform.com/ns.gif" alt="" />
      </noscript>

      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl border border-white/[0.07] bg-surface flex flex-col gap-5"
      >
        {state && (
          <div className="text-xs font-semibold text-zinc-500">
            State: <span className="text-zinc-300">{state}</span>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              First Name <span className="text-brand-light">*</span>
            </label>
            <input
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              placeholder="John"
              className="form-input"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              Last Name <span className="text-brand-light">*</span>
            </label>
            <input
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              placeholder="Smith"
              className="form-input"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              Age <span className="text-brand-light">*</span>
            </label>
            <input
              name="age"
              type="number"
              min={18}
              max={120}
              required
              placeholder="35"
              className="form-input"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              Zip Code <span className="text-brand-light">*</span>
            </label>
            <input
              name="zip"
              type="text"
              inputMode="numeric"
              pattern="\d{5}"
              maxLength={10}
              required
              autoComplete="postal-code"
              placeholder="90210"
              className="form-input"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-zinc-400">
            Contact Number <span className="text-brand-light">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            className="form-input"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-zinc-400">
            Interested in services <span className="text-brand-light">*</span>
          </label>
          <textarea
            name="interest"
            rows={4}
            required
            placeholder="Tell us what you're looking for..."
            className="form-input"
          />
        </div>

        {/* TrustedForm hidden inputs (populated by the script above) */}
        <input type="hidden" name="xxTrustedFormCertUrl" defaultValue="" />
        <input type="hidden" name="xxTrustedFormPingUrl" defaultValue="" />
        <input type="hidden" name="xxTrustedFormCertToken" defaultValue="" />

        <label className="flex items-start gap-3 text-xs text-zinc-400 leading-relaxed mt-1">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 rounded border-white/20 bg-white/[0.03]"
          />
          <span id="leadid_tcpa_disclosure">
            By clicking Submit, I agree to be contacted by phone, SMS, or email at
            the number/address provided regarding the services I&apos;ve expressed
            interest in. Consent is not a condition of purchase.
          </span>
        </label>

        {error && <div className="text-sm text-rose-400">{error}</div>}

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-light disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting…" : "Submit"}
          {!submitting && <ArrowRight size={16} />}
        </button>
      </form>
    </>
  );
}
