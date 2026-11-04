import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";

/* Where each call to action goes. "Book a School Visit" and "Contact" are deliberately different pages. */
export const VISIT = "/visit";
export const CONTACT = "/contact";

export const SITE = {
  address: "Plot 1 Alex Ojera Road, Off Bugonga Road, Bugonga, Entebbe, Uganda",
  phones: ["0755 469134", "0772 469134", "0312 112421"],
  email: "info@shekinahinternational.ac.ug",
  whatsapp: "https://wa.me/256755469134",
};

export const tel = (n: string) => `tel:+256${n.replace(/\s/g, "").replace(/^0/, "")}`;

type BtnVariant = "red" | "white" | "ghost" | "pine" | "line";

interface BtnProps {
  to?: string;
  href?: string;
  variant?: BtnVariant;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

/* Pill button. The arrow dot swaps its arrow on hover. */
export function Btn({ to, href, variant = "red", arrow = false, children, className = "", type = "button", disabled, onClick }: BtnProps) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <span className="dot" aria-hidden="true">
          <i className="ri-arrow-right-line" />
          <i className="ri-arrow-right-line" />
        </span>
      )}
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  if (href)
    return (
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {inner}
    </button>
  );
}

/* Numbered mono label, e.g. "01 · Who we are" */
export function Label({ n, children, className = "" }: { n?: string; children: ReactNode; className?: string }) {
  return (
    <span className={`label ${className}`}>
      {n && <b>{n}</b>}
      {n && "·"} {children}
    </span>
  );
}

/* Splits a headline into words that rise in one after another. */
export function Rise({ text }: { text: string }) {
  return (
    <span className="rise">
      {text.split(" ").map((w, i) => (
        <span key={i} style={{ "--i": i } as CSSProperties}>
          {w}&nbsp;
        </span>
      ))}
    </span>
  );
}

/* Adds .is-in to .rv / .path / [data-count] elements as they scroll into view. Re-runs per page. */
export function useRevealAll(key: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv, .path, [data-count]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const countUp = (el: HTMLElement) => {
      const end = Number(el.dataset.count);
      if (reduce || !end) return;
      const start = el.dataset.from ? Number(el.dataset.from) : 0;
      const t0 = performance.now();
      const dur = 1400;
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - k, 3);
        el.textContent = String(Math.round(start + (end - start) * e));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.count) countUp(el);
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}

/* Horizontal slider with arrow buttons and drag-to-scroll. */
export function Slider({ children, className = "", arrowsTarget }: { children: ReactNode; className?: string; arrowsTarget?: (api: SliderApi) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    let down = false;
    let x0 = 0;
    let s0 = 0;
    let moved = false;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      moved = false;
      x0 = e.clientX;
      s0 = el.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - x0;
      if (Math.abs(dx) > 5) {
        moved = true;
        el.classList.add("is-drag");
      }
      el.scrollLeft = s0 - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      el.classList.remove("is-drag");
    };
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClick, true);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("click", onClick, true);
    };
  }, []);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const w = card ? card.offsetWidth + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  useEffect(() => {
    arrowsTarget?.({ prev: () => go(-1), next: () => go(1), ...edges });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edges.start, edges.end]);

  return (
    <div ref={ref} className={`slider ${className}`}>
      {children}
    </div>
  );
}

export interface SliderApi {
  prev: () => void;
  next: () => void;
  start: boolean;
  end: boolean;
}

export function Arrows({ api }: { api: SliderApi | null }) {
  return (
    <div className="arrows">
      <button type="button" aria-label="Previous" onClick={api?.prev} disabled={!api || api.start}>
        <i className="ri-arrow-left-line" />
      </button>
      <button type="button" aria-label="Next" onClick={api?.next} disabled={!api || api.end}>
        <i className="ri-arrow-right-line" />
      </button>
    </div>
  );
}

/* Accordion. The plus turns into a minus as an item opens. */
export function Faq({ items, firstOpen = true }: { items: { q: string; a: ReactNode }[]; firstOpen?: boolean }) {
  const [open, setOpen] = useState<number | null>(firstOpen ? 0 : null);
  return (
    <div className="faq">
      {items.map((it, i) => {
        const on = open === i;
        return (
          /* The reveal class sits on a wrapper React never re-renders, so opening an item can't wipe its "is-in" state. */
          <div key={it.q} className="rv" style={{ "--i": i } as CSSProperties}>
            <div className={`faq-item ${on ? "open" : ""}`}>
              <button type="button" aria-expanded={on} onClick={() => setOpen(on ? null : i)}>
                <span className="fn" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="fq">{it.q}</span>
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="faq-body" role="region">
                <div>
                  <p>{it.a}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Infinite marquee, content repeated so the loop is seamless. */
export function Marquee({ items, icon = "ri-sparkling-2-fill", className = "", reverse = false }: { items: string[]; icon?: string; className?: string; reverse?: boolean }) {
  const row = (
    <div className="track" aria-hidden="true">
      {[...items, ...items].map((t, i) => (
        <span className="item" key={i}>
          {t}
          <i className={icon} />
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee ${reverse ? "rev" : ""} ${className}`}>
      <span className="sr-only">{items.join(", ")}</span>
      {row}
      {row}
    </div>
  );
}

export const vi = (i: number) => ({ "--i": i }) as CSSProperties;
