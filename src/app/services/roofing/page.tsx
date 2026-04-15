import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, CheckCircle, CloudRain, RefreshCw, Hammer, MapPin } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Roofing Lead Generation Services",
  description:
    "Exclusive roofing leads for residential and commercial contractors. Storm damage, replacement, and new construction leads delivered in real-time.",
};

const leadTypes = [
  {
    icon: CloudRain,
    title: "Storm Damage Leads",
    desc: "Homeowners in affected storm zones actively seeking inspection and repair estimates. Delivered within hours of weather events.",
    urgency: "High urgency",
  },
  {
    icon: RefreshCw,
    title: "Roof Replacement Leads",
    desc: "Homeowners with aging roofs (15+ years) who have expressed interest in full replacements. Budget-qualified and location-verified.",
    urgency: "Purchase-ready",
  },
  {
    icon: Hammer,
    title: "New Construction",
    desc: "Builders and developers seeking roofing contractors for new residential or commercial construction projects.",
    urgency: "Project-stage",
  },
  {
    icon: Home,
    title: "Emergency Repair",
    desc: "Active leak or damage situations requiring immediate professional attention. Highest close rates of any lead type.",
    urgency: "Immediate",
  },
];

const coverage = [
  "All 50 states covered",
  "County, zip code, or state-level geo-targeting",
  "Storm path tracking with same-day lead delivery",
  "Seasonal volume scaling based on your capacity",
  "Competitor exclusion zones available",
  "Shared or exclusive lead options",
];

const metrics = [
  { value: "840+", label: "Roofing Contractors" },
  { value: "62%", label: "Lead Contact Rate" },
  { value: "28%", label: "Avg. Lead-to-Job Rate" },
  { value: "$8,200", label: "Avg. Job Value" },
];

export default function RoofingPage() {
  return (
    <div className="pt-16">
      {/* ── Bold Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="line-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/15 to-bg pointer-events-none" />
        <div className="glow-blob w-[500px] h-[500px] bg-rose-600/[0.08] top-0 -left-20" />
        <div className="glow-blob w-[300px] h-[300px] bg-orange-500/[0.06] bottom-0 right-1/4" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/[0.08] px-3.5 py-1 text-xs font-medium text-rose-300 mb-8">
              <Home size={11} /> Roofing Lead Generation
            </div>
            <h1 className="animate-fade-in-up delay-100 text-6xl md:text-7xl font-black tracking-tight leading-[0.92] mb-8">
              <span className="gradient-text-white">More jobs.</span>
              <br />
              <span className="gradient-text-white">Fewer</span>
              <br />
              <span style={{
                background: "linear-gradient(135deg, #fb7185 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                headaches.
              </span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-xl text-zinc-400 leading-relaxed mb-10 max-w-xl">
              Exclusive roofing leads from homeowners ready to sign. We chase the leads
              so your team can focus on showing up and closing.
            </p>
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold transition-all btn-shine"
                style={{
                  background: "linear-gradient(135deg, #e11d48, #f97316)",
                  boxShadow: "0 0 36px rgba(225,29,72,0.25)",
                }}
              >
                Start Getting Roofing Leads <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/[0.09] hover:border-white/[0.18] text-zinc-400 hover:text-zinc-100 font-medium transition-all"
              >
                Check My Territory
              </Link>
            </div>

            {/* Inline metrics */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/[0.06]">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-2xl font-black" style={{
                    background: "linear-gradient(135deg, #fb7185, #f97316)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    {m.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Lead types grid ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Every type of roofing lead
            </h2>
            <p className="text-zinc-400 max-w-lg">
              We segment leads by urgency and project type so you only receive leads
              that match your capacity and service offering.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {leadTypes.map((lt, i) => {
              const Icon = lt.icon;
              return (
                <AnimatedSection key={i} delay={i * 70}>
                  <div className="group p-6 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                           style={{ background: "rgba(225,29,72,0.1)", border: "1px solid rgba(225,29,72,0.2)" }}>
                        <Icon size={18} className="text-rose-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-zinc-200">{lt.title}</h3>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-rose-500/[0.1] border border-rose-500/20 text-rose-400">
                            {lt.urgency}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed">{lt.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Coverage + Process ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-6">
                Nationwide coverage, local precision
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
                We cover every market and can scale your lead volume up or down based
                on your team's capacity. Storm season? We ramp. Slow season? We dial back.
                You control the volume.
              </p>
              <div className="flex flex-col gap-2.5">
                {coverage.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <MapPin size={14} className="text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{c}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-6">
                The Cord roofing process
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { step: "01", title: "Territory Setup", desc: "Define your service area, lead type preference, and daily volume cap." },
                  { step: "02", title: "Campaign Launch", desc: "We activate targeted campaigns across search, social, and storm-tracking tools." },
                  { step: "03", title: "Lead Delivery", desc: "Real-time delivery via phone call, email, or CRM. Contact the lead within minutes." },
                  { step: "04", title: "Performance Review", desc: "Weekly reporting on lead quality, contact rates, and ROI with optimization recommendations." },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-rose-500/30 bg-rose-500/[0.07] flex items-center justify-center text-xs font-bold text-rose-400">
                      {step.step}
                    </div>
                    <div className="pb-4 border-b border-white/[0.055] last:border-0">
                      <div className="font-semibold text-zinc-200 mb-1 text-sm">{step.title}</div>
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
        headline="Ready to fill your roofing schedule?"
        subheadline="Check lead availability in your territory and get a free quote on exclusive roofing leads."
        primaryCTA="Check My Territory"
        badge="Free Territory Check"
      />
    </div>
  );
}
