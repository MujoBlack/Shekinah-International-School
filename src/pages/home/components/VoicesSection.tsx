import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { Star, WaveEdge } from "@/components/base/Doodles";
import { testimonials } from "@/mocks/home";

const cardTones = ["bg-sun-100", "bg-white", "bg-mint-100"];
const tilt = ["md:-rotate-1", "md:rotate-1 md:-translate-y-4", "md:-rotate-1"];

export default function VoicesSection() {
  return (
    <section className="relative bg-primary-800 text-white">
      <WaveEdge color="oklch(0.31 0.062 156)" className="-mt-[47px]" />
      <Star className="bob absolute left-[8%] top-16 h-8 w-8" color="#FFD465" />
      <Star className="bob-slow absolute right-[10%] top-28 h-6 w-6" color="#F58A8E" />
      <div className="mx-auto w-full max-w-[1360px] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="cream">Parent Voices</Eyebrow>
          <h2 className="mt-5 font-heading text-[38px] leading-[1.04] text-white md:text-[60px]">
            From our families <span className="wonk text-sun-300">to yours</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <figure className={`lift flex h-full flex-col rounded-[32px] p-7 text-primary-950 md:p-8 ${cardTones[index % 3]} ${tilt[index % 3]}`}>
                <div className="flex items-center gap-1 text-sun-500">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <i key={s} className="ri-star-fill text-[18px] leading-none" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-heading text-[20px] leading-[1.45] md:text-[21px]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 font-heading text-[20px] text-white">
                    {item.name.charAt(0)}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[15px] font-semibold">{item.name}</span>
                    <span className="block text-[13px] text-foreground-600">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
      <WaveEdge color="oklch(0.985 0.012 88)" />
    </section>
  );
}
