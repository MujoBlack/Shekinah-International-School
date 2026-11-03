import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { Dots, Pencil, Star } from "@/components/base/Doodles";
import { img } from "@/lib/img";

const points = [
  { icon: "ri-book-open-line", text: "National Curriculum of England", tone: "bg-mint-100 text-mint-700" },
  { icon: "ri-heart-3-line", text: "Christian values, lived gently", tone: "bg-coral-100 text-coral-700" },
  { icon: "ri-group-line", text: "Small classes, known by name", tone: "bg-sky-100 text-sky-700" },
];

export default function MeetSection() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-[560px]">
            <Dots className="absolute -left-6 -top-6 h-24 w-24 opacity-20" />
            <div className="relative aspect-[4/4.4] overflow-hidden blob-c bg-sun-100">
              <img
                src={img("home-meet-shekinah")}
                alt="A Shekinah teacher working with pupils in a bright Early Years classroom"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-0 w-[46%] overflow-hidden rounded-[28px] border-[8px] border-white shadow-soft">
              <img
                src={img("about-our-story-2")}
                alt="Pupils and a teacher reading together"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <Pencil className="bob absolute -right-6 -top-8 h-20 w-20 [--r:10deg]" />
            <div className="absolute -left-4 bottom-16 -rotate-3 rounded-[20px] bg-sun-300 px-4 py-3 shadow-soft">
              <span className="block font-heading text-[22px] leading-none text-primary-950">Est. 2014</span>
              <span className="mt-1 block text-[13px] font-medium text-primary-900">Bugonga, Entebbe</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow tone="butter">Meet Shekinah</Eyebrow>
          <h2 className="relative mt-5 font-heading text-[36px] leading-[1.06] text-primary-950 md:text-[54px]">
            More than a school. A <span className="mark-sky">community</span> for growing minds.
            <Star className="bob absolute -top-6 right-6 hidden h-8 w-8 md:block" color="#FF7A62" />
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-foreground-700">
            <p>
              Shekinah is a Christian, multicultural school offering a broad, balanced and stimulating curriculum. Children
              from many nations learn side by side, guided by teachers who know each family by name.
            </p>
            <p>
              We help every child discover their potential, gifts and talents early, because every child is unique and
              deserves to be seen that way.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point.text} className="flex items-center gap-3 text-[16px] font-medium text-primary-950">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${point.tone}`}>
                  <i className={`${point.icon} text-lg leading-none`} />
                </span>
                {point.text}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button to="/about" variant="primary">
              Discover Our Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
