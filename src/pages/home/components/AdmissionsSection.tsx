import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { admissionSteps } from "@/mocks/home";

export default function AdmissionsSection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow tone="mint">Admissions</Eyebrow>
          <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
            Thinking about Shekinah for your <span className="highlight-swipe">child?</span>
          </h2>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-foreground-500 md:text-[16px]">
          Five simple steps, and a real person guiding you through each one. Most families complete the journey within a few
          weeks.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="relative mt-10 rounded-[24px] border border-background-200 bg-background-50 px-5 py-8 md:mt-12 md:px-9 md:py-10">
          <div className="absolute left-9 right-9 top-[62px] hidden h-px bg-background-300 lg:block" />
          <ol className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {admissionSteps.map((step) => (
              <li key={step.number} className="flex gap-4 lg:flex-col lg:gap-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500 font-heading text-[15px] text-background-50">
                  {step.number}
                </span>
                <span className="min-w-0 lg:mt-5">
                  <span className="block font-heading text-[19px] font-medium text-foreground-950">{step.title}</span>
                  <span className="mt-1.5 block text-[14px] leading-relaxed text-foreground-500">{step.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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