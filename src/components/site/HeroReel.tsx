import { useEffect, useRef, useState } from "react";
import { poster, vid } from "./Video";

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Home hero: the video plays once, then a few photos crossfade, then back to the video.
   Everything pauses while the hero is off-screen or the tab is hidden. Photos load only after the video starts. */
export default function HeroReel({ name, photos, hold = 4000 }: { name: string; photos: string[]; hold?: number }) {
  const box = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [step, setStep] = useState(-1); // -1 = video, 0..n-1 = photo index
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(true);
  const [still] = useState(reduced);

  /* active only while the hero is on screen and the tab is visible */
  useEffect(() => {
    const el = box.current;
    if (!el) return undefined;
    let onScreen = true;
    const sync = () => setActive(onScreen && document.visibilityState === "visible");
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting;
      sync();
    }, { threshold: 0.15 });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  /* video plays only during its turn and while active */
  useEffect(() => {
    const v = video.current;
    if (!v || still) return;
    if (step === -1 && active) v.play().catch(() => undefined);
    else v.pause();
  }, [step, active, still]);

  /* photo timer: runs only while active; leaving and coming back restarts the current photo's time */
  useEffect(() => {
    if (step < 0 || !active) return undefined;
    const t = window.setTimeout(() => {
      if (step + 1 < photos.length) setStep(step + 1);
      else {
        if (video.current) video.current.currentTime = 0;
        setStep(-1);
      }
    }, hold);
    return () => window.clearTimeout(t);
  }, [step, active, hold, photos.length]);

  /* fetch the photos in the background once the video is playing, so first load stays light */
  const preload = () => {
    if (ready) return;
    let left = photos.length;
    photos.forEach((src) => {
      const im = new Image();
      im.onload = im.onerror = () => {
        left -= 1;
        if (left === 0) setReady(true);
      };
      im.src = src;
    });
  };

  return (
    <div className="reel" ref={box} aria-hidden="true">
      <video
        ref={video}
        src={vid(name)}
        poster={poster(name)}
        muted
        playsInline
        preload="auto"
        autoPlay={!still}
        onPlaying={preload}
        onEnded={() => {
          if (ready) setStep(0);
          else video.current?.play().catch(() => undefined);
        }}
      />
      {ready &&
        photos.map((src, k) => (
          <img key={src} src={src} alt="" className={step === k ? "on" : ""} style={{ animationPlayState: active ? "running" : "paused" }} />
        ))}
    </div>
  );
}
