/* Hand-drawn Kidjoy illustrations (licensed template), recoloured to the Shekinah palette. */
export type IlloName =
  | "book" | "bulb" | "creative" | "earth-yellow" | "faq-icon" | "footer-icon-0" | "footer-icon-1"
  | "global" | "hat" | "kid-flag" | "kids" | "music" | "price-kid-blue" | "price-kid-green"
  | "price-kid-pink" | "rainbow" | "red-book" | "rocket" | "science" | "star" | "sun" | "tech";

interface IlloProps {
  name: IlloName;
  className?: string;
}

export default function Illo({ name, className = "" }: IlloProps) {
  return (
    <img
      src={`${__BASE_PATH__.replace(/\/$/, "")}/illustrations/${name}.svg`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none select-none ${className}`}
    />
  );
}
