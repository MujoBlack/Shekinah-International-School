import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Btn, Label, VISIT, vi } from "./ui";

/* Building blocks for the programme pages (Early Years, Primary) and the curriculum page.
   Section order follows the Ivy Kids programme template Calvin chose. */

const tintCls = ["t-mint", "t-butter", "t-blush", "t-sage"];

export function ProgramHero({ crumb, eyebrow, title, text, images, cta = "Book a School Visit" }: { crumb: string; eyebrow: string; title: string; text: string; images: { src: string; alt: string; pos?: string }[]; cta?: string }) {
  return (
    <header className="pghero">
      <div className="wrap center">
        <span className="crumbs fade-up" style={{ ["--d" as string]: "0.1s" }}>
          <Link to="/">Home</Link> <i className="ri-arrow-right-s-line" aria-hidden="true" /> <Link to="/academics">Academics</Link>{" "}
          <i className="ri-arrow-right-s-line" aria-hidden="true" /> {crumb}
        </span>
        <span className="pg-eyebrow fade-up" style={{ ["--d" as string]: "0.2s" }}>{eyebrow}</span>
        <h1 className="s-h1 fade-up" style={{ ["--d" as string]: "0.3s" }}>{title}</h1>
        <p className="fade-up" style={{ ["--d" as string]: "0.45s" }}>{text}</p>
        <div className="fade-up" style={{ ["--d" as string]: "0.6s", marginTop: 26 }}>
          <Btn to={VISIT} variant="red" arrow>{cta}</Btn>
        </div>
      </div>
      <div className="pg-strip">
        {images.map((im, i) => (
          <div className="fade-up" key={im.src} style={{ ["--d" as string]: `${0.5 + i * 0.12}s` }}>
            <img src={im.src} alt={im.alt} style={im.pos ? { objectPosition: im.pos } : undefined} fetchPriority={i === 1 ? "high" : undefined} />
          </div>
        ))}
      </div>
    </header>
  );
}

export function DetailsIntro({ id, title, children, ages, details }: { id?: string; title: string; children: ReactNode; ages: string; details: { k: string; v: string; confirm?: boolean }[] }) {
  return (
    <section id={id} className="sec pg-intro">
      <div className="wrap pg-two">
        <div>
          <h2 className="s-h2 rv">{title}</h2>
          <div className="pg-copy rv" style={vi(1)}>{children}</div>
        </div>
        <aside className="pg-details rv rv-scale" style={vi(2)}>
          <span className="age">{ages}</span>
          <span className="label" style={{ display: "block", marginTop: 18 }}>Programme details</span>
          <dl>
            {details.map((d) => (
              <div key={d.k}>
                <dt>{d.k}</dt>
                <dd>
                  {d.v}
                  {d.confirm && <span className="note-flag" style={{ marginTop: 6 }}><i className="ri-information-line" /> to confirm</span>}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

export function ApproachList({ id, n, title, text, heading, items }: { id?: string; n: string; title: string; text: string; heading: string; items: { icon: string; t: string; p: string }[] }) {
  return (
    <section id={id} className="sec sec-top0">
      <div className="wrap pg-two">
        <div className="pg-sticky">
          <Label n={n} className="rv">Approach</Label>
          <h2 className="s-h2 rv" style={vi(1)}>{title}</h2>
          <p className="pg-copy rv" style={vi(2)}>{text}</p>
        </div>
        <div>
          <h3 className="s-h4 rv">{heading}</h3>
          <ul className="pg-list">
            {items.map((it, i) => (
              <li className="rv" key={it.t} style={vi(i)}>
                <span className={`pg-ic ${tintCls[i % 4]}`} aria-hidden="true"><i className={it.icon} /></span>
                <div>
                  <h4>{it.t}</h4>
                  <p>{it.p}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Indicators({ id, n, title, text, bullets, image, alt, tone = "mint", after }: { id?: string; n: string; title: string; text: string; bullets: ReactNode[]; image: string; alt: string; tone?: string; after?: ReactNode }) {
  return (
    <section id={id} className={`band ${tone}`}>
      <div className="wrap band-grid">
        <div>
          <span className="chip rv">{n} · What your child will learn</span>
          <h2 className="s-h2 rv" style={vi(1)}>{title}</h2>
          <p className="copy rv" style={vi(2)}>{text}</p>
          <ul className="checks rv" style={vi(3)}>
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {after}
        </div>
        <div className="pg-photo rv rv-scale" style={vi(2)}>
          <img src={image} alt={alt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function NextStep({ id, n, title, text, chain, current, cards, children }: { id?: string; n: string; title: string; text: string; chain: { label: string; to?: string }[]; current: string[]; cards: { icon: string; t: string; p: string; id?: string }[]; children?: ReactNode }) {
  return (
    <section id={id} className="sec">
      <div className="wrap center">
        <Label n={n} className="rv">What sets us apart</Label>
        <h2 className="s-h2 rv" style={vi(1)}>{title}</h2>
        <p className="rv s-muted" style={{ ...vi(2), maxWidth: 620, margin: "18px auto 0" }}>{text}</p>
        <div className="pg-chain rv" style={vi(3)}>
          {chain.map((c, i) => (
            <span key={c.label}>
              {i > 0 && <i className="ri-arrow-right-line" aria-hidden="true" />}
              {c.to && !current.includes(c.label) ? <Link to={c.to}>{c.label}</Link> : <b className={current.includes(c.label) ? "here" : ""}>{c.label}</b>}
            </span>
          ))}
        </div>
        {children}
        <div className="pg-cards">
          {cards.map((c, i) => (
            <div id={c.id} className={`pg-card stage-anchor rv ${tintCls[i % 4]}`} key={c.t} style={vi(i)}>
              <span className="pg-ic" aria-hidden="true"><i className={c.icon} /></span>
              <h3 className="s-h4">{c.t}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Enrichment({ id, n, title, text, items, media }: { id?: string; n: string; title: string; text: string; items: { t: string; p: string }[]; media: ReactNode }) {
  return (
    <section id={id} className="sec sec-top0">
      <div className="wrap">
        <div className="center">
          <Label n={n} className="rv">Enrichment</Label>
          <h2 className="s-h2 rv" style={vi(1)}>{title}</h2>
          <p className="rv s-muted" style={{ ...vi(2), maxWidth: 640, margin: "18px auto 0" }}>{text}</p>
        </div>
        <div className="pg-two pg-enrich">
          <ol className="pg-steps">
            {items.map((it, i) => (
              <li className="rv" key={it.t} style={vi(i)}>
                <span className={`num ${tintCls[i % 4]}`}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="s-h4">{it.t}</h3>
                  <p>{it.p}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="rv rv-scale" style={vi(1)}>{media}</div>
        </div>
      </div>
    </section>
  );
}

export function Moments({ id, n, label = "A day in the life", title, text, items, note }: { id?: string; n: string; label?: string; title: string; text: ReactNode; items: { tag: string; t: string; p: string; img: string }[]; note?: string }) {
  const [k, setK] = useState(0);
  const cur = items[k];
  const go = (d: number) => setK((k + d + items.length) % items.length);
  return (
    <section id={id} className="pg-moments">
      <div className="wrap center">
        <Label n={n} className="rv">{label}</Label>
        <h2 className="s-h2 rv" style={vi(1)}>{title}</h2>
        <div className="rv s-muted" style={{ ...vi(2), maxWidth: 640, margin: "18px auto 0" }}>{text}</div>
      </div>
      <div className="pg-ticks rv" role="tablist" aria-label={title}>
        {items.map((it, i) => (
          <button type="button" role="tab" aria-selected={i === k} key={it.tag} className={i === k ? "on" : ""} onClick={() => setK(i)}>
            <span className="dot" aria-hidden="true" />
            <span>{it.tag}</span>
          </button>
        ))}
      </div>
      <div className="pg-stage">
        <span className="pg-ghost" aria-hidden="true">{cur.tag}</span>
        <button type="button" className="icon-btn pg-arrow l" aria-label="Previous" onClick={() => go(-1)}><i className="ri-arrow-left-line" /></button>
        <article className="pg-moment" key={k}>
          <div>
            <span className="label">{String(k + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <h3 className="s-h3">{cur.t}</h3>
            <p>{cur.p}</p>
          </div>
          <img src={cur.img} alt="" />
        </article>
        <button type="button" className="icon-btn pg-arrow r" aria-label="Next" onClick={() => go(1)}><i className="ri-arrow-right-line" /></button>
      </div>
      {note && (
        <p className="center" style={{ marginTop: 22 }}>
          <span className="note-flag"><i className="ri-information-line" /> {note}</span>
        </p>
      )}
    </section>
  );
}

export function SafetySplit({ id, title, children, image, alt, note, cta }: { id?: string; title: string; children: ReactNode; image: string; alt: string; note?: string; cta?: { label: string; to: string } }) {
  return (
    <section id={id} className="sec">
      <div className="wrap pg-two pg-center">
        <div>
          <h2 className="s-h2 rv">{title}</h2>
          <div className="pg-copy rv" style={vi(1)}>{children}</div>
          {note && <p className="note-flag rv"><i className="ri-information-line" /> {note}</p>}
          {cta && (
            <div className="rv" style={{ ...vi(2), marginTop: 26 }}>
              <Btn to={cta.to} variant="red" arrow>{cta.label}</Btn>
            </div>
          )}
        </div>
        <div className="pg-photo rv rv-scale" style={vi(1)}>
          <img src={image} alt={alt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function Partners({ id, n, title, text, cards, quote, label = "Partners in their journey", note }: { id?: string; n: string; title: string; text: string; cards: { icon: string; t: string; p: string }[]; quote: { text: string; by: string; img: string; alt: string }; label?: string; note?: string }) {
  return (
    <section id={id} className="sec sec-top0">
      <div className="wrap">
        <div className="center">
          <Label n={n} className="rv">{label}</Label>
          <h2 className="s-h2 rv" style={vi(1)}>{title}</h2>
          <p className="rv s-muted" style={{ ...vi(2), maxWidth: 620, margin: "18px auto 0" }}>{text}</p>
        </div>
        <div className="pg-cards">
          {cards.map((c, i) => (
            <div className={`pg-card big rv ${tintCls[i % 4]}`} key={c.t} style={vi(i)}>
              <h3 className="s-h4">{c.t}</h3>
              <span className="pg-ic xl" aria-hidden="true"><i className={c.icon} /></span>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
        {note && (
          <p className="center" style={{ marginTop: 18 }}>
            <span className="note-flag"><i className="ri-information-line" /> {note}</span>
          </p>
        )}
        <figure className="pg-quote rv rv-scale">
          <img src={quote.img} alt={quote.alt} loading="lazy" />
          <blockquote>
            <p>“{quote.text}”</p>
            <figcaption>{quote.by}</figcaption>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
