import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  Home,
  Sun,
  Phone,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Agencia Cord — Premium Digital Agency",
  description:
    "Full-service digital agency delivering exclusive, pre-qualified leads across solar, roofing, real estate, insurance, and more. 1,200+ businesses scaled.",
};

const featuredServices = [
  {
    icon: Sun,
    title: "Solar",
    desc: "Exclusive solar leads for installers nationwide.",
    href: "/services/solar",
    metric: "$12M/yr",
  },
  {
    icon: Home,
    title: "Roofing",
    desc: "Exclusive roofing leads for contractors nationwide.",
    href: "/services/roofing",
    metric: "Storm-ready",
  },
  {
    icon: Phone,
    title: "Call Center Buildout",
    desc: "Trained agents & scripts, live in 30 days.",
    href: "/services/virtual-call-center",
    metric: "120+ built",
  },
];

const process = [
  { num: "01", title: "Discover", desc: "We learn your business, goals, and target market." },
  { num: "02", title: "Design", desc: "A custom plan built for your vertical and volume." },
  { num: "03", title: "Launch", desc: "Campaigns go live across proven channels." },
  { num: "04", title: "Scale", desc: "Data-driven optimization for maximum ROI." },
];

export default function HomePage() {
  return (
    <div>
      {/* ════════════════ HERO ════════════════ */}
      <section className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden pt-20 lg:pt-24">
        <div className="hero-aurora absolute inset-0 overflow-hidden">
          <div
            className="aurora-layer"
            style={{ background: "radial-gradient(50% 50% at 50% 50%, var(--hero-aurora-c1) 0%, transparent 70%)" }}
          />
          <div
            className="aurora-layer"
            style={{
              background: "radial-gradient(50% 50% at 30% 70%, var(--hero-aurora-c2) 0%, transparent 70%)",
              animationDelay: "-9s",
            }}
          />
          <div
            className="aurora-layer"
            style={{
              background: "radial-gradient(50% 50% at 70% 30%, var(--hero-aurora-c3) 0%, transparent 70%)",
              animationDelay: "-17s",
            }}
          />
        </div>
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="noise absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bg/10 via-bg/40 to-bg" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-14 lg:pb-8 grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-center">
          <div>
            <div className="animate-fade-in inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.09] px-3.5 py-1 text-[11px] font-semibold text-emerald-300 mb-5">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              LIVE · 234 leads delivered today
            </div>

            <h1 className="animate-fade-in-up delay-100 text-mega mb-5">
              <span className="block gradient-text-white">We generate</span>
              <span className="block gradient-text">leads.</span>
              <span className="block text-outline">You close deals.</span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed mb-7">
              Full-service digital agency delivering exclusive, pre-qualified leads
              across 9 high-value verticals.
            </p>

            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold text-[0.9rem] transition-all btn-shine btn-shine-auto animate-glow-pulse"
              >
                Book a free consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.09] hover:border-white/[0.18] text-zinc-400 hover:text-zinc-100 text-[0.9rem] font-medium transition-all hover:bg-white/[0.04]"
              >
                Explore services <ChevronRight size={16} />
              </Link>
            </div>

            <div className="animate-fade-in-up delay-400 grid grid-cols-4 gap-3 sm:gap-5 pt-5 border-t border-white/[0.07]">
              {[
                { value: "$40M+", label: "Revenue" },
                { value: "1,200+", label: "Clients" },
                { value: "94%", label: "Retention" },
                { value: "3.2×", label: "Avg. ROI" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black gradient-text leading-none">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-zinc-500 mt-1.5 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <AnimatedSection direction="right" delay={200} className="hidden lg:block">
            <div className="relative aspect-square max-w-[460px] mx-auto">
              {/* Soft orb backlight — theme-aware purple halo */}
              <div className="absolute inset-[12%] rounded-full blur-3xl animate-orb-pulse orbital-backlight" />

              <svg
                viewBox="-240 -240 480 480"
                className="relative w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="coreGlow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
                    <stop offset="55%" stopColor="#4f46e5" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.55" />
                    <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="1" />
                  </linearGradient>
                  <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" />
                  </filter>
                </defs>

                {/* Core glow */}
                <circle cx="0" cy="0" r="140" fill="url(#coreGlow)" className="orbital-core-glow" />

                {/* Outer static ring */}
                <circle
                  cx="0"
                  cy="0"
                  r="200"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />

                {/* Dashed ring */}
                <circle
                  cx="0"
                  cy="0"
                  r="155"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="1"
                  strokeDasharray="1 7"
                />

                {/* Middle dashed ring */}
                <circle
                  cx="0"
                  cy="0"
                  r="110"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />

                {/* Innermost ring */}
                <circle cx="0" cy="0" r="70" fill="none" stroke="#818cf8" strokeOpacity="0.3" strokeWidth="1" />

                {/* Orbital nodes — 9 verticals */}
                {[
                  { r: 70, angle: 30, color: "#4f46e5" },
                  { r: 70, angle: 150, color: "#f59e0b" },
                  { r: 70, angle: 270, color: "#fb7185" },
                  { r: 110, angle: 0, color: "#10b981" },
                  { r: 110, angle: 110, color: "#a78bfa" },
                  { r: 110, angle: 220, color: "#38bdf8" },
                  { r: 155, angle: 55, color: "#f472b6" },
                  { r: 155, angle: 175, color: "#06b6d4" },
                  { r: 155, angle: 295, color: "#e4e4e7" },
                ].map((n, i) => {
                  const rad = (n.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * n.r;
                  const y = Math.sin(rad) * n.r;
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="10" fill={n.color} opacity="0.18" filter="url(#soft)" />
                      <circle cx={x} cy={y} r="4" fill={n.color} />
                    </g>
                  );
                })}

                {/* Core dot (agency hub) */}
                <circle cx="0" cy="0" r="26" fill="#4f46e5" opacity="0.18" filter="url(#soft)" />
                <circle cx="0" cy="0" r="12" fill="#4f46e5" />
                <circle cx="0" cy="0" r="7" fill="#a78bfa" />
                <circle cx="0" cy="0" r="3" fill="#ffffff" />
              </svg>

              {/* Label pill */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface/80 backdrop-blur-sm px-3.5 py-1.5 text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
                <span className="w-1 h-1 rounded-full bg-brand-light animate-pulse-dot" />
                9 verticals · one engine
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════ MARQUEE ════════════════ */}
      <section className="py-6 md:py-8 border-y border-white/[0.06] bg-surface/30 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {Array(2)
              .fill([
                "Solar",
                "Roofing",
                "Medicare",
                "Real Estate",
                "Home Improvement",
                "Final Expense",
                "Call Centers",
                "Web Dev",
                "$40M+ Revenue",
                "1,200+ Clients",
                "94% Retention",
                "3.2× ROI",
              ])
              .flat()
              .map((label, i) => (
                <div key={i} className="flex items-center gap-10 text-2xl md:text-4xl font-black">
                  <span className={i % 2 === 0 ? "gradient-text-white" : "text-outline"}>{label}</span>
                  <span className="text-brand/50">✦</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ════════════════ BENTO — WHAT + PROOF ════════════════ */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="glow-blob w-[480px] h-[480px] bg-brand/[0.07] top-0 -left-32" />
        <div className="glow-blob w-[380px] h-[380px] bg-violet/[0.06] bottom-0 -right-24" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection className="mb-10 md:mb-12 max-w-3xl">
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">What we do</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.98]">
              <span className="gradient-text-white">Lead-gen infrastructure for </span>
              <span className="gradient-text">nine high-value verticals.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Hero stat tile */}
            <AnimatedSection className="col-span-2 md:col-span-2 md:row-span-2">
              <Link
                href="/about"
                className="group relative flex flex-col justify-end h-full min-h-[280px] md:min-h-[440px] p-7 md:p-10 rounded-3xl border border-white/[0.07] bg-gradient-to-br from-surface via-surface to-brand/[0.08] overflow-hidden card-hover"
              >
                <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand/[0.15] blur-3xl" />
                <div className="absolute -left-10 -bottom-16 w-72 h-72 rounded-full bg-violet/[0.1] blur-3xl" />
                <div className="relative">
                  <div className="text-[5rem] md:text-[8rem] font-black gradient-text mb-3 leading-[0.85] tracking-tight">
                    $40M+
                  </div>
                  <div className="text-lg md:text-xl font-bold text-zinc-100 mb-2">
                    in client revenue generated
                  </div>
                  <div className="text-sm text-zinc-500 max-w-md leading-relaxed">
                    Across 1,200+ businesses in 9 verticals. 94% retention. Backed by data.
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light group-hover:gap-3 transition-all">
                    About our approach <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Featured services */}
            {featuredServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={s.href} delay={i * 60} className="col-span-1">
                  <Link
                    href={s.href}
                    className="group relative flex flex-col justify-between h-full min-h-[210px] p-5 rounded-3xl border border-white/[0.07] bg-surface card-hover overflow-hidden"
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl bg-brand/[0.12] border border-brand/20 flex items-center justify-center">
                        <Icon size={18} className="text-brand-light" />
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 mt-2">● {s.metric}</span>
                    </div>
                    <div>
                      <div className="font-bold text-zinc-100 mb-1">{s.title}</div>
                      <div className="text-xs text-zinc-500 leading-relaxed">{s.desc}</div>
                      <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-light group-hover:gap-2 transition-all">
                        Learn more <ArrowRight size={10} />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}

            {/* View all tile */}
            <AnimatedSection className="col-span-1">
              <Link
                href="/services"
                className="group h-full min-h-[210px] p-5 rounded-3xl border border-dashed border-white/[0.12] hover:border-brand/40 bg-surface/40 hover:bg-surface flex flex-col justify-center items-center text-center transition-all"
              >
                <div className="text-5xl md:text-6xl font-black gradient-text mb-2 leading-none">9</div>
                <div className="text-sm font-semibold text-zinc-300 mb-1">verticals</div>
                <div className="inline-flex items-center gap-1 text-[11px] text-brand-light group-hover:gap-2 transition-all mt-2">
                  See all <ArrowRight size={11} />
                </div>
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ════════════════ PROCESS ════════════════ */}
      <section className="py-20 md:py-24 relative overflow-hidden border-t border-white/[0.055]">
        <div className="line-grid absolute inset-0 opacity-40" />
        <div className="glow-blob w-[500px] h-[500px] bg-violet/[0.07] top-1/2 right-0 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <AnimatedSection className="mb-12 max-w-3xl">
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">How we work</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.98]">
              <span className="gradient-text-white">Zero to pipeline </span>
              <span className="gradient-text">in 30 days.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
            {process.map((p, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="relative">
                  <div className="relative w-12 h-12 rounded-full border border-brand/40 bg-bg flex items-center justify-center mb-4 z-10">
                    <span className="text-sm font-bold text-brand-light">{p.num}</span>
                  </div>
                  <div className="font-bold text-zinc-100 text-lg mb-1.5">{p.title}</div>
                  <div className="text-sm text-zinc-500 leading-relaxed">{p.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <CTASection />
    </div>
  );
}
