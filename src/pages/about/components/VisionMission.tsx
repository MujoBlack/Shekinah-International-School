import Reveal from "@/components/base/Reveal";

const cards = [
  {
    label: "Vision",
    icon: "ri-eye-line",
    tint: "bg-primary-50 border-primary-100",
    iconTint: "bg-background-50 text-primary-600",
    text: "To be a centre of excellence in education throughout Uganda, allowing children to participate, excel and develop a passion for God and life.",
  },
  {
    label: "Mission",
    icon: "ri-compass-3-line",
    tint: "bg-secondary-100 border-secondary-200",
    iconTint: "bg-background-50 text-secondary-700",
    text: "To provide an education that will equip today's children for tomorrow.",
  },
];

export default function VisionMission() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-16 md:px-8 md:pt-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {cards.map((card, index) => (
          <Reveal key={card.label} delay={index * 110}>
            <div className={`h-full rounded-[24px] border p-7 md:p-10 ${card.tint}`}>
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full ${card.iconTint}`}>
                  <i className={`${card.icon} text-xl leading-none`} />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground-600 md:text-[12px]">
                  Our {card.label}
                </span>
              </div>

              <p className="mt-6 font-heading text-[21px] leading-[1.45] text-foreground-900 md:text-[25px] md:leading-[1.4]">
                {card.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}