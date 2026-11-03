import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { WaveEdge } from "@/components/base/Doodles";
import { journeyCards } from "@/mocks/home";
import Illo from "@/components/base/Illo";

const tones = [
  { bg: "bg-sun-100", tag: "bg-sun-300 text-primary-950", ring: "border-sun-200", rot: "-rotate-3" },
  { bg: "bg-leaf-100", tag: "bg-leaf-400 text-white", ring: "border-leaf-200", rot: "rotate-3" },
];

export default function JourneySection() {
  return (
    <section className="relative bg-mint-100">
      <WaveEdge color="#DFF3E4" className="-mt-[47px]" />
      <Illo name="hat" className="bob absolute left-[5%] top-16 hidden h-20 w-auto md:block" />
      <Illo name="price-kid-pink" className="absolute bottom-24 right-[3%] hidden h-48 w-auto xl:block" />
      <div className="mx-auto w-full max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="mint" className="bg-white">
            Our Learning Journey
          </Eyebrow>
          <h2 className="mt-5 font-heading text-[38px] leading-[1.04] text-primary-950 md:text-[60px]">
            Two stages, one <span className="wonk text-primary-600">happy</span> journey
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-foreground-700">
            From first steps in Early Years to confident leadership in Primary, children grow within one familiar campus
            and one caring community.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {journeyCards.map((card, index) => {
            const tone = tones[index % tones.length];
            return (
              <Reveal key={card.title} delay={index * 100}>
                <article className={`lift flex h-full flex-col overflow-hidden rounded-[36px] bg-white p-3 shadow-soft`}>
                  <div className={`relative h-[260px] overflow-hidden rounded-[28px] md:h-[320px] ${tone.bg}`}>
                    <img
                      src={card.image}
                      alt={`${card.title} pupils at Shekinah International School`}
                      className="h-full w-full object-cover"
                    />
                    <span className={`absolute left-5 top-5 rounded-full px-4 py-2 text-[14px] font-bold shadow-card ${tone.tag} ${tone.rot}`}>
                      {card.ageTag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-7 md:px-7">
                    <h3 className="font-heading text-[32px] leading-none text-primary-950 md:text-[38px]">{card.title}</h3>
                    <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary-600">{card.stages}</p>
                    <p className="mt-4 flex-1 text-[16px] leading-relaxed text-foreground-700">{card.description}</p>
                    <div className="mt-7">
                      <Button to={card.href} variant={index === 0 ? "sun" : "primary"}>
                        {`Explore ${card.title}`}
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <WaveEdge color="#FFFFFF" />
    </section>
  );
}
