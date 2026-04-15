import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle, TrendingUp, Users, Home, Star } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Real Estate Lead Generation Services",
  description:
    "Exclusive buyer and seller leads for real estate agents and brokerages. High-intent, pre-qualified prospects sorted by motivation level.",
};

const leadTypes = [
  {
    icon: Users,
    title: "Motivated Seller Leads",
    desc: "Homeowners with a compelling reason to sell — downsizing, divorce, relocation, estate, or financial pressure. High intent, low competition.",
    detail: "Pre-screened for motivation level",
    color: "emerald",
  },
  {
    icon: Home,
    title: "Pre-Qualified Buyer Leads",
    desc: "Buyers pre-screened by budget, location preference, and timeline. Many are pre-approved or actively working with a mortgage broker.",
    detail: "Budget and timeline verified",
    color: "teal",
  },
  {
    icon: Building2,
    title: "Investor Leads",
    desc: "Cash buyers and investors actively seeking investment properties, flips, or rental additions. Pre-qualified by investment criteria.",
    detail: "Cash & financing verified",
    color: "cyan",
  },
  {
    icon: TrendingUp,
    title: "Expired & FSBO Leads",
    desc: "Homeowners with expired listings or failed FSBO attempts who are now motivated and open to professional representation.",
    detail: "Property data included",
    color: "emerald",
  },
];

const agentStats = [
  { value: "620+", label: "Agents & Brokerages" },
  { value: "3.8×", label: "Avg. GCI Increase" },
  { value: "$420K", label: "Avg. Annual GCI Added" },
  { value: "45d", label: "Avg. Time to First Close" },
];

const features = [
  "Buyer leads pre-qualified by budget and mortgage status",
  "Seller leads scored by motivation (1–10 scale)",
  "CRM integration with your existing platform",
  "Exclusive geographic territories available",
  "Follow-up automation sequences included",
  "Monthly market data reports for lead areas",
  "Listing presentation support materials",
  "24/7 lead delivery — no business hours delays",
];

export default function RealEstatePage() {
  return (
    <div className="pt-16">
      {/* ── Clean Professional Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-bg to-teal-950/10" />
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="glow-blob w-[600px] h-[500px] bg-emerald-600/[0.08] -top-20 right-0" />
        <div className="glow-blob w-[350px] h-[350px] bg-teal-500/[0.06] bottom-0 left-1/4" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-3.5 py-1 text-xs font-medium text-emerald-300 mb-8">
                <Building2 size={11} /> Real Estate Lead Generation
              </div>
              <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                <span className="gradient-text-white">Motivated buyers.</span>
                <br />
                <span className="gradient-text-green">Ready sellers.</span>
              </h1>
              <p className="animate-fade-in-up delay-200 text-lg text-zinc-400 leading-relaxed mb-10">
                We deliver exclusive real estate leads sorted by motivation score — so you
                spend your time with serious buyers and sellers, not tire-kickers.
              </p>
              <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold transition-all btn-shine"
                  style={{
                    background: "linear-gradient(135deg, #10b981, #0891b2)",
                    boxShadow: "0 0 36px rgba(16,185,129,0.25)",
                  }}
                >
                  Get Real Estate Leads <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/[0.09] hover:border-white/[0.18] text-zinc-400 hover:text-zinc-100 font-medium transition-all"
                >
                  Check My Market
                </Link>
              </div>
            </div>

            {/* Stats cards */}
            <AnimatedSection direction="right" delay={100}>
              <div className="grid grid-cols-2 gap-3">
                {agentStats.map((s, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-emerald-500/15 bg-surface text-center"
                  >
                    <div className="text-3xl font-black gradient-text-green mb-2">{s.value}</div>
                    <div className="text-xs text-zinc-500">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial snippet */}
              <div className="mt-4 p-5 rounded-xl border border-emerald-500/15 bg-surface">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-amber text-amber" />
                  ))}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  "Cord's seller leads are the best I've ever used. Motivation scores
                  are accurate — when it says 9/10, they're ready to list."
                </p>
                <div className="text-xs text-zinc-500">— Carlos R., Apex Real Estate</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Lead Types ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Four types of real estate leads
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Every lead type is scored, qualified, and delivered with full context so
              you can prioritize and personalize your outreach.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {leadTypes.map((lt, i) => {
              const Icon = lt.icon;
              return (
                <AnimatedSection key={i} delay={i * 60}>
                  <div className="h-full p-6 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(16,185,129,0.1)",
                          border: "1px solid rgba(16,185,129,0.2)",
                        }}
                      >
                        <Icon size={18} className="text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-200 mb-2">{lt.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-3">{lt.desc}</p>
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400">
                          <CheckCircle size={11} /> {lt.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features list ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Everything you need to close more deals
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-2.5 max-w-3xl mx-auto">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-surface/50">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-400">{f}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        headline="Ready to close more real estate deals?"
        subheadline="Get a free market analysis and see how many exclusive buyer and seller leads are available in your area."
        primaryCTA="Get Real Estate Leads"
        badge="Free Market Analysis"
      />
    </div>
  );
}
