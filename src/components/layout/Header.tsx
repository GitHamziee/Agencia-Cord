"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/siteConfig";

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
  { label: "Contact", href: "/contact" },
];

export default function Header() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/88 backdrop-blur-2xl border-b border-white/[0.055]"
          : "bg-transparent"
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm transition-colors ${
                pathname === link.href
                  ? "text-zinc-100 bg-white/[0.07]"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm transition-colors ${
                pathname.startsWith("/services")
                  ? "text-zinc-100 bg-white/[0.07]"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04]"
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
            </div>
          </div>
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand hover:bg-brand-dark text-white text-sm font-semibold transition-all btn-shine shadow-[0_0_22px_rgba(79,70,229,0.28)] hover:shadow-[0_0_34px_rgba(79,70,229,0.48)]"
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
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="px-3 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] transition-all"
            >
              {s.name}
            </Link>
          ))}

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
