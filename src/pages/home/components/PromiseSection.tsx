import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { Rainbow } from "@/components/base/Doodles";
import { promiseCards } from "@/mocks/home";

const cardTones = [
  { card: "bg-white", icon: "bg-mint-100 text-primary-700", tilt: "", hr: "" },
  { card: "bg-white", icon: "bg-gold-100 text-gold-700", tilt: "", hr: "" },
  { card: "bg-white", icon: "bg-coral-100 text-coral-700", tilt: "", hr: "" },
  { card: "bg-white", icon: "bg-blush-100 text-blush-700", tilt: "", hr: "" },
];

export default function PromiseSection() {
  return (
    <section className="relative mx-auto w-full max-w-[1360px] px-5 py-24 md:px-10 md:py-32">
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <Rainbow className="mx-auto mb-4 h-10 w-20" />
        <Eyebrow tone="coral">Our Promise</Eyebrow>
        <h2 className="mt-5 font-heading text-[38px] leading-[1.04] text-primary-950 md:text-[60px]">
          A school built around the child
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-foreground-600">
          Four commitments shape everything we do, from the way we plan a lesson to the way we greet a child at the gate.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {promiseCards.map((card, index) => {
          const tone = cardTones[index % cardTones.length];
          return (
            <Reveal key={card.title} delay={index * 80}>
              <article className={`lift flex h-full flex-col rounded-[28px] border border-primary-950/10 p-7 shadow-card md:p-8 ${tone.card} ${tone.tilt} ${tone.hr}`}>
                <span className={`flex h-14 w-14 items-center justify-center rounded-full ${tone.icon}`}>
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
