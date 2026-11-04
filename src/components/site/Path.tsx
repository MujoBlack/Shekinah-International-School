import { img } from "@/lib/img";
import { vi } from "./ui";

export const pathSteps = [
  { title: "Enquire", text: "Get in touch with our admissions office and tell us about your child.", image: img("school-life-parents-community") },
  { title: "Visit", text: "Tour the school and meet the Principal to share your hopes and see what we offer.", image: img("contact-hero-campus") },
  { title: "Apply", text: "Fill in the application form and share previous school records.", image: img("academics-primary-2") },
  { title: "Assessment", text: "A friendly meeting with your child to understand their level and any special care needs.", image: img("admission-assessment-step") },
  { title: "Enrol", text: "Pay the registration fee, complete the registration form and welcome to Shekinah!", image: img("home-hero-alt") },
];

/* Ivy Kids-style timeline: the line draws across, steps slide in from the right, dots pop. */
export default function Path() {
  return (
    <div className="path">
      <span className="line" />
      <div className="steps">
        {pathSteps.map((s, i) => (
          <div className="step" key={s.title} style={vi(i)}>
            <div className="th">
              <img src={s.image} alt="" loading="lazy" />
            </div>
            <div className="n">Step {i + 1}</div>
            <div className="d" style={vi(i)} />
            <h4 className="s-h4">{s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const faqs = [
  { q: "Can I visit before applying?", a: "Yes, and we'd love you to. Book a visit and we'll show you around, introduce you to a teacher and let you see a class in session." },
  { q: "Which curriculum do you follow?", a: "The National Curriculum of England, taught through a broad, balanced and stimulating programme from Kindergarten through Primary." },
  { q: "What ages do you take?", a: "Children from age 2 in Kindergarten 1, through Kindergarten 2 and Reception, and on into Primary." },
  { q: "Do you offer school transport?", a: "Yes. Transport around Entebbe is available, with costs based on distance. For areas outside Entebbe, please contact us for rates." },
  { q: "When can my child start?", a: "Get in touch and we'll talk you through available places and start dates for your child's year group." },
];
