import { useEffect, useRef, useState } from "react";

/* Sticky pill of in-page links; highlights the section you're reading.
   On phones it becomes a bottom bar that appears once you scroll in and steps aside for the footer. */
export default function Jump({ items }: { items: { label: string; id: string }[] }) {
  const [on, setOn] = useState(items[0]?.id);
  const [show, setShow] = useState(false);
  const row = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (en) => en.forEach((e) => e.isIntersecting && setOn(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);
  useEffect(() => {
    const update = () => {
      const foot = document.querySelector(".panel");
      const nearFoot = foot ? foot.getBoundingClientRect().top < window.innerHeight - 40 : false;
      setShow(window.scrollY > 320 && !nearFoot);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  /* keep the current tab in view inside the scrolling row */
  useEffect(() => {
    const el = row.current;
    const a = el?.querySelector<HTMLElement>("a.on");
    if (!el || !a || el.scrollWidth <= el.clientWidth) return;
    el.scrollTo({ left: a.offsetLeft - (el.clientWidth - a.offsetWidth) / 2, behavior: "smooth" });
  }, [on]);
  return (
    <div className={`jump ${show ? "is-shown" : ""}`}>
      <nav className="jump-in" aria-label="On this page" ref={row}>
        {items.map((i) => (
          <a key={i.id} href={`#${i.id}`} className={on === i.id ? "on" : ""} aria-current={on === i.id ? "location" : undefined}>
            {i.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
