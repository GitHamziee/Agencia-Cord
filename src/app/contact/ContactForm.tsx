"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  "Lead Generation",
  "Solar Services",
  "Roofing Services",
  "Real Estate",
  "Home Improvement",
  "Final Expense",
  "Medicare",
  "Virtual Call Center Buildout",
  "Web Development",
  "Multiple Services",
];

/* Interactive leaf — only the form is a Client Component. The rest of
   the contact page remains a Server Component. */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1600);
  };

  return (
    <div className="p-8 rounded-2xl border border-white/[0.07] bg-surface">
      {submitted ? (
        <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
          <div className="w-18 h-18 rounded-full bg-emerald-500/[0.1] border border-emerald-500/20 flex items-center justify-center w-16 h-16">
            <CheckCircle size={34} className="text-emerald-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-3">
              Message Received!
            </h3>
            <p className="text-zinc-400 max-w-sm leading-relaxed text-sm">
              Thank you for reaching out. Our team will contact you within
              24 hours to schedule your free consultation.
            </p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-2 transition-colors"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400">
                First Name <span className="text-brand-light">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="John"
                className="form-input"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400">
                Last Name <span className="text-brand-light">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Smith"
                className="form-input"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              Email Address <span className="text-brand-light">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="john@yourcompany.com"
              className="form-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="form-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              Company / Business Name
            </label>
            <input
              type="text"
              placeholder="Your Company LLC"
              className="form-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              Service Interested In <span className="text-brand-light">*</span>
            </label>
            <select required className="form-input">
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              Monthly Budget Range
            </label>
            <select className="form-input">
              <option value="">Select budget range...</option>
              <option>Under $1,000/month</option>
              <option>$1,000 – $5,000/month</option>
              <option>$5,000 – $15,000/month</option>
              <option>$15,000 – $50,000/month</option>
              <option>$50,000+/month</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-400">
              Tell us about your goals
            </label>
            <textarea
              rows={4}
              placeholder="Describe your business, current challenges, and what you're hoping to achieve..."
              className="form-input resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-semibold text-[0.9rem] transition-all btn-shine shadow-[0_0_30px_rgba(79,70,229,0.28)] hover:shadow-[0_0_50px_rgba(79,70,229,0.48)] mt-1"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin-slow" />
                Sending your message...
              </>
            ) : (
              <>
                Schedule Free Consultation <ArrowRight size={16} />
              </>
            )}
          </button>

          <p className="text-xs text-zinc-600 text-center">
            No credit card required. No obligation. 100% free strategy session.
          </p>
        </form>
      )}
    </div>
  );
}
