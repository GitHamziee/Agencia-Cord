import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, TrendingUp, Globe, MapPin } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

const verticals = [
  "Solar",
  "Roofing",
  "Real Estate",
  "Home Improvement",
  "Medicare",
  "Final Expense",
  "Call Centers",
  "Web Dev",
  "Lead Gen",
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by marketers. Powered by data. Agencia Cord is a premium digital agency helping businesses scale through expert lead generation.",
};

const values = [
  {
    title: "Results First",
    desc: "Every decision we make is driven by one question: does this improve results for our clients? KPIs that matter — not vanity metrics.",
  },
  {
    title: "Radical Transparency",
    desc: "Full visibility into campaign performance, spend, and outcomes. No smoke, no mirrors — just clear data and honest communication.",
  },
  {
    title: "Vertical Expertise",
    desc: "We don't spread thin. Our teams develop deep domain knowledge in each industry we serve — solar, roofing, insurance, real estate, and beyond.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We grow with our clients. When you win, we win. Our incentives are aligned from day one to ensure we remain a strategic growth partner.",
  },
];

const milestones = [
  { year: "2019", event: "Founded in Austin, Texas with a focus on solar lead generation" },
  { year: "2020", event: "Expanded into roofing and real estate verticals" },
  { year: "2021", event: "Launched insurance division — Medicare & final expense" },
  { year: "2022", event: "Crossed 500 active clients and launched virtual call center buildout" },
  { year: "2023", event: "Surpassed $40M in client revenue generated" },
  { year: "2024", event: "Launched full web development practice, now 1,200+ clients served" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="dot-grid absolute inset-0" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(79,70,229,0.08), transparent)" }}
        />
        <div className="glow-blob w-[500px] h-[500px] bg-brand/[0.08] -top-20 left-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
            {/* ── Left: copy + stats ── */}
            <div>
              <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-8">
                Our Story
              </div>
              <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-8">
                <span className="gradient-text-white">Built by marketers.</span>
                <br />
                <span className="gradient-text">Powered by data.</span>
              </h1>
              <p className="animate-fade-in-up delay-200 text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl">
                Agencia Cord was founded on a simple belief: businesses deserve a marketing
                partner as invested in their success as they are. We built the agency we
                always wished existed.
              </p>
              <div className="animate-fade-in-up delay-300 flex flex-wrap gap-10">
                {[
                  { value: "2019", label: "Founded" },
                  { value: "1,200+", label: "Clients" },
                  { value: "$40M+", label: "Revenue Generated" },
                  { value: "9", label: "Verticals" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                    <div className="text-xs text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: company card ── */}
            <AnimatedSection direction="right" delay={200} className="hidden lg:block">
              <div className="relative">
                {/* Brand halo behind card */}
                <div className="absolute -inset-10 bg-brand/[0.18] blur-3xl rounded-full pointer-events-none" />
                <div className="absolute -inset-16 bg-violet/[0.10] blur-3xl rounded-full pointer-events-none" />

                <div className="relative rounded-3xl border border-white/[0.07] bg-surface p-7 shadow-[var(--shadow-panel)]">
                  {/* Top: brand mark + name */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="relative w-12 h-12 flex-shrink-0 rounded-2xl bg-brand/[0.12] border border-brand/20 flex items-center justify-center overflow-hidden">
                      <Image
                        src={siteConfig.logo.src}
                        alt={siteConfig.logo.alt}
                        fill
                        sizes="48px"
                        className="object-contain p-2"
                      />
                    </span>
                    <div className="min-w-0">
                      <div className="font-bold text-zinc-100 text-lg leading-tight truncate">
                        {siteConfig.name}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-0.5">
                        Premium Digital Agency
                      </div>
                    </div>
                  </div>

                  {/* Location + founded line */}
                  <div className="flex items-center gap-2.5 text-sm text-zinc-400 pb-5 mb-5 border-b border-white/[0.07]">
                    <MapPin size={14} className="text-brand-light flex-shrink-0" />
                    <span className="truncate">
                      {siteConfig.contact.addressShort} · Est. 2019
                    </span>
                  </div>

                  {/* Verticals chips */}
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">
                    Nine verticals
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {verticals.map((v) => (
                      <span
                        key={v}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.07]"
                      >
                        {v}
                      </span>
                    ))}
                  </div>

                  {/* Footer: live status pill */}
                  <div className="flex items-center justify-between gap-3 pt-5 border-t border-white/[0.07]">
                    <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </span>
                      Accepting clients
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-light hover:gap-2 transition-all"
                    >
                      Book a call <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-24 border-y border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-5">
                To be the most results-driven digital agency in North America by
                delivering exclusive, high-quality leads that convert — measured by
                your revenue growth, not our activity metrics.
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm">
                Since 2019, we've helped over 1,200 businesses across 9 industries
                transform their sales pipeline. From solo solar installers to enterprise
                Medicare agencies, we bring the same level of dedication and expertise
                to every partnership.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Users, label: "Client-Centric", desc: "Every strategy starts with your goals and constraints" },
                  { icon: Award, label: "Award-Winning", desc: "Recognized for excellence across multiple verticals" },
                  { icon: TrendingUp, label: "Growth-Focused", desc: "KPIs that actually move the revenue needle" },
                  { icon: Globe, label: "Nationwide", desc: "Serving businesses across all 50 states" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-5 rounded-xl border border-white/[0.07] bg-surface"
                    >
                      <div className="w-9 h-9 rounded-lg bg-brand/[0.1] border border-brand/20 flex items-center justify-center mb-3.5">
                        <Icon size={16} className="text-brand-light" />
                      </div>
                      <div className="text-sm font-semibold text-zinc-200 mb-1">{item.label}</div>
                      <div className="text-xs text-zinc-500 leading-relaxed">{item.desc}</div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              The principles that guide every campaign, every call, every decision.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="h-full p-7 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                  <div className="text-xs font-black text-brand-light tracking-widest uppercase mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">{v.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              How We Got Here
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              From a two-person solar lead operation to a nine-vertical powerhouse.
            </p>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-brand/30 via-brand/15 to-transparent" />

            <div className="flex flex-col gap-6">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={i * 60}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-sm font-bold text-brand-light">{m.year}</span>
                    </div>
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-brand border-2 border-bg z-10 relative" />
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed pb-2">{m.event}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to partner with a team that's invested in your growth?"
        subheadline="Schedule a free strategy call and see exactly how we'd approach your market."
        primaryCTA="Book a Strategy Call"
        secondaryCTA="Explore Our Services"
        secondaryHref="/services"
      />
    </div>
  );
}
