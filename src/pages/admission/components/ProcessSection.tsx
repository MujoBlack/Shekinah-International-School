import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { admissionsSteps } from "@/mocks/admission";

export default function ProcessSection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="max-w-2xl">
        <Eyebrow tone="butter">How to Join</Eyebrow>
        <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
          Five simple steps to joining <span className="highlight-swipe">Shekinah</span>
        </h2>
      </Reveal>

      <div className="relative mt-10 md:mt-14">
        <div className="pointer-events-none absolute bottom-6 left-[23px] top-6 w-0 border-l-2 border-dashed border-primary-200 md:hidden" />
        <div className="pointer-events-none absolute left-[24px] right-[24px] top-[24px] hidden border-t-2 border-dashed border-primary-200 md:block" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-5">
          {admissionsSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80} className="relative">
              <div className="flex gap-4 md:block">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-background-100 bg-primary-500 font-heading text-[15px] text-background-50">
                  {step.number}
                </span>
                <div className="md:mt-5">
                  <h3 className="font-heading text-[20px] font-normal leading-snug text-foreground-950 md:text-[21px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-foreground-500 md:text-[15px]">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={120}>
        <div className="mt-10 flex items-start gap-3 rounded-[20px] border border-secondary-200 bg-secondary-100 px-5 py-4 md:mt-12 md:max-w-2xl md:px-6">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background-50/80 text-secondary-800">
            <i className="ri-information-line text-[14px] leading-none" />
          </span>
          <p className="text-[14px] leading-relaxed text-secondary-900 md:text-[15px]">
            <strong className="font-medium">Please note:</strong> enrolment depends on availability of space.
          </p>
        </div>
      </Reveal>
    </section>
  );
}