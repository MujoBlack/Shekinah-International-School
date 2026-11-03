import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";

export default function CurriculumSection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-16 md:px-8 md:pt-24">
      <div className="grid grid-cols-1 items-center gap-8 rounded-[24px] border border-background-200 bg-background-50 p-6 md:rounded-[28px] md:p-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
        <Reveal>
          <Eyebrow tone="mint">Our Curriculum</Eyebrow>
          <div className="relative mt-5">
            <h2 className="font-heading text-[30px] font-normal leading-[1.12] text-foreground-950 md:text-[42px]">
              Broad, balanced and <span className="highlight-swipe">stimulating</span>
            </h2>
            <Doodle icon="ri-book-2-line" tone="red" className="absolute -right-2 top-0 hidden md:flex" size="text-xl" />
          </div>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
            Shekinah follows the National Curriculum of England, taught through a broad, balanced and stimulating
            programme that fits the needs and interests of our children.
          </p>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
            Lessons happen in small classes, with regular assessment so every child is supported and stretched at the
            right moment.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex items-center gap-3 rounded-[20px] border border-primary-100 bg-primary-50 px-5 py-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background-50 text-primary-600">
              <i className="ri-verified-badge-line text-xl leading-none" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-primary-700/70">
                Curriculum
              </span>
              <span className="mt-1 block text-[15px] font-medium leading-snug text-primary-900">
                National Curriculum of England
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}