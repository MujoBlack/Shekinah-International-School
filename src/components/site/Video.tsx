import { useEffect, useRef, useState } from "react";

const base = __BASE_PATH__.replace(/\/$/, "");
export const vid = (name: string) => `${base}/videos/${name}.mp4`;
export const poster = (name: string) => `${base}/videos/${name}-poster.jpg`;

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Short silent loop: plays only while on screen, stays on its poster for reduced-motion users. */
export function LoopVideo({ name, className = "", fallback, label, eager = false }: { name: string; className?: string; fallback?: string; label?: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || reduced()) return undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => undefined);
        else v.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className={className}
      src={vid(name)}
      poster={fallback ?? poster(name)}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "metadata"}
      autoPlay={eager && !reduced()}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}

/* Long-form film in a lightbox with full controls. */
export function FilmButton({ name = "science-reel", children = "Watch our science film", className = "" }: { name?: string; children?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <button type="button" className={`film-btn ${className}`} onClick={() => setOpen(true)}>
        <span className="pl" aria-hidden="true"><i className="ri-play-fill" /></span>
        {children}
      </button>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={children} onClick={() => setOpen(false)}>
          <div className="lb-in" onClick={(e) => e.stopPropagation()}>
            <video src={vid(name)} poster={poster(name)} controls autoPlay playsInline />
            <button type="button" className="icon-btn lb-x" aria-label="Close video" onClick={() => setOpen(false)}>
              <i className="ri-close-line" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* Inline long-form player with a big play button over the poster. */
export function FilmCard({ name = "science-reel", title, text }: { name?: string; title: string; text?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  return (
    <figure className={`film-card ${playing ? "is-playing" : ""}`}>
      <video
        ref={ref}
        src={vid(name)}
        poster={poster(name)}
        playsInline
        preload="metadata"
        controls={playing}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      {!playing && (
        <button
          type="button"
          className="film-play"
          onClick={() => {
            ref.current?.play();
          }}
        >
          <span className="pl" aria-hidden="true"><i className="ri-play-fill" /></span>
          <span>
            <b>{title}</b>
            {text && <small>{text}</small>}
          </span>
        </button>
      )}
    </figure>
  );
}
