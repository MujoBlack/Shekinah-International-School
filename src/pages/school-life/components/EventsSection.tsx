import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { events } from "@/mocks/schoolLife";

const TINTS = ["bg-primary-50", "bg-secondary-100", "bg-accent-50", "bg-background-200"];

export default function EventsSection() {
  return (
    <section id="events" className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow tone="mint">Events</Eyebrow>
          <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[44px]">
            Celebrating <span className="highlight-swipe">together</span>
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-foreground-500 md:text-[16px]">
          The days children remember long after the term ends — and the ones parents ask about first.
        </p>
      </Reveal>

      <div className="mt-9 space-y-3 md:mt-12">
        {events.map((event, index) => (
          <div
            key={event.title}
            className="lg:sticky"
            style={{ top: `${112 + index * 12}px`, zIndex: 10 + index }}
          >
            <article
              className={`grid grid-cols-1 overflow-hidden rounded-[24px] border border-background-300/60 md:grid-cols-[0.85fr_1.15fr] ${TINTS[index % TINTS.length]}`}
            >
              <div className="relative h-[210px] w-full overflow-hidden md:h-[260px]">
                <img
                  src={event.image}
                  alt={event.title}
                  title={`${event.title} at Shekinah International School`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background-50/85 text-primary-600">
                    <i className={`${event.icon} text-base leading-none`} />
                  </span>
                  <span className="font-heading text-[13px] text-foreground-500">{event.number}</span>
                </div>
                <h3 className="mt-3 font-heading text-[24px] font-normal leading-snug text-foreground-950 md:text-[30px]">
                  {event.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-foreground-700 md:text-[16px]">
                  {event.text}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}