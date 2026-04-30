"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  threshold?: number;
}

/* ════════════════════════════════════════════════════════════════════
   Shared IntersectionObserver — one instance for the whole page,
   keyed by threshold. Replaces the original per-instance observer
   (previously N observers on pages with many <AnimatedSection/>).

   The element's per-instance delay is stashed in a data attribute so
   the shared callback can read it without bespoke per-element state.
   ════════════════════════════════════════════════════════════════════ */

const observerCache = new Map<number, IntersectionObserver>();

function getObserver(threshold: number): IntersectionObserver | null {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
    return null;
  }
  const cached = observerCache.get(threshold);
  if (cached) return cached;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay) || 0;
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("visible");
          observer.unobserve(el);
        }
      }
    },
    /* rootMargin: trigger 200px before the element enters the viewport so
       reveals fire during scroll inertia rather than after it stops. iOS
       Safari is especially aggressive about deferring IO callbacks during
       momentum-scroll, and a generous margin makes that delay invisible. */
    { threshold, rootMargin: "0px 0px 200px 0px" }
  );
  observerCache.set(threshold, observer);
  return observer;
}

export default function AnimatedSection({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: reveal immediately, skip observer work.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("visible");
      return;
    }

    const observer = getObserver(threshold);
    if (!observer) {
      // SSR / no-IO fallback: just show.
      el.classList.add("visible");
      return;
    }

    if (delay) el.dataset.revealDelay = String(delay);
    observer.observe(el);

    /* Belt-and-suspenders fallback: if the element is in or close to the
       viewport but IO hasn't fired within ~700ms (iOS Safari can defer
       callbacks for the duration of momentum-scroll), reveal it directly.
       Cheap getBoundingClientRect read; runs once per element. */
    const fallbackTimer = window.setTimeout(() => {
      if (el.classList.contains("visible")) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh + 400 && rect.bottom > -200) {
        el.classList.add("visible");
        observer.unobserve(el);
      }
    }, 700);

    return () => {
      observer.unobserve(el);
      window.clearTimeout(fallbackTimer);
    };
  }, [delay, threshold]);

  const dirClass = { up: "reveal", left: "reveal-left", right: "reveal-right" }[direction];

  return (
    <div ref={ref} className={cn(dirClass, className)}>
      {children}
    </div>
  );
}
