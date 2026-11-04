import { facts } from "@/mocks/home";

const chips = [
  "bg-sun-100 text-sun-700",
  "bg-mint-100 text-mint-700",
  "bg-gold-100 text-gold-700",
  "bg-coral-100 text-coral-700",
];

export default function FactsBar() {
  return (
    <section className="relative z-20 -mt-14 px-5 md:-mt-20 md:px-10">
      <ul className="mx-auto grid max-w-[1260px] grid-cols-1 gap-2 rounded-[32px] bg-white p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact, index) => (
          <li key={fact.title} className="flex items-center gap-4 rounded-[24px] px-4 py-4 transition-colors hover:bg-background-100 md:px-5 md:py-5">
            <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] ${chips[index % chips.length]} ${index % 2 ? "rotate-3" : "-rotate-3"}`}>
              <i className={`${fact.icon} text-[24px] leading-none`} />
            </span>
            <span className="min-w-0">
              <span className="block font-heading text-[17px] leading-snug text-primary-950">{fact.title}</span>
              <span className="mt-0.5 block text-[13px] leading-snug text-foreground-600">{fact.caption}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
