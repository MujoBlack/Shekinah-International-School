import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { Star } from "@/components/base/Doodles";
import { lifeImages } from "@/mocks/home";
import Illo from "@/components/base/Illo";

const ribbonText = ["Equipping Today", "Shaping Tomorrow", "Equipping Today", "Shaping Tomorrow"];
const labelTones = ["bg-sun-300", "bg-mint-200", "bg-leaf-200", "bg-coral-200", "bg-blush-200"];

export default function LifeSection() {
  return (
    <section className="relative overflow-hidden bg-background-100 pb-20 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto w-full max-w-[1360px] px-5 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="leaf">Life at Shekinah</Eyebrow>
          <h2 className="mt-5 font-heading text-[38px] leading-[1.04] text-primary-950 md:text-[60px]">
            Every day has something to <span className="mark-sun">look forward to</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-foreground-600">
            Classrooms, the sports court, the lawn and the wider community all play a part in a Shekinah childhood.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-12 grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[160px] md:mt-14 md:auto-rows-[190px] md:grid-cols-4 md:gap-4">
            <Illo name="sun" className="bob absolute -left-8 -top-10 z-10 h-20 w-20" />
            <Illo name="music" className="absolute -right-6 -top-16 z-10 hidden h-24 w-auto md:block" />
            {lifeImages.map((item, index) => (
              <figure
                key={item.label}
                className={`group relative overflow-hidden rounded-[26px] md:rounded-[32px] ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <figcaption className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                  <span
                    className={`inline-flex rounded-full px-3.5 py-1.5 text-[12px] font-bold text-primary-950 shadow-card md:text-[13px] ${
                      labelTones[index % labelTones.length]
                    } ${index % 2 ? "rotate-2" : "-rotate-2"}`}
                  >
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="-mx-2 -rotate-[1.5deg] bg-primary-700 py-4">
          <div className="overflow-hidden">
            <div className="marquee-track items-center gap-8 whitespace-nowrap md:gap-12">
              {[0, 1].map((half) => (
                <span key={half} className="flex items-center gap-8 md:gap-12" aria-hidden={half === 1}>
                  {[0, 1, 2, 3].map((rep) => (
                    <span key={rep} className="flex items-center gap-8 md:gap-12">
                      {ribbonText.map((text, i) => (
                        <span key={`${text}-${i}`} className="flex items-center gap-8 md:gap-12">
                          <span className="font-heading text-[22px] text-white md:text-[28px]">{text}</span>
                          <Star className="h-6 w-6" color={i % 2 ? "#F58A8E" : "#FFD465"} />
                        </span>
                      ))}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full justify-center px-5">
        <Button to="/school-life" variant="sun">
          Explore School Life
        </Button>
      </div>
    </section>
  );
}
