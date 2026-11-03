import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { approachPoints } from "@/mocks/about";

export default function ApproachSection() {
  return (
    <section className="mt-20 bg-background-200/60 py-16 md:mt-28 md:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <Reveal>
            <Eyebrow tone="mint">Our Approach</Eyebrow>
            <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
              How we help children <span className="highlight-swipe">learn and grow</span>
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
              Good teaching starts with knowing the child. Our days are structured, our expectations are clear and our
              support is personal, so children move forward with confidence rather than pressure.
            </p>
          </Reveal>

          <div className="space-y-3 md:space-y-4">
            {approachPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 90}>
                <div className="flex items-start gap-4 rounded-[20px] border border-background-200 bg-background-50 p-5 md:gap-5 md:p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                    <i className={`${point.icon} text-xl leading-none`} />
                  </span>
                  <div>
                    <h3 className="text-[17px] leading-snug text-foreground-950 md:text-[19px]">{point.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-foreground-600 md:text-[16px]">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}