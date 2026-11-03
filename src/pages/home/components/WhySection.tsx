import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { Squiggle } from "@/components/base/Doodles";
import { whyCards } from "@/mocks/home";

const tones = ["bg-coral-100", "bg-sun-100", "bg-lilac-100", "bg-sky-100"];
const badge = ["bg-coral-500", "bg-sun-400", "bg-lilac-500", "bg-sky-500"];

export default function WhySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1360px] px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow tone="lilac">Why Shekinah</Eyebrow>
            <h2 className="mt-5 font-heading text-[38px] leading-[1.04] text-primary-950 md:text-[60px]">
              Why families <span className="relative inline-block">choose us<Squiggle className="absolute -bottom-2 left-0 h-3.5 w-full" color="#FF7A62" /></span>
            </h2>
          </div>
          <p className="max-w-sm text-[17px] leading-relaxed text-foreground-600">
            Four things parents tell us they notice first, from the first visit to the last day of Year 6.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <article className={`lift group flex h-full flex-col rounded-[32px] p-3 ${tones[index % tones.length]}`}>
                <div className="relative h-[200px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full rounded-[24px] object-cover"
                  />
                  <span
                    className={`absolute -bottom-0 right-4 flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-full font-heading text-[18px] text-white shadow-card ${badge[index % badge.length]}`}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-3 pb-4 pt-6">
                  <h3 className="font-heading text-[22px] leading-snug text-primary-950">{card.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-foreground-700">{card.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
