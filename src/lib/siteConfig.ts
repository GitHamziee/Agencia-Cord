/* ════════════════════════════════════════════════════════════════════
   SITE CONFIG  —  single source of truth for contact + branding.
   Change a value here and it updates everywhere on the site.
   ════════════════════════════════════════════════════════════════════ */

export const siteConfig = {
  name: "Agencia Cord",
  brand: "CORD",

  logo: {
    src: "/logo.jpeg",
    alt: "Agencia Cord logo",
  },

  contact: {
    email: "info@agenciacord.com",

    /* Display phone, then the tel: href (digits only) */
    phoneDisplay: "(945) 206-0254",
    phoneHref: "tel:+19452060254",

    /* Full address block + short label used in headers/footers */
    address: "5900 Balcones Dr, Austin, Texas 78731",
    addressShort: "Austin, Texas",
    addressCountry: "United States",
  },

  hours: "Monday – Friday, 9am – 6pm CST",
  responseTime: "We reply within 2 business hours",
} as const;

export type SiteConfig = typeof siteConfig;
