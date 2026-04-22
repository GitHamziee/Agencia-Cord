import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CloudRain, RefreshCw, MapPin, FileCheck, Target } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Roofing Appointment Generation Services",
  description:
    "Target hail-impacted homes for high-converting roofing appointments. Real-time hail storm tracking connects you with homeowners who just had damage.",
};

const leadTypes = [
  {
    icon: CloudRain,
    title: "Hail Damage Leads",
    desc: "Real-time hail storm tracking identifies homes with fresh damage. We reach out within hours of the weather event — before they start shopping.",
    urgency: "High urgency",
  },
  {
    icon: RefreshCw,
    title: "Roof Replacement Leads",
    desc: "Homeowners with aging or storm-damaged roofs actively looking for full replacements. Budget-qualified and property-verified.",
    urgency: "Purchase-ready",
  },
  {
    icon: FileCheck,
    title: "Insurance-Ready Homeowners",
    desc: "Prospects with insurance-eligible damage, pre-screened for successful claim conversations. Highest close rates of any lead type.",
    urgency: "Claim-eligible",
  },
  {
    icon: Target,
    title: "Storm-Affected Properties",
    desc: "Property-specific damage assessment using hail size, wind patterns, and roof materials — scored before the appointment is ever booked.",
    urgency: "Verified",
  },
];

const coverage = [
  "Real-time hail event monitoring nationwide",
  "Property-specific damage assessment",
  "TCPA-compliant marketing",
  "Live call center verification",
  "Insurance-ready homeowners only",
  "Multi-channel delivery (phone / email / CRM)",
];

const metrics = [
  { value: "500+", label: "Businesses Served" },
  { value: "92%", label: "Appointment Accuracy" },
  { value: "45%", label: "Avg. Conversion Rate" },
  { value: "24h", label: "Appointment Delivery" },
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

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/[0.08] px-3.5 py-1 text-xs font-medium text-rose-300 mb-8">
            <CloudRain size={11} /> Roofing Appointment Generation
          </div>
          <h1 className="animate-fade-in-up delay-100 text-6xl md:text-7xl font-black tracking-tight leading-[0.92] mb-8">
            <span className="gradient-text-white">More jobs.</span>
            <br />
            <span className="gradient-text-white">Fewer</span>{" "}
            <span style={{
              background: "linear-gradient(135deg, #fb7185 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              headaches.
            </span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            We target hail-impacted homes with real-time storm data and live call center
            verification — so you walk into appointments with homeowners who already
            have damage and need you yesterday.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3">
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
          <div className="animate-fade-in-up delay-400 grid grid-cols-2 md:grid-cols-4 gap-px mt-16 rounded-2xl overflow-hidden border border-white/[0.07] max-w-4xl mx-auto">
            {metrics.map((m) => (
              <div key={m.label} className="bg-surface/80 py-6 px-4 text-center backdrop-blur-sm">
                <div className="text-3xl font-black mb-1" style={{
                  background: "linear-gradient(135deg, #fb7185, #f97316)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  {m.value}
                </div>
                <div className="text-xs text-zinc-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead types grid ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Every type of roofing appointment
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              We segment appointments by damage type and claim eligibility so your crew
              only walks into jobs worth the drive.
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
                Hail-first targeting, nationwide reach
              </h2>
              <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
                We monitor hail events in real time and cross-reference them with
                property data to build your daily target list. TCPA-compliant, call-center
                verified, and delivered straight into your CRM.
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
                  { step: "01", title: "Advanced Targeting", desc: "Real-time hail tracking and wind-damage assessment pinpoints the exact zip codes worth dialing." },
                  { step: "02", title: "Call Center Verification", desc: "Live agents confirm homeowner intent and schedule the appointment directly onto your calendar." },
                  { step: "03", title: "Quality Assurance", desc: "Property-level damage scoring and intent verification before any appointment is handed off to you." },
                  { step: "04", title: "Instant Delivery", desc: "Multi-channel delivery to your CRM, phone, or email within 24 hours of the storm event." },
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
        subheadline="Check hail activity in your territory and get a free quote on exclusive, call-verified roofing appointments."
        primaryCTA="Check My Territory"
        badge="Free Territory Check"
      />
    </div>
  );
}
