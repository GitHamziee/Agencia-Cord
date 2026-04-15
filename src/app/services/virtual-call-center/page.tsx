import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle, Users, Zap, BarChart2, Settings, Headphones } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Virtual Call Center Buildout",
  description:
    "End-to-end virtual call center buildout — technology, hiring, scripts, training, and management. Be operational in 30 days or less.",
};

const features = [
  {
    icon: Settings,
    title: "Technology Stack Setup",
    desc: "We configure your dialer, CRM, VoIP, recording software, and analytics dashboard — all integrated and ready to use.",
  },
  {
    icon: Users,
    title: "Agent Recruiting & Hiring",
    desc: "We source, screen, and interview candidates. You approve final hires. All agents background-checked and reference-verified.",
  },
  {
    icon: Headphones,
    title: "Agent Training Programs",
    desc: "Role-specific training on product knowledge, scripts, objection handling, compliance, and call quality standards.",
  },
  {
    icon: BarChart2,
    title: "Performance Management",
    desc: "KPI dashboards, call monitoring, quality scoring, and weekly performance reviews to keep your team at peak output.",
  },
  {
    icon: Zap,
    title: "Scripts & Playbooks",
    desc: "Proven, tested scripts for every product and objection. Built from thousands of calls across multiple verticals.",
  },
  {
    icon: Phone,
    title: "Ongoing Management Support",
    desc: "Optional ongoing management retainer — we handle scheduling, performance, and compliance so you focus on growth.",
  },
];

const timeline = [
  { week: "Week 1", title: "Discovery & Design", desc: "We document your product, compliance requirements, scripts, and KPI targets." },
  { week: "Week 2", title: "Tech Setup", desc: "Dialer, CRM, VoIP, and analytics configured and tested end-to-end." },
  { week: "Week 3", title: "Hiring & Training", desc: "Agents recruited, screened, hired, and trained on scripts and compliance." },
  { week: "Week 4", title: "Soft Launch", desc: "Test calls, quality review, and adjustments before full-volume launch." },
  { week: "Week 5+", title: "Full Operations", desc: "Full capacity operations with ongoing performance management and optimization." },
];

const stats = [
  { value: "120+", label: "Call Centers Built" },
  { value: "30d", label: "Avg. Launch Time" },
  { value: "8.2/10", label: "Avg. QA Score" },
  { value: "3×", label: "Productivity vs. In-House" },
];

export default function VirtualCallCenterPage() {
  return (
    <div className="pt-16">
      {/* ── Tech-aesthetic Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="line-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-bg to-bg" />
        <div className="glow-blob w-[600px] h-[400px] bg-cyan-500/[0.08] top-0 left-1/2 -translate-x-1/2" />
        <div className="glow-blob w-[300px] h-[300px] bg-blue-500/[0.07] top-1/3 -right-16" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/[0.08] px-3.5 py-1 text-xs font-medium text-cyan-light mb-8">
                <Phone size={11} /> Virtual Call Center Buildout
              </div>
              <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                <span className="gradient-text-white">Your sales floor.</span>
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Built for you.</span>
              </h1>
              <p className="animate-fade-in-up delay-200 text-lg text-zinc-400 leading-relaxed mb-10">
                We build, staff, train, and manage your entire virtual call center
                operation — from technology selection to day-one live calls. Operational
                in 30 days or less.
              </p>
              <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold transition-all btn-shine"
                  style={{
                    background: "linear-gradient(135deg, #0891b2, #2563eb)",
                    boxShadow: "0 0 36px rgba(8,145,178,0.28)",
                  }}
                >
                  Build My Call Center <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/[0.09] text-zinc-400 hover:text-zinc-100 font-medium transition-all hover:bg-white/[0.04]"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Dashboard mockup */}
            <AnimatedSection direction="right" delay={100}>
              <div className="p-5 rounded-2xl border border-white/[0.08] bg-surface shadow-2xl font-mono">
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex gap-1.5">
                    {["bg-red-500", "bg-amber-500", "bg-emerald-500"].map((c) => (
                      <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 ml-2">Call Center Dashboard</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "Agents Live", value: "24", color: "text-emerald-400" },
                    { label: "Calls/Hour", value: "186", color: "text-cyan" },
                    { label: "QA Score", value: "8.7", color: "text-amber" },
                  ].map((m) => (
                    <div key={m.label} className="p-3 rounded-lg border border-white/[0.06] bg-surface-2 text-center">
                      <div className={`text-xl font-black ${m.color}`}>{m.value}</div>
                      <div className="text-[9px] text-zinc-600 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5 mb-4">
                  <div className="text-[9px] text-zinc-600 uppercase tracking-wider mb-2">Active Agents</div>
                  {[
                    { name: "Agent #04", status: "On Call", dur: "4:23" },
                    { name: "Agent #07", status: "On Call", dur: "1:47" },
                    { name: "Agent #11", status: "Available", dur: "—" },
                    { name: "Agent #15", status: "On Call", dur: "6:08" },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface-2 border border-white/[0.05]">
                      <span className="text-[11px] text-zinc-400">{a.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] ${a.status === "On Call" ? "text-emerald-400" : "text-zinc-500"}`}>
                          {a.status}
                        </span>
                        <span className="text-[10px] text-zinc-600">{a.dur}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-[9px] text-zinc-600">↑ Real-time monitoring dashboard</div>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 grid grid-cols-2 md:grid-cols-4 gap-px mt-16 rounded-2xl overflow-hidden border border-white/[0.07]">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface/80 py-6 px-4 text-center">
                <div className="text-3xl font-black text-cyan mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Everything in the buildout
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              We handle every component of your call center infrastructure — you focus
              on the results.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimatedSection key={i} delay={i * 50}>
                  <div className="p-6 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                    <div className="w-10 h-10 rounded-xl bg-cyan/[0.1] border border-cyan/20 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-cyan" />
                    </div>
                    <h3 className="font-semibold text-zinc-200 mb-2">{f.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              Operational in 30 days
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Our proven implementation timeline from agreement to first call.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-5 gap-3">
              {timeline.map((step, i) => (
                <div key={i} className="relative">
                  {i < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[calc(100%-0.5rem)] w-3 h-px bg-cyan/20" />
                  )}
                  <div className="p-5 rounded-xl border border-cyan/15 bg-surface text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-cyan mb-2">{step.week}</div>
                    <div className="font-semibold text-zinc-200 text-sm mb-2">{step.title}</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        headline="Ready to launch your call center?"
        subheadline="Book a discovery call and get a custom buildout quote within 48 hours."
        primaryCTA="Get a Call Center Quote"
        badge="Free Buildout Consultation"
      />
    </div>
  );
}
