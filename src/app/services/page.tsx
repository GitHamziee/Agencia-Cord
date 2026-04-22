import type { Metadata } from "next";
import Link from "next/link";
import {
  Target, Sun, Home, Building2, Wrench, Shield, Heart, Phone, Code2, ArrowRight,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nine specialized digital services — lead generation, solar, roofing, real estate, home improvement, final expense, Medicare, virtual call centers, and web development.",
};

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    tagline: "The engine behind your growth.",
    desc: "Precision multi-channel campaigns built around your ideal customer profile. We deliver exclusive, high-intent leads in real-time directly to your CRM or phone.",
    href: "/services/lead-generation",
    accent: "from-indigo-500 to-blue-600",
    metrics: ["Real-time delivery", "Exclusive leads", "CRM integration"],
    category: "Core Service",
  },
  {
    icon: Sun,
    title: "Solar Services",
    tagline: "Turn sunlight into a pipeline.",
    desc: "Exclusive solar leads for residential and commercial installers. We handle campaign management so you can focus on installations and closing.",
    href: "/services/solar",
    accent: "from-amber-500 to-orange-500",
    metrics: ["Homeowner leads", "Pre-qualified", "Geo-targeted"],
    category: "Specialty",
  },
  {
    icon: Home,
    title: "Roofing Services",
    tagline: "More jobs. Fewer headaches.",
    desc: "Qualified roofing leads for residential and commercial contractors nationwide. Damage assessment leads, replacement inquiries, and new construction.",
    href: "/services/roofing",
    accent: "from-rose-500 to-red-600",
    metrics: ["Storm damage leads", "Replacement leads", "Nationwide coverage"],
    category: "Specialty",
  },
  {
    icon: Building2,
    title: "Real Estate",
    tagline: "Motivated buyers. Ready sellers.",
    desc: "Exclusive buyer and seller leads for real estate agents and brokerages. We segment by motivation level so you only talk to people ready to move.",
    href: "/services/real-estate",
    accent: "from-emerald-500 to-teal-600",
    metrics: ["Buyer & seller leads", "Market-segmented", "High intent score"],
    category: "Specialty",
  },
  {
    icon: Wrench,
    title: "Home Improvement",
    tagline: "Connect with homeowners ready to invest.",
    desc: "Leads for renovation, remodeling, HVAC, plumbing, electrical, and landscaping contractors. Homeowners actively seeking service providers.",
    href: "/services/home-improvement",
    accent: "from-violet-500 to-purple-600",
    metrics: ["Project-specific leads", "Homeowner verified", "10+ trade categories"],
    category: "Specialty",
  },
  {
    icon: Shield,
    title: "Final Expense",
    tagline: "Quality leads that respect the sale.",
    desc: "Exclusive final expense leads for agents targeting seniors. Fresh, never-recycled data with seniors who have expressed interest in coverage.",
    href: "/services/final-expense",
    accent: "from-sky-500 to-cyan-600",
    metrics: ["Senior-targeted", "Exclusive only", "Appointment setting"],
    category: "Insurance",
  },
  {
    icon: Heart,
    title: "Medicare",
    tagline: "Compliant. Consistent. Converting.",
    desc: "CMS-compliant Medicare leads and appointment setting for licensed agents. We understand the regulations and deliver leads that respect the rules.",
    href: "/services/medicare",
    accent: "from-pink-500 to-rose-600",
    metrics: ["CMS compliant", "T65 & dual eligible", "Appointment setting"],
    category: "Insurance",
  },
  {
    icon: Phone,
    title: "Virtual Call Center",
    tagline: "Your sales floor. Built for you.",
    desc: "End-to-end virtual call center buildout — technology, agents, scripts, training, and ongoing management. Be operational in 30 days or less.",
    href: "/services/virtual-call-center",
    accent: "from-cyan-500 to-blue-500",
    metrics: ["30-day launch", "Trained agents", "Full tech stack"],
    category: "Operations",
  },
  {
    icon: Code2,
    title: "Web Development",
    tagline: "Websites that convert, not just exist.",
    desc: "High-performance websites, landing pages, and funnels built specifically to convert visitors into leads and customers. No templates — fully custom.",
    href: "/services/web-development",
    accent: "from-zinc-400 to-slate-600",
    metrics: ["Custom builds", "Conversion-optimized", "SEO-ready"],
    category: "Digital",
  },
];

const categories = [...new Set(services.map((s) => s.category))];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="dot-grid absolute inset-0" />
        <div className="glow-blob w-[600px] h-[400px] bg-brand/[0.07] -top-10 left-1/2 -translate-x-1/2" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(79,70,229,0.05), transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-8">
            Our Services
          </div>
          <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight gradient-text-white mb-6">
            Nine ways to scale<br />
            <span className="gradient-text">your business.</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Every service is purpose-built for its vertical. No generalist campaigns —
            deep expertise in every industry we serve.
          </p>

          {/* Category pills */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.04] text-xs text-zinc-500"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services list ── */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <AnimatedSection key={svc.href} delay={i * 40}>
                  <Link
                    href={svc.href}
                    className="group flex flex-col md:flex-row md:items-center gap-6 p-7 rounded-2xl border border-white/[0.07] bg-surface card-hover"
                  >
                    {/* Icon */}
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${svc.accent} opacity-[0.15]`}
                      />
                      <Icon size={26} className="relative z-10 text-zinc-100" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-1">
                        <h2 className="text-lg font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                          {svc.title}
                        </h2>
                        <span className="px-2 py-0.5 rounded-md border border-white/[0.06] bg-white/[0.03] text-[10px] text-zinc-600">
                          {svc.category}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-brand-light mb-2">
                        {svc.tagline}
                      </p>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Metrics + arrow */}
                    <div className="flex flex-col gap-2 flex-shrink-0 md:items-end">
                      {svc.metrics.map((m) => (
                        <span
                          key={m}
                          className="inline-flex px-2.5 py-1 rounded-lg border border-white/[0.06] bg-white/[0.03] text-[11px] text-zinc-500 whitespace-nowrap"
                        >
                          {m}
                        </span>
                      ))}
                      <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-brand-light group-hover:gap-2.5 transition-all">
                        Explore <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="Not sure which service fits your goals?"
        subheadline="Book a free discovery call. We'll analyze your market and recommend the exact combination of services to maximize your results."
        primaryCTA="Book a Free Discovery Call"
        secondaryCTA="Learn About Us"
        secondaryHref="/about"
      />
    </div>
  );
}
