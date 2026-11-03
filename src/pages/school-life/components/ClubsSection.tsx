import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";
import { clubs } from "@/mocks/schoolLife";

const TINTS = ["bg-primary-50", "bg-secondary-100", "bg-accent-50", "bg-background-200"];

export default function ClubsSection() {
  return (
    <section id="clubs" className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-20 md:px-8 md:pt-28">
      <Reveal className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow tone="mint">Clubs</Eyebrow>
          <div className="relative mt-5">
            <h2 className="font-heading text-[30px] font-normal leading-[1.12] text-foreground-950 md:text-[44px]">
              After-school clubs, <span className="highlight-swipe">4:00 to 5:00pm</span>
            </h2>
            <Doodle icon="ri-music-2-line" tone="red" className="absolute -right-2 top-0 hidden md:flex" size="text-2xl" />
          </div>
        </div>
        <p className="max-w-sm text-[15px] leading-relaxed text-foreground-500 md:text-[16px]">
          An hour at the end of the day to try something new, with friends and a teacher who loves it too.
        </p>
      </Reveal>

      <div className="mt-9 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-4">
        {clubs.map((club, index) => (
          <Reveal key={club.title} delay={index * 60}>
            <article
              className={`group flex h-full flex-col justify-between rounded-[20px] border border-background-300/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card md:p-5 ${TINTS[index % TINTS.length]}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background-50/85 text-primary-600">
                <i className={`${club.icon} text-[18px] leading-none`} />
              </span>
              <div className="mt-4">
                <h3 className="text-[16px] leading-snug text-foreground-950 md:text-[17px]">{club.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-foreground-600 md:text-[14px]">{club.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <p className="mt-5 flex items-center gap-2 text-[13px] text-foreground-500 md:text-[14px]">
          <i className="ri-time-line text-[15px] leading-none text-primary-600" />
          Clubs run Monday to Thursday during term time. Places are allocated each term.
        </p>
      </Reveal>
    </section>
  );
}