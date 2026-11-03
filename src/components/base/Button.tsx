import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "outline" | "cream" | "outlineLight";

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
  primary:
    "border border-primary-950 bg-primary-950 text-background-50 hover:bg-background-50 hover:text-primary-950",
  outline:
    "border border-primary-950/60 bg-transparent text-primary-950 hover:border-primary-950 hover:bg-primary-950 hover:text-background-50",
  cream:
    "border border-background-50 bg-background-50 text-primary-950 hover:bg-transparent hover:text-background-50",
  outlineLight:
    "border border-background-50/60 bg-transparent text-background-50 hover:bg-background-50 hover:text-primary-950",
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
  const classes = `inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-7 py-3.5 text-[15px] font-medium transition-colors duration-300 ${shell[variant]} ${className}`;

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