import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { admissionSteps } from "@/mocks/home";

const stepTones = [
  "bg-sun-300 text-primary-950",
  "bg-coral-400 text-white",
  "bg-gold-400 text-white",
  "bg-blush-400 text-white",
  "bg-mint-400 text-white",
];

export default function AdmissionsSection() {
  return (
    <section className="mx-auto w-full max-w-[1360px] px-5 py-24 md:px-10 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow tone="coral">Admissions</Eyebrow>
        <h2 className="mt-5 font-heading text-[38px] leading-[1.04] text-primary-950 md:text-[60px]">
          Your path to <span className="mark-coral">Shekinah</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-foreground-600">
          Five simple steps, with a real person guiding you through each one.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <ol className="relative mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <svg
            className="pointer-events-none absolute left-[8%] right-[8%] top-9 hidden h-8 w-[84%] lg:block"
            viewBox="0 0 1000 30"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 15 Q125 -5 250 15 T500 15 T750 15 T1000 15" fill="none" stroke="#0B3D22" strokeOpacity="0.25" strokeWidth="3" strokeDasharray="4 10" strokeLinecap="round" />
          </svg>
          {admissionSteps.map((step, index) => (
            <li key={step.number} className="relative flex flex-col items-center rounded-[28px] bg-white px-5 pb-7 pt-5 text-center shadow-card">
              <span
                className={`flex h-[72px] w-[72px] items-center justify-center rounded-full font-heading text-[28px] shadow-card ${stepTones[index % stepTones.length]} ${index % 2 ? "rotate-6" : "-rotate-6"}`}
              >
                {index + 1}
              </span>
              <span className="mt-5 block font-heading text-[22px] text-primary-950">{step.title}</span>
              <span className="mt-2 block text-[15px] leading-relaxed text-foreground-600">{step.text}</span>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/admission" variant="primary">
            Admissions Process
          </Button>
          <Button to="/contact" variant="outline">
            Enquire Now
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
