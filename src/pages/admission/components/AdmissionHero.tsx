import Button from "@/components/base/Button";
import Doodle from "@/components/base/Doodle";
import { admissionHeroImage } from "@/mocks/admission";

export default function AdmissionHero() {
  return (
    <section className="relative flex h-[64svh] max-h-[640px] min-h-[500px] w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={admissionHeroImage}
          alt="A family walking to the gate of Shekinah International School in Entebbe"
          title="Admissions at Shekinah International School Entebbe"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 about-veil" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-4 pb-14 pt-32 md:px-8 md:pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-background-50/25 bg-background-50/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-background-50 backdrop-blur-sm md:text-[12px]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Admission
          </span>

          <h1 className="mt-5 font-heading text-[34px] font-normal leading-[1.08] text-background-50 sm:text-[44px] md:text-[58px]">
            Start your child&apos;s{" "}
            <span className="relative inline-block">
              journey
              <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-accent-500/80 md:h-1.5" />
            </span>{" "}
            with us.
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-background-50/90 md:text-[18px]">
            We admit children throughout the year when places allow. Come and see the school before you decide.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/contact" variant="cream">
              Book a School Visit
            </Button>
            <Button href="#enquiry-form" variant="outlineLight">
              Enquire Now
            </Button>
          </div>

          <div className="mt-7 hidden items-center gap-3 md:flex">
            <Doodle icon="ri-book-open-line" tone="green" className="!text-background-50/55" size="text-xl" />
            <span className="text-[12px] uppercase tracking-[0.22em] text-background-50/70">
              Since 2014 · 15 nationalities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}