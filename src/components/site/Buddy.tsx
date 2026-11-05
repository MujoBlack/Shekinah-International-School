import { useEffect, useId, useRef, useState, type AnimationEvent, type CSSProperties } from "react";

/*
  The Shekinah buddy: a round butter-yellow graduate in a mortarboard, drawn as a shaded clay toy
  (SVG gradients, glossy eyes, little arms and legs, a soft ground shadow). Original art.
  One character, reused in three ways (variant):
  - "menu"  big in the Academics mega menu (with its clouds-and-pencil scene) and on the form thank-you
  - "still" a posed, static figure (pose) for page corners: Why Shekinah, the FAQ card, the 404 page
  - "hero"  the small walk-on in the corner of the Home hero video: walks on, waves, then follows the mouse

  What it does
  - Eyes follow the mouse, or lock onto the menu link you're on (target), and still blink.
  - The whole body leans toward the pointer; it waves when the pointer comes near (at most every ~6s).
  - Moods: curious (pointer around, or looking at a link), surprised (pointer very close),
    proud (a menu link was clicked), excited (you tapped it: hat toss + confetti), plus talking and asleep.
  - Says a short line in a speech bubble (say). Holds a prop for the menu link's stage (prop).
  - Pops up with a hat wobble when shown (open); dozes off ("z") after 8s of stillness.
  - Lab goggles for science (goggles); seasonal wearables from a small date table (see SEASONS).
  Respects reduced motion (no tracking, lean, wave, walk-on or confetti) and touch screens (no tracking).
*/

export type BuddyProp = "sprout" | "pencil" | "book" | null;
export type BuddyPose = "wave" | "proud" | "curious" | "shrug" | "book";
type Wear = "medal" | "holly" | "bookpin";
type Mood = "idle" | "talking" | "curious" | "surprised" | "proud" | "excited" | "asleep";

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

export const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarse = () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

const CONFETTI = ["#126735", "#EB2229", "#C2982E", "#126735", "#EB2229", "#C2982E", "#2E9B5A", "#F6A7A2", "#126735", "#EB2229", "#C2982E", "#2E9B5A"];

/* The menu keeps its wide scene; stills and the hero walker frame the whole figure, feet and shadow included. */
const VIEW = { menu: [0, 0, 300, 200], full: [28, 22, 244, 248] } as const;
const POSE_MOOD: Record<BuddyPose, Mood> = { wave: "idle", proud: "proud", curious: "curious", shrug: "surprised", book: "idle" };
const WAVE_GAP = 6000;

export default function Buddy({
  variant = "menu",
  pose,
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
  variant?: "menu" | "still" | "hero";
  pose?: BuddyPose; // stills only
  open?: boolean;
  say?: string | null;
  target?: HTMLElement | null;
  prop?: BuddyProp;
  cheer?: number; // bump this number to trigger the proud moment
  sleepy?: boolean;
  goggles?: boolean; // lab goggles over the eyes (science)
  quiet?: boolean; // show the bubble with a closed-mouth smile (e.g. the resting greeting)
  className?: string;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const g = (n: string) => `url(#${n}${uid})`;
  const wrap = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const pupils = useRef<SVGGElement>(null);
  const lean = useRef<SVGGElement>(null);
  const lastWave = useRef(0);
  const [near, setNear] = useState(false);
  const [around, setAround] = useState(false);
  const [asleep, setAsleep] = useState(false);
  const [toss, setToss] = useState(0);
  const [proud, setProud] = useState(false);
  const [excited, setExcited] = useState(false);
  const [waving, setWaving] = useState(false);
  const [wear] = useState<Wear | null>(seasonalWear);

  // hero walk-on: idle (waiting to be seen) → walk → wave → live; paused offscreen or in a hidden tab
  const [phase, setPhase] = useState<"idle" | "walk" | "wave" | "live">(variant === "hero" ? "idle" : "live");
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  const still = variant === "still";
  const vb = variant === "menu" ? VIEW.menu : VIEW.full;
  const tracking = !still && phase === "live";

  const aim = (x: number, y: number, fromPointer: boolean) => {
    const el = svg.current;
    const p = pupils.current;
    if (!el || !p) return;
    const r = el.getBoundingClientRect();
    if (!r.width) return;
    const ex = r.left + ((150 - vb[0]) / vb[2]) * r.width;
    const ey = r.top + ((132 - vb[1]) / vb[3]) * r.height;
    const dx = x - ex;
    const dy = y - ey;
    const d = Math.hypot(dx, dy) || 1;
    const k = Math.min(8, d / 25) / d;
    p.style.transform = `translate(${(dx * k).toFixed(2)}px, ${(dy * k).toFixed(2)}px)`;
    const tilt = Math.max(-7, Math.min(7, dx / 45));
    if (lean.current) lean.current.style.transform = `rotate(${tilt.toFixed(2)}deg)`;
    if (!fromPointer) return;
    const scale = r.width / 360; // distances feel the same at every size
    setNear(d < 150 * Math.max(scale, 0.6));
    setAround(d < 420 * Math.max(scale, 0.7));
    const now = Date.now();
    if (d < 300 * Math.max(scale, 0.8) && now - lastWave.current > WAVE_GAP) {
      lastWave.current = now;
      setWaving(true);
    }
  };

  const relax = () => {
    if (pupils.current) pupils.current.style.transform = "";
    if (lean.current) lean.current.style.transform = "";
    setNear(false);
    setAround(false);
  };

  // eyes and body follow the mouse; doze after 8s of stillness while shown
  useEffect(() => {
    if (!tracking || reducedMotion() || coarse()) return undefined;
    let raf = 0;
    let rest = 0;
    let nap = 0;
    const wake = () => {
      setAsleep(false);
      window.clearTimeout(nap);
      if (sleepy && open) nap = window.setTimeout(() => setAsleep(true), 8000);
    };
    const onMove = (e: MouseEvent) => {
      if (pausedRef.current) return;
      wake();
      if (target) return;
      cancelAnimationFrame(raf);
      window.clearTimeout(rest);
      rest = window.setTimeout(relax, 2000);
      raf = requestAnimationFrame(() => aim(e.clientX, e.clientY, true));
    };
    wake();
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(rest);
      window.clearTimeout(nap);
      window.removeEventListener("mousemove", onMove);
    };
  }, [target, open, sleepy, tracking]);

  // lock onto the hovered menu link
  useEffect(() => {
    if (!target || reducedMotion()) return;
    const r = target.getBoundingClientRect();
    aim(r.left + r.width / 2, r.top + r.height / 2, false);
    setNear(false);
  }, [target]);

  // proud moment when a menu link is clicked
  useEffect(() => {
    if (!cheer) return undefined;
    setProud(true);
    const t = window.setTimeout(() => setProud(false), 1300);
    return () => window.clearTimeout(t);
  }, [cheer]);

  // hero: start when seen, pause when offscreen or the tab is hidden
  useEffect(() => {
    if (variant !== "hero" || !wrap.current) return undefined;
    let seen = false;
    const sync = () => {
      const p = !seen || document.hidden;
      pausedRef.current = p;
      setPaused(p);
      if (!p) setPhase((ph) => (ph === "idle" ? "walk" : ph));
    };
    const io = new IntersectionObserver(([e]) => {
      seen = e.isIntersecting;
      sync();
    }, { threshold: 0.2 });
    io.observe(wrap.current.parentElement ?? wrap.current); // the walker starts outside the clipped hero, so watch the hero itself
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [variant]);

  const onAnim = (e: AnimationEvent) => {
    if (e.animationName === "buddyWalkIn") {
      lastWave.current = Date.now();
      setPhase("wave");
      setWaving(true);
    } else if (e.animationName === "buddyWave") {
      setWaving(false);
      if (phase === "wave") setPhase("live");
    }
  };

  const onToss = () => {
    if (still) return;
    setAsleep(false);
    setToss((n) => n + 1);
    setExcited(true);
    window.setTimeout(() => setExcited(false), 1400);
  };

  const talking = !!say && !asleep && (variant !== "hero" || phase === "wave");
  const mouthOpen = talking && !quiet;
  const mood: Mood = still && pose
    ? POSE_MOOD[pose]
    : excited ? "excited" : proud ? "proud" : asleep ? "asleep" : near ? "surprised" : mouthOpen ? "talking" : "idle";
  const curious = !still && !asleep && !near && !excited && !proud && (!!target || around);
  const armPose = still ? `pose-${pose ?? "wave"}` : excited ? "pose-excited" : proud ? "pose-proud" : prop ? "pose-hold" : "";

  const cls = [
    "buddy",
    `buddy-${variant}`,
    open ? "is-open" : "",
    `mood-${mood}`,
    curious || (still && pose === "curious") ? "is-curious" : "",
    waving && !reducedMotion() ? "is-waving" : "",
    phase === "walk" ? "is-walking" : "",
    phase !== "idle" ? "go" : "",
    paused ? "paused" : "",
    armPose,
    className,
  ].join(" ");

  if (variant === "hero" && reducedMotion()) return null;

  return (
    <div ref={wrap} className={cls} aria-hidden="true" onAnimationEnd={onAnim}>
      <div className={`buddy-say ${talking ? "on" : ""}`}>{say}</div>
      {asleep && (
        <div className="buddy-z">
          <span>z</span>
          <span>z</span>
          <span>z</span>
        </div>
      )}
      {toss > 0 && !reducedMotion() && (
        <div className="buddy-confetti" key={toss}>
          {CONFETTI.map((c, i) => (
            <i key={i} style={{ "--c": c, "--x": `${(i - 5.5) * 22 + (i % 3) * 7}px`, "--r": `${i * 47}deg`, "--d": `${(i % 4) * 40}ms` } as CSSProperties} />
          ))}
        </div>
      )}
      <svg ref={svg} viewBox={vb.join(" ")}>
        <defs>
          <radialGradient id={`body${uid}`} cx="0.36" cy="0.3" r="0.78">
            <stop offset="0" stopColor="#FFF9E8" />
            <stop offset="0.42" stopColor="#FBE7B8" />
            <stop offset="0.8" stopColor="#F1CF85" />
            <stop offset="1" stopColor="#D9AE5A" />
          </radialGradient>
          <radialGradient id={`limb${uid}`} cx="0.35" cy="0.3" r="0.9">
            <stop offset="0" stopColor="#FCEBC2" />
            <stop offset="1" stopColor="#E3BC6C" />
          </radialGradient>
          <radialGradient id={`gloss${uid}`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#fff" stopOpacity="0.85" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`eye${uid}`} cx="0.42" cy="0.36" r="0.7">
            <stop offset="0.55" stopColor="#fff" />
            <stop offset="1" stopColor="#E6DFD2" />
          </radialGradient>
          <radialGradient id={`pupil${uid}`} cx="0.38" cy="0.32" r="0.75">
            <stop offset="0" stopColor="#2F7A52" />
            <stop offset="0.55" stopColor="#0D3B22" />
            <stop offset="1" stopColor="#06200F" />
          </radialGradient>
          <radialGradient id={`cheek${uid}`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#F6A7A2" stopOpacity="0.95" />
            <stop offset="1" stopColor="#F6A7A2" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`board${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2A9A5C" />
            <stop offset="0.5" stopColor="#126735" />
            <stop offset="1" stopColor="#0B4725" />
          </linearGradient>
          <linearGradient id={`band${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0B4725" />
            <stop offset="0.45" stopColor="#156B3A" />
            <stop offset="1" stopColor="#082E18" />
          </linearGradient>
          <radialGradient id={`shoe${uid}`} cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stopColor="#FF6B6F" />
            <stop offset="0.5" stopColor="#EB2229" />
            <stop offset="1" stopColor="#A9141A" />
          </radialGradient>
          <radialGradient id={`shadow${uid}`} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#0D3B22" stopOpacity="0.32" />
            <stop offset="1" stopColor="#0D3B22" stopOpacity="0" />
          </radialGradient>
        </defs>

        {variant === "menu" && (
          <g data-placeholder="critter">
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
          </g>
        )}

        {/* soft ground shadow (stays put while the body hops and leans) */}
        <ellipse className="bd-shadow" cx="150" cy="258" rx="62" ry="8" fill={g("shadow")} />

        <g ref={lean} className="bd-lean">
          <g className="bd-hop">
            {/* legs and shoes, behind the body */}
            <g className="bd-leg l">
              <rect x="116" y="214" width="20" height="36" rx="10" fill={g("limb")} stroke="#C9A048" strokeWidth="2" />
              <ellipse cx="122" cy="251" rx="16" ry="8.5" fill={g("shoe")} />
              <ellipse cx="116" cy="248" rx="5" ry="2.4" fill="#fff" opacity="0.55" />
            </g>
            <g className="bd-leg r">
              <rect x="164" y="214" width="20" height="36" rx="10" fill={g("limb")} stroke="#C9A048" strokeWidth="2" />
              <ellipse cx="178" cy="251" rx="16" ry="8.5" fill={g("shoe")} />
              <ellipse cx="172" cy="248" rx="5" ry="2.4" fill="#fff" opacity="0.55" />
            </g>

            {/* arms, behind the body so they grow out of its sides */}
            {!(still && pose === "book") && (
              <>
              <g className="bd-arm l">
                <path d="M82 176 L58 212" stroke="#C9A048" strokeWidth="19" strokeLinecap="round" />
                <path d="M82 176 L58 212" stroke={g("limb")} strokeWidth="15" strokeLinecap="round" />
                <circle cx="57" cy="214" r="10" fill={g("limb")} stroke="#C9A048" strokeWidth="2" />
              </g>
              <g className="bd-arm r">
                <path d="M218 176 L242 212" stroke="#C9A048" strokeWidth="19" strokeLinecap="round" />
                <path d="M218 176 L242 212" stroke={g("limb")} strokeWidth="15" strokeLinecap="round" />
                <circle cx="243" cy="214" r="10" fill={g("limb")} stroke="#C9A048" strokeWidth="2" />
                {/* a gold star for the proud pose, held upright */}
                <g className="bd-star" transform="rotate(104 243 214)">
                  <path d="M243 196 l5 10.5 11.5 1.6 -8.4 8 2 11.4 -10.1 -5.4 -10.1 5.4 2 -11.4 -8.4 -8 11.5 -1.6z" fill="#E2B33C" stroke="#B88A1E" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M238 207 q3 -4 6 -5" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
                </g>
              </g>
              </>
            )}

            <g className="bd-body" onClick={onToss} style={still ? undefined : { pointerEvents: "auto", cursor: "pointer" }}>
              <circle cx="150" cy="150" r="88" fill={g("body")} stroke="#C9A048" strokeWidth="2.5" />
              {/* clay sheen: a soft highlight and a warm bounce light along the bottom */}
              <ellipse cx="114" cy="96" rx="34" ry="18" transform="rotate(-28 114 96)" fill={g("gloss")} />
              <path d="M84 196 Q150 246 216 196" fill="none" stroke="#FFF1CC" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

              <g className="bd-face">
                {/* cheeks */}
                <ellipse className="bd-cheek" cx="104" cy="162" rx="13" ry="9" fill={g("cheek")} />
                <ellipse className="bd-cheek" cx="196" cy="162" rx="13" ry="9" fill={g("cheek")} />

                {/* brows: raised for curious (one) and surprised (both) */}
                <g className="bd-brows" fill="none" stroke="#8A6A12" strokeWidth="4" strokeLinecap="round">
                  <path className="br l" d="M112 104 Q124 98 136 104" />
                  <path className="br r" d="M162 104 Q174 98 186 104" />
                </g>

                {/* eyes */}
                <g className="bd-eyes blink">
                  <circle cx="124" cy="132" r="20" fill={g("eye")} stroke="#C9A048" strokeWidth="2" />
                  <circle cx="174" cy="132" r="20" fill={g("eye")} stroke="#C9A048" strokeWidth="2" />
                  <g ref={pupils} className="mb-pupils">
                    <circle cx="124" cy="133" r="10" fill={g("pupil")} />
                    <circle cx="174" cy="133" r="10" fill={g("pupil")} />
                    <circle cx="128" cy="128" r="3.6" fill="#fff" />
                    <circle cx="178" cy="128" r="3.6" fill="#fff" />
                    <circle cx="121" cy="137" r="1.6" fill="#fff" opacity="0.85" />
                    <circle cx="171" cy="137" r="1.6" fill="#fff" opacity="0.85" />
                  </g>
                  <g className="bd-lids">
                    <path d="M104 132 A20 20 0 0 1 144 132 Z" fill="#F7DDA4" stroke="#C9A048" strokeWidth="2" />
                    <path d="M154 132 A20 20 0 0 1 194 132 Z" fill="#F7DDA4" stroke="#C9A048" strokeWidth="2" />
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
                {/* happy squint eyes (proud, excited) */}
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
                  <path className="bd-mouth m-curious" d="M138 172 Q150 178 164 168" fill="none" stroke="#0D3B22" strokeWidth="5" strokeLinecap="round" />
                </g>
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

            {/* an open book held in front for the "book" pose (Why Shekinah, faith and character) */}
            {still && pose === "book" && (
              <g transform="translate(150 212) rotate(-4)">
                <path d="M-36 -18 Q-18 -26 0 -16 L0 20 Q-18 11 -36 18 Z" fill="#fff" stroke="#126735" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M36 -18 Q18 -26 0 -16 L0 20 Q18 11 36 18 Z" fill="#DDEBDF" stroke="#126735" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M-29 -8 L-7 -4 M-29 0 L-7 4 M-29 8 L-14 10 M7 -4 L29 -8 M7 4 L29 0" stroke="#126735" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M0 -16 L0 24" stroke="#EB2229" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="-38" cy="6" r="9" fill={g("limb")} stroke="#C9A048" strokeWidth="2" />
                <circle cx="38" cy="6" r="9" fill={g("limb")} stroke="#C9A048" strokeWidth="2" />
              </g>
            )}

            {/* the hat (tossed on click) */}
            <g className={`bd-hat ${toss ? "tossed" : ""}`} key={toss}>
              <g transform="rotate(-8 150 62)">
                <path d="M122 72 L122 88 Q150 100 178 88 L178 72 L150 84 Z" fill={g("band")} />
                <path d="M96 62 L150 40 L204 62 L150 84 Z" fill={g("board")} stroke="#0B4725" strokeWidth="2" strokeLinejoin="round" />
                <path d="M110 60 L150 44 L172 52" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
                <circle cx="150" cy="62" r="4" fill="#0B4725" />
                <path d="M150 62 L194 72 L194 96" fill="none" stroke="#EB2229" strokeWidth="3" strokeLinecap="round" />
                <circle cx="194" cy="100" r="6" fill={g("shoe")} />
                <circle cx="192" cy="98" r="1.8" fill="#fff" opacity="0.7" />
              </g>
            </g>
          </g>
        </g>

        {/* a question mark floating by the curious pose */}
        {still && pose === "curious" && (
          <text className="bd-q" x="236" y="86" fontFamily="Parkinsans, sans-serif" fontWeight="700" fontSize="40" fill="#EB2229">?</text>
        )}

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
