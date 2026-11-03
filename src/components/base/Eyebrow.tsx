import type { ReactNode } from "react";

type Tone = "mint" | "butter" | "cream";

interface EyebrowProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

export default function Eyebrow({ children, tone = "mint", className = "" }: EyebrowProps) {
  const onDark = tone === "cream";
  return (
    <span
      className={`inline-flex items-center gap-3 font-label text-[11px] font-medium uppercase tracking-[0.28em] ${
        onDark ? "text-background-50" : "text-primary-900"
      } ${className}`}
    >
      <span className={`block h-px w-6 ${onDark ? "bg-background-50/70" : "bg-primary-900/60"}`} aria-hidden="true" />
      {children}
    </span>
  );
}