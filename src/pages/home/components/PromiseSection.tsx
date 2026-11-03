import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { promiseCards } from "@/mocks/home";

export default function PromiseSection() {
  return (
    <section className="mx-auto w-full max-w-[1360px] px-5 py-24 md:px-10 md:py-[140px]">
      <Reveal className="max-w-3xl">
        <Eyebrow>Our Promise</Eyebrow>
        <h2 className="mt-6 font-heading text-[36px] leading-[1.02] text-foreground-950 md:text-[64px]">
          A school built around the child
        </h2>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
          Four commitments shape everything we do, from the way we plan a lesson to the way we greet a child at the gate.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <span className="mt-10 block h-[3px] w-16 bg-accent-500" aria-hidden="true" />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 border border-primary-950/20 sm:grid-cols-2 lg:grid-cols-4">
        {promiseCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 70}>
            <article
              className={`flex h-full flex-col border-primary-950/20 p-7 md:p-8 ${
                index % 2 === 1 ? "sm:border-l" : ""
              } ${index > 0 ? "border-t sm:border-t-0" : ""} ${index === 1 ? "bg-secondary-100" : "bg-background-50"} ${
                index === 2 ? "sm:border-l-0 lg:border-l" : ""
              } ${index > 1 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="text-primary-800">
                  <i className={`${card.icon} text-[24px] leading-none`} />
                </span>
                <span className="font-label text-[11px] tracking-[0.2em] text-foreground-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-10 font-heading text-[22px] leading-tight text-foreground-950">{card.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground-600">{card.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}