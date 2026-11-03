import { useCallback, useEffect, useState } from "react";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { galleryFilters, galleryImages } from "@/mocks/schoolLife";

export default function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const visible = filter === "All" ? galleryImages : galleryImages.filter((item) => item.category === filter);

  const close = useCallback(() => setActive(null), []);

  const step = useCallback(
    (direction: number) => {
      setActive((current) => {
        if (current === null) return current;
        const next = (current + direction + visible.length) % visible.length;
        return next;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    if (active === null) return undefined;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active, close, step]);

  const current = active !== null ? visible[active] : null;

  return (
    <section id="gallery" className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow tone="mint">Gallery</Eyebrow>
          <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[44px]">
            Moments at <span className="highlight-swipe">Shekinah</span>
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-foreground-500 md:text-[16px]">
          Tap any photo to see it larger.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-7 flex flex-wrap gap-2">
          {galleryFilters.map((item) => {
            const isActive = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setFilter(item);
                  setActive(null);
                }}
                className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 md:text-[14px] ${
                  isActive
                    ? "bg-primary-500 text-background-50"
                    : "border border-background-300 bg-background-50 text-foreground-700 hover:border-primary-400 hover:text-primary-700"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-7 columns-2 gap-3 md:mt-9 md:columns-3 md:gap-4">
        {visible.map((item, index) => (
          <figure key={`${item.label}-${item.image}`} className="mb-3 break-inside-avoid md:mb-4">
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Open photo: ${item.label}`}
              className="group relative block w-full cursor-pointer overflow-hidden rounded-[18px] md:rounded-[22px]"
            >
              <img
                src={item.image}
                alt={item.label}
                title={`${item.label} at Shekinah International School`}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/5 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background-50/90 text-primary-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <i className="ri-expand-diagonal-line text-[14px] leading-none" />
              </span>
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                <span className="truncate rounded-full bg-background-50/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-primary-800 md:text-[11px]">
                  {item.label}
                </span>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-950/92 px-4 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo"
            className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-background-50/30 text-background-50 transition-colors hover:bg-background-50/15 md:right-8 md:top-8"
          >
            <i className="ri-close-line text-xl leading-none" />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-background-50/30 text-background-50 transition-colors hover:bg-background-50/15 md:left-8 md:h-12 md:w-12"
          >
            <i className="ri-arrow-left-line text-xl leading-none" />
          </button>

          <figure className="max-h-full w-full max-w-[900px]" onClick={(event) => event.stopPropagation()}>
            <img
              src={current.image}
              alt={current.label}
              title={current.label}
              className="mx-auto max-h-[74vh] w-auto rounded-[18px] object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-heading text-lg text-background-50">{current.label}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-background-50/60">
                {current.category} · {active !== null ? active + 1 : 0} of {visible.length}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-background-50/30 text-background-50 transition-colors hover:bg-background-50/15 md:right-8 md:h-12 md:w-12"
          >
            <i className="ri-arrow-right-line text-xl leading-none" />
          </button>
        </div>
      )}
    </section>
  );
}