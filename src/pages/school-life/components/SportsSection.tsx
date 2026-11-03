import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { sportsCards, sportsFeature } from "@/mocks/schoolLife";

export default function SportsSection() {
  return (
    <section id="sports" className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow tone="butter">Sports &amp; Recreation</Eyebrow>
          <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[44px]">
            Bodies busy, confidence <span className="highlight-swipe">building</span>
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-foreground-500 md:text-[16px]">
          Every child swims, every child plays, and every child gets a turn at being part of a team.
        </p>
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
        {sportsCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 80}>
            <article className="group h-full overflow-hidden rounded-[22px] border border-background-200 bg-background-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="relative h-[200px] w-full overflow-hidden md:h-[240px]">
                <img
                  src={card.image}
                  alt={card.title}
                  title={`${card.title} at Shekinah International School`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background-50/95 text-primary-600 shadow-sm">
                  <i className={`${card.icon} text-base leading-none`} />
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[18px] leading-snug text-foreground-950">{card.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-foreground-600">{card.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <article className="group mt-4 grid grid-cols-1 overflow-hidden rounded-[22px] border border-background-200 bg-background-50 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative h-[220px] w-full overflow-hidden md:h-full md:min-h-[260px]">
            <img
              src={sportsFeature.image}
              alt={sportsFeature.title}
              title="Sports Day at Shekinah International School"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-9">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-primary-800">
              <i className="ri-trophy-line text-[13px] leading-none" />
              {sportsFeature.tag}
            </span>
            <h3 className="mt-3 font-heading text-[24px] font-normal leading-snug text-foreground-950 md:text-[30px]">
              {sportsFeature.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground-600 md:text-[16px]">
              {sportsFeature.text}
            </p>
          </div>
        </article>
      </Reveal>
    </section>
  );
}