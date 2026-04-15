import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sun, CheckCircle, Zap, Home, Building2, TrendingUp } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Solar Lead Generation Services",
  description:
    "Exclusive solar leads for residential and commercial installers. Pre-qualified homeowners ready to go solar, delivered in real-time.",
};

const offerings = [
  {
    icon: Home,
    title: "Residential Solar Leads",
    desc: "Homeowners with high electric bills, good roof condition, and expressed interest in solar. Pre-screened for home ownership.",
    tags: ["Verified homeowner", "Bill threshold qualified", "Credit pre-screened"],
  },
  {
    icon: Building2,
    title: "Commercial Solar Leads",
    desc: "Business owners and property managers exploring commercial solar installations. Verified decision-makers only.",
    tags: ["Decision-maker verified", "Business-owned property", "High ROI potential"],
  },
  {
    icon: TrendingUp,
    title: "Solar Appointment Setting",
    desc: "We don't just deliver leads — we book the appointments directly onto your team's calendar with pre-set expectations.",
    tags: ["Calendar-scheduled", "No-show protection", "Script-trained setters"],
  },
];

const qualifications = [
  "Homeowner verified (not renter)",
  "Minimum $150/month electric bill",
  "Good credit indicator (no hard pull)",
  "South-facing or accessible roof",
  "Not previously installed",
  "Geographic targeting by utility zone",
];

const stats = [
  { value: "2,400+", label: "Solar Installers Served" },
  { value: "68%", label: "Lead-to-Appointment Rate" },
  { value: "$3.80", label: "Avg. Cost Per Watt Acquired" },
  { value: "30d", label: "Campaign Launch Time" },
];

export default function SolarPage() {
  return (
    <div className="pt-16">
      {/* ── Gradient Hero ── */}
      <section className="relative py-32 overflow-hidden">
        {/* Warm background */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-bg to-bg" />
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="glow-blob w-[700px] h-[500px] bg-amber-500/[0.12] -top-20 left-1/2 -translate-x-1/2" />
        <div className="glow-blob w-[300px] h-[300px] bg-orange-500/[0.07] top-1/2 right-0" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/[0.08] px-4 py-1.5 text-xs font-medium text-amber-300 mb-10">
            <Sun size={11} className="fill-amber-300" /> Solar Lead Generation
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
            <span className="gradient-text-solar">Turn sunlight</span>
            <br />
            <span className="gradient-text-white">into a pipeline.</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop competing for recycled leads. We deliver exclusive, pre-qualified
            homeowners who are ready to go solar — right to your sales team.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all btn-shine"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                boxShadow: "0 0 40px rgba(245,158,11,0.3)",
              }}
            >
              Get Solar Leads Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/[0.09] hover:border-white/[0.18] text-zinc-400 hover:text-zinc-100 font-medium transition-all"
            >
              All Services
            </Link>
          </div>

          {/* Stats strip */}
          <div className="animate-fade-in-up delay-400 grid grid-cols-2 md:grid-cols-4 gap-px mt-16 rounded-2xl overflow-hidden border border-white/[0.07]">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface/80 py-6 px-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-black gradient-text-solar mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offerings ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Solar lead programs built for scale
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Whether you install residential or commercial, we have a lead program built
              specifically for your sales model.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4">
            {offerings.map((o, i) => {
              const Icon = o.icon;
              return (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="h-full p-7 rounded-2xl border border-amber-500/15 bg-surface card-hover">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                         style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
                      <Icon size={22} className="text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-200 mb-3">{o.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-5">{o.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {o.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-[11px] text-amber-400/80 border border-amber-500/15 bg-amber-500/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Qualification criteria + energy savings ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-6">
                Every lead is pre-qualified before delivery
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
                We don't just collect form fills. Every solar lead goes through a
                qualification layer to ensure they meet the minimum criteria for a
                viable installation.
              </p>
              <div className="flex flex-col gap-2.5">
                {qualifications.map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{q}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              {/* Visual: Solar performance card */}
              <div className="p-7 rounded-2xl border border-amber-500/15 bg-surface">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-zinc-300">Sample Lead Profile</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
                    Qualified ✓
                  </span>
                </div>
                <div className="flex flex-col gap-3.5">
                  {[
                    ["Name", "Sarah M.", ""],
                    ["Location", "Phoenix, AZ 85001", ""],
                    ["Monthly Electric Bill", "$340/month", "✓"],
                    ["Home Ownership", "Verified Owner", "✓"],
                    ["Roof Condition", "Good — 8yr old", "✓"],
                    ["Credit Indicator", "Good", "✓"],
                    ["Previously Contacted", "No", "✓"],
                    ["Expressed Interest", "Yes — solar savings", "✓"],
                  ].map(([label, val, check]) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-white/[0.05] last:border-0">
                      <span className="text-xs text-zinc-500">{label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-zinc-300">{val}</span>
                        {check && <span className="text-xs text-emerald-400">{check}</span>}
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
        headline="Ready to install more solar?"
        subheadline="Get a free solar lead strategy consultation and see what exclusive lead volume is available in your territory."
        primaryCTA="Get Solar Leads Now"
        badge="Free Territory Analysis"
      />
    </div>
  );
}
