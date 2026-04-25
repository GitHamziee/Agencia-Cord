"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/siteConfig";

type NavLink = { label: string; href: string };

interface HeaderClientProps {
  navLinks: ReadonlyArray<NavLink>;
  /* Server-rendered service dropdown + mobile service list — rendered on
     the server to avoid shipping the services array + markup twice through
     client JS. */
  servicesDropdown: ReactNode;
  mobileServices: ReactNode;
}

/* ════════════════════════════════════════════════════════════════════
   HeaderClient
   ────────────────────────────────────────────────────────────────────
   Thin interactive shell. Owns:
     • scroll state (for backdrop fade-in)
     • mobile menu open/close
     • services dropdown open/close
     • active-path highlighting (usePathname)

   Static link lists + service-dropdown contents are rendered by the
   server wrapper (Header.tsx) and passed as children, so that markup
   never enters the client bundle.
   ════════════════════════════════════════════════════════════════════ */

export default function HeaderClient({
  navLinks,
  servicesDropdown,
  mobileServices,
}: HeaderClientProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`nav-shell fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "nav-shell-scrolled" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <span className="relative w-9 h-9 flex items-center justify-center">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              fill
              sizes="36px"
              priority
              className="object-contain"
            />
          </span>
          <span className="font-bold text-[1.05rem] tracking-tight text-zinc-100">
            {siteConfig.brand}
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link px-3.5 py-2 rounded-lg text-sm transition-colors ${
                  active
                    ? "nav-link-active text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`nav-link flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm transition-colors ${
                pathname.startsWith("/services")
                  ? "nav-link-active text-zinc-100"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown panel — outer wrapper holds invisible hover bridge (pt-2.5) so the cursor can travel from button to panel without leaving the hover zone */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              {servicesDropdown}
            </div>
          </div>
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="btn-brand-glow flex items-center gap-2 px-4 py-2 rounded-xl bg-brand hover:bg-brand-dark text-white text-sm font-semibold transition-colors btn-shine"
          >
            Book a Call <ArrowRight size={14} />
          </Link>
        </div>

        {/* ── Mobile actions ── */}
        <div className="md:hidden flex items-center gap-1 -mr-1">
          <ThemeToggle />
          <button
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden border-t border-white/[0.055] bg-surface/97 backdrop-blur-2xl transition-all duration-200 ${
          mobileOpen ? "max-h-[90vh] overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] transition-all"
            >
              {link.label}
            </Link>
          ))}

          <div className="px-3 py-1 text-[10px] font-bold text-zinc-600 uppercase tracking-widest mt-3">
            Services
          </div>
          {mobileServices}

          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-brand hover:bg-brand-dark text-white text-sm font-semibold transition-all btn-shine"
            >
              Book a Free Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
