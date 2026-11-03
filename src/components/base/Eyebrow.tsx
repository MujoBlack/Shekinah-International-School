import type { ReactNode } from "react";

type Tone = "mint" | "butter" | "cream" | "leaf" | "coral" | "blush";

interface EyebrowProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const tones: Record<Tone, string> = {
  mint: "bg-mint-100 text-mint-700",
  butter: "bg-sun-100 text-sun-700",
  leaf: "bg-leaf-100 text-leaf-700",
  coral: "bg-coral-100 text-coral-700",
  blush: "bg-blush-100 text-blush-700",
  cream: "bg-background-50/15 text-background-50 ring-1 ring-background-50/30",
};

export default function Eyebrow({ children, tone = "mint", className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-label text-[12px] font-semibold uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}
