import type { ReactNode } from "react";

type Tone = "mint" | "butter" | "cream" | "sky" | "coral" | "lilac";

interface EyebrowProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const tones: Record<Tone, string> = {
  mint: "bg-mint-100 text-mint-700",
  butter: "bg-sun-100 text-sun-700",
  sky: "bg-sky-100 text-sky-700",
  coral: "bg-coral-100 text-coral-700",
  lilac: "bg-lilac-100 text-lilac-700",
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
