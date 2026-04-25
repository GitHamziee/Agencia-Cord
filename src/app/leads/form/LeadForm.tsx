"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { STATES } from "@/lib/states";

type SubmitResult = {
  ok: boolean;
  id: string;
  certUrl: string | null;
  sheetError: string | null;
};

export default function LeadForm() {
  const searchParams = useSearchParams();
  const stateCode = searchParams.get("state") || "";
  const stateSlug = STATES[stateCode]?.slug || "california";

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formEl = e.currentTarget;

    // Wait for TrustedForm to populate xxTrustedFormCertUrl (up to 12s)
    const certInput = formEl.querySelector<HTMLInputElement>(
      'input[name="xxTrustedFormCertUrl"]'
    );
    const deadline = Date.now() + 12000;
    while (certInput && !certInput.value && Date.now() < deadline) {
      await new Promise((r) => setTimeout(r, 250));
    }

    const fd = new FormData(formEl);
    const payload: Record<string, FormDataEntryValue> = Object.fromEntries(
      fd.entries()
    );
    payload.state = stateCode;

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
          {result.certUrl && (
            <p className="mt-2 text-xs font-mono text-zinc-500 break-all">
              Cert:{" "}
              <a
                href={result.certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-200 underline underline-offset-2"
              >
                {result.certUrl}
              </a>
            </p>
          )}
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
      {/* Interceptor – must run first */}
      <Script id="tf-interceptor" strategy="afterInteractive">
        {`(function() {
          var formSlug = "${stateSlug}";
          function headersToPlain(headers) {
            if (!headers) return {};
            if (headers instanceof Headers) {
              var obj = {};
              headers.forEach(function(v, k) { obj[k] = v; });
              return obj;
            }
            return headers;
          }
          // Intercept fetch
          var origFetch = window.fetch;
          window.fetch = function(input, init) {
            var url = input instanceof Request ? input.url : String(input);
            if (url.indexOf('trustedform.com') === -1) {
              return origFetch.call(this, input, init);
            }
            return new Promise(function(resolve, reject) {
              var method = init && init.method
                ? init.method
                : (input instanceof Request ? input.method : 'GET');
              var headers = headersToPlain(
                init && init.headers
                  ? init.headers
                  : (input instanceof Request ? input.headers : {})
              );
              var bodyPromise = Promise.resolve();
              var body;
              if (init && init.body) {
                if (typeof init.body === 'string') {
                  body = init.body;
                } else if (init.body instanceof FormData) {
                  body = Object.fromEntries(init.body);
                } else {
                  body = init.body;
                }
              } else if (input instanceof Request && input.body) {
                bodyPromise = input.clone().text().then(function(txt) { body = txt; });
              }
              bodyPromise.then(function() {
                return origFetch('/api/trustedform-proxy', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    url: url,
                    method: method,
                    headers: headers,
                    data: body || null,
                    state: formSlug
                  })
                });
              }).then(resolve).catch(reject);
            });
          };
          // Intercept XMLHttpRequest
          var OrigXHR = window.XMLHttpRequest;
          window.XMLHttpRequest = function() {
            var xhr = new OrigXHR();
            var originalOpen = xhr.open;
            var originalSend = xhr.send;
            var _method = 'GET';
            var _url = '';
            xhr.open = function(method, url, async, user, password) {
              _method = method;
              _url = url;
              return originalOpen.call(this, method, url, async !== false, user, password);
            };
            xhr.send = function(body) {
              var self = this;
              if (_url.indexOf('trustedform.com') === -1) {
                return originalSend.call(self, body);
              }
              self.abort();
              var proxyPayload = {
                url: _url,
                method: _method,
                headers: {},
                data: body,
                state: formSlug
              };
              origFetch('/api/trustedform-proxy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(proxyPayload)
              }).then(function(proxyRes) {
                Object.defineProperty(self, 'readyState', { value: 4, writable: true });
                Object.defineProperty(self, 'status', { value: proxyRes.status, writable: true });
                Object.defineProperty(self, 'statusText', { value: proxyRes.statusText, writable: true });
                return proxyRes.text();
              }).then(function(text) {
                Object.defineProperty(self, 'responseText', { value: text, writable: true });
                Object.defineProperty(self, 'response', { value: text, writable: true });
                if (self.onreadystatechange) self.onreadystatechange();
                if (self.onload) self.onload();
              }).catch(function(err) {
                if (self.onerror) self.onerror(err);
              });
            };
            return xhr;
          };
        })();`}
      </Script>

      {/* TrustedForm loader – runs after interceptor */}
      <Script id="trustedform" strategy="afterInteractive">
        {`(function() {
            var tf = document.createElement('script');
            tf.type = 'text/javascript';
            tf.async = false;
            tf.src = '/api/trustedform-script?field=xxTrustedFormCertUrl&use_tagged_consent=true&state=${stateSlug}&l=' + new Date().getTime() + Math.random();
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
        {stateCode && (
          <div className="text-xs font-semibold text-zinc-500">
            State: <span className="text-zinc-300">{stateCode}</span>
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
