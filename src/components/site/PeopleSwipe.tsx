import { useEffect, useRef, useState } from "react";

/* Phones only: a swipeable row of photos with dots (the desktop grid is hidden at that width). */
export default function PeopleSwipe({ photos }: { photos: { src: string; alt: string; caption?: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const onScroll = () => {
      const kids = Array.from(el.children) as HTMLElement[];
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      kids.forEach((c, k) => {
        if (Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid) < Math.abs(kids[best].offsetLeft + kids[best].offsetWidth / 2 - mid)) best = k;
      });
      setAt(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  const go = (k: number) => {
    const el = ref.current;
    const c = el?.children[k] as HTMLElement | undefined;
    if (el && c) el.scrollTo({ left: c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2, behavior: "smooth" });
  };
  return (
    <div className="pswipe" role="region" aria-roledescription="carousel" aria-label="Photos of our school family">
      <div className="ps-track" ref={ref}>
        {photos.map((p, k) => (
          <figure key={p.src} aria-label={`${k + 1} of ${photos.length}`}>
            <img src={p.src} alt={p.alt} loading="lazy" />
            {p.caption && <figcaption>{p.caption}</figcaption>}
          </figure>
        ))}
      </div>
      <div className="vs-dots ps-dots">
        {photos.map((p, k) => (
          <button type="button" key={p.src} className={k === at ? "on" : ""} aria-label={`Show photo ${k + 1}`} aria-current={k === at} onClick={() => go(k)} />
        ))}
      </div>
    </div>
  );
}
