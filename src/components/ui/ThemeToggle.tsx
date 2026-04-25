"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/* ════════════════════════════════════════════════════════════════════
   ThemeToggle — self-contained.

   Reads the initial theme from the `data-theme` attribute that the
   inline <head> script (see app/layout.tsx) set pre-paint, so first
   render is already correct with no FOUC. Writes back to localStorage
   + <html data-theme> on toggle.

   No React Context / Provider is required: nothing else in the app
   reads the theme at render time (everything is CSS-var driven via
   `[data-theme="…"]` selectors in globals.css).
   ════════════════════════════════════════════════════════════════════ */

const STORAGE_KEY = "theme";
type Theme = "light" | "dark";

function readInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}

type Props = {
  className?: string;
  variant?: "icon" | "pill";
};

export default function ThemeToggle({
  className = "",
  variant = "icon",
}: Props) {
  // Initialise from the DOM attribute the inline pre-paint script set.
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  // Keep local state in sync if (rare) the attribute changes elsewhere.
  useEffect(() => {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") {
      if (attr !== theme) setTheme(attr);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      return next;
    });
  }, []);

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  if (variant === "pill") {
    return (
      <button
        onClick={toggleTheme}
        aria-label={label}
        title={label}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:text-zinc-100 hover:bg-white/[0.07] transition-colors text-sm ${className}`}
      >
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
        <span>{isDark ? "Light mode" : "Dark mode"}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`relative p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] transition-colors ${className}`}
    >
      <Sun
        size={18}
        className={`transition-all duration-300 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0 absolute inset-0 m-auto"
        }`}
      />
      <Moon
        size={18}
        className={`transition-all duration-300 ${
          isDark ? "rotate-90 scale-0 opacity-0 absolute inset-0 m-auto" : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}
