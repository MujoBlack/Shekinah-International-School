import Doodle from "@/components/base/Doodle";
import { jumpLinks, schoolLifeHeroImage } from "@/mocks/schoolLife";

export default function SchoolLifeHero() {
  return (
    <section className="relative flex h-[72svh] max-h-[700px] min-h-[560px] w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={schoolLifeHeroImage}
          alt="Children running across the lawn at Shekinah International School"
          title="School life at Shekinah International School Entebbe"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 about-veil" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-4 pb-12 pt-32 md:px-8 md:pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-background-50/25 bg-background-50/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-background-50 backdrop-blur-sm md:text-[12px]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            School Life
          </span>

          <h1 className="mt-5 font-heading text-[32px] font-normal leading-[1.08] text-background-50 sm:text-[42px] md:text-[56px]">
            Learning, playing, exploring and{" "}
            <span className="relative inline-block">
              growing
              <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-accent-500/80 md:h-1.5" />
            </span>{" "}
            together.
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-background-50/90 md:text-[18px]">
            Classrooms, the pool, the pitch, the stage — and the families that hold it all together.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2 md:mt-9 md:gap-2.5">
          {jumpLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className="group inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-background-50/30 bg-background-50/10 px-4 py-2 text-[13px] font-medium text-background-50 backdrop-blur-sm transition-colors duration-200 hover:bg-background-50 hover:text-primary-700 md:text-[14px]"
            >
              <span className="whitespace-nowrap">{link.label}</span>
              <i className="ri-arrow-down-line text-[13px] leading-none opacity-70 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          ))}
          <Doodle
            icon="ri-star-line"
            tone="red"
            className="ml-1 hidden !text-background-50/70 md:flex"
            size="text-xl"
          />
        </div>
      </div>
    </section>
  );
}