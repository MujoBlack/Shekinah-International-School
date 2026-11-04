import { useEffect, useState } from "react";

/* Sticky pill of in-page links; highlights the section you're reading. */
export default function Jump({ items }: { items: { label: string; id: string }[] }) {
  const [on, setOn] = useState(items[0]?.id);
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
  return (
    <div className="jump">
      <nav className="jump-in" aria-label="On this page">
        {items.map((i) => (
          <a key={i.id} href={`#${i.id}`} className={on === i.id ? "on" : ""}>
            {i.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
