import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, CheckCircle, Zap, BarChart2, Globe, Lock } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "High-converting websites, landing pages, and funnels built from scratch. SEO-optimized, conversion-focused, and built to generate leads.",
};

const services = [
  {
    title: "Landing Pages & Funnels",
    desc: "Single-purpose, conversion-optimized landing pages for paid campaigns. Every element tested for maximum lead capture.",
    metric: "Avg. 11% conversion rate",
  },
  {
    title: "Agency & Business Websites",
    desc: "Full-service business websites designed to convert visitors into leads and close new clients. Custom — never templated.",
    metric: "Avg. 6× more leads vs. template sites",
  },
  {
    title: "Lead Generation Portals",
    desc: "Multi-step form funnels with CRM integration, lead scoring, and automated follow-up workflows baked in.",
    metric: "Real-time lead routing",
  },
  {
    title: "E-commerce & Booking",
    desc: "Online stores and appointment booking systems with payment processing, CRM sync, and conversion optimization.",
    metric: "Avg. 28% cart conversion",
  },
];

const tech = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Vercel", category: "Deployment" },
  { name: "Stripe", category: "Payments" },
  { name: "Sanity CMS", category: "Content" },
  { name: "HubSpot", category: "CRM" },
  { name: "PostHog", category: "Analytics" },
  { name: "Cloudflare", category: "CDN" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Resend", category: "Email" },
];

const features = [
  "Custom design — no templates, no page builders",
  "Mobile-first, responsive across all devices",
  "Core Web Vitals optimized (LCP, CLS, FID)",
  "SEO-ready from day one — technical + on-page",
  "A/B testing infrastructure built in",
  "CRM and analytics integrations included",
  "Security hardened — HTTPS, headers, rate limiting",
  "Source code ownership — yours forever",
];

const stats = [
  { value: "180+", label: "Websites Launched" },
  { value: "11%", label: "Avg. Landing Page CVR" },
  { value: "98", label: "Avg. PageSpeed Score" },
  { value: "14d", label: "Avg. Delivery Time" },
];

export default function WebDevelopmentPage() {
  return (
    <div className="pt-16">
      {/* ── Code-aesthetic Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="line-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-bg to-bg" />
        <div className="glow-blob w-[500px] h-[400px] bg-brand/[0.07] top-0 left-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-3.5 py-1 text-xs font-medium text-zinc-300 mb-8">
                <Code2 size={11} /> Web Development
              </div>
              <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                <span className="gradient-text-white">Websites that</span>
                <br />
                <span className="gradient-text-white">convert,</span>
                <br />
                <span className="gradient-text">not just exist.</span>
              </h1>
              <p className="animate-fade-in-up delay-200 text-lg text-zinc-400 leading-relaxed mb-10">
                Custom-built websites and landing pages designed around one goal: turning
                visitors into leads and customers. No templates. No shortcuts.
              </p>
              <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold transition-all btn-shine shadow-[0_0_36px_rgba(79,70,229,0.3)]"
                >
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/[0.09] text-zinc-400 hover:text-zinc-100 font-medium transition-all hover:bg-white/[0.04]"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Code editor mockup */}
            <AnimatedSection direction="right" delay={100}>
              <div className="rounded-2xl border border-white/[0.08] bg-surface overflow-hidden shadow-2xl">
                {/* Editor title bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07] bg-surface-2">
                  <div className="flex gap-1.5">
                    {["bg-red-500/70", "bg-amber-500/70", "bg-emerald-500/70"].map((c) => (
                      <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">HeroSection.tsx</span>
                  <span className="text-[10px] text-emerald-400">●  Saved</span>
                </div>

                {/* Code content */}
                <div className="p-5 font-mono text-[11px] leading-relaxed">
                  <div><span className="text-purple-400">export default</span> <span className="text-amber">function</span> <span className="text-cyan">HeroSection</span><span className="text-zinc-400">() {"{"}</span></div>
                  <div className="ml-4"><span className="text-purple-400">return</span> <span className="text-zinc-400">(</span></div>
                  <div className="ml-8"><span className="text-zinc-500">{"<"}</span><span className="text-emerald-400">section</span> <span className="text-amber">className</span><span className="text-zinc-400">=</span><span className="text-emerald-300">"hero"</span><span className="text-zinc-500">{">"}</span></div>
                  <div className="ml-12"><span className="text-zinc-500">{"<"}</span><span className="text-emerald-400">h1</span><span className="text-zinc-500">{">"}</span><span className="text-zinc-300">We Generate Leads.</span><span className="text-zinc-500">{"</h1>"}</span></div>
                  <div className="ml-12"><span className="text-zinc-500">{"<"}</span><span className="text-emerald-400">Button</span> <span className="text-amber">href</span><span className="text-zinc-400">=</span><span className="text-emerald-300">"/contact"</span><span className="text-zinc-500">{"/>"}</span></div>
                  <div className="ml-8"><span className="text-zinc-500">{"</"}</span><span className="text-emerald-400">section</span><span className="text-zinc-500">{">"}</span></div>
                  <div className="ml-4"><span className="text-zinc-400">)</span></div>
                  <div><span className="text-zinc-400">{"}"}</span></div>
                  <div className="mt-3 text-zinc-600">// Lighthouse: 98 · Converted: 11.4%</div>
                </div>

                {/* Bottom status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-surface-2 text-[9px] font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400">◉ TypeScript</span>
                    <span className="text-zinc-600">Ln 12, Col 8</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600">
                    <span>Next.js 15</span>
                    <span>UTF-8</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 grid grid-cols-2 md:grid-cols-4 gap-px mt-14 rounded-2xl overflow-hidden border border-white/[0.07]">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface/80 py-6 px-4 text-center">
                <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service types ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-bold tracking-tight gradient-text-white mb-4">
              What we build
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="h-full p-7 rounded-2xl border border-white/[0.07] bg-surface card-hover">
                  <h3 className="font-bold text-zinc-200 mb-3">{svc.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-brand-light">
                    <BarChart2 size={11} /> {svc.metric}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech + Features ── */}
      <section className="py-24 border-t border-white/[0.055]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Tech stack */}
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-6">
                Modern stack. Proven results.
              </h2>
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
                We use battle-tested, modern technology — no outdated page builders or
                bloated CMSes that hurt your Core Web Vitals and SEO.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {tech.map((t) => (
                  <div
                    key={t.name}
                    className="p-3 rounded-xl border border-white/[0.06] bg-surface text-center"
                  >
                    <div className="text-xs font-semibold text-zinc-300 mb-0.5">{t.name}</div>
                    <div className="text-[9px] text-zinc-600">{t.category}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection direction="right" delay={100}>
              <h2 className="text-3xl font-bold tracking-tight gradient-text-white mb-6">
                Every project includes
              </h2>
              <div className="flex flex-col gap-2.5">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-brand-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-400">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to build a website that actually converts?"
        subheadline="Tell us about your project and get a free quote within 48 hours. No templates — just results."
        primaryCTA="Start a Project"
        badge="Free Project Quote in 48h"
      />
    </div>
  );
}
