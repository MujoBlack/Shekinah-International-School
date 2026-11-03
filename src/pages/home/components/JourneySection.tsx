import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { journeyCards } from "@/mocks/home";

export default function JourneySection() {
  return (
    <section className="border-t border-primary-950/20 bg-background-50">
      <div className="mx-auto w-full max-w-[1360px] px-5 py-24 md:px-10 md:py-[140px]">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Our Learning Journey</Eyebrow>
            <h2 className="mt-6 font-heading text-[36px] leading-[1.02] text-foreground-950 md:text-[64px]">
              Two stages, one continuous journey
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-foreground-600 md:text-[16px]">
            From first steps in Early Years to confident leadership in Primary, children grow within one familiar campus
            and one caring community.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 border border-primary-950/20 md:grid-cols-2">
          {journeyCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <article
                className={`flex h-full flex-col bg-background-50 ${
                  index === 1 ? "border-t border-primary-950/20 md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="relative h-[240px] w-full overflow-hidden md:h-[320px]">
                  <img
                    src={card.image}
                    alt={`${card.title} at Shekinah International School`}
                    title={`Shekinah International School ${card.title}`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-[28px] leading-none text-foreground-950 md:text-[34px]">
                      {card.title}
                    </h3>
                    <span className="border border-primary-950/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-primary-900">
                      {card.ageTag}
                    </span>
                  </div>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-foreground-500">{card.stages}</p>
                  <p className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground-600 md:text-[16px]">
                    {card.description}
                  </p>
                  <div className="mt-8">
                    <Button to={card.href} variant="outline">
                      {`Explore ${card.title}`}
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}