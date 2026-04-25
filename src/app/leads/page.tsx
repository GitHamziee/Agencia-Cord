import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Get Started — Enter Your ZIP",
};

export default function LeadsLandingPage() {
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
          <div className="mb-12">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-8">
              Step 1 of 2
            </div>
            <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              <span className="gradient-text-white">Where are you</span>
              <br />
              <span className="gradient-text">located?</span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-lg text-zinc-400 leading-relaxed max-w-xl">
              Enter your ZIP code to see services available in your area.
            </p>
          </div>

          <form
            action="/leads/form"
            method="GET"
            className="p-8 rounded-2xl border border-white/[0.07] bg-surface flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400">
                ZIP Code <span className="text-brand-light">*</span>
              </label>
              <input
                name="zip"
                type="text"
                inputMode="numeric"
                pattern="\d{5}"
                maxLength={5}
                required
                autoComplete="postal-code"
                placeholder="90210"
                className="form-input"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-light"
            >
              Continue
              <ArrowRight size={16} />
            </button>
          </form>

          <p className="mt-6 text-xs text-zinc-500">
            Already started?{" "}
            <Link href="/" className="text-brand-light hover:underline">
              Return home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
