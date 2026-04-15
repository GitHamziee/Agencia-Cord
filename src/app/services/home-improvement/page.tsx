import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wrench, CheckCircle, Home, Thermometer, Zap, Droplets } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Home Improvement Lead Generation",
  description:
    "Connect with homeowners actively seeking renovation, remodeling, HVAC, plumbing, and home improvement services. Exclusive, pre-qualified leads.",
};

const trades = [
  { icon: Home, name: "Remodeling & Renovation", desc: "Kitchen, bath, basement, and whole-home renovation leads" },
  { icon: Thermometer, name: "HVAC & Heating", desc: "Homeowners needing AC installation, furnace replacement, or tune-ups" },
  { icon: Droplets, name: "Plumbing", desc: "Emergency repairs, pipe replacement, water heater, and new installations" },
  { icon: Zap, name: "Electrical", desc: "Panel upgrades, rewiring, EV charger installations, and emergency calls" },
  { icon: Wrench, name: "Windows & Doors", desc: "Energy-efficient window replacements and door installations" },
  { icon: Home, name: "Landscaping & Outdoor", desc: "Patio, deck, fence, landscaping design, and hardscaping projects" },
];

const stats = [
  { value: "380+", label: "Contractors Served" },
  { value: "$12,400", label: "Avg. Project Value" },
  { value: "55%", label: "Lead-to-Estimate Rate" },
  { value: "10+", label: "Trade Categories" },
];

export default function HomeImprovementPage() {
  return (
    <div className="pt-16">
      {/* ── Warm Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-bg to-bg" />
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="glow-blob w-[500px] h-[400px] bg-violet-600/[0.09] top-0 left-1/2 -translate-x-1/2" />
        <div className="glow-blob w-[300px] h-[300px] bg-purple-500/[0.07] top-1/3 right-0" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/[0.08] px-3.5 py-1 text-xs font-medium text-violet-300 mb-8">
            <Wrench size={11} /> Home Improvement Leads
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
            <span className="gradient-text-white">Connect with homeowners</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>ready to invest.</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop chasing lukewarm leads. We connect you with homeowners who have a
            specific project, a real budget, and are actively seeking contractors — right now.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all btn-shine"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #c026d3)",
                boxShadow: "0 0 36px rgba(124,58,237,0.3)",
              }}
            >
              Get Home Improvement Leads <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/[0.09] text-zinc-400 hover:text-zinc-100 font-medium transition-all hover:bg-white/[0.04]"
            >
              View Pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-400 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.07]">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface/80 py-6 px-4 text-center">
                <div className="text-3xl font-black mb-1" style={{
                  background: "linear-gradient(135deg, #a78bfa, #c084fc)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  {s.value}
                </div>
                <div className="text-xs text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trade categories ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Leads for every trade
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              We generate leads across 10+ home improvement categories with trade-specific
              qualification criteria.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {trades.map((trade, i) => {
              const Icon = trade.icon;
              return (
                <AnimatedSection key={i} delay={i * 50}>
                  <div className="p-5 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                         style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}>
                      <Icon size={18} className="text-violet-400" />
                    </div>
                    <h3 className="font-semibold text-zinc-200 mb-2">{trade.name}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{trade.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works + qualifications ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-8">
                What makes our leads different
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  "Project-specific — not just general 'interested in home improvement'",
                  "Budget qualified — minimum project size thresholds per trade",
                  "Homeowner verified — renters filtered out at the source",
                  "Timeline confirmed — contractor needed within 30–90 days",
                  "Contact information triple-verified before delivery",
                  "No lead reselling — every lead goes to one contractor only",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-8">
                How delivery works
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { title: "Homeowner fills out project request", desc: "Via paid search, social, or partner network ads targeted to your trade." },
                  { title: "Qualification layer screens the lead", desc: "Budget, project type, timeline, and homeowner status all verified." },
                  { title: "Lead delivered instantly", desc: "Via phone call, email, or CRM webhook — usually within 60 seconds." },
                  { title: "You contact and close", desc: "Call the lead while they're still in the mindset. Win the job." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-500/[0.1] border border-violet-500/25 flex items-center justify-center text-xs font-bold text-violet-400">
                      {i + 1}
                    </div>
                    <div className="pb-4 border-b border-white/[0.055] last:border-0">
                      <div className="font-medium text-zinc-200 text-sm mb-1">{step.title}</div>
                      <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        headline="More projects. Less prospecting."
        subheadline="Get exclusive home improvement leads for your trade and let your crew focus on the work."
        primaryCTA="Get Home Improvement Leads"
        badge="Free Lead Sample Available"
      />
    </div>
  );
}
