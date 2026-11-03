import { useEffect, useRef, useState } from "react";
import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Illo from "@/components/base/Illo";
import { admissionSteps } from "@/mocks/home";
import { img } from "@/lib/img";

/* Ivy Kids "Your Path" style: a timeline whose steps slide in one after another. */
const stepImages = [
  "school-life-parents-community",
  "contact-hero-campus",
  "academics-primary-2",
  "admission-assessment-step",
  "home-hero-alt",
];
const dotTones = ["bg-brand-red", "bg-brand-green", "bg-sun-400", "bg-brand-red", "bg-brand-green"];

export default function AdmissionsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1360px] px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow tone="coral">Joining Shekinah</Eyebrow>
            <h2 className="mt-5 font-heading text-[38px] leading-[1.04] text-primary-950 md:text-[60px]">
              Your path to <span className="mark-coral">Shekinah</span>
            </h2>
          </div>
          <Illo name="kid-flag" className="hidden h-28 w-auto md:block" />
        </div>

        <div ref={ref} className={`path-timeline relative mt-14 ${shown ? "is-in" : ""}`}>
          {/* the line the dots sit on */}
          <span className="path-line absolute left-0 right-0 top-[215px] hidden h-[2px] bg-primary-950/15 lg:block" aria-hidden="true" />

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {admissionSteps.map((step, index) => (
              <li key={step.number} className="path-step" style={{ transitionDelay: `${index * 220}ms` }}>
                <div className="h-[120px] w-[120px] overflow-hidden rounded-[24px] shadow-card">
                  <img src={img(stepImages[index])} alt="" className="h-full w-full object-cover" />
                </div>
                <p className="mt-6 font-heading text-[40px] leading-none text-primary-950">Step {index + 1}</p>
                <span className={`relative z-10 mt-6 block h-3.5 w-3.5 rounded-full ring-4 ring-background-100 ${dotTones[index]}`} aria-hidden="true" />
                <h3 className="mt-6 font-heading text-[22px] leading-snug text-primary-950">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/contact" variant="red">
            Begin Your Journey
          </Button>
          <Button to="/admission" variant="outline">
            Admissions Process
          </Button>
        </div>
      </div>
    </section>
  );
}
