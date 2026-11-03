import Button from "@/components/base/Button";
import Reveal from "@/components/base/Reveal";

export default function AcademicsCta() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-primary-500 px-6 py-12 md:rounded-[36px] md:px-14 md:py-16">
          <span className="pointer-events-none absolute -right-6 -top-8 flex h-32 w-32 items-center justify-center text-background-50/15 md:h-48 md:w-48">
            <i className="ri-sun-line text-[120px] leading-none md:text-[190px]" />
          </span>
          <span className="pointer-events-none absolute bottom-6 right-10 hidden text-background-50/25 md:block">
            <i className="ri-pencil-ruler-2-line text-4xl leading-none" />
          </span>
          <span className="pointer-events-none absolute bottom-10 left-1/2 hidden text-accent-300/60 md:block">
            <i className="ri-star-line text-2xl leading-none" />
          </span>

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-background-50/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-background-50 md:text-[12px]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Visit a lesson
              </span>
              <h2 className="mt-5 font-heading text-[30px] font-normal leading-[1.12] text-background-50 md:text-[46px]">
                See our classrooms in action.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-background-50/80 md:text-[17px]">
                Sit in on a lesson, meet the teachers and ask anything about how we teach.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <Button to="/contact" variant="cream">
                Book a School Visit
              </Button>
              <Button to="/admission" variant="outlineLight">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}