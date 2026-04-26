import { Suspense } from "react";
import { MapPin } from "lucide-react";
import LeadForm from "./LeadForm";
import { resolveZip } from "@/lib/zipToMetro";

export const metadata = {
  title: "Get a Quote",
};

type SearchParams = Promise<{ zip?: string | string[] }>;

export default async function LeadsFormPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const raw = Array.isArray(sp.zip) ? sp.zip[0] : sp.zip;
  const zip = (raw || "").trim();
  const resolution = zip ? await resolveZip(zip) : null;

  return (
    <div className="pt-16">
      <section className="relative py-12 md:py-16 overflow-hidden">
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
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-6">
              Step 2 of 2
              {resolution?.msa && (
                <>
                  <span className="text-zinc-700">·</span>
                  <MapPin size={12} className="text-brand-light" />
                  <span className="text-brand-light">
                    {resolution.msa.principalCity}, {resolution.msa.stateCode}
                  </span>
                </>
              )}
              {resolution && resolution.fellBack && (
                <>
                  <span className="text-zinc-700">·</span>
                  <span className="text-amber-400/80">
                    Statewide service ({resolution.zipStateCode})
                  </span>
                </>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-3">
              <span className="gradient-text-white">Tell us about</span>{" "}
              <span className="gradient-text">yourself.</span>
            </h1>
            <p className="text-zinc-400 leading-relaxed max-w-xl">
              {resolution?.msa ? (
                <>
                  Service area: <span className="text-zinc-300">{resolution.msa.title}</span>.
                  Your ZIP <span className="text-zinc-300">{resolution.zip}</span> is in{" "}
                  <span className="text-zinc-300">
                    {resolution.zipCity}, {resolution.zipStateCode}
                  </span>
                  .
                </>
              ) : resolution ? (
                <>
                  Your ZIP <span className="text-zinc-300">{resolution.zip}</span>{" "}
                  ({resolution.zipCity}, {resolution.zipStateCode}) is outside our
                  metro coverage. We&apos;ll route via statewide service.
                </>
              ) : (
                <>We&apos;ll match you with the right specialist within 24 hours.</>
              )}
            </p>
          </div>

          <Suspense
            fallback={
              <div className="p-8 rounded-2xl border border-white/[0.07] bg-surface text-zinc-500 text-sm">
                Loading…
              </div>
            }
          >
            <LeadForm
              zip={resolution?.zip ?? zip ?? ""}
              msaSlug={resolution?.msa?.slug ?? ""}
              iproyalCity={resolution?.msa?.iproyalCity ?? ""}
              stateSlug={
                resolution?.msa?.stateSlug ??
                (resolution?.zipStateCode
                  ? resolution.zipStateCode.toLowerCase()
                  : "")
              }
              stateCode={resolution?.msa?.stateCode ?? resolution?.zipStateCode ?? ""}
              zipCity={resolution?.zipCity ?? ""}
            />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
