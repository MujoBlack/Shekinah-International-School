import Button from "@/components/base/Button";
import { Loop, Heart, Squiggle } from "@/components/base/Doodles";
import Illo from "@/components/base/Illo";
import { img } from "@/lib/img";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-100">
      {/* soft colour washes */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-sun-100/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-mint-100/80 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1360px] grid-cols-1 items-center gap-12 px-5 pb-24 pt-10 md:px-10 md:pb-32 md:pt-14 lg:grid-cols-[1.02fr_1fr] lg:gap-10">
        <div className="relative z-10">
          <span className="inline-flex -rotate-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-primary-800 shadow-card">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint-100 text-primary-700">
              <i className="ri-sparkling-2-fill text-[13px] leading-none" />
            </span>
            Christian international school in Entebbe
          </span>

          <h1 className="mt-7 font-heading text-[44px] leading-[1.02] text-primary-950 sm:text-[60px] md:text-[78px]">
            A Place to <span className="mark-sun">Learn</span>, Grow and{" "}
            <span className="wonk relative inline-block text-brand-red">
              Belong
              <Squiggle className="absolute -bottom-3 left-0 h-4 w-full" color="#FFC845" />
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-foreground-700 md:text-[19px]">
            Creating a friendly and safe environment where every child can learn, develop and thrive.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button to="/contact" variant="red">
              Book a School Visit
            </Button>
            <Button to="/about" variant="outline">
              Explore Our School
            </Button>
          </div>

          <p className="hand mt-8 flex items-center gap-2 text-[24px] text-primary-700">
            <Heart className="h-5 w-5" />
            Equipping Today. Shaping Tomorrow.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[600px]">
          <Illo name="sun" className="bob absolute -left-10 -top-12 z-20 h-28 w-28 md:h-36 md:w-36" />
          <Illo name="star" className="bob-slow absolute -right-4 top-4 z-20 h-14 w-14 [--r:12deg]" />
          <Illo name="rocket" className="absolute -right-10 -bottom-6 z-20 hidden h-28 w-28 rotate-12 xl:block" />
          <Loop className="absolute -bottom-10 -left-14 z-20 hidden h-16 w-40 md:block" color="#126735" />

          <div className="relative z-10 aspect-[1/1] w-full overflow-hidden blob-a border-[10px] border-white shadow-soft">
            <img
              src={img("home-hero")}
              alt="Shekinah pupils running and laughing together on the school lawn"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
            />
          </div>

          <div className="bob-slow absolute -left-4 bottom-10 z-20 flex items-center gap-3 rounded-[22px] bg-white px-4 py-3 shadow-soft [--r:-3deg] md:-left-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sun-300 text-primary-950">
              <i className="ri-earth-line text-xl leading-none" />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-[20px] text-primary-950">15 nationalities</span>
              <span className="block text-[13px] text-foreground-600">learning side by side</span>
            </span>
          </div>

          <div className="absolute -right-2 bottom-24 z-20 rotate-6 rounded-full bg-coral-500 px-4 py-2 text-[14px] font-bold text-white shadow-soft md:-right-6">
            Since 2014
          </div>
        </div>
      </div>
    </section>
  );
}
