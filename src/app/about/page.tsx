import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Award, TrendingUp, Globe } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

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

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    specialty: "Lead Generation Strategy",
    bio: "Former performance marketing director with 12+ years scaling B2C pipelines.",
  },
  {
    name: "Sarah Kim",
    role: "Head of Growth",
    specialty: "Solar & Roofing",
    bio: "Led growth at two $100M+ home services companies before joining Cord.",
  },
  {
    name: "Marcus Johnson",
    role: "Director of Technology",
    specialty: "Web Dev & Call Centers",
    bio: "Built and scaled virtual call center infrastructure for enterprise clients.",
  },
  {
    name: "Emily Patel",
    role: "VP, Insurance Division",
    specialty: "Medicare & Final Expense",
    bio: "Compliance expert and former insurance agency owner. 10+ years in the vertical.",
  },
];

const milestones = [
  { year: "2019", event: "Founded in Miami, FL with a focus on solar lead generation" },
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

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
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

      {/* ── Team ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              Experts in their fields, dedicated to your growth.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="p-6 rounded-2xl border border-white/[0.07] bg-surface card-hover text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-violet mx-auto mb-5 flex items-center justify-center text-white font-black text-xl shadow-[0_0_24px_rgba(79,70,229,0.25)]">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="font-bold text-zinc-100 mb-1">{member.name}</div>
                  <div className="text-xs text-brand-light mb-3">{member.role}</div>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-3">{member.bio}</p>
                  <div className="inline-flex px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[10px] text-zinc-500">
                    {member.specialty}
                  </div>
                </div>
              </AnimatedSection>
            ))}
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
