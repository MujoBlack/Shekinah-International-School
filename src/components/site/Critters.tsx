/*
  PLACEHOLDER characters. Simple original doodles in the brand palette, drawn to sit
  where Calvin's final illustrations will go. Swap each one for the final artwork.
  All decorative (aria-hidden).
*/

type Edge = "edge-r" | "edge-b" | "edge-l";

function Eyes({ x, y, gap = 12, r = 3.4 }: { x: number; y: number; gap?: number; r?: number }) {
  return (
    <g className="blink">
      <circle cx={x} cy={y} r={r + 3} fill="#fff" />
      <circle cx={x + gap} cy={y} r={r + 3} fill="#fff" />
      <circle cx={x + 1} cy={y + 1} r={r} fill="#0D3B22" />
      <circle cx={x + gap + 1} cy={y + 1} r={r} fill="#0D3B22" />
    </g>
  );
}

/* A sunny blob peeking in from the right edge */
export function SunBuddy({ edge = "edge-r" }: { edge?: Edge }) {
  return (
    <svg className={`critter ${edge}`} viewBox="0 0 64 90" aria-hidden="true" data-placeholder="critter">
      <path d="M64 6c-26 0-44 18-44 39s18 39 44 39z" fill="#F3D58F" />
      {[18, 34, 52, 70].map((y, i) => (
        <path key={i} d={`M${i % 2 ? 12 : 8} ${y}h-8`} stroke="#C2982E" strokeWidth="5" strokeLinecap="round" />
      ))}
      <Eyes x={34} y={36} />
      <path d="M36 56q7 6 14 0" stroke="#0D3B22" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* A sprout poking up from the bottom edge */
export function SproutBuddy({ edge = "edge-b" }: { edge?: Edge }) {
  return (
    <svg className={`critter ${edge}`} viewBox="0 0 78 80" aria-hidden="true" data-placeholder="critter">
      <path d="M39 30c-4-14-16-22-30-20 2 14 14 22 30 20z" fill="#57B874" />
      <path d="M39 30c4-16 18-24 32-20-3 15-17 23-32 20z" fill="#2E9A52" />
      <path d="M12 80c0-26 12-44 27-44s27 18 27 44z" fill="#DDEBDF" stroke="#126735" strokeWidth="2.5" />
      <Eyes x={30} y={56} />
    </svg>
  );
}

/* A star friend peeking in from the left edge */
export function StarBuddy({ edge = "edge-l" }: { edge?: Edge }) {
  return (
    <svg className={`critter ${edge}`} viewBox="0 0 56 70" aria-hidden="true" data-placeholder="critter">
      <path d="M0 4l14 18 22-4-10 20 14 18-22-2L0 70z" fill="#F7C4C0" stroke="#EB2229" strokeWidth="2.5" strokeLinejoin="round" />
      <Eyes x={6} y={34} gap={11} r={3} />
    </svg>
  );
}

/* A pencil pal lying along the bottom edge */
export function PencilBuddy({ edge = "edge-b" }: { edge?: Edge }) {
  return (
    <svg className={`critter ${edge}`} viewBox="0 0 96 44" aria-hidden="true" data-placeholder="critter" style={{ width: 96 }}>
      <rect x="10" y="14" width="64" height="30" rx="6" fill="#F3D58F" />
      <rect x="4" y="14" width="14" height="30" rx="5" fill="#FBE1DF" />
      <path d="M74 14l20 15-20 15z" fill="#F6D9B4" />
      <path d="M88 25l6 4-6 4z" fill="#0D3B22" />
      <Eyes x={38} y={27} />
    </svg>
  );
}
