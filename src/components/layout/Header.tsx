import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeaderClient from "./HeaderClient";

/* ════════════════════════════════════════════════════════════════════
   Header (Server Component wrapper)
   ────────────────────────────────────────────────────────────────────
   Renders the static service dropdown + mobile services list on the
   server, then hands them to <HeaderClient/> as children. The client
   bundle no longer includes these static arrays or the associated link
   markup — only the small interactive shell that reads pathname and
   manages open/closed state.
   ════════════════════════════════════════════════════════════════════ */

const services = [
  { name: "Lead Generation", href: "/services/lead-generation", desc: "Multi-channel lead campaigns" },
  { name: "Solar Services", href: "/services/solar", desc: "Exclusive solar leads" },
  { name: "Roofing Services", href: "/services/roofing", desc: "Qualified roofing leads" },
  { name: "Real Estate", href: "/services/real-estate", desc: "Buyer & seller leads" },
  { name: "Home Improvement", href: "/services/home-improvement", desc: "Homeowner project leads" },
  { name: "Final Expense", href: "/services/final-expense", desc: "Senior insurance leads" },
  { name: "Medicare", href: "/services/medicare", desc: "Compliant Medicare leads" },
  { name: "Virtual Call Center", href: "/services/virtual-call-center", desc: "End-to-end buildout" },
  { name: "Web Development", href: "/services/web-development", desc: "High-converting websites" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Get a Quote", href: "/leads" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const servicesDropdown = (
    <div className="w-72 rounded-2xl border border-white/[0.08] bg-surface/96 backdrop-blur-2xl shadow-[0_24px_64px_rgba(0,0,0,0.5)] p-2">
      <div className="grid gap-0.5">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.055] transition-all group"
          >
            <div>
              <div className="font-medium text-zinc-200 group-hover:text-zinc-100 transition-colors">
                {s.name}
              </div>
              <div className="text-xs text-zinc-500 mt-0.5">{s.desc}</div>
            </div>
            <ArrowRight
              size={13}
              className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-brand-light"
            />
          </Link>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-white/[0.06]">
        <Link
          href="/services"
          className="flex items-center justify-center gap-1.5 py-2 text-xs text-zinc-500 hover:text-brand-light transition-colors"
        >
          View all services <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  );

  const mobileServices = (
    <>
      {services.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="px-3 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] transition-all"
        >
          {s.name}
        </Link>
      ))}
    </>
  );

  return (
    <HeaderClient
      navLinks={navLinks}
      servicesDropdown={servicesDropdown}
      mobileServices={mobileServices}
    />
  );
}
