import Button from "@/components/base/Button";
import Reveal from "@/components/base/Reveal";
import { img } from "@/lib/img";

export default function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-[1360px] px-5 pb-24 md:px-10 md:pb-28">
      <Reveal>
        <div className="relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[40px] bg-sun-300 px-7 py-12 md:px-14 md:py-16 lg:grid-cols-[1.1fr_1fr]">

          <div className="relative">
            <span className="inline-flex  items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-bold text-coral-700"> Come and see for yourself
            </span>
            <h2 className="mt-6 font-heading text-[38px] leading-[1.04] text-primary-950 md:text-[58px]">
              Come and experience Shekinah.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-primary-950/80">
              Walk the campus, meet a teacher and see a class in session. We would love to show you around.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" variant="red">
                Book a School Visit
              </Button>
              <Button to="/contact" variant="cream">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="aspect-square overflow-hidden blob-b border-[8px] border-white shadow-soft">
              <img src={img("home-hero-alt")} alt="Smiling Shekinah pupils on the school grounds" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
