"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  DollarSign,
  MessageSquare,
  Sparkles,
} from "lucide-react";

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
    <div className="relative">
      {/* Soft brand glow behind the card — adds depth without competing
          with the form content. Two stacked blurs (indigo + violet) so the
          halo reads as ambient brand light rather than a flat tint. */}
      <div className="absolute -inset-6 bg-brand/[0.10] blur-3xl rounded-[2rem] pointer-events-none" />
      <div className="absolute -inset-10 bg-violet/[0.07] blur-3xl rounded-[2.5rem] pointer-events-none" />

      <div className="relative rounded-3xl border border-white/[0.07] bg-surface shadow-[var(--shadow-panel)] overflow-hidden">
        {/* ── Card header — gradient strip + meta ─────────────────────── */}
        <div className="relative p-7 pb-6 border-b border-white/[0.07] bg-gradient-to-br from-brand/[0.05] via-transparent to-violet/[0.04]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  Online · 24h response
                </span>
              </div>
              <h2 className="text-xl font-bold text-zinc-100 leading-tight flex items-center gap-2">
                <Sparkles size={18} className="text-brand-light" />
                Strategy session request
              </h2>
              <p className="text-xs text-zinc-500 mt-1.5">
                Free · No obligation · Booked in under 5 minutes
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-end text-right flex-shrink-0">
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                Step
              </div>
              <div className="text-2xl font-black gradient-text leading-none">1/1</div>
            </div>
          </div>
        </div>

        {/* ── Body ────────────────────────────────────────────────────── */}
        <div className="p-7">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400/30 blur-2xl rounded-full" />
                <div className="relative w-16 h-16 rounded-full bg-emerald-500/[0.12] border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              {/* ── 01 · Your information ─────────────────────────────── */}
              <div>
                <SectionHeader index="01" title="Your information" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="First Name" required>
                    <Input
                      icon={<User size={14} />}
                      type="text"
                      required
                      placeholder="John"
                    />
                  </Field>
                  <Field label="Last Name" required>
                    <Input
                      icon={<User size={14} />}
                      type="text"
                      required
                      placeholder="Smith"
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <Field label="Email Address" required>
                    <Input
                      icon={<Mail size={14} />}
                      type="email"
                      required
                      placeholder="john@yourcompany.com"
                    />
                  </Field>
                  <Field label="Phone Number">
                    <Input
                      icon={<Phone size={14} />}
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Company / Business Name">
                    <Input
                      icon={<Building2 size={14} />}
                      type="text"
                      placeholder="Your Company LLC"
                    />
                  </Field>
                </div>
              </div>

              {/* ── 02 · Project details ──────────────────────────────── */}
              <div>
                <SectionHeader index="02" title="Project details" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Service Interested In" required>
                    <SelectInput icon={<Briefcase size={14} />} required>
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </SelectInput>
                  </Field>
                  <Field label="Monthly Budget Range">
                    <SelectInput icon={<DollarSign size={14} />}>
                      <option value="">Select budget range...</option>
                      <option>Under $1,000/month</option>
                      <option>$1,000 – $5,000/month</option>
                      <option>$5,000 – $15,000/month</option>
                      <option>$15,000 – $50,000/month</option>
                      <option>$50,000+/month</option>
                    </SelectInput>
                  </Field>
                </div>
              </div>

              {/* ── 03 · Tell us more ─────────────────────────────────── */}
              <div>
                <SectionHeader index="03" title="Tell us about your goals" />
                <Field label="Project Goals">
                  <div className="relative">
                    <MessageSquare
                      size={14}
                      className="absolute left-3.5 top-3.5 text-zinc-500 pointer-events-none"
                    />
                    <textarea
                      rows={4}
                      placeholder="Describe your business, current challenges, and what you're hoping to achieve..."
                      className="form-input resize-none pl-10"
                    />
                  </div>
                </Field>
              </div>

              {/* ── Submit ────────────────────────────────────────────── */}
              <div className="pt-2 border-t border-white/[0.055]">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-semibold text-[0.9rem] transition-all btn-shine btn-brand-glow mt-5"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending your message...
                    </>
                  ) : (
                    <>
                      Schedule Free Consultation <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <p className="text-xs text-zinc-600 text-center mt-4">
                  No credit card required · No obligation · 100% free strategy
                  session
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   Local helpers — kept colocated so the form stays a single, readable
   unit. SectionHeader: numbered "01 / Your information" row with a
   leading bar. Field: label + slot for the input. Input / SelectInput:
   wrapped controls that render an icon prefix inside the existing
   .form-input styling without diverging from the global token.
   ════════════════════════════════════════════════════════════════════ */

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-8 rounded-lg bg-brand/[0.12] border border-brand/25 flex items-center justify-center text-[11px] font-black text-brand-light tracking-wider">
        {index}
      </span>
      <div className="flex-1 flex items-center gap-3">
        <span className="text-xs font-bold text-zinc-200 uppercase tracking-widest">
          {title}
        </span>
        <span className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent" />
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-zinc-400">
        {label}
        {required ? <span className="text-brand-light"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

function Input({
  icon,
  ...props
}: { icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
        {icon}
      </span>
      <input {...props} className="form-input pl-10" />
    </div>
  );
}

function SelectInput({
  icon,
  children,
  ...props
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none z-10">
        {icon}
      </span>
      <select {...props} className="form-input pl-10 appearance-none pr-9">
        {children}
      </select>
      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
          <path
            d="M1 1L5.5 5.5L10 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
