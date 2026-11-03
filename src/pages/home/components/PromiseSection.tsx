import { Link } from "react-router-dom";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Illo, { type IlloName } from "@/components/base/Illo";
import { promiseCards } from "@/mocks/home";

/* Tinyloom "Our values" style: tall pastel cards with soft blobs, staggered heights. */
const cardTones: { card: string; blob: string; illo: IlloName; offset: string }[] = [
  { card: "bg-mint-100", blob: "#CDEBD8", illo: "bulb", offset: "lg:mt-0" },
  { card: "bg-coral-100", blob: "#FBD0D2", illo: "rocket", offset: "lg:mt-10" },
  { card: "bg-sun-100", blob: "#FFE6A6", illo: "star", offset: "lg:mt-0" },
  { card: "bg-leaf-100", blob: "#D2EAC2", illo: "kids", offset: "lg:mt-10" },
];

function Blobs({ color }: { color: string }) {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 300 380" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-20 120C40 60 120 90 160 40S260 -20 330 30V-20H-20z" fill={color} />
      <path d="M330 250c-60-30-110 10-150 50s-120 40-200 10v100h350z" fill={color} />
    </svg>
  );
}

export default function PromiseSection() {
  return (
    <section className="relative mx-auto w-full max-w-[1360px] px-5 py-24 md:px-10 md:py-32">
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <Illo name="rainbow" className="mx-auto mb-3 h-14 w-auto" />
        <Eyebrow tone="coral">Our Promise</Eyebrow>
        <h2 className="mt-5 font-heading text-[38px] leading-[1.04] text-primary-950 md:text-[60px]">
          A school built around <span className="mark-mint">the child</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-foreground-600">
          Four commitments shape everything we do, from the way we plan a lesson to the way we greet a child at the gate.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {promiseCards.map((card, index) => {
          const tone = cardTones[index % cardTones.length];
          return (
            <Reveal key={card.title} delay={index * 90} className={tone.offset}>
              <article className={`lift relative flex min-h-[360px] flex-col overflow-hidden rounded-[32px] p-7 ${tone.card}`}>
                <Blobs color={tone.blob} />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-card">
                  <Illo name={tone.illo} className="h-10 w-10 object-contain" />
                </span>
                <div className="relative mt-auto pt-16">
                  <h3 className="font-heading text-[26px] leading-tight text-primary-950">{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground-700">{card.text}</p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-[14px] font-semibold text-primary-900 underline-offset-4 hover:underline"
                  >
                    Book a visit <i className="ri-arrow-right-up-line text-[15px] leading-none" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
