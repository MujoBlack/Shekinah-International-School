import { useState } from "react";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { testimonials } from "@/mocks/home";

export default function VoicesSection() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;
  const current = testimonials[active];

  const go = (direction: number) => {
    setActive((prev) => (prev + direction + total) % total);
  };

  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Eyebrow tone="butter">Parent Voices</Eyebrow>
          <div className="relative mt-5">
            <h2 className="font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
              What our families say
            </h2>
            <Doodle icon="ri-double-quotes-r" tone="red" className="absolute -right-6 -top-3 hidden md:flex" size="text-xl" />
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary-500/40 text-primary-700 transition-colors duration-200 hover:bg-primary-500 hover:text-background-50"
          >
            <i className="ri-arrow-left-line text-lg leading-none" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-primary-500 text-background-50 transition-colors duration-200 hover:bg-primary-600"
          >
            <i className="ri-arrow-right-line text-lg leading-none" />
          </button>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-9 rounded-[26px] border border-background-200 bg-background-50 p-7 shadow-card md:mt-12 md:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-14">
            <div>
              <i className="ri-double-quotes-l text-3xl text-primary-200 md:text-4xl" />
              <blockquote className="mt-4 font-heading text-[21px] font-normal leading-[1.45] text-foreground-950 md:text-[30px]">
                {current.quote}
              </blockquote>
              <div className="mt-7 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 font-heading text-lg text-primary-700">
                  {current.name.charAt(0)}
                </span>
                <span className="leading-tight">
                  <span className="block text-[15px] font-medium text-foreground-900">{current.name}</span>
                  <span className="block text-[13px] text-foreground-500">{current.role}</span>
                </span>
              </div>
            </div>

            <div className="rounded-[20px] bg-primary-50/70 p-6">
              <div className="flex items-center gap-1 text-secondary-500">
                {[0, 1, 2, 3, 4].map((star) => (
                  <i key={star} className="ri-star-fill text-sm leading-none" />
                ))}
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-foreground-600">
                Families from fifteen nationalities, one shared standard of care.
              </p>
              <div className="mt-5 flex items-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show testimonial from ${item.name}`}
                    className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                      index === active ? "w-7 bg-primary-500" : "w-2.5 bg-primary-200"
                    }`}
                  />
                ))}
                <span className="ml-auto text-[12px] text-foreground-400">
                  0{active + 1} / 0{total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}