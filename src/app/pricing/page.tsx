import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Sparkles,
  Crown,
  Shield,
  Target,
  PhoneCall,
  Users,
  FileCheck,
  CloudRain,
  CalendarCheck,
  Headphones,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Pricing — Roofing Appointment Packages",
  description:
    "Transparent packages of hail-verified, call-center-booked roofing appointments. Trial, Standard, and dedicated Call Center plans.",
};

type Feature = { icon: typeof Zap; text: string };

type Tier = {
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  priceSuffix?: string;
  appointments: string;
  closedDeals: string;
  bestFor: string;
  features: Feature[];
  icon: typeof Zap;
  accent: string;
  chipBg: string;
  chipBorder: string;
  chipText: string;
  buttonBg: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Roofing Trial",
    tagline: "Test the waters with minimal risk.",
    price: "$1,000",
    originalPrice: "$1,250",
    appointments: "10 qualified booked appointments",
    closedDeals: "1–2 estimated closed deals",
    bestFor: "Testing the channel before scaling.",
    icon: Zap,
    accent: "from-sky-500/15 to-sky-500/[0.02]",
    chipBg: "bg-sky-500/[0.08]",
    chipBorder: "border-sky-500/20",
    chipText: "text-sky-300",
    buttonBg: "from-sky-600 to-cyan-500",
    features: [
      { icon: CheckCircle, text: "10 qualified booked appointments" },
      { icon: FileCheck, text: "Pre-recorded approvals" },
      { icon: CloudRain, text: "Real-time hail storm targeting" },
      { icon: PhoneCall, text: "Live call center verification" },
      { icon: Shield, text: "Insurance-ready homeowners" },
      { icon: Shield, text: "TCPA-compliant marketing" },
      { icon: CalendarCheck, text: "Multi-channel appointment delivery" },
    ],
  },
  {
    name: "Standard Roofing",
    tagline: "The sweet spot — real volume, proven economics.",
    price: "$4,000",
    originalPrice: "$5,000",
    appointments: "45 qualified booked appointments",
    closedDeals: "6–7 estimated closed deals",
    bestFor: "Established companies scaling operations.",
    icon: Sparkles,
    accent: "from-amber-500/20 to-amber-500/[0.03]",
    chipBg: "bg-amber-500/[0.1]",
    chipBorder: "border-amber-500/25",
    chipText: "text-amber-300",
    buttonBg: "from-amber-500 to-orange-500",
    featured: true,
    features: [
      { icon: CheckCircle, text: "45 qualified booked appointments" },
      { icon: FileCheck, text: "Pre-recorded approvals" },
      { icon: Target, text: "Advanced hail mapping & targeting" },
      { icon: PhoneCall, text: "Priority call center verification" },
      { icon: CheckCircle, text: "Property damage assessment data" },
      { icon: Shield, text: "Insurance-ready homeowners" },
      { icon: Shield, text: "TCPA-compliant marketing" },
      { icon: CalendarCheck, text: "Multi-channel appointment delivery" },
    ],
  },
  {
    name: "Roofing Call Center",
    tagline: "Maximum pipeline with a dedicated team.",
    price: "$2,000",
    priceSuffix: "/mo per setter",
    appointments: "100+ qualified appointments / month",
    closedDeals: "5-setter batch: $10,000/mo",
    bestFor: "High-volume contractors and multi-crew teams.",
    icon: Crown,
    accent: "from-violet/20 to-violet/[0.03]",
    chipBg: "bg-violet/[0.1]",
    chipBorder: "border-violet/25",
    chipText: "text-violet-300",
    buttonBg: "from-violet to-brand",
    features: [
      { icon: CheckCircle, text: "100+ qualified appointments monthly" },
      { icon: Users, text: "Dedicated roofing appointment setters" },
      { icon: Sparkles, text: "Hail damage specialization training" },
      { icon: FileCheck, text: "Insurance claim conversation scripts" },
      { icon: CloudRain, text: "Real-time hail storm response team" },
      { icon: FileCheck, text: "Pre-recorded approvals" },
      { icon: Shield, text: "TCPA-compliant marketing" },
      { icon: Headphones, text: "Dedicated account manager" },
    ],
  },
];

const faqs = [
  {
    q: "What does a 'qualified booked appointment' mean?",
    a: "Every appointment is a homeowner who has been verified by our live call center, expressed intent to discuss roofing work, and scheduled a time on your calendar. We confirm damage context before handing the appointment off.",
  },
  {
    q: "How does hail damage targeting work?",
    a: "We monitor hail events nationwide in real time and cross-reference affected zip codes with property-level data (roof age, material, footprint). That gives us a daily target list of homes that likely have fresh damage.",
  },
  {
    q: "Is your outreach TCPA-compliant?",
    a: "Yes. Every campaign runs under TCPA-compliant marketing practices with pre-recorded approvals, consent tracking, and appropriate scrub against DNC lists before any outreach happens.",
  },
  {
    q: "What if an appointment doesn't convert?",
    a: "We measure quality by appointment accuracy (currently 92%) and average conversion (~45%). If an appointment fails our verification standards, it's replaced within your package.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(225,29,72,0.12), transparent)",
          }}
        />
        <div className="glow-blob w-[500px] h-[500px] bg-rose-600/[0.08] -top-24 left-1/2 -translate-x-1/2" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/[0.08] px-3.5 py-1 text-xs font-medium text-rose-300 mb-7">
            <CloudRain size={11} /> Roofing Appointment Packages
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] mb-7">
            <span className="gradient-text-white">Transparent pricing.</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #fb7185 0%, #f97316 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Zero surprises.
            </span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Three package tiers built around hail-verified, call-center-booked
            roofing appointments — with insurance-ready homeowners and TCPA-compliant outreach.
          </p>
        </div>
      </section>

      {/* ── Tier grid ── */}
      <section className="pb-20 md:pb-24 -mt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-stretch">
            {tiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <AnimatedSection key={tier.name} delay={i * 90}>
                  <div
                    className={`relative h-full flex flex-col p-7 md:p-8 rounded-3xl border bg-gradient-to-b ${tier.accent} backdrop-blur-sm transition-all ${
                      tier.featured
                        ? "border-amber-500/30 shadow-[0_24px_64px_rgba(245,158,11,0.12)] md:-translate-y-4"
                        : "border-white/[0.08] card-hover"
                    }`}
                  >
                    {tier.featured && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_6px_18px_rgba(245,158,11,0.4)]">
                          <Sparkles size={11} /> Most popular
                        </div>
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className={`w-11 h-11 rounded-xl ${tier.chipBg} border ${tier.chipBorder} flex items-center justify-center`}
                        >
                          <Icon size={20} className={tier.chipText} />
                        </div>
                        <h3 className="text-2xl font-black text-zinc-100 tracking-tight">
                          {tier.name}
                        </h3>
                      </div>
                      <p className="text-sm text-zinc-500 leading-relaxed">{tier.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-5xl md:text-6xl font-black text-zinc-50 leading-none tracking-tight">
                          {tier.price}
                        </span>
                        {tier.priceSuffix && (
                          <span className="text-sm font-semibold text-zinc-500">{tier.priceSuffix}</span>
                        )}
                        {tier.originalPrice && (
                          <span className="text-lg font-bold text-zinc-600 line-through">
                            {tier.originalPrice}
                          </span>
                        )}
                      </div>
                      <div
                        className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg ${tier.chipBg} border ${tier.chipBorder} text-xs font-semibold ${tier.chipText}`}
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
                        <div className="text-sm font-bold text-zinc-200">{tier.closedDeals}</div>
                      </div>
                      <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.015]">
                        <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">
                          Best for
                        </div>
                        <div className="text-sm font-bold text-zinc-200 leading-snug">{tier.bestFor}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="flex-1 flex flex-col gap-3 mb-7">
                      {tier.features.map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <li key={idx} className="flex items-start gap-2.5">
                            <FeatureIcon
                              size={15}
                              className={`${tier.chipText} flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-sm text-zinc-400">{feature.text}</span>
                          </li>
                        );
                      })}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`group inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-gradient-to-r ${tier.buttonBg} text-white font-semibold text-sm transition-all btn-shine shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:brightness-110`}
                    >
                      Get Started <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <div className="text-center text-[11px] text-zinc-600 mt-3">
                      Hail damage verification + TCPA compliant
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Reassurance strip */}
          <AnimatedSection delay={180}>
            <div className="mt-10 md:mt-14 p-5 md:p-6 rounded-2xl border border-white/[0.07] bg-surface flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/[0.1] border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="font-bold text-zinc-200 text-sm">92% appointment accuracy, 45% average conversion</div>
                  <div className="text-xs text-zinc-500 mt-0.5">
                    Appointments that fail verification are replaced — you only pay for real conversations.
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.09] hover:border-white/[0.18] text-zinc-300 hover:text-zinc-100 text-sm font-medium transition-all hover:bg-white/[0.04]"
              >
                Not sure which fits? Talk to us <ArrowRight size={13} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-24 border-t border-white/[0.055]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">
              Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.98]">
              <span className="gradient-text-white">Straight answers.</span>{" "}
              <span style={{
                background: "linear-gradient(135deg, #fb7185 0%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                No fine print.
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="p-6 md:p-7 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                  <h3 className="font-bold text-zinc-100 mb-2">{faq.q}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to fill your roofing calendar?"
        subheadline="Pick a package, or book a 15-minute call and we'll recommend the tier that fits your crew capacity and market."
        primaryCTA="Book a Call"
        badge="Free 15-min consultation"
      />
    </div>
  );
}
