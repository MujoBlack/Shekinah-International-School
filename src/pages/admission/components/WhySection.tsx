import Button from "@/components/base/Button";
import Doodle from "@/components/base/Doodle";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { admissionWhyImage, whyPoints } from "@/mocks/admission";

export default function WhySection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-16 md:px-8 md:pt-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow tone="mint">Why Shekinah</Eyebrow>
          <div className="relative mt-5">
            <h2 className="font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
              A school where every child is <span className="highlight-swipe">known</span>
            </h2>
            <Doodle icon="ri-sun-line" tone="red" className="absolute -right-2 top-0 hidden md:flex" size="text-2xl" />
          </div>

          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
            A Christian, multicultural school in Entebbe since 2014, following the National Curriculum of England,
            with small caring classes and pupils from 15 nationalities.
          </p>

          <ul className="mt-7 space-y-4">
            {whyPoints.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <i className={`${point.icon} text-[17px] leading-none`} />
                </span>
                <div>
                  <h3 className="text-[16px] font-medium text-foreground-900">{point.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-foreground-500 md:text-[15px]">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/about" variant="outline">
              More About Shekinah
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="h-[340px] w-full overflow-hidden rounded-[24px] md:h-[520px]">
              <img
                src={admissionWhyImage}
                alt="A teacher reading with a pupil at Shekinah International School"
                title="Small caring classes at Shekinah International School"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-[18px] border border-background-200 bg-background-50 px-5 py-4 shadow-float md:left-6">
              <p className="font-heading text-[22px] leading-none text-primary-700">15</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-500">
                Nationalities
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}