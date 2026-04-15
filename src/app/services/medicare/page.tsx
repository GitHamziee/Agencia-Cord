import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, CheckCircle, Shield, Users, FileCheck } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Medicare Lead Generation",
  description:
    "CMS-compliant Medicare leads and appointment setting. T65, dual-eligible, and AEP leads for licensed Medicare insurance agents.",
};

const leadPrograms = [
  {
    title: "Turning 65 (T65) Leads",
    desc: "Prospects within 3–6 months of Medicare eligibility. High urgency and genuine interest — the best time to engage.",
    badge: "Highest intent",
  },
  {
    title: "Annual Enrollment Period (AEP)",
    desc: "Medicare beneficiaries actively reviewing their coverage during AEP. Ready to compare plans and switch.",
    badge: "Peak season",
  },
  {
    title: "Dual Eligible (DSNP) Leads",
    desc: "Medicare/Medicaid dual-eligible prospects who qualify for special needs plans with $0 premium options.",
    badge: "High close rate",
  },
  {
    title: "Medicare Supplement",
    desc: "Seniors on original Medicare looking to add a Medigap plan to reduce out-of-pocket exposure.",
    badge: "High value",
  },
  {
    title: "Medicare Advantage",
    desc: "Beneficiaries exploring Medicare Advantage alternatives to their current plan or original Medicare.",
    badge: "High volume",
  },
  {
    title: "Appointment-Set Leads",
    desc: "Fully confirmed appointments with licensed agents — the prospect knows your name and is expecting your call.",
    badge: "Ready to buy",
  },
];

const compliance = [
  "Sourced using CMS-compliant marketing materials",
  "No prohibited inducements or misleading language",
  "Scope of Appointment documentation available",
  "TCPA-compliant contact practices",
  "Opt-in records retained and available on request",
  "State-level marketing restrictions respected",
];

const stats = [
  { value: "290+", label: "Medicare Agencies" },
  { value: "9×", label: "Avg. Enrollment Growth" },
  { value: "22%", label: "Avg. Lead-to-Enroll Rate" },
  { value: "CMS", label: "Compliance Standard" },
];

export default function MedicarePage() {
  return (
    <div className="pt-16">
      {/* ── Clean Healthcare Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950/15 via-bg to-bg" />
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="glow-blob w-[500px] h-[400px] bg-pink-500/[0.08] top-0 right-1/4" />
        <div className="glow-blob w-[300px] h-[300px] bg-rose-500/[0.06] bottom-1/4 left-0" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-pink-500/25 bg-pink-500/[0.08] px-3.5 py-1 text-xs font-medium text-pink-300 mb-8">
              <Heart size={11} /> Medicare Lead Generation
            </div>
            <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
              <span className="gradient-text-white">Compliant.</span>{" "}
              <span style={{
                background: "linear-gradient(135deg, #f472b6 0%, #fb7185 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>Consistent.</span>
              <br />
              <span className="gradient-text-white">Converting.</span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Medicare leads that are CMS-compliant from source to delivery. We understand
              the rules — and we build every campaign around them.
            </p>
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all btn-shine"
                style={{
                  background: "linear-gradient(135deg, #db2777, #e11d48)",
                  boxShadow: "0 0 36px rgba(219,39,119,0.25)",
                }}
              >
                Get Medicare Leads <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/[0.09] text-zinc-400 hover:text-zinc-100 font-medium transition-all hover:bg-white/[0.04]"
              >
                Discuss Compliance
              </Link>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up delay-400 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.07]">
              {stats.map((s, i) => (
                <div key={i} className="bg-surface/80 py-6 px-4 text-center">
                  <div className="text-3xl font-black text-pink-300 mb-1">{s.value}</div>
                  <div className="text-xs text-zinc-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Lead programs ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Medicare lead programs for every strategy
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              From T65 to AEP to dual-eligible — we have lead programs for every
              Medicare sales model and enrollment period.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {leadPrograms.map((lp, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="h-full p-6 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/[0.1] border border-pink-500/20 flex items-center justify-center">
                      <Heart size={14} className="text-pink-400" />
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-md bg-pink-500/[0.08] border border-pink-500/15 text-pink-400 font-medium">
                      {lp.badge}
                    </span>
                  </div>
                  <h3 className="font-semibold text-zinc-200 mb-2">{lp.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{lp.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance section ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/[0.07] px-3 py-1 text-xs text-pink-300 font-medium mb-6">
                <FileCheck size={11} /> CMS Compliance
              </div>
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-6">
                Compliance isn't an afterthought — it's our foundation.
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
                Medicare marketing is heavily regulated. Non-compliant lead sources can
                put your license at risk. Every Agencia Cord Medicare lead is sourced
                following CMS guidelines from the very first touchpoint.
              </p>
              <div className="flex flex-col gap-2.5">
                {compliance.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Shield size={14} className="text-pink-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{c}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              <div className="p-7 rounded-2xl border border-pink-500/15 bg-surface">
                <h3 className="font-bold text-zinc-200 mb-5">Lead delivery options</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "Direct Transfer Calls", desc: "Live transfer to your agent — prospect stays on line while we warm-transfer." },
                    { title: "Scheduled Appointments", desc: "Calendar appointments booked with SOA confirmed. You receive a calendar invite." },
                    { title: "Digital Lead Delivery", desc: "Real-time data delivery via email, webhook, or CRM integration." },
                    { title: "Direct Mail Responders", desc: "Prospects who physically returned a business reply card — highest intent." },
                  ].map((option, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-surface-2">
                      <CheckCircle size={15} className="text-pink-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-zinc-200 text-sm mb-1">{option.title}</div>
                        <p className="text-xs text-zinc-500 leading-relaxed">{option.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to scale your Medicare enrollments?"
        subheadline="Book a compliance call with our Medicare specialist and design a lead program for your sales model."
        primaryCTA="Get Medicare Leads"
        badge="Free Medicare Strategy Call"
      />
    </div>
  );
}
