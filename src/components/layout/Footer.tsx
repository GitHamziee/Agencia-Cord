import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  { name: "Lead Generation", href: "/services/lead-generation" },
  { name: "Solar Services", href: "/services/solar" },
  { name: "Roofing Services", href: "/services/roofing" },
  { name: "Real Estate", href: "/services/real-estate" },
  { name: "Home Improvement", href: "/services/home-improvement" },
  { name: "Final Expense", href: "/services/final-expense" },
  { name: "Medicare", href: "/services/medicare" },
  { name: "Virtual Call Center", href: "/services/virtual-call-center" },
  { name: "Web Development", href: "/services/web-development" },
];

const company = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.055] bg-surface">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="relative w-9 h-9 flex items-center justify-center">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </span>
              <span className="font-bold text-[1.05rem] tracking-tight text-zinc-100">{siteConfig.brand}</span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs">
              Premium digital agency helping businesses scale through expert lead generation across 9 high-value verticals.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-xs text-zinc-500 hover:text-brand-light transition-colors"
              >
                <Mail size={13} /> {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2 text-xs text-zinc-500 hover:text-brand-light transition-colors"
              >
                <Phone size={13} /> {siteConfig.contact.phoneDisplay}
              </a>
              <span className="flex items-start gap-2 text-xs text-zinc-600 leading-relaxed">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" /> {siteConfig.contact.address}
              </span>
            </div>
          </div>

          {/* Services col 1 */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-5">Services</div>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col 2 */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-5 invisible">-</div>
            <ul className="flex flex-col gap-2.5 mb-8">
              {services.slice(5).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-5">Company</div>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-5">Get Started</div>
            <p className="text-sm text-zinc-500 mb-5 leading-relaxed">
              Book a free strategy session and discover how we can transform your pipeline.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-dark text-white text-sm font-semibold transition-all btn-shine shadow-[0_0_18px_rgba(79,70,229,0.22)]"
            >
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.055] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Agencia Cord. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
