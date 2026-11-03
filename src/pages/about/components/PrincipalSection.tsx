import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";

const message = [
  "At Shekinah International School, we raise children to have a passion for God and for life, in a safe, secure and stimulating environment that gives them the opportunity to explore, grow and become useful citizens, nationally and globally.",
  "Through our strong assessment system, we track every child's progress and create programmes tailored to strengthen any area where they need support.",
  "Shekinah offers affordable education without compromising on quality. When you entrust your child to us, we commit to their progress, growth, security and wellbeing, and to making them feel accepted and loved.",
];

export default function PrincipalSection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="h-[340px] w-full overflow-hidden rounded-[24px] md:h-[460px]">
              <img
                src="https://readdy.ai/api/search-image?query=Warm%20professional%20portrait%20of%20a%20confident%20African%20woman%20in%20her%20forties%2C%20school%20principal%2C%20wearing%20a%20deep%20green%20blazer%20over%20a%20light%20cream%20blouse%2C%20standing%20in%20a%20bright%20cream%20office%20with%20a%20bookshelf%20and%20a%20green%20plant%20softly%20blurred%20behind%20her%2C%20gentle%20welcoming%20smile%2C%20soft%20window%20light%2C%20editorial%20portrait%20photography&width=900&height=1100&seq=shekinah-about-principal-01&orientation=portrait"
                alt="Ms. Jackie Lwande, Principal of Shekinah International School"
                title="Ms. Jackie Lwande, Principal of Shekinah International School Entebbe"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-primary-500 px-4 py-3 shadow-card md:left-6 md:px-5 md:py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background-50/15 text-background-50">
                <i className="ri-user-star-line text-lg leading-none" />
              </span>
              <span className="leading-tight">
                <span className="block text-[15px] font-medium text-background-50">Ms. Jackie Lwande</span>
                <span className="block text-[12px] text-background-50/75">Principal</span>
              </span>
            </div>

            <Doodle icon="ri-double-quotes-l" tone="red" className="absolute -right-2 -top-4 hidden md:flex" size="text-2xl" />
          </div>
        </Reveal>

        <Reveal delay={110}>
          <Eyebrow tone="butter">Meet Our Principal</Eyebrow>
          <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
            A message from our <span className="highlight-swipe">Principal</span>
          </h2>

          <div className="mt-6 space-y-5">
            {message.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-heading text-[18px] leading-[1.65] text-foreground-800 md:text-[20px] md:leading-[1.6]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <p className="handwritten text-[26px] leading-none text-primary-700 md:text-[30px]">Jackie Lwande</p>
            <span className="mt-3 block h-px w-40 bg-primary-300" />
            <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-foreground-500">
              Principal, Shekinah International School
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}