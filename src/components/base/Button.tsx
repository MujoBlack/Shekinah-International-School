import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "outline" | "cream" | "outlineLight" | "red" | "sun";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  type?: "button" | "submit";
  className?: string;
}

const shell: Record<Variant, string> = {
  primary: "bg-primary-700 text-background-50 shadow-[0_5px_0_0_oklch(var(--primary-950))] hover:bg-primary-600",
  red: "bg-coral-500 text-white shadow-[0_5px_0_0_#A8331F] hover:bg-coral-400",
  sun: "bg-sun-300 text-primary-950 shadow-[0_5px_0_0_#9A6A00] hover:bg-sun-200",
  outline:
    "border-2 border-primary-950 bg-white text-primary-950 shadow-[0_5px_0_0_oklch(var(--primary-950))] hover:bg-mint-100",
  cream: "bg-white text-primary-950 shadow-[0_5px_0_0_rgba(0,0,0,0.25)] hover:bg-sun-100",
  outlineLight: "border-2 border-background-50/80 bg-transparent text-background-50 hover:bg-background-50 hover:text-primary-950",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-1 active:shadow-none ${shell[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}