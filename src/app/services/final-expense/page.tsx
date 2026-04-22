import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle, Heart, Users, Star } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Final Expense Lead Generation",
  description:
    "Exclusive final expense leads for insurance agents. Fresh, pre-qualified seniors who have expressed genuine interest in final expense coverage.",
};

const trustPoints = [
  "100% exclusive — never resold or reshared",
  "Real seniors with expressed interest, not cold data",
  "Age, income, and health pre-screened",
  "Contact verified within 24 hours of delivery",
  "Immediate exclusion zones available",
  "Compliance-aware sourcing and delivery",
];

const leadTypes = [
  {
    title: "Direct Mail Responders",
    desc: "Seniors who responded to our direct mail campaigns specifically about final expense insurance. Highest intent, highest close rate.",
    rate: "Avg. close rate: 18%",
  },
  {
    title: "Digital Interest Leads",
    desc: "Seniors who completed an online form expressing interest in final expense coverage. Qualified by age (50–85) and income range.",
    rate: "Avg. close rate: 12%",
  },
  {
    title: "Telemarketing-Confirmed",
    desc: "Leads that have been called and verbally confirmed interest in speaking with a licensed agent. Ready for your presentation.",
    rate: "Avg. close rate: 40–60%",
  },
];

const stats = [
  { value: "450+", label: "Independent Agents" },
  { value: "16%", label: "Avg. Close Rate" },
  { value: "$1,200", label: "Avg. First-Year Premium" },
  { value: "50-85", label: "Age Range Targeted" },
];

export default function FinalExpensePage() {
  return (
    <div className="pt-16">
      {/* ── Trust-focused Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/20 via-bg to-bg" />
        <div className="glow-blob w-[500px] h-[400px] bg-sky-500/[0.08] top-0 right-0" />
        <div className="glow-blob w-[350px] h-[350px] bg-cyan-500/[0.06] bottom-1/3 -left-10" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/[0.08] px-3.5 py-1 text-xs font-medium text-sky-300 mb-8">
                <Shield size={11} /> Final Expense Leads
              </div>
              <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                <span className="gradient-text-white">Quality leads that</span>
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>respect the sale.</span>
              </h1>
              <p className="animate-fade-in-up delay-200 text-lg text-zinc-400 leading-relaxed mb-10">
                Exclusive final expense leads from seniors who have genuinely expressed
                interest in coverage — not recycled lists, not cold data. Real people.
                Real conversations.
              </p>
              <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold transition-all btn-shine"
                  style={{
                    background: "linear-gradient(135deg, #0284c7, #06b6d4)",
                    boxShadow: "0 0 36px rgba(2,132,199,0.28)",
                  }}
                >
                  Get Final Expense Leads <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/[0.09] text-zinc-400 hover:text-zinc-100 font-medium transition-all hover:bg-white/[0.04]"
                >
                  View Lead Samples
                </Link>
              </div>
            </div>

            {/* Trust indicators */}
            <AnimatedSection direction="right" delay={100}>
              <div className="p-7 rounded-2xl border border-sky-500/15 bg-surface">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-sky-500/[0.1] border border-sky-500/20 flex items-center justify-center">
                    <Shield size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-200">Why agents choose Cord</div>
                    <div className="text-xs text-zinc-500">for final expense leads</div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {trustPoints.map((tp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-sky-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400">{tp}</span>
                    </div>
                  ))}
                </div>

                {/* Agent testimonial */}
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-400 italic leading-relaxed mb-3">
                    "Best final expense leads I've ever worked. Fresh, exclusive, and
                    the seniors actually remember filling out the form."
                  </p>
                  <div className="text-xs text-zinc-500">— Patricia M., Independent Agent</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                {stats.map((s, i) => (
                  <div key={i} className="py-4 px-4 rounded-xl border border-white/[0.07] bg-surface text-center">
                    <div className="text-2xl font-black text-sky-300 mb-1">{s.value}</div>
                    <div className="text-[11px] text-zinc-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Lead types ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Three types of final expense leads
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Choose the lead type that matches your sales approach and budget.
              Each type is sourced differently and carries different close-rate expectations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4">
            {leadTypes.map((lt, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="h-full p-7 rounded-2xl border border-sky-500/15 bg-surface card-hover">
                  <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">
                    Type 0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-200 mb-3">{lt.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5">{lt.desc}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/[0.08] border border-sky-500/15 text-xs font-semibold text-sky-400">
                    <Heart size={11} /> {lt.rate}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent success ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Built for independent agents
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Whether you're writing 5 apps a week or 50, our lead programs scale with you.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: Users,
                  title: "Solo Agents",
                  desc: "Start with as few as 10 leads per week. Perfect for agents building their book of business at a sustainable pace.",
                },
                {
                  icon: Shield,
                  title: "IMOs & FMOs",
                  desc: "Bulk lead programs for organizations distributing to their agent force. Volume pricing and centralized delivery available.",
                },
                {
                  icon: Heart,
                  title: "Call Center Teams",
                  desc: "High-volume lead delivery for call center operations. API integration and direct-dial lead programs available.",
                },
              ].map((tier, i) => {
                const Icon = tier.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/[0.1] border border-sky-500/20 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <h3 className="font-bold text-zinc-200 mb-2">{tier.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{tier.desc}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        headline="Ready to write more final expense policies?"
        subheadline="Get a free consultation and see what exclusive final expense lead volume is available in your area."
        primaryCTA="Get Final Expense Leads"
        badge="Free Lead Consultation"
      />
    </div>
  );
}
