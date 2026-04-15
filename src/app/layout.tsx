import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Agencia Cord — Premium Digital Agency",
    template: "%s | Agencia Cord",
  },
  description:
    "Full-service digital agency specializing in lead generation across solar, roofing, real estate, home improvement, final expense, Medicare, virtual call centers, and web development.",
  keywords: [
    "digital agency",
    "lead generation",
    "solar leads",
    "roofing leads",
    "real estate marketing",
    "Medicare leads",
    "final expense leads",
    "web development",
    "virtual call center",
  ],
  openGraph: {
    type: "website",
    siteName: "Agencia Cord",
    title: "Agencia Cord — Premium Digital Agency",
    description:
      "We generate leads. You close deals. Full-service digital agency across 9 high-value verticals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
