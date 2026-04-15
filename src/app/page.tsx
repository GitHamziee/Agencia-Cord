import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  Target,
  Sun,
  Home,
  Building2,
  Wrench,
  Shield,
  Heart,
  Phone,
  Code2,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Agencia Cord — Premium Digital Agency",
  description:
    "Full-service digital agency delivering exclusive, pre-qualified leads across solar, roofing, real estate, insurance, and more. 1,200+ businesses scaled.",
};

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Precision multi-channel campaigns delivering high-intent prospects in real-time.",
    href: "/services/lead-generation",
    accent: "from-indigo-500 to-blue-600",
  },
  {
    icon: Sun,
    title: "Solar Services",
    desc: "Exclusive solar leads and campaign management for installers nationwide.",
    href: "/services/solar",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Home,
    title: "Roofing Services",
    desc: "Qualified roofing leads and targeted marketing for contractors.",
    href: "/services/roofing",
    accent: "from-rose-500 to-red-600",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Motivated buyer and seller leads for agents and brokerages.",
    href: "/services/real-estate",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    icon: Wrench,
    title: "Home Improvement",
    desc: "Connect with homeowners actively seeking renovation services.",
    href: "/services/home-improvement",
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Final Expense",
    desc: "Exclusive final expense leads for agents targeting seniors.",
    href: "/services/final-expense",
    accent: "from-sky-500 to-cyan-600",
  },
  {
    icon: Heart,
    title: "Medicare",
    desc: "Compliant Medicare leads and appointment setting for insurance agents.",
    href: "/services/medicare",
    accent: "from-pink-500 to-rose-600",
  },
  {
    icon: Phone,
    title: "Virtual Call Center",
    desc: "End-to-end call center buildout with trained agents and proven scripts.",
    href: "/services/virtual-call-center",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "High-converting websites and landing pages built for measurable results.",
    href: "/services/web-development",
    accent: "from-zinc-500 to-slate-600",
  },
];

const whyPoints = [
  "Exclusive leads — never resold to competitors",
  "Industry-specific expertise across 9 verticals",
  "Real-time delivery directly to your CRM",
  "Dedicated account manager for every client",
  "Proven scripts and sales playbooks included",
  "No long-term contracts — results speak for themselves",
];

const processSteps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We learn your business, goals, and target market to architect the right strategy.",
    icon: Users,
  },
  {
    num: "02",
    title: "Strategy Design",
    desc: "A custom plan built for your vertical, geography, and monthly volume goals.",
    icon: Target,
  },
  {
    num: "03",
    title: "Launch & Execute",
    desc: "Campaigns go live across the highest-performing channels for your industry.",
    icon: Zap,
  },
  {
    num: "04",
    title: "Scale & Optimize",
    desc: "Data-driven testing and optimization to lower costs and maximize ROI.",
    icon: TrendingUp,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ════════════════ HERO ════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-16">
        {/* Background layers */}
        <div className="dot-grid absolute inset-0" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 85% 65% at 50% 50%, transparent 35%, #09090b 100%)",
          }}
        />

        {/* Glow orbs */}
        <div className="glow-blob w-[700px] h-[700px] bg-brand/[0.09] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]" />
        <div className="glow-blob w-[340px] h-[340px] bg-violet/[0.07] top-1/4 -right-24" />
        <div className="glow-blob w-[260px] h-[260px] bg-cyan/[0.06] bottom-1/3 -left-16" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-12 pb-24">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brand/[0.08] px-4 py-1.5 text-xs font-medium text-brand-light mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse-dot" />
            Premium Digital Agency — 1,200+ Clients Scaled
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 font-black tracking-tight leading-[0.93] mb-7"
              style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}>
            <span className="gradient-text-white">We Generate</span>
            <br />
            <span className="gradient-text">Leads.</span>
            <br />
            <span className="gradient-text-white">You Close</span>
            <br />
            <span className="gradient-text">Deals.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
            Full-service digital agency delivering exclusive, pre-qualified leads
            across 9 high-value verticals. Backed by data. Built for scale.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold text-[0.95rem] transition-all btn-shine shadow-[0_0_44px_rgba(79,70,229,0.38)] hover:shadow-[0_0_64px_rgba(79,70,229,0.56)]"
            >
              Book a Free Consultation <ArrowRight size={17} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/[0.09] hover:border-white/[0.18] text-zinc-400 hover:text-zinc-100 text-[0.95rem] font-medium transition-all hover:bg-white/[0.04]"
            >
              Explore Services <ChevronRight size={17} />
            </Link>
          </div>

          {/* Proof stats */}
          <div className="animate-fade-in-up delay-400 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-white/[0.06] w-full max-w-2xl">
            {[
              { value: "1,200+", label: "Businesses Scaled" },
              { value: "$40M+", label: "Revenue Generated" },
              { value: "94%", label: "Client Retention" },
              { value: "9", label: "Industries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black gradient-text">{stat.value}</div>
                <div className="text-[11px] text-zinc-600 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-25 animate-float">
          <span className="text-[10px] text-zinc-500 tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* ════════════════ SERVICES GRID ════════════════ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-6">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text-white mb-4">
              Everything you need to grow
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              Nine specialized services engineered to generate leads, close deals, and
              scale your business.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <AnimatedSection
                  key={svc.href}
                  delay={Math.floor(i / 3) * 80 + (i % 3) * 45}
                >
                  <Link
                    href={svc.href}
                    className="group relative flex flex-col p-6 rounded-2xl border border-white/[0.07] bg-surface card-hover overflow-hidden"
                  >
                    {/* Glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                      style={{
                        background:
                          "radial-gradient(ellipse 90% 70% at 50% 110%, rgba(79,70,229,0.05), transparent)",
                      }}
                    />

                    {/* Icon badge */}
                    <div className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-5">
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${svc.accent} opacity-[0.15]`}
                      />
                      <Icon size={21} className="relative z-10 text-white" />
                    </div>

                    <h3 className="font-semibold text-zinc-200 group-hover:text-white transition-colors mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-5 flex-1">
                      {svc.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-light group-hover:gap-2.5 transition-all duration-200">
                      Learn more <ArrowRight size={12} />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.08] hover:border-white/[0.15] text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-all hover:bg-white/[0.04]"
            >
              View all services overview <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════ WHY CORD ════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 border-y border-white/[0.045]" />
        <div className="glow-blob w-[420px] h-[420px] bg-brand/[0.07] top-1/2 -translate-y-1/2 -left-32" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left column */}
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-8">
                Why Agencia Cord
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                <span className="gradient-text-white">We don't just generate</span>
                <br />
                <span className="gradient-text-white">leads.</span>
                <br />
                <span className="gradient-text">We build pipelines.</span>
              </h2>

              <div className="flex gap-8 mb-10">
                {[
                  { val: "94%", label: "Retention rate", color: "border-brand" },
                  { val: "3.2×", label: "Avg. ROI increase", color: "border-violet" },
                  { val: "30d", label: "Time to results", color: "border-cyan" },
                ].map((s) => (
                  <div key={s.label} className={`pl-4 border-l-2 ${s.color}`}>
                    <div className="text-[2.2rem] font-black gradient-text leading-none mb-1">
                      {s.val}
                    </div>
                    <div className="text-xs text-zinc-500">{s.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.09] hover:border-white/[0.18] text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-all hover:bg-white/[0.04]"
              >
                About our approach <ArrowRight size={14} />
              </Link>
            </AnimatedSection>

            {/* Right column — checklist */}
            <AnimatedSection direction="right" delay={100}>
              <div className="flex flex-col gap-2.5">
                {whyPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-4 rounded-xl border border-white/[0.06] bg-surface/60 hover:border-brand/20 hover:bg-surface transition-all group cursor-default"
                  >
                    <CheckCircle
                      size={16}
                      className="text-brand-light flex-shrink-0 mt-0.5 group-hover:text-brand transition-colors"
                    />
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════ PROCESS ════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="line-grid absolute inset-0" />
        <div className="glow-blob w-[500px] h-[500px] bg-brand/[0.065] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-6">
              How We Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text-white mb-4">
              From zero to pipeline in 30 days
            </h2>
            <p className="text-lg text-zinc-400 max-w-lg mx-auto">
              Our four-step framework gets your lead generation engine running fast.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-[2.35rem] left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-gradient-to-r from-transparent via-brand/22 to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((step, i) => (
                <AnimatedSection key={i} delay={i * 90}>
                  <div className="group p-6 rounded-2xl border border-white/[0.07] bg-surface hover:border-brand/25 transition-all">
                    <div className="w-12 h-12 rounded-full border border-brand/30 bg-brand/[0.08] flex items-center justify-center mb-5 group-hover:bg-brand/[0.15] transition-colors">
                      <span className="text-sm font-bold text-brand-light">{step.num}</span>
                    </div>
                    <h3 className="font-semibold text-zinc-200 mb-2.5">{step.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <TestimonialsSection />

      {/* ════════════════ CTA ════════════════ */}
      <CTASection />
    </div>
  );
}
