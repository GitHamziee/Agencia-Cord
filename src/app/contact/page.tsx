import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: siteConfig.contact.email,
    sub: siteConfig.responseTime,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: siteConfig.contact.phoneDisplay,
    sub: siteConfig.hours,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: siteConfig.contact.address,
    sub: siteConfig.contact.addressCountry,
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Under 24 Hours",
    sub: "Average consultation booking",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
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

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Page header */}
          <div className="max-w-2xl mb-16">
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-8">
              Get In Touch
            </div>
            <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              <span className="gradient-text-white">Let's build your</span>
              <br />
              <span className="gradient-text">growth engine.</span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-lg text-zinc-400 leading-relaxed max-w-xl">
              Fill out the form below and our team will reach out within 24 hours to
              schedule your free strategy session — no commitment required.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* ── Form (Client Component leaf) ── */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* ── Contact info ── */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] bg-surface hover:border-brand/20 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-brand/[0.1] border border-brand/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                      <Icon size={17} className="text-brand-light" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-zinc-200">{item.value}</div>
                      <div className="text-xs text-zinc-500 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={i} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}

              {/* Why book a call box */}
              <div className="p-5 rounded-xl border border-brand/20 bg-brand/[0.05] mt-2">
                <div className="text-xs font-bold text-brand-light uppercase tracking-wider mb-4">
                  What to expect
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "30-minute strategy session with a senior specialist",
                    "Custom lead generation plan for your vertical",
                    "Transparent pricing — no hidden fees",
                    "No-pressure, no-obligation consultation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <CheckCircle size={14} className="text-brand-light mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
