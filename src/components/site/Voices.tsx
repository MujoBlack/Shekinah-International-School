import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Label, VISIT, vi } from "./ui";

/* Parent voices: two counter-scrolling rows of quote cards. */
export default function Voices({ n = "06", title }: { n?: string; title?: ReactNode }) {
  const quotes = [
    { q: "Within one term Shekinah felt like home. Our daughter is known, encouraged and happy to go to school each morning.", who: "Parent · Year 2", i: "A" },
    { q: "The teachers notice the small things, tell us exactly where our son is thriving, and act on it.", who: "Parents · Year 4", i: "M" },
    { q: "Real warmth with high expectations. Our children have made friends from all over the world.", who: "Parent · Reception", i: "S" },
    { q: "We moved countries mid-year and our boys settled in within a week. That says everything.", who: "Parents · Year 1 & Year 3", i: "D" },
    { q: "She comes home singing songs from music class and explaining experiments at dinner.", who: "Parent · Year 5", i: "R" },
    { q: "Small classes, kind teachers and a gate where everyone says good morning by name.", who: "Parent · Kindergarten 2", i: "J" },
  ];
  const tones = ["paper", "butter", "mint", "blush"];
  const row = (items: typeof quotes, offset: number) =>
    [...items, ...items, ...items, ...items].map((v, k) => (
      <figure className={`vq ${tones[(k + offset) % 4]}`} key={k} aria-hidden={k >= items.length}>
        <span className="mark" aria-hidden="true">“</span>
        <span className="st" aria-label="5 stars">★★★★★</span>
        <blockquote>{v.q}</blockquote>
        <figcaption>
          <span className="av" aria-hidden="true">{v.i}</span>
          {v.who}
        </figcaption>
      </figure>
    ));
  return (
    <section className="voices on-dark">
      <div className="wrap voices-head">
        <div>
          <Label n={n} className="rv">Parent voices</Label>
          <h2 className="s-serif rv" style={vi(1)}>
            {title ?? (
              <>
                Why <span className="hl">families</span> choose Shekinah
              </>
            )}
          </h2>
        </div>
        <div className="spin-badge rv rv-scale" style={vi(2)} aria-label="Our values: faith, inclusion, curiosity">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="vb-c" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
            <text><textPath href="#vb-c" textLength="286" lengthAdjust="spacing">FAITH · INCLUSION · CURIOSITY · </textPath></text>
          </svg>
          <i className="ri-heart-3-fill" />
        </div>
      </div>
      <div className="vrows">
        <div className="vrow"><div className="vtrack">{row(quotes.slice(0, 3), 0)}</div></div>
        <div className="vrow rev"><div className="vtrack">{row(quotes.slice(3), 2)}</div></div>
      </div>
      <div className="wrap voices-foot">
        {/* TODO before launch: these quotes are placeholders. Replace with real parent testimonials (with permission). */}
        <span />
        <Link to={VISIT} className="btn btn-white">
          Book a School Visit
          <span className="dot" aria-hidden="true"><i className="ri-arrow-right-line" /><i className="ri-arrow-right-line" /></span>
        </Link>
      </div>
    </section>
  );
}

