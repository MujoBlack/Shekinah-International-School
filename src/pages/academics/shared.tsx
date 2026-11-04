import { Link } from "react-router-dom";
import { vi } from "@/components/site/ui";

export const tints = ["t-mint", "t-butter", "t-blush"];

export interface StageCard {
  t: string;
  p: string;
  to: string;
  img: string;
  alt: string;
  icon: string;
  tint: string;
  meta: string;
  pos?: string;
}

/* Photo-top link cards, same language as School Life "Sport & play". */
export function StageCards({ items }: { items: StageCard[] }) {
  return (
    <div className={`play cols-${items.length}`}>
      {items.map((c, i) => (
        <Link to={c.to} className={`pcard rv ${c.tint}`} key={c.t} style={vi(i)}>
          <div className="pph">
            <img src={c.img} alt={c.alt} loading="lazy" style={c.pos ? { objectPosition: c.pos } : undefined} />
            <span className="go" aria-hidden="true"><i className="ri-arrow-right-up-line" /></span>
          </div>
          <div className="pbody">
            <span className="pic" aria-hidden="true"><i className={c.icon} /></span>
            <span className="meta">{c.meta}</span>
            <h3 className="s-h3">{c.t}</h3>
            <p>{c.p}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* "Next" links at the foot of each programme page, so readers move through the section. */
export function MoreAcademics({ current }: { current: string }) {
  const all = [
    { to: "/academics", label: "Academics overview" },
    { to: "/academics/curriculum", label: "Our Curriculum" },
    { to: "/academics/early-years", label: "Early Years" },
    { to: "/academics/primary", label: "Primary" },
  ].filter((l) => l.to !== current);
  return (
    <nav className="more-acad rv" aria-label="More about academics">
      <span className="label">Keep exploring</span>
      <div>
        {all.map((l) => (
          <Link key={l.to} to={l.to} className="chip-link">
            {l.label} <i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
