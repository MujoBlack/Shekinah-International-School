import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { beyondCards } from "@/mocks/academics";

export default function BeyondSection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow tone="mint">Beyond the Classroom</Eyebrow>
          <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
            Learning that doesn&apos;t stop at the classroom <span className="highlight-swipe">door</span>
          </h2>
        </div>
        <Button to="/school-life" variant="outline">
          Explore School Life
        </Button>
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
        {beyondCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 80}>
            <article className="group h-full overflow-hidden rounded-[22px] border border-background-200 bg-background-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
              <div className="relative h-[160px] w-full overflow-hidden md:h-[180px]">
                <img
                  src={card.image}
                  alt={card.title}
                  title={`Shekinah International School - ${card.title}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background-50/95 text-primary-600 shadow-sm">
                  <i className={`${card.icon} text-base leading-none`} />
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[17px] leading-snug text-foreground-950">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-foreground-600">{card.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}