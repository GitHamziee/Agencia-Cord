"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

type Props = {
  className?: string;
  variant?: "icon" | "pill";
};

export default function ThemeToggle({
  className = "",
  variant = "icon",
}: Props) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  if (variant === "pill") {
    return (
      <button
        onClick={toggleTheme}
        aria-label={label}
        title={label}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.07] transition-colors text-sm ${className}`}
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
