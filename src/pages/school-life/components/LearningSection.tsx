import Button from "@/components/base/Button";
import Doodle from "@/components/base/Doodle";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { learningFeatures, learningMainImage } from "@/mocks/schoolLife";

const TINTS = ["bg-primary-50", "bg-secondary-100", "bg-accent-50", "bg-background-200"];

export default function LearningSection() {
  return (
    <section id="learning" className="mx-auto w-full max-w-[1320px] scroll-mt-28 px-4 pt-16 md:px-8 md:pt-24">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="h-[320px] w-full overflow-hidden rounded-[24px] md:h-[520px]">
            <img
              src={learningMainImage}
              alt="Pupils building a project together in class"
              title="Hands-on learning at Shekinah International School"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Eyebrow tone="mint">Learning</Eyebrow>
          <div className="relative mt-5">
            <h2 className="font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[44px]">
              Lessons you can <span className="highlight-swipe">touch</span>
            </h2>
            <Doodle icon="ri-leaf-line" tone="red" className="absolute -right-2 top-0 hidden md:flex" size="text-2xl" />
          </div>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
            Children learn in classrooms full of talk, making and experiment — with regular trips outside the gate to
            bring a unit to life.
          </p>

          <div className="mt-7 space-y-3">
            {learningFeatures.map((feature, index) => (
              <article
                key={feature.tag}
                className={`group overflow-hidden rounded-[20px] border border-background-300/60 ${TINTS[index % TINTS.length]}`}
              >
                <div className="flex items-stretch">
                  <div className="relative hidden w-[132px] shrink-0 overflow-hidden sm:block">
                    <img
                      src={feature.image}
                      alt={feature.tag}
                      title={`${feature.tag} at Shekinah International School`}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 p-5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-foreground-500">
                      <i className={`${feature.icon} text-[13px] leading-none text-primary-600`} />
                      {feature.tag}
                    </span>
                    <h3 className="mt-2 text-[16px] leading-snug text-foreground-950 md:text-[18px]">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-foreground-600">{feature.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7">
            <Button to="/academics" variant="outline">
              Explore Academics
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}