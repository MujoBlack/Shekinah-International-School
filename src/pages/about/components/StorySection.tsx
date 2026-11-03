import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { storyParagraphs } from "@/mocks/about";

export default function StorySection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-16 md:px-8 md:pt-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow tone="mint">Our Story</Eyebrow>
            <div className="relative mt-5">
              <h2 className="font-heading text-[32px] font-normal leading-[1.1] text-foreground-950 md:text-[46px]">
                Every child is <span className="highlight-swipe">unique</span>
              </h2>
              <Doodle icon="ri-seedling-line" className="absolute -right-2 top-1 hidden md:flex" size="text-2xl" />
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-foreground-500 md:text-[16px]">
              Founded in 2014 in Bugonga, Entebbe, Shekinah has grown into a small school with a wide reach: one campus,
              many nationalities and a single, steady purpose.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <div>
                <span className="block font-heading text-2xl text-primary-700 md:text-3xl">2014</span>
                <span className="text-[12px] uppercase tracking-[0.16em] text-foreground-500">Established</span>
              </div>
              <div>
                <span className="block font-heading text-2xl text-primary-700 md:text-3xl">15</span>
                <span className="text-[12px] uppercase tracking-[0.16em] text-foreground-500">Nationalities</span>
              </div>
              <div>
                <span className="block font-heading text-2xl text-primary-700 md:text-3xl">2 - 11</span>
                <span className="text-[12px] uppercase tracking-[0.16em] text-foreground-500">Years old</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          {storyParagraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 90}>
              <div className="rounded-[22px] border border-background-200 bg-background-50 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-[11px] font-medium text-primary-700">
                    0{index + 1}
                  </span>
                  <p className="text-[16px] leading-[1.75] text-foreground-700 md:text-[17px]">{paragraph}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}