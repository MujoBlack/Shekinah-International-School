import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { transportDetails } from "@/mocks/admission";

export default function TransportSection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[26px] bg-primary-50 px-6 py-9 md:rounded-[32px] md:px-12 md:py-12">
          <i className="pointer-events-none absolute -right-4 -top-6 text-[120px] leading-none text-primary-200/50 ri-bus-2-line md:text-[200px]" />

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <Eyebrow tone="cream">Transport</Eyebrow>
              <h2 className="mt-5 font-heading text-[26px] font-normal leading-[1.16] text-foreground-950 md:text-[38px]">
                Getting your child to and from school safely is our{" "}
                <span className="highlight-swipe">number one priority</span>.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground-600 md:text-[16px]">
                Shekinah provides transport services, with costs based on distance. {transportDetails.note}{" "}
                {transportDetails.outOfTown}
              </p>
            </div>

            <div className="flex w-full items-center gap-4 rounded-[20px] border border-primary-200 bg-background-50 px-5 py-4 lg:w-auto">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-background-50">
                <i className="ri-bus-2-line text-[20px] leading-none" />
              </span>
              <div>
                <p className="font-heading text-[24px] leading-none text-primary-700 md:text-[28px]">
                  {transportDetails.price}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground-500">
                  Per month · Entebbe
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}