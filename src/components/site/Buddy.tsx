import { useEffect, useRef, useState, type CSSProperties } from "react";

/*
  The Shekinah buddy: a round butter-yellow graduate in a mortarboard.
  One character, reused: big in the Academics menu, on the 404 page and on the form thank-you.
  It is decorative (aria-hidden) and placeholder art until Calvin's final illustration.

  What it does
  - Eyes follow the mouse, or lock onto the menu link you're on (target), and still blink.
  - Says a short line in a speech bubble (say).
  - Pops up with a hat wobble when shown (open), ducks away when hidden.
  - Holds a prop for the menu link's stage (prop): sprout, pencil or book.
  - Happy squint and bounce when a link is clicked (cheer).
  - "o" mouth when the pointer comes very close; blushes when hovered.
  - Click / tap it: the hat is tossed in the air with confetti, then lands back.
  - Dozes off ("z") if the menu sits open and nobody moves for 8 seconds.
  - Seasonal wearables from a small date table (see SEASONS).
  Respects reduced motion (no tracking, entrance or confetti) and touch screens (no tracking).
*/

export type BuddyProp = "sprout" | "pencil" | "book" | null;
type Wear = "medal" | "holly" | "bookpin";

/* Seasonal wearables. Month is 1–12; days inclusive.
   TODO before launch: set the real Sports Day and Book Week dates with the school.
   Preview any outfit by adding ?buddy=medal | holly | bookpin to the page address.
   (Lab goggles are not seasonal: the buddy puts them on for Primary / Our Curriculum, see `goggles`.) */
const SEASONS: { wear: Wear; month: number; from: number; to: number }[] = [
  { wear: "holly", month: 12, from: 1, to: 31 },
  { wear: "bookpin", month: 3, from: 1, to: 7 }, // World Book Day falls in early March
];

function seasonalWear(): Wear | null {
  if (typeof window === "undefined") return null;
  const q = new URLSearchParams(window.location.search).get("buddy");
  if (q === "medal" || q === "holly" || q === "bookpin") return q;
  const d = new Date();
  const hit = SEASONS.find((s) => s.month === d.getMonth() + 1 && d.getDate() >= s.from && d.getDate() <= s.to);
  return hit?.wear ?? null;
}

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarse = () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

const CONFETTI = ["#126735", "#EB2229", "#C2982E", "#126735", "#EB2229", "#C2982E", "#2E9B5A", "#F6A7A2", "#126735", "#EB2229", "#C2982E", "#2E9B5A"];

export default function Buddy({
  open = true,
  say,
  target,
  prop = null,
  cheer = 0,
  sleepy = true,
  goggles = false,
  quiet = false,
  className = "",
}: {
  open?: boolean;
  say?: string | null;
  target?: HTMLElement | null;
  prop?: BuddyProp;
  cheer?: number; // bump this number to trigger the happy bounce
  sleepy?: boolean;
  goggles?: boolean; // lab goggles over the eyes (science)
  quiet?: boolean; // show the bubble with a closed-mouth smile (e.g. the resting greeting)
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const pupils = useRef<SVGGElement>(null);
  const [near, setNear] = useState(false);
  const [asleep, setAsleep] = useState(false);
  const [toss, setToss] = useState(0);
  const [happy, setHappy] = useState(false);
  const [wear] = useState<Wear | null>(seasonalWear);

  const aim = (x: number, y: number) => {
    const el = svg.current;
    const p = pupils.current;
    if (!el || !p) return;
    const r = el.getBoundingClientRect();
    if (!r.width) return;
    const ex = r.left + 0.5 * r.width;
    const ey = r.top + 0.66 * r.height;
    const dx = x - ex;
    const dy = y - ey;
    const d = Math.hypot(dx, dy) || 1;
    const k = Math.min(8, d / 25) / d;
    p.style.transform = `translate(${(dx * k).toFixed(2)}px, ${(dy * k).toFixed(2)}px)`;
    setNear(d < 150);
  };

  // eyes follow the mouse; doze after 8s of stillness while shown
  useEffect(() => {
    if (reduced() || coarse()) return undefined;
    let raf = 0;
    let rest = 0;
    let nap = 0;
    const wake = () => {
      setAsleep(false);
      window.clearTimeout(nap);
      if (sleepy && open) nap = window.setTimeout(() => setAsleep(true), 8000);
    };
    const onMove = (e: MouseEvent) => {
      wake();
      if (target) return;
      cancelAnimationFrame(raf);
      window.clearTimeout(rest);
      rest = window.setTimeout(() => {
        if (pupils.current) pupils.current.style.transform = "";
        setNear(false);
      }, 2000);
      raf = requestAnimationFrame(() => aim(e.clientX, e.clientY));
    };
    wake();
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(rest);
      window.clearTimeout(nap);
      window.removeEventListener("mousemove", onMove);
    };
  }, [target, open, sleepy]);

  // lock onto the hovered menu link
  useEffect(() => {
    if (!target || reduced()) return;
    const r = target.getBoundingClientRect();
    aim(r.left + r.width / 2, r.top + r.height / 2);
    setNear(false);
  }, [target]);

  // happy bounce when a link is clicked
  useEffect(() => {
    if (!cheer) return undefined;
    setHappy(true);
    const t = window.setTimeout(() => setHappy(false), 1100);
    return () => window.clearTimeout(t);
  }, [cheer]);

  const onToss = () => {
    setAsleep(false);
    setToss((n) => n + 1);
    setHappy(true);
    window.setTimeout(() => setHappy(false), 1400);
  };

  const talking = !!say && !asleep;
  const mouthOpen = talking && !quiet;
  const mood = happy ? "happy" : asleep ? "asleep" : near ? "surprised" : mouthOpen ? "talking" : "idle";

  return (
    <div ref={wrap} className={`buddy ${open ? "is-open" : ""} mood-${mood} ${className}`} aria-hidden="true">
      <div className={`buddy-say ${talking ? "on" : ""}`}>{say}</div>
      {asleep && (
        <div className="buddy-z">
          <span>z</span>
          <span>z</span>
          <span>z</span>
        </div>
      )}
      {toss > 0 && !reduced() && (
        <div className="buddy-confetti" key={toss}>
          {CONFETTI.map((c, i) => (
            <i key={i} style={{ "--c": c, "--x": `${(i - 5.5) * 22 + (i % 3) * 7}px`, "--r": `${i * 47}deg`, "--d": `${(i % 4) * 40}ms` } as CSSProperties} />
          ))}
        </div>
      )}
      <svg ref={svg} viewBox="0 0 300 200" data-placeholder="critter">
        {/* clouds, dots and a pencil: decoration only, no faces */}
        <g fill="#fff" opacity="0.95">
          <ellipse cx="44" cy="70" rx="34" ry="14" />
          <circle cx="34" cy="60" r="14" />
          <circle cx="56" cy="56" r="18" />
          <ellipse cx="256" cy="40" rx="32" ry="13" />
          <circle cx="250" cy="30" r="15" />
          <circle cx="270" cy="33" r="11" />
        </g>
        <circle cx="96" cy="30" r="3" fill="#C2982E" />
        <circle cx="210" cy="78" r="3" fill="#EB2229" />
        <circle cx="286" cy="88" r="2.5" fill="#126735" />
        <circle cx="20" cy="140" r="2.5" fill="#126735" />
        <g transform="rotate(28 250 120)">
          <rect x="206" y="112" width="70" height="16" rx="3" fill="#FAE6B9" stroke="#C2982E" strokeWidth="2" />
          <rect x="206" y="112" width="12" height="16" rx="3" fill="#FBE1DF" stroke="#EB2229" strokeWidth="2" />
          <path d="M276 112 L294 120 L276 128 Z" fill="#F6F3EE" stroke="#C2982E" strokeWidth="2" />
          <path d="M288 117 L294 120 L288 123 Z" fill="#231F20" />
        </g>

        <g className="bd-body" onClick={onToss} style={{ pointerEvents: "auto", cursor: "pointer" }}>
          <circle cx="150" cy="150" r="88" fill="#FAE6B9" stroke="#C2982E" strokeWidth="3" />

          {/* cheeks */}
          <circle className="bd-cheek" cx="106" cy="160" r="8" fill="#FBE1DF" />
          <circle className="bd-cheek" cx="196" cy="160" r="8" fill="#FBE1DF" />

          {/* eyes */}
          <g className="bd-eyes blink">
            <circle cx="124" cy="132" r="20" fill="#fff" stroke="#C2982E" strokeWidth="2" />
            <circle cx="174" cy="132" r="20" fill="#fff" stroke="#C2982E" strokeWidth="2" />
            <g ref={pupils} className="mb-pupils">
              <circle cx="124" cy="132" r="9" fill="#0D3B22" />
              <circle cx="174" cy="132" r="9" fill="#0D3B22" />
              <circle cx="127" cy="128" r="3" fill="#fff" />
              <circle cx="177" cy="128" r="3" fill="#fff" />
            </g>
            <g className="bd-lids">
              <path d="M104 132 A20 20 0 0 1 144 132 Z" fill="#FAE6B9" stroke="#C2982E" strokeWidth="2" />
              <path d="M154 132 A20 20 0 0 1 194 132 Z" fill="#FAE6B9" stroke="#C2982E" strokeWidth="2" />
            </g>
          </g>
          {/* lab goggles, worn over the eyes for science */}
          <g className={`bd-goggles ${goggles ? "on" : ""}`}>
            <path d="M64 128 Q70 124 100 126 M198 126 Q230 124 236 128" stroke="#126735" strokeWidth="8" strokeLinecap="round" fill="none" />
            <path d="M144 130 Q149 124 154 130" stroke="#126735" strokeWidth="6" fill="none" />
            <circle cx="124" cy="132" r="25" fill="#bfe6f5" fillOpacity="0.35" stroke="#126735" strokeWidth="6" />
            <circle cx="174" cy="132" r="25" fill="#bfe6f5" fillOpacity="0.35" stroke="#126735" strokeWidth="6" />
            <path d="M110 120 Q116 113 124 112" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d="M160 120 Q166 113 174 112" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.9" />
          </g>
          {/* happy squint eyes */}
          <g className="bd-happy" fill="none" stroke="#0D3B22" strokeWidth="5" strokeLinecap="round">
            <path d="M110 136 Q124 118 138 136" />
            <path d="M160 136 Q174 118 188 136" />
          </g>

          {/* mouths: one shows at a time, centred under the eyes (x=149) */}
          <g transform="translate(-2 0)">
          <path className="bd-mouth m-idle" d="M134 166 Q151 184 168 166" fill="none" stroke="#0D3B22" strokeWidth="5.5" strokeLinecap="round" />
          <g className="bd-mouth m-talk">
            <path d="M133 164 Q151 166 169 164 Q167 190 151 191 Q135 190 133 164 Z" fill="#0D3B22" stroke="#0D3B22" strokeWidth="2" strokeLinejoin="round" />
            <path d="M140 183 Q151 176 162 183 Q157 190 151 190 Q145 190 140 183 Z" fill="#EB2229" />
          </g>
          <ellipse className="bd-mouth m-o" cx="151" cy="174" rx="7" ry="9" fill="#0D3B22" />
          <path className="bd-mouth m-sleep" d="M141 172 Q151 177 161 172" fill="none" stroke="#0D3B22" strokeWidth="4.5" strokeLinecap="round" />
          </g>

          {/* seasonal wearables (worn), never replace the hat */}
          {wear === "bookpin" && (
            <g transform="translate(78 108) rotate(-12)">
              <circle r="15" fill="#fff" stroke="#126735" strokeWidth="2" />
              <path d="M-8 -4 L0 -1 L8 -4 L8 6 L0 9 L-8 6 Z" fill="#FBE1DF" stroke="#EB2229" strokeWidth="1.5" />
              <path d="M0 -1 L0 9" stroke="#EB2229" strokeWidth="1.5" />
            </g>
          )}
          {wear === "holly" && (
            <g transform="translate(84 108) scale(1.3)">
              <path d="M0 0 q8 -10 18 -4 q-4 4 0 8 q-10 6 -18 -4z" fill="#126735" />
              <path d="M2 2 q-10 -6 -16 4 q5 1 4 6 q10 0 12 -10z" fill="#2E9B5A" />
              <circle cx="2" cy="3" r="4" fill="#EB2229" />
              <circle cx="8" cy="6" r="3.5" fill="#EB2229" />
            </g>
          )}
          {wear === "medal" && (
            <g>
              <path d="M180 96 L206 150 M226 96 L206 150" stroke="#126735" strokeWidth="7" strokeLinecap="round" />
              <circle cx="206" cy="160" r="14" fill="#E2B33C" stroke="#C2982E" strokeWidth="3" />
              <path d="M206 152 l2.5 5 5.5 .8 -4 3.9 1 5.5 -5 -2.6 -5 2.6 1 -5.5 -4 -3.9 5.5 -.8z" fill="#fff" opacity="0.85" />
            </g>
          )}
        </g>

        {/* the hat (tossed on click) */}
        <g className={`bd-hat ${toss ? "tossed" : ""}`} key={toss}>
          <g transform="rotate(-8 150 62)">
            <path d="M96 62 L150 40 L204 62 L150 84 Z" fill="#126735" stroke="#0D3B22" strokeWidth="2" />
            <path d="M122 72 L122 88 Q150 100 178 88 L178 72 L150 84 Z" fill="#0D3B22" />
            <path d="M150 62 L194 72 L194 96" fill="none" stroke="#EB2229" strokeWidth="3" strokeLinecap="round" />
            <circle cx="194" cy="100" r="5" fill="#EB2229" />
          </g>
        </g>

        {/* held prop for the stage you're pointing at */}
        <g className={`bd-prop ${prop ? "on" : ""}`}>
          {prop === "sprout" && (
            <g transform="translate(70 150)">
              <path d="M-14 6 L14 6 L10 30 L-10 30 Z" fill="#EB2229" stroke="#b3141a" strokeWidth="2" />
              <path d="M0 6 C0 -8 0 -14 0 -18" stroke="#126735" strokeWidth="3" />
              <path d="M0 -10 C-12 -22 -22 -14 -22 -8 C-12 -6 -6 -6 0 -10Z" fill="#2E9B5A" />
              <path d="M0 -14 C10 -28 22 -20 22 -14 C12 -10 6 -10 0 -14Z" fill="#126735" />
            </g>
          )}
          {prop === "pencil" && (
            <g transform="translate(66 156) rotate(-60)">
              <rect x="-30" y="-7" width="54" height="14" rx="3" fill="#C2982E" stroke="#8a6a12" strokeWidth="2" />
              <rect x="-30" y="-7" width="10" height="14" rx="3" fill="#F6A7A2" stroke="#EB2229" strokeWidth="2" />
              <path d="M24 -7 L38 0 L24 7 Z" fill="#F6F3EE" stroke="#8a6a12" strokeWidth="2" />
              <path d="M33 -2.5 L38 0 L33 2.5 Z" fill="#231F20" />
            </g>
          )}
          {prop === "book" && (
            <g transform="translate(68 158) rotate(-10)">
              <path d="M-28 -16 Q-14 -22 0 -14 L0 18 Q-14 10 -28 16 Z" fill="#fff" stroke="#126735" strokeWidth="2.5" />
              <path d="M28 -16 Q14 -22 0 -14 L0 18 Q14 10 28 16 Z" fill="#DDEBDF" stroke="#126735" strokeWidth="2.5" />
              <path d="M-22 -6 L-6 -3 M-22 2 L-6 5 M6 -3 L22 -6 M6 5 L22 2" stroke="#126735" strokeWidth="1.5" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
