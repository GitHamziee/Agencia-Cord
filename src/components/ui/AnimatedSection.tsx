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
    { threshold }
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
    return () => observer.unobserve(el);
  }, [delay, threshold]);

  const dirClass = { up: "reveal", left: "reveal-left", right: "reveal-right" }[direction];

  return (
    <div ref={ref} className={cn(dirClass, className)}>
      {children}
    </div>
  );
}
