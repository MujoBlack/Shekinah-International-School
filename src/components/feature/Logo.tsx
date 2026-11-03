import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "lg";
}

export default function Logo({ variant = "dark", size = "sm" }: LogoProps) {
  const onDark = variant === "light";
  const large = size === "lg";

  return (
    <Link
      to="/"
      className={`group inline-flex shrink-0 cursor-pointer items-center ${
        onDark ? "rounded-[22px] bg-white px-3 py-2" : ""
      }`}
      aria-label="Shekinah International School home"
    >
      <img
        src={`${__BASE_PATH__.replace(/\/$/, "")}/images/shekinah-logo.png`}
        alt="Shekinah International School"
        width={208}
        height={168}
        className={`w-auto transition-transform duration-300 group-hover:-rotate-2 ${
          large ? "h-[84px] md:h-[96px]" : "h-[56px] md:h-[68px]"
        }`}
      />
    </Link>
  );
}
