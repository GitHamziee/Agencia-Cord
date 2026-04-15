import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
  badge?: string;
}

export default function CTASection({
  headline = "Ready to dominate your market?",
  subheadline = "Book a free strategy session with our team and discover how Agencia Cord can build your growth engine.",
  primaryCTA = "Schedule Your Free Consultation",
  primaryHref = "/contact",
  secondaryCTA = "View Our Services",
  secondaryHref = "/services",
  badge = "Free Strategy Session",
}: CTASectionProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* BG layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/40 to-bg" />
      <div className="dot-grid absolute inset-0 opacity-60" />
      <div className="glow-blob w-[500px] h-[500px] bg-brand/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="glow-blob w-64 h-64 bg-violet/10 top-8 right-1/4" />
      <div className="glow-blob w-48 h-48 bg-cyan/8 bottom-8 left-1/4" />

      {/* Thin border highlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-brand/40" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand-light mb-8">
          <Calendar size={11} />
          {badge}
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-6 gradient-text-white">
          {headline}
        </h2>

        <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold text-[0.95rem] transition-all btn-shine shadow-[0_0_40px_rgba(79,70,229,0.38)] hover:shadow-[0_0_60px_rgba(79,70,229,0.58)]"
          >
            {primaryCTA} <ArrowRight size={17} />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/[0.10] hover:border-white/[0.20] text-zinc-400 hover:text-zinc-100 text-[0.95rem] font-medium transition-all hover:bg-white/[0.04]"
          >
            {secondaryCTA}
          </Link>
        </div>
      </div>
    </section>
  );
}
