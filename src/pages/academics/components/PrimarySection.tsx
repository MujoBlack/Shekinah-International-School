import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { primarySubjects } from "@/mocks/academics";

export default function PrimarySection() {
  return (
    <section id="primary" className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-20 md:px-8 md:pt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="h-[260px] w-full overflow-hidden rounded-[24px] md:h-[420px]">
              <img
                src="https://readdy.ai/api/search-image?query=Primary%20school%20children%20aged%20eight%20to%20eleven%20in%20cream%20and%20green%20uniforms%20working%20in%20pairs%20at%20wooden%20desks%20with%20exercise%20books%20and%20a%20globe%2C%20focused%20and%20smiling%2C%20bright%20classroom%20with%20cream%20walls%20and%20sage%20green%20boards%2C%20warm%20natural%20light%2C%20editorial%20education%20photography&width=900&height=1000&seq=shekinah-academics-primary-04&orientation=portrait"
                alt="Primary pupils working together in class at Shekinah International School"
                title="Primary classes at Shekinah International School Entebbe"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 rounded-[20px] bg-primary-500 px-5 py-4">
              <span className="leading-tight">
                <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-background-50/70">
                  Entry point
                </span>
                <span className="mt-1 block font-heading text-[19px] text-background-50">Year 1 upwards</span>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background-50/15 text-background-50">
                <i className="ri-arrow-up-line text-lg leading-none" />
              </span>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <Eyebrow tone="butter">Primary</Eyebrow>
            <div className="relative mt-5">
              <h2 className="font-heading text-[32px] font-normal leading-[1.1] text-foreground-950 md:text-[46px]">
                Strong foundations, <span className="highlight-swipe">bright</span> futures
              </h2>
              <Doodle icon="ri-pencil-ruler-2-line" tone="red" className="absolute -right-2 top-0 hidden md:flex" size="text-xl" />
            </div>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
              From Year 1 onwards children follow the National Curriculum of England in small classes, building real
              depth in literacy and numeracy while every other subject gets proper time.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" variant="primary">
                Book a School Visit
              </Button>
              <span className="text-[13px] text-foreground-500">Regular assessment, tailored support</span>
            </div>
          </Reveal>

          <div className="mt-9 space-y-3">
            {primarySubjects.map((subject, index) => (
              <div
                key={subject.title}
                className="lg:sticky"
                style={{ top: `${112 + index * 10}px`, zIndex: 10 + index }}
              >
                <article
                  className={`flex items-start gap-4 rounded-[22px] border border-background-300/60 p-5 md:p-6 ${subject.tint}`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${subject.iconTint}`}
                  >
                    <i className={`${subject.icon} text-xl leading-none`} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-[17px] leading-snug text-foreground-950 md:text-[19px]">{subject.title}</h3>
                      <span className="font-heading text-[12px] text-foreground-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-foreground-600 md:text-[15px]">
                      {subject.text}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}