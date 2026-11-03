import { facts } from "@/mocks/home";

export default function FactsBar() {
  return (
    <section className="border-b border-primary-950/20 bg-background-100">
      <div className="mx-auto w-full max-w-[1360px] px-5 md:px-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-primary-950/20">
          {facts.map((fact, index) => (
            <li
              key={fact.title}
              className={`flex items-start gap-4 border-b border-primary-950/20 py-7 last:border-b-0 md:py-9 lg:border-b-0 lg:px-8 ${
                index === 0 ? "lg:pl-0" : ""
              } ${index === facts.length - 1 ? "lg:pr-0" : ""}`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary-950/20 text-primary-800">
                <i className={`${fact.icon} text-[18px] leading-none`} />
              </span>
              <span className="min-w-0">
                <span className="block text-[14px] font-medium leading-snug text-foreground-950 md:text-[15px]">
                  {fact.title}
                </span>
                <span className="mt-1.5 block text-[12px] leading-relaxed text-foreground-500">{fact.caption}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}