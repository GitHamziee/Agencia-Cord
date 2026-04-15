import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Target, CheckCircle, TrendingUp, Zap, BarChart2, Layers, Globe,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Lead Generation Services",
  description:
    "Precision multi-channel lead generation campaigns delivering exclusive, high-intent prospects in real-time. Trusted by 1,200+ businesses.",
};

const channels = [
  { name: "Paid Search (PPC)", desc: "Google & Bing ads targeting high-intent search queries", icon: Target },
  { name: "Paid Social", desc: "Facebook, Instagram & TikTok precision audience targeting", icon: Layers },
  { name: "Programmatic Display", desc: "Cookie-free audience targeting at scale", icon: Globe },
  { name: "SEO & Content", desc: "Organic lead generation through search dominance", icon: BarChart2 },
  { name: "Email & SMS", desc: "Nurture sequences that move leads down the funnel", icon: Zap },
  { name: "Native Advertising", desc: "High-trust placements on premium publisher networks", icon: TrendingUp },
];

const deliverables = [
  "Exclusive leads — zero sharing with competitors",
  "Real-time delivery via API, email, or CRM webhook",
  "Lead scoring and qualification before delivery",
  "Full transparency with live reporting dashboard",
  "Dedicated account manager and weekly strategy calls",
  "A/B testing on all creative and landing pages",
  "Geo-targeting down to zip code level",
  "Custom lead forms optimized for conversion",
];

const results = [
  { metric: "Average Lead Quality Score", value: "87/100" },
  { metric: "Contact Rate", value: "71%" },
  { metric: "Average CPL Reduction", value: "43%" },
  { metric: "Client Retention Rate", value: "94%" },
];

export default function LeadGenerationPage() {
  return (
    <div className="pt-16">
      {/* ── Split Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="dot-grid absolute inset-0" />
        <div className="glow-blob w-[600px] h-[600px] bg-indigo-600/[0.09] top-1/2 -translate-y-1/2 -left-40" />
        <div className="glow-blob w-[300px] h-[300px] bg-cyan/[0.07] top-1/4 right-0" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — text */}
            <div>
              <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/[0.08] px-3.5 py-1 text-xs font-medium text-indigo-300 mb-8">
                <Target size={11} /> Core Service
              </div>
              <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                <span className="gradient-text-white">The engine</span>
                <br />
                <span className="gradient-text">behind your growth.</span>
              </h1>
              <p className="animate-fade-in-up delay-200 text-lg text-zinc-400 leading-relaxed mb-10 max-w-lg">
                Stop chasing cold prospects. We build and operate precision lead generation
                systems that deliver exclusive, pre-qualified leads directly to your team —
                in real time.
              </p>
              <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold transition-all btn-shine shadow-[0_0_36px_rgba(79,70,229,0.35)]"
                >
                  Get a Free Lead Audit <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/[0.09] hover:border-white/[0.18] text-zinc-400 hover:text-zinc-100 font-medium transition-all"
                >
                  All Services
                </Link>
              </div>
            </div>

            {/* Right — stats dashboard mockup */}
            <AnimatedSection direction="right" delay={100}>
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-surface shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Live Performance
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Leads Today", value: "142", delta: "+18%" },
                    { label: "Contact Rate", value: "71%", delta: "+4%" },
                    { label: "Avg. CPL", value: "$24.80", delta: "-12%" },
                    { label: "Conversion", value: "8.3%", delta: "+2.1%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3.5 rounded-xl border border-white/[0.06] bg-surface-2"
                    >
                      <div className="text-xs text-zinc-500 mb-1">{stat.label}</div>
                      <div className="text-xl font-black text-zinc-100">{stat.value}</div>
                      <div
                        className={`text-xs font-medium mt-0.5 ${
                          stat.delta.startsWith("-")
                            ? "text-emerald-400"
                            : "text-emerald-400"
                        }`}
                      >
                        {stat.delta} vs last week
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-16 mb-2">
                  {[40, 65, 52, 78, 90, 70, 95, 80, 110, 88, 120, 105].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-brand/30 rounded-sm"
                      style={{ height: `${(h / 120) * 100}%` }}
                    />
                  ))}
                </div>
                <div className="text-[10px] text-zinc-600 text-center">
                  Lead volume — last 12 hours
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Channels ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Every channel. One system.
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              We orchestrate leads across all major channels so you get consistent volume
              regardless of algorithm changes or platform disruptions.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {channels.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <AnimatedSection key={ch.name} delay={i * 50}>
                  <div className="p-6 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                    <div className="w-10 h-10 rounded-xl bg-brand/[0.1] border border-brand/20 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-brand-light" />
                    </div>
                    <h3 className="font-semibold text-zinc-200 mb-2">{ch.name}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{ch.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What's included + Results (split) ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Deliverables */}
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-8">
                What's included in every campaign
              </h2>
              <div className="flex flex-col gap-2.5">
                {deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-brand-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Results */}
            <AnimatedSection direction="right" delay={100}>
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-8">
                Average client results
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {results.map((r, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-white/[0.07] bg-surface text-center"
                  >
                    <div className="text-3xl font-black gradient-text mb-2">{r.value}</div>
                    <div className="text-xs text-zinc-500 leading-relaxed">{r.metric}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to fill your pipeline?"
        subheadline="Get a free lead generation audit and see exactly what's possible for your business in 30 days."
        primaryCTA="Get Your Free Lead Audit"
        badge="Free Lead Generation Audit"
      />
    </div>
  );
}
