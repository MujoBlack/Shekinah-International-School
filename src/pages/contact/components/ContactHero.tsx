import { contactHeroImage } from "@/mocks/contact";

export default function ContactHero() {
  return (
    <section className="relative flex h-[46svh] max-h-[520px] min-h-[400px] w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={contactHeroImage}
          alt="The reception area at Shekinah International School welcoming a parent and child"
          title="Contact Shekinah International School Entebbe"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 about-veil" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-4 pb-12 pt-28 md:px-8 md:pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-background-50/25 bg-background-50/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-background-50 backdrop-blur-sm md:text-[12px]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Contact
          </span>

          <h1 className="mt-5 font-heading text-[34px] font-normal leading-[1.08] text-background-50 sm:text-[42px] md:text-[54px]">
            We&apos;d love to{" "}
            <span className="relative inline-block">
              welcome
              <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-accent-500/80 md:h-1.5" />
            </span>{" "}
            you.
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-background-50/90 md:text-[18px]">
            Call, write, or come and see us in Bugonga. There is always someone happy to talk about your child.
          </p>

          <div className="mt-7">
            <a
              href="#book-a-visit"
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-background-50 px-6 py-3 text-[15px] font-medium text-primary-800 transition-all duration-300 hover:bg-white hover:shadow-card md:text-[16px]"
            >
              <span className="whitespace-nowrap">Book a School Visit</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-background-50 transition-transform duration-300 group-hover:translate-x-1">
                <i className="ri-arrow-right-line text-[15px] leading-none" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}