import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { settingImages } from "@/mocks/about";

const strip = [...settingImages, ...settingImages];

export default function SettingSection() {
  return (
    <section className="mt-20 md:mt-28">
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow tone="mint">Our Setting</Eyebrow>
            <div className="relative mt-5">
              <h2 className="font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
                A safe, green place to <span className="highlight-swipe">learn</span>
              </h2>
              <Doodle icon="ri-leaf-line" className="absolute -right-2 top-0 hidden md:flex" size="text-2xl" />
            </div>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-foreground-500 md:text-[16px]">
            A quiet corner of Bugonga, minutes from the lake, with room to run, read, swim and simply be a child.
          </p>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="relative mt-9 overflow-hidden md:mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background-100 to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background-100 to-transparent md:w-20" />

          <div className="flex w-max gap-3 drift-track md:gap-4">
            {strip.map((item, index) => (
              <figure
                key={`${item.label}-${index}`}
                className="group relative h-[190px] w-[260px] shrink-0 overflow-hidden rounded-[20px] md:h-[230px] md:w-[330px] md:rounded-[24px]"
                aria-hidden={index >= settingImages.length}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  title={`Shekinah International School - ${item.label}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
                <figcaption className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                  <span className="inline-flex rounded-full bg-background-50/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-primary-800 md:text-[11px]">
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}