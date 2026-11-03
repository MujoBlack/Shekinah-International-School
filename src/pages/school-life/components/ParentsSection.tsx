import Button from "@/components/base/Button";
import Doodle from "@/components/base/Doodle";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { parentsImage } from "@/mocks/schoolLife";

export default function ParentsSection() {
  return (
    <section id="parents" className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-20 md:px-8 md:pt-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="h-[300px] w-full overflow-hidden rounded-[24px] md:h-[460px]">
            <img
              src={parentsImage}
              alt="Parents and teachers talking at a school coffee morning"
              title="The parent community at Shekinah International School"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Eyebrow tone="butter">Parents &amp; Community</Eyebrow>
          <div className="relative mt-5">
            <h2 className="font-heading text-[30px] font-normal leading-[1.12] text-foreground-950 md:text-[42px]">
              A community, not just a <span className="highlight-swipe">school</span>
            </h2>
            <Doodle icon="ri-heart-3-line" tone="red" className="absolute -right-2 top-0 hidden md:flex" size="text-2xl" />
          </div>

          <p className="mt-5 text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
            We have a vibrant parent community that is involved in their children&apos;s personal and school life. Parents
            take an active part in school activities, and we hold seminars and conferences on parenting, supporting your
            child&apos;s reading, understanding the curriculum and much more.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {["Parent seminars", "Reading workshops", "Curriculum evenings", "Family events"].map((item) => (
              <li
                key={item}
                className="rounded-full bg-primary-50 px-3.5 py-1.5 text-[12px] font-medium text-primary-800 md:text-[13px]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Button to="/contact" variant="outline">
              Join the Community
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}