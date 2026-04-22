import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sun,
  CheckCircle,
  X,
  Home,
  Building2,
  TrendingUp,
  MapPin,
  Target,
  PhoneCall,
  CalendarCheck,
  ShieldCheck,
  Zap,
  Sparkles,
  Crown,
} from "lucide-react";
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
  { value: "40-60%", label: "Avg. Close Ratio" },
  { value: "7d", label: "Campaign Launch Time" },
];

/* ── Process: explains how an exclusive solar pipeline is built ── */
const process = [
  {
    icon: MapPin,
    step: "01",
    title: "Territory lock",
    desc: "We reserve your exclusive service area. Once you're in, no other solar installer on our network can run campaigns there — guaranteed.",
  },
  {
    icon: Target,
    step: "02",
    title: "Campaign design",
    desc: "Custom targeting by utility zone, income band, and average bill threshold. We build creative tuned to your state's incentive programs.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Pre-qualification",
    desc: "Every lead is screened on 6 criteria — homeownership, bill size, roof condition, credit indicator, intent, and contactability — before it reaches you.",
  },
  {
    icon: PhoneCall,
    step: "04",
    title: "In-house call team",
    desc: "Our setters call, confirm interest, and handle objections so your reps aren't chasing cold form fills — they're sitting with ready buyers.",
  },
  {
    icon: CalendarCheck,
    step: "05",
    title: "Calendar delivery",
    desc: "Appointments drop straight onto your team's calendar with full lead context. Live dashboard tracks every lead, sit, and close in real-time.",
  },
];

const sharedPerks = [
  "Human verified",
  "Scheduled appointments",
  "Replacement for NO ANSWERS",
  "100% exclusive",
  "Free follow-up service",
  "24/7 customer support",
  "No long-term commitment",
];

const pricingTiers = [
  {
    name: "Bundle",
    tagline: "Test the waters with a focused starter package.",
    price: "$1,600",
    originalPrice: undefined as string | undefined,
    appointments: "10 Exclusive Appointments",
    closedDeals: "2–3 closed deals avg.",
    roi: "$6k–10k",
    icon: Zap,
    featured: false,
  },
  {
    name: "Gold",
    tagline: "The sweet spot — real volume, proven economics.",
    price: "$3,500",
    originalPrice: "$4,000",
    appointments: "25 Exclusive Appointments",
    closedDeals: "4–6 closed deals avg.",
    roi: "$12k–18k",
    icon: Sparkles,
    featured: true,
  },
  {
    name: "Platinum",
    tagline: "Maximum pipeline, maximum close rate.",
    price: "$6,000",
    originalPrice: "$8,000",
    appointments: "50 Exclusive Appointments",
    closedDeals: "8–12 closed deals avg.",
    roi: "$27k–36k",
    icon: Crown,
    featured: false,
  },
];

/* ── Comparison: the sales-closing argument vs. typical lead vendors ── */
const comparison = [
  {
    feature: "Lead exclusivity",
    them: "Same lead sold to 3–5 installers",
    us: "100% exclusive — yours alone, guaranteed",
  },
  {
    feature: "Territory protection",
    them: "Competes directly with other clients",
    us: "One installer per service area",
  },
  {
    feature: "Lead qualification",
    them: "Raw form fills, no screening",
    us: "6-point pre-qualification on every lead",
  },
  {
    feature: "Appointment setting",
    them: "You chase the lead yourself",
    us: "Booked onto your calendar by our team",
  },
  {
    feature: "Launch time",
    them: "4–8 weeks of onboarding",
    us: "First leads within 7 days",
  },
  {
    feature: "Reporting",
    them: "Monthly PDF, no visibility",
    us: "Live dashboard — every lead, every stage",
  },
  {
    feature: "Typical close rate",
    them: "5–15% on shared data",
    us: "40–60% reported by our installers",
  },
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

      {/* ── How it works (process explanation) ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/[0.08] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-5">
              How it works
            </div>
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              How your solar pipeline gets built
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              A transparent, five-stage system that turns your territory into a
              predictable stream of booked appointments — not a pile of cold form fills.
            </p>
          </AnimatedSection>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimatedSection key={i} delay={i * 70}>
                  <div className="h-full p-6 rounded-2xl border border-amber-500/15 bg-surface card-hover">
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{
                          background: "rgba(245,158,11,0.1)",
                          border: "1px solid rgba(245,158,11,0.2)",
                        }}
                      >
                        <Icon size={19} className="text-amber-400" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest text-amber-500/50">
                        {p.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-zinc-100 mb-2.5">
                      {p.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{p.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Us vs Them comparison ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/[0.08] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-5">
              Why Cord is different
            </div>
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Shared leads vs. exclusive leads
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Most solar lead vendors sell the same homeowner to half a dozen installers
              on the same day. We don't. Here's the honest comparison.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl border border-white/[0.07] bg-surface overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 px-5 sm:px-7 py-4 border-b border-white/[0.07] bg-white/[0.02]">
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                  Feature
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  <span className="w-5 h-5 rounded-md bg-zinc-800/60 flex items-center justify-center">
                    <X size={11} className="text-zinc-500" />
                  </span>
                  Typical agencies
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  <span
                    className="w-5 h-5 rounded-md flex items-center justify-center"
                    style={{
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.25)",
                    }}
                  >
                    <CheckCircle size={11} className="text-amber-400" />
                  </span>
                  Agencia Cord
                </div>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1.1fr_1fr_1fr] gap-4 px-5 sm:px-7 py-4 items-center ${
                    i !== comparison.length - 1 ? "border-b border-white/[0.05]" : ""
                  }`}
                >
                  <div className="text-sm font-semibold text-zinc-200">
                    {row.feature}
                  </div>
                  <div className="text-xs text-zinc-500 leading-relaxed flex items-start gap-2">
                    <X size={13} className="text-zinc-600 flex-shrink-0 mt-0.5" />
                    <span>{row.them}</span>
                  </div>
                  <div className="text-xs text-zinc-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle
                      size={13}
                      className="text-amber-400 flex-shrink-0 mt-0.5"
                    />
                    <span>{row.us}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Territory exclusivity callout */}
          <AnimatedSection delay={120}>
            <div className="relative mt-8 p-6 sm:p-8 rounded-2xl border border-amber-500/25 overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,158,11,0.09), rgba(234,88,12,0.05))",
                }}
              />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(245,158,11,0.15)",
                    border: "1px solid rgba(245,158,11,0.3)",
                  }}
                >
                  <MapPin size={20} className="text-amber-300" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1.5">
                    Territory guarantee
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-1.5">
                    One solar installer per service area.
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    When you sign with Cord, your territory is locked. We don't sell
                    leads in your zip codes to anyone else — ever. No shared pools, no
                    resold data, no hidden competition.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm transition-all btn-shine"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #ea580c)",
                    boxShadow: "0 0 24px rgba(245,158,11,0.25)",
                  }}
                >
                  Check my territory <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="relative py-24 border-t border-white/[0.055] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.08), transparent)",
          }}
        />
        <div className="glow-blob w-[500px] h-[400px] bg-amber-500/[0.06] -top-10 left-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/[0.08] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300 mb-5">
              Solar Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight gradient-text-white mb-4 leading-[0.98]">
              Transparent packages.<br />
              <span className="gradient-text-solar">Predictable pipeline.</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Three exclusive-appointment packages. Human-verified, pre-scheduled,
              and replaced when a prospect doesn&apos;t answer. No retainers, no minimums.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {pricingTiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <AnimatedSection key={tier.name} delay={i * 90}>
                  <div
                    className={`relative h-full flex flex-col p-7 md:p-8 rounded-2xl border overflow-hidden transition-all ${
                      tier.featured
                        ? "border-amber-500/35 shadow-[0_24px_64px_rgba(245,158,11,0.15)] md:-translate-y-4"
                        : "border-amber-500/15 card-hover"
                    }`}
                    style={
                      tier.featured
                        ? {
                            background:
                              "linear-gradient(180deg, rgba(245,158,11,0.08), rgba(234,88,12,0.02))",
                          }
                        : { background: "rgb(17 17 22)" }
                    }
                  >
                    {tier.featured && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_6px_18px_rgba(245,158,11,0.4)]"
                          style={{
                            background:
                              "linear-gradient(135deg, #f59e0b, #ea580c)",
                          }}
                        >
                          <Sparkles size={11} /> Most popular
                        </div>
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{
                            background: "rgba(245,158,11,0.1)",
                            border: "1px solid rgba(245,158,11,0.25)",
                          }}
                        >
                          <Icon size={20} className="text-amber-400" />
                        </div>
                        <h3 className="text-2xl font-black text-zinc-100 tracking-tight">
                          {tier.name}
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-5xl md:text-6xl font-black text-zinc-50 leading-none tracking-tight">
                          {tier.price}
                        </span>
                        {tier.originalPrice && (
                          <span className="text-lg font-bold text-zinc-600 line-through">
                            {tier.originalPrice}
                          </span>
                        )}
                      </div>
                      <div
                        className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-amber-400"
                        style={{
                          background: "rgba(245,158,11,0.08)",
                          border: "1px solid rgba(245,158,11,0.2)",
                        }}
                      >
                        {tier.appointments}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="grid grid-cols-2 gap-2 mb-7">
                      <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.015]">
                        <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">
                          Closed deals
                        </div>
                        <div className="text-sm font-bold text-zinc-200">
                          {tier.closedDeals}
                        </div>
                      </div>
                      <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.015]">
                        <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">
                          Expected ROI
                        </div>
                        <div className="text-sm font-bold text-amber-400">
                          {tier.roi}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="flex-1 flex flex-col gap-3 mb-7">
                      {sharedPerks.map((perk, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle
                            size={15}
                            className="text-amber-400 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-zinc-400">{perk}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-white font-semibold text-sm transition-all btn-shine"
                      style={{
                        background:
                          "linear-gradient(135deg, #f59e0b, #ea580c)",
                        boxShadow: "0 10px 30px rgba(245,158,11,0.25)",
                      }}
                    >
                      Get {tier.name}{" "}
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                    <div className="text-center text-[11px] text-zinc-600 mt-3">
                      Avg. solar deal used for ROI: $3k
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={180}>
            <div className="mt-10 p-5 md:p-6 rounded-2xl border border-white/[0.07] bg-surface flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  <ShieldCheck size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="font-bold text-zinc-200 text-sm">
                    Every package is risk-adjusted
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">
                    No-answer appointments are replaced. You only pay for real conversations.
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.09] hover:border-white/[0.18] text-zinc-300 hover:text-white text-sm font-medium transition-all hover:bg-white/[0.04]"
              >
                Not sure which fits? Talk to us <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>
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
