import { img } from "@/lib/img";
import { vi } from "./ui";

export const pathSteps = [
  { title: "Initial enquiry", text: "Contact the school by phone or email to make an appointment for a first conversation.", image: img("school-life-parents-community") },
  { title: "School visit", text: "Tour the campus, meet the Head Teacher and ask about academics, activities and student welfare.", image: img("compound-06") },
  { title: "Parent interview", text: "A meeting to talk about your expectations, your child's strengths and any areas needing support.", image: img("parents-teachers-meeting") },
  { title: "Application", text: "Pay the non-refundable application fee and submit the form with your child's documents.", image: img("academics-primary-2") },
  { title: "Assessment", text: "Literacy, numeracy or play-based assessment, depending on the year group, to find the right class.", image: img("admission-assessment-step") },
  { title: "Admission decision", text: "We let you know our decision. Successful families receive an offer letter, fee invoice and start date.", image: img("home-hero-alt") },
]

/* Ivy Kids-style timeline: the line draws across, steps slide in from the right, dots pop. */
export default function Path() {
  return (
    <div className="path">
      <span className="line" />
      <div className="steps" style={{ ["--steps" as string]: pathSteps.length }}>
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
  { q: "Which curriculum do you follow?", a: "The National Curriculum of England, taught through a broad, balanced and stimulating programme from Kindergarten through Secondary School, examined by Pearson Edexcel." },
  { q: "What ages do you take?", a: "Children from age 2 in Kindergarten 1, through Kindergarten 2 and Reception, Primary and on to Secondary School (Years 7 to 13)." },
  { q: "Do you offer school transport?", a: "Yes. Transport around Entebbe is available, with costs based on distance. For areas outside Entebbe, please contact us for rates." },
  { q: "When can my child start?", a: "Get in touch and we'll talk you through available places and start dates for your child's year group." },
];
