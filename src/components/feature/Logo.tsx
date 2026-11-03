import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "lg";
}

export default function Logo({ variant = "dark", size = "sm" }: LogoProps) {
  const isLight = variant === "light";
  const large = size === "lg";

  return (
    <Link
      to="/"
      className="group flex cursor-pointer items-center gap-2.5 md:gap-3"
      aria-label="Shekinah International School home"
    >
      <span
        className={`relative flex items-center justify-center rounded-[2px] ${
          isLight ? "bg-background-50 text-primary-700" : "bg-primary-950 text-background-50"
        } ${large ? "h-14 w-14 md:h-16 md:w-16" : "h-10 w-10 md:h-11 md:w-11"}`}
      >
        <span
          className={`font-heading font-medium leading-none ${large ? "text-3xl md:text-4xl" : "text-xl"}`}
        >
          S
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`whitespace-nowrap font-heading font-medium tracking-tight ${
            isLight ? "text-background-50" : "text-foreground-950"
          } ${large ? "text-2xl md:text-3xl" : "text-[15px] md:text-[17px]"}`}
        >
          Shekinah
        </span>
        <span
          className={`whitespace-nowrap text-[10px] uppercase tracking-[0.2em] md:text-[11px] ${
            isLight ? "text-background-50/70" : "text-foreground-500"
          }`}
        >
          International School
        </span>
      </span>
    </Link>
  );
}