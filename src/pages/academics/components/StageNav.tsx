import Reveal from "@/components/base/Reveal";

const stages = [
  { label: "Early Years", caption: "Kindergarten 1 to Reception", icon: "ri-seedling-line", href: "#early-years" },
  { label: "Primary", caption: "Year 1 upwards", icon: "ri-graduation-cap-line", href: "#primary" },
];

export default function StageNav() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-10 md:px-8 md:pt-14">
      <Reveal>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
          {stages.map((stage) => (
            <a
              key={stage.label}
              href={stage.href}
              className="group flex cursor-pointer items-center justify-between gap-4 rounded-full border border-background-300 bg-background-50 px-5 py-4 transition-all duration-300 hover:border-primary-300 hover:bg-primary-50 md:px-6 md:py-5"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-background-50">
                  <i className={`${stage.icon} text-lg leading-none`} />
                </span>
                <span className="leading-tight">
                  <span className="block font-heading text-[19px] text-foreground-950 md:text-[21px]">
                    {stage.label}
                  </span>
                  <span className="mt-0.5 block text-[12px] uppercase tracking-[0.12em] text-foreground-500">
                    {stage.caption}
                  </span>
                </span>
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-500/30 text-primary-600 transition-transform duration-300 group-hover:translate-y-0.5">
                <i className="ri-arrow-down-line text-sm leading-none" />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}