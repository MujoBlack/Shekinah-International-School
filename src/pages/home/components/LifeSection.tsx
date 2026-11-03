import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { lifeImages } from "@/mocks/home";

const ribbonText = ["Equipping Today", "Shaping Tomorrow", "Equipping Today", "Shaping Tomorrow"];

export default function LifeSection() {
  return (
    <section className="mt-20 pb-4 md:mt-28">
      <div className="mx-auto w-full max-w-[1320px] px-4 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow tone="mint">Life at Shekinah</Eyebrow>
            <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
              Every day has something to <span className="highlight-swipe">look forward to</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-foreground-500 md:text-[16px]">
            Classrooms, the pool, the pitch, the stage and the wider community all play a part in a Shekinah childhood.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-9 grid auto-rows-[110px] grid-cols-2 gap-3 sm:auto-rows-[150px] md:mt-12 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
            {lifeImages.map((item) => (
              <figure
                key={item.label}
                className={`group relative overflow-hidden rounded-[18px] md:rounded-[22px] ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  title={`Shekinah International School - ${item.label}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/5 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-background-50/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-primary-800 md:text-[11px]">
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden md:mt-14">
        <div className="-mx-2 -rotate-[1.2deg] bg-primary-50 py-3.5 md:py-4">
          <div className="overflow-hidden">
            <div className="marquee-track items-center gap-8 whitespace-nowrap md:gap-12">
              {[0, 1].map((half) => (
                <span key={half} className="flex items-center gap-8 md:gap-12" aria-hidden={half === 1}>
                  {[0, 1, 2, 3].map((rep) => (
                    <span key={rep} className="flex items-center gap-8 md:gap-12">
                      {ribbonText.map((text, i) => (
                        <span key={`${text}-${i}`} className="flex items-center gap-8 md:gap-12">
                          <span className="font-heading text-[18px] text-primary-800 md:text-[22px]">{text}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
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

      <div className="mx-auto mt-10 flex w-full max-w-[1320px] justify-center px-4 md:mt-12 md:px-8">
        <Button to="/school-life" variant="primary">
          Explore School Life
        </Button>
      </div>
    </section>
  );
}