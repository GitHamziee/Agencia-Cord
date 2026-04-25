import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getProxyIp } from "@/lib/leadsProxy";
import { lookupZip } from "@/lib/zipLookup";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ zip?: string | string[] }>;

export default async function LeadsResultPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const raw = Array.isArray(sp.zip) ? sp.zip[0] : sp.zip;
  const zip = (raw || "").trim();
  const geo = await lookupZip(zip);

  if (!geo) {
    return (
      <div className="pt-16">
        <section className="relative py-24">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-3xl font-black mb-4 gradient-text-white">
              Invalid ZIP code
            </h1>
            <Link
              href="/leads"
              className="text-brand-light hover:underline text-sm"
            >
              ← Try a different ZIP
            </Link>
          </div>
        </section>
      </div>
    );
  }

  let ip: string | null = null;
  let error: string | null = null;
  try {
    ip = await getProxyIp({ stateSlug: geo.stateSlug, citySlug: geo.citySlug });
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

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

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-6">
              <MapPin size={12} className="text-brand-light" />
              {geo.city}, {geo.stateCode} {geo.zip}
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              <span className="gradient-text-white">Services available in</span>{" "}
              <span className="gradient-text">
                {geo.city}, {geo.stateCode}
              </span>
            </h1>
            <p className="text-zinc-400 leading-relaxed">
              We&apos;ve verified service availability for your region.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-white/[0.07] bg-surface mb-8">
            {ip && (
              <>
                <div className="text-xs font-semibold text-zinc-400 mb-2">
                  Region endpoint
                </div>
                <div className="font-mono text-2xl text-zinc-100">{ip}</div>
              </>
            )}
            {error && (
              <div className="text-sm text-rose-400">
                <div className="font-semibold mb-1">Could not verify region</div>
                <div className="text-rose-400/80">{error}</div>
              </div>
            )}
          </div>

          <Link
            href={`/leads/form?zip=${geo.zip}`}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-light"
          >
            Continue to form
            <ArrowRight size={16} />
          </Link>

          <div className="mt-6">
            <Link
              href="/leads"
              className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-2"
            >
              ← Try a different ZIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
