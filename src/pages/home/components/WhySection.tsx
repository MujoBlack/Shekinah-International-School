import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { whyCards } from "@/mocks/home";

export default function WhySection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="max-w-2xl">
        <Eyebrow tone="butter">Why Shekinah</Eyebrow>
        <div className="relative mt-5">
          <h2 className="font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
            Why families choose <span className="highlight-swipe">Shekinah</span>
          </h2>
          <Doodle icon="ri-leaf-line" tone="green" className="absolute -right-4 top-0 hidden md:flex" size="text-2xl" />
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
        {whyCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-background-200 bg-background-50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
              <div className="h-[180px] w-full overflow-hidden md:h-[200px]">
                <img
                  src={card.image}
                  alt={card.title}
                  title={`Shekinah International School - ${card.title}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <span className="font-label text-[11px] uppercase tracking-[0.2em] text-primary-500">
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-heading text-[19px] font-medium leading-snug text-foreground-950 md:text-xl">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-foreground-600">{card.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}