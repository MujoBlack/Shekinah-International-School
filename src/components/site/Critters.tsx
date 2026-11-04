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

/* Big round graduate buddy (butter, mortarboard) peeking up from the bottom of the Academics menu. The only critter in the menu with eyes. */
export function MenuBuddy() {
  return (
    <svg className="menu-buddy" viewBox="0 0 300 200" aria-hidden="true" data-placeholder="critter">
      {/* clouds, no faces */}
      <g fill="#fff" opacity="0.95">
        <ellipse cx="44" cy="70" rx="34" ry="14" />
        <circle cx="34" cy="60" r="14" />
        <circle cx="56" cy="56" r="18" />
        <ellipse cx="256" cy="40" rx="32" ry="13" />
        <circle cx="250" cy="30" r="15" />
        <circle cx="270" cy="33" r="11" />
      </g>
      {/* confetti dots */}
      <circle cx="96" cy="30" r="3" fill="#C2982E" />
      <circle cx="210" cy="78" r="3" fill="#EB2229" />
      <circle cx="286" cy="88" r="2.5" fill="#126735" />
      <circle cx="20" cy="140" r="2.5" fill="#126735" />
      {/* pencil, no face */}
      <g transform="rotate(28 250 120)">
        <rect x="206" y="112" width="70" height="16" rx="3" fill="#FAE6B9" stroke="#C2982E" strokeWidth="2" />
        <rect x="206" y="112" width="12" height="16" rx="3" fill="#FBE1DF" stroke="#EB2229" strokeWidth="2" />
        <path d="M276 112 L294 120 L276 128 Z" fill="#F6F3EE" stroke="#C2982E" strokeWidth="2" />
        <path d="M288 117 L294 120 L288 123 Z" fill="#231F20" />
      </g>
      {/* the buddy: a big green round with a sprout */}
      <g className="mb-body">
        <circle cx="150" cy="150" r="88" fill="#FAE6B9" stroke="#C2982E" strokeWidth="3" />
        {/* mortarboard */}
        <g transform="rotate(-8 150 62)">
          <path d="M96 62 L150 40 L204 62 L150 84 Z" fill="#126735" stroke="#0D3B22" strokeWidth="2" />
          <path d="M122 72 L122 88 Q150 100 178 88 L178 72 L150 84 Z" fill="#0D3B22" />
          <path d="M150 62 L194 72 L194 96" fill="none" stroke="#EB2229" strokeWidth="3" strokeLinecap="round" />
          <circle cx="194" cy="100" r="5" fill="#EB2229" />
        </g>
        <g className="blink">
          <circle cx="124" cy="132" r="20" fill="#fff" stroke="#C2982E" strokeWidth="2" />
          <circle cx="174" cy="132" r="20" fill="#fff" stroke="#C2982E" strokeWidth="2" />
          <circle cx="129" cy="135" r="9" fill="#0D3B22" />
          <circle cx="179" cy="135" r="9" fill="#0D3B22" />
          <circle cx="132" cy="131" r="3" fill="#fff" />
          <circle cx="182" cy="131" r="3" fill="#fff" />
        </g>
        <path d="M134 166 Q150 186 168 166 Z" fill="#0D3B22" />
        <path d="M142 174 Q151 182 160 174" fill="#EB2229" opacity="0.85" />
        <circle cx="106" cy="160" r="8" fill="#FBE1DF" />
        <circle cx="196" cy="160" r="8" fill="#FBE1DF" />
      </g>
    </svg>
  );
}
