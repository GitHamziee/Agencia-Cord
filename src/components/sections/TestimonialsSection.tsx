import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "Agencia Cord transformed our pipeline. Within 60 days, we doubled our close rate with pre-qualified leads that actually picked up the phone.",
    author: "Michael Torres",
    role: "CEO, SolarEdge Solutions",
    vertical: "Solar",
    metric: "+112% close rate",
  },
  {
    quote:
      "Their roofing program is unmatched. Every lead is exclusive, verified, and ready to schedule. ROI on month one alone covered a full year of spend.",
    author: "Jennifer Walsh",
    role: "Owner, Walsh Roofing",
    vertical: "Roofing",
    metric: "4.8× ROI",
  },
  {
    quote:
      "We scaled from 20 to 180+ Medicare enrollments per month. The Cord team truly understands compliance and the insurance sales cycle.",
    author: "David Chen",
    role: "Director of Sales, MediCare Pro",
    vertical: "Medicare",
    metric: "9× enrollment growth",
  },
  {
    quote:
      "Their virtual call center buildout was seamless. They handled everything — tech, hiring, scripts — and we were live in 3 weeks. Game-changer.",
    author: "Aisha Patel",
    role: "VP Operations, InsurTech Inc.",
    vertical: "Call Center",
    metric: "3-week launch",
  },
  {
    quote:
      "The web development team built us a landing page that converts at 14%. We've tried 5 agencies before. Cord is the only one that delivered real results.",
    author: "Carlos Reyes",
    role: "Founder, Apex Real Estate",
    vertical: "Real Estate",
    metric: "14% conversion rate",
  },
  {
    quote:
      "Final expense leads that are actually fresh and exclusive. No recycled data. No shared leads. Just qualified seniors ready to talk. Remarkable.",
    author: "Patricia Monroe",
    role: "Independent Agent",
    vertical: "Final Expense",
    metric: "3× appointments booked",
  },
];

const stats = [
  { label: "Businesses Scaled", value: "1,200+" },
  { label: "Revenue Generated", value: "$40M+" },
  { label: "Client Retention", value: "94%" },
  { label: "Avg. ROI Increase", value: "3.2×" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/25 bg-amber/10 px-3.5 py-1.5 text-xs font-medium text-amber mb-6">
            <Star size={11} className="fill-amber" /> Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text-white mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-zinc-400 max-w-lg mx-auto">
            Over 1,200 businesses have scaled their revenue with Agencia Cord.
          </p>
        </AnimatedSection>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="relative h-full p-6 rounded-2xl border border-white/[0.07] bg-surface card-hover flex flex-col">
                {/* Quote icon */}
                <Quote size={20} className="text-brand/30 mb-4 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={13} className="fill-amber text-amber" />
                  ))}
                </div>

                <blockquote className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-end justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-violet flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-200">{t.author}</div>
                      <div className="text-xs text-zinc-500">{t.role}</div>
                    </div>
                  </div>
                  {/* Metric badge */}
                  <div className="flex-shrink-0 px-2.5 py-1 rounded-lg bg-brand/10 border border-brand/20 text-[11px] font-semibold text-brand-light whitespace-nowrap">
                    {t.metric}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats bar */}
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/[0.07]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-surface p-7 text-center ${
                  i < stats.length - 1 ? "border-r border-white/[0.07] border-b md:border-b-0" : ""
                }`}
              >
                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
