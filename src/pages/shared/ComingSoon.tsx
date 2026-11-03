import Layout from "@/components/feature/Layout";
import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";

interface ComingSoonProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  items: string[];
}

export default function ComingSoon({ eyebrow, title, intro, image, imageAlt, items }: ComingSoonProps) {
  return (
    <Layout>
      <section className="mx-auto w-full max-w-[1320px] px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow tone="mint">{eyebrow}</Eyebrow>
            <div className="relative mt-5">
              <h1 className="font-heading text-[34px] font-normal leading-[1.1] text-foreground-950 md:text-[54px]">
                {title}
              </h1>
              <Doodle icon="ri-star-line" tone="red" className="absolute -right-2 top-0 hidden md:flex" size="text-2xl" />
            </div>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">{intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact" variant="primary">
                Book a School Visit
              </Button>
              <Button to="/" variant="outline">
                Back to Home
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-[280px] w-full overflow-hidden rounded-[24px] md:h-[420px]">
              <img
                src={image}
                alt={imageAlt}
                title={imageAlt}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-12 rounded-[24px] border border-background-200 bg-background-50 p-6 md:mt-16 md:p-9">
            <h2 className="font-heading text-xl text-foreground-950 md:text-2xl">This page is being prepared</h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-foreground-500">
              The full {eyebrow.toLowerCase()} page is coming in the next phase. It will include:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-foreground-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                    <i className="ri-check-line text-[12px] leading-none" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}