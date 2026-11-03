/* Hand-drawn style decorations used across the site. All are decorative (aria-hidden). */

interface DoodleProps {
  className?: string;
  color?: string;
}

export function Sun({ className = "", color = "#FFC845" }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="none">
      <circle cx="60" cy="60" r="24" fill={color} />
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 10;
        return (
          <line
            key={i}
            x1={60 + Math.cos(a) * 34}
            y1={60 + Math.sin(a) * 34}
            x2={60 + Math.cos(a) * 48}
            y2={60 + Math.sin(a) * 48}
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function Star({ className = "", color = "#EB2229" }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 6c4 22 10 30 30 34-20 5-26 12-30 34-4-22-10-29-30-34 20-4 26-12 30-34z"
        fill={color}
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle({ className = "", color = "#126735" }: DoodleProps) {
  return (
    <svg viewBox="0 0 160 40" preserveAspectRatio="none" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 24c12-16 24-16 36 0s24 16 36 0 24-16 36 0 24 16 36 0"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Heart({ className = "", color = "#EB2229" }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M50 86S12 62 12 36c0-13 10-22 22-22 8 0 13 4 16 10 3-6 8-10 16-10 12 0 22 9 22 22 0 26-38 50-38 50z"
        fill={color}
      />
    </svg>
  );
}

export function Loop({ className = "", color = "#2E9B5B" }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 90" className={className} aria-hidden="true" fill="none">
      <path
        d="M6 70c30 0 46-14 52-34 6-22-18-30-24-12-7 22 30 40 62 26 26-11 34-40 56-40 18 0 30 14 40 30"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="2 12"
      />
      <path d="M182 30l14 12-18 4" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Rainbow({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 140 76" className={className} aria-hidden="true" fill="none">
      <path d="M10 70a60 60 0 0 1 120 0" stroke="#EB2229" strokeWidth="11" strokeLinecap="round" />
      <path d="M28 70a42 42 0 0 1 84 0" stroke="#FFC845" strokeWidth="11" strokeLinecap="round" />
      <path d="M46 70a24 24 0 0 1 48 0" stroke="#126735" strokeWidth="11" strokeLinecap="round" />
    </svg>
  );
}

export function Cloud({ className = "", color = "#FFFFFF" }: DoodleProps) {
  return (
    <svg viewBox="0 0 140 80" className={className} aria-hidden="true">
      <path
        d="M34 72h76c15 0 26-10 26-23s-11-23-25-23c-3-14-16-24-31-24-13 0-24 7-29 18-3-1-6-2-10-2C27 18 16 28 16 41c-8 3-12 10-12 17 0 8 8 14 30 14z"
        fill={color}
      />
    </svg>
  );
}

export function Dots({ className = "", color = "#0B3D22" }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <circle key={i} cx={10 + (i % 4) * 20} cy={10 + Math.floor(i / 4) * 20} r="3.2" fill={color} />
      ))}
    </svg>
  );
}

export function Pencil({ className = "" }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g transform="rotate(-35 60 60)">
        <rect x="20" y="48" width="64" height="24" rx="4" fill="#FFC845" />
        <rect x="14" y="48" width="12" height="24" rx="4" fill="#F58A8E" />
        <rect x="24" y="48" width="6" height="24" fill="#C8CCD0" />
        <path d="M84 48l24 12-24 12z" fill="#F6D9B4" />
        <path d="M100 56l8 4-8 4z" fill="#0B3D22" />
      </g>
    </svg>
  );
}

/* Wavy edge between two coloured sections. Fill with the colour of the section BELOW. */
export function WaveEdge({ className = "", color = "#FFFFFF", flip = false }: DoodleProps & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className={`wave-top ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 48V24C120 4 240 4 360 20s240 24 360 8 240-28 360-14 240 26 360 10V48z"
        fill={color}
      />
    </svg>
  );
}
