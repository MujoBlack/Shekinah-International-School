import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { holidayCamp, tripsImages } from "@/mocks/schoolLife";

const strip = [...tripsImages, ...tripsImages];

export default function TripsSection() {
  return (
    <section id="trips" className="mt-20 scroll-mt-28 md:mt-28">
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow tone="butter">Trips &amp; Experiences</Eyebrow>
            <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[44px]">
              Every term, we go <span className="highlight-swipe">somewhere</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-foreground-500 md:text-[16px]">
            Every term, children go on a field trip linked to a unit they are learning.
          </p>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="relative mt-9 overflow-hidden md:mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background-100 to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background-100 to-transparent md:w-24" />

          <div className="flex w-max gap-3 drift-track md:gap-4">
            {strip.map((item, index) => (
              <figure
                key={`${item.label}-${index}`}
                className="group relative h-[190px] w-[260px] shrink-0 overflow-hidden rounded-[20px] md:h-[250px] md:w-[340px] md:rounded-[24px]"
                aria-hidden={index >= tripsImages.length}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  title={`${item.label} school trip at Shekinah International School`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 via-transparent to-transparent" />
                <figcaption className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-background-50/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-primary-800 md:text-[11px]">
                    <i className="ri-map-pin-line text-[12px] leading-none" />
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-4 w-full max-w-[1320px] px-4 md:px-8">
        <Reveal delay={120}>
          <article className="group grid grid-cols-1 overflow-hidden rounded-[22px] border border-background-200 bg-background-50 md:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col justify-center p-6 md:p-9">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary-100 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-secondary-900">
                <i className={`${holidayCamp.icon} text-[13px] leading-none`} />
                Holiday Camps
              </span>
              <h3 className="mt-3 font-heading text-[24px] font-normal leading-snug text-foreground-950 md:text-[30px]">
                {holidayCamp.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground-600 md:text-[16px]">
                {holidayCamp.text}
              </p>
            </div>
            <div className="relative h-[200px] w-full overflow-hidden md:h-full md:min-h-[220px]">
              <img
                src={holidayCamp.image}
                alt={holidayCamp.title}
                title="Holiday camps at Shekinah International School"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}