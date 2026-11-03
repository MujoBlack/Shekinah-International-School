import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { Star, Rainbow } from "@/components/base/Doodles";
import { promiseCards } from "@/mocks/home";

const cardTones = [
  { card: "bg-mint-100", icon: "bg-white text-mint-700", tilt: "md:-rotate-2", hr: "[--hr:1deg]" },
  { card: "bg-sun-100", icon: "bg-white text-sun-700", tilt: "md:rotate-1 md:translate-y-6", hr: "[--hr:-1deg]" },
  { card: "bg-sky-100", icon: "bg-white text-sky-700", tilt: "md:-rotate-1", hr: "[--hr:1deg]" },
  { card: "bg-coral-100", icon: "bg-white text-coral-700", tilt: "md:rotate-2 md:translate-y-6", hr: "[--hr:-1deg]" },
];

export default function PromiseSection() {
  return (
    <section className="relative mx-auto w-full max-w-[1360px] px-5 py-24 md:px-10 md:py-32">
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <Rainbow className="mx-auto mb-4 h-10 w-20" />
        <Eyebrow tone="coral">Our Promise</Eyebrow>
        <h2 className="mt-5 font-heading text-[38px] leading-[1.04] text-primary-950 md:text-[60px]">
          A school built around <span className="mark-mint">the child</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-foreground-600">
          Four commitments shape everything we do, from the way we plan a lesson to the way we greet a child at the gate.
        </p>
        <Star className="bob absolute -right-4 top-10 hidden h-9 w-9 md:block" color="#FFC233" />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {promiseCards.map((card, index) => {
          const tone = cardTones[index % cardTones.length];
          return (
            <Reveal key={card.title} delay={index * 80}>
              <article className={`lift flex h-full flex-col rounded-[32px] p-7 md:p-8 ${tone.card} ${tone.tilt} ${tone.hr}`}>
                <span className={`flex h-14 w-14 items-center justify-center rounded-full shadow-card ${tone.icon}`}>
                  <i className={`${card.icon} text-[26px] leading-none`} />
                </span>
                <h3 className="mt-8 font-heading text-[26px] leading-tight text-primary-950">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground-700">{card.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
