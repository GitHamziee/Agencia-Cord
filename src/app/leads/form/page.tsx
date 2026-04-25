import { Suspense } from "react";
import LeadForm from "./LeadForm";

export const metadata = {
  title: "Get a Quote",
};

export default function LeadsFormPage() {
  return (
    <div className="pt-16">
      <section className="relative py-24 overflow-hidden">
        <div className="dot-grid absolute inset-0" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 0%, rgba(79,70,229,0.07), transparent)",
          }}
        />
        <div className="glow-blob w-[400px] h-[400px] bg-brand/[0.08] -top-10 right-1/4" />

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-6">
              Step 2 of 2
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              <span className="gradient-text-white">Tell us about</span>{" "}
              <span className="gradient-text">yourself.</span>
            </h1>
            <p className="text-zinc-400 leading-relaxed max-w-xl">
              We&apos;ll match you with the right specialist within 24 hours.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="p-8 rounded-2xl border border-white/[0.07] bg-surface text-zinc-500 text-sm">
                Loading…
              </div>
            }
          >
            <LeadForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
