import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { values } from "@/mocks/about";

export default function ValuesSection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="max-w-2xl">
        <Eyebrow tone="butter">Our Values</Eyebrow>
        <div className="relative mt-5">
          <h2 className="font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
            Three things we will never <span className="highlight-swipe">compromise</span>
          </h2>
          <Doodle icon="ri-star-line" tone="red" className="absolute -right-1 top-0 hidden md:flex" size="text-xl" />
        </div>
      </Reveal>

      <div className="mt-9 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
        {values.map((value, index) => (
          <Reveal key={value.number} delay={index * 100}>
            <article className="group flex h-full flex-col rounded-[24px] border border-background-200 bg-background-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card md:p-8">
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <i className={`${value.icon} text-xl leading-none`} />
                </span>
                <span className="font-heading text-[34px] leading-none text-background-300 transition-colors duration-300 group-hover:text-primary-200 md:text-[40px]">
                  {value.number}
                </span>
              </div>

              <h3 className="mt-7 text-[19px] leading-snug text-foreground-950 md:text-[21px]">{value.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground-600 md:text-[16px]">{value.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}