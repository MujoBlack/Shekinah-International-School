import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { earlyYearsAges, earlyYearsSubjects } from "@/mocks/academics";

export default function EarlyYearsSection() {
  return (
    <section id="early-years" className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-16 md:px-8 md:pt-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow tone="mint">Early Years</Eyebrow>
          <div className="relative mt-5">
            <h2 className="font-heading text-[32px] font-normal leading-[1.1] text-foreground-950 md:text-[46px]">
              A joyful, <span className="highlight-swipe">gentle</span> start
            </h2>
            <Doodle icon="ri-sun-line" className="absolute -right-2 top-0 hidden md:flex" size="text-2xl" />
          </div>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
            Our youngest children learn through play, routine and warm encouragement, in calm rooms where every child is
            known and every small step is celebrated.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/contact" variant="primary">
              Book a School Visit
            </Button>
            <span className="text-[13px] text-foreground-500">Ages 2 to 5</span>
          </div>
        </Reveal>

        <Reveal delay={110}>
          <div className="relative">
            <div className="h-[300px] w-full overflow-hidden rounded-[24px] md:h-[420px]">
              <img
                src="https://readdy.ai/api/search-image?query=Warm%20early%20years%20classroom%20with%20three%20and%20four%20year%20olds%20playing%20with%20wooden%20blocks%20and%20colourful%20soft%20toys%20on%20a%20woven%20rug%2C%20a%20teacher%20kneeling%20beside%20them%2C%20cream%20walls%20and%20sage%20green%20shelves%2C%20big%20windows%20with%20soft%20morning%20light%2C%20gentle%20joyful%20atmosphere%2C%20editorial%20school%20photography&width=900&height=900&seq=shekinah-academics-early-02&orientation=squarish"
                alt="Young children playing and learning in an Early Years classroom at Shekinah"
                title="Early Years classroom at Shekinah International School"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-background-50/95 px-4 py-2 shadow-card">
              <i className="ri-heart-3-line text-accent-500" />
              <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-primary-800">
                Play-led learning
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-12 md:gap-4">
        {earlyYearsAges.map((stage, index) => (
          <Reveal key={stage.title} delay={index * 80}>
            <div className={`h-full rounded-[20px] p-5 md:p-6 ${stage.tint}`}>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] ${stage.tagTint}`}
              >
                {stage.age}
              </span>
              <h3 className="mt-4 text-[18px] text-foreground-950 md:text-[20px]">{stage.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground-600 md:text-[15px]">{stage.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 md:mt-16">
        <div className="flex flex-col gap-2 border-t border-background-300 pt-6 md:flex-row md:items-end md:justify-between">
          <h3 className="text-[22px] text-foreground-950 md:text-[26px]">What our youngest children explore</h3>
          <span className="text-[12px] uppercase tracking-[0.16em] text-foreground-500">Seven areas of learning</span>
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {earlyYearsSubjects.map((subject, index) => (
          <Reveal key={subject.title} delay={(index % 3) * 70}>
            <article className="group h-full rounded-[20px] border border-background-200 bg-background-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card md:p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <i className={`${subject.icon} text-lg leading-none`} />
              </span>
              <h4 className="mt-4 text-[16px] leading-snug text-foreground-950 md:text-[17px]">{subject.title}</h4>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground-600 md:text-[15px]">{subject.text}</p>
            </article>
          </Reveal>
        ))}

        <Reveal delay={140}>
          <figure className="relative h-full min-h-[160px] overflow-hidden rounded-[20px] lg:col-span-2">
            <img
              src="https://readdy.ai/api/search-image?query=Close%20view%20of%20small%20childrens%20hands%20sorting%20colourful%20wooden%20shapes%20and%20counting%20beads%20on%20a%20pale%20wooden%20table%20in%20a%20calm%20nursery%20classroom%2C%20soft%20natural%20window%20light%2C%20cream%20and%20sage%20green%20palette%2C%20warm%20editorial%20education%20photography&width=700&height=520&seq=shekinah-academics-early-03&orientation=landscape"
              alt="Children exploring shapes and counting beads in the Early Years classroom"
              title="Hands-on learning in Early Years at Shekinah International School"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/10 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-[13px] font-medium leading-snug text-background-50">
                Learning through hands, not worksheets.
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}