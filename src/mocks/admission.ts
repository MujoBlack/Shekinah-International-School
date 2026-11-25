import { img } from "@/lib/img";

export const admissionHeroImage =
  img("admission-hero");

export const admissionWhyImage =
  img("admission-why-shekinah");

export const whyPoints = [
  {
    icon: "ri-heart-3-line",
    title: "A Christian, multicultural school",
    text: "Families from 15 nationalities learning together in Entebbe since 2014.",
  },
  {
    icon: "ri-book-open-line",
    title: "The National Curriculum of England",
    text: "A broad, balanced and stimulating programme from Kindergarten to Secondary School.",
  },
  {
    icon: "ri-user-heart-line",
    title: "Small, caring classes",
    text: "Teachers who know every child by name, and by strength.",
  },
];

export const admissionsSteps = [
  {
    number: "01",
    title: "Enquire",
    text: "Make an appointment with our admissions office.",
    icon: "ri-phone-line",
  },
  {
    number: "02",
    title: "Visit",
    text: "Tour the school and meet the Head Teacher to share your expectations and learn what we offer.",
    icon: "ri-walk-line",
  },
  {
    number: "03",
    title: "Apply",
    text: "Fill in the application form.",
    icon: "ri-file-text-line",
  },
  {
    number: "04",
    title: "Assessment",
    text: "A second meeting with your child to understand their level and any special care needs, so we can plan around them.",
    icon: "ri-user-heart-line",
  },
  {
    number: "05",
    title: "Enrol",
    text: "Pay the registration fee, complete the registration form and welcome to Shekinah!",
    icon: "ri-door-open-line",
  },
];

export const admissionPhones = ["0755 469134", "0772 469134", "0312 112421"];

export const levelOptions = ["Kindergarten 1", "Kindergarten 2", "Reception", "Year 1", "Year 2 and up"];

export const transportDetails = {
  price: "UGX 350,000",
  note: "Transport around Entebbe is UGX 350,000 per month (to and from).",
  outOfTown: "For areas outside Entebbe, please contact us for rates.",
};
export const enrolmentDetails = [
  { title: "Parent interview", icon: "ri-chat-smile-2-line", intro: "A meeting with parents to discuss:", points: ["Family expectations", "Your child's strengths", "Areas requiring support", "School values and culture", "Parent-school partnership"] },
  { title: "What to submit", icon: "ri-folder-open-line", intro: "With the completed application form:", points: ["Child's birth certificate or passport", "Passport-size photographs", "Previous school reports", "Transfer or recommendation letter", "Any learning support reports"] },
  { title: "Assessment", icon: "ri-edit-2-line", intro: "Depending on the year group:", points: ["Literacy assessment", "Numeracy assessment", "Developmental, play-based assessment (Early Years)", "Interview with the student (Upper Primary and Secondary)"], note: "To determine readiness, identify support needs and ensure the right class placement." },
  { title: "Admission decision", icon: "ri-mail-check-line", intro: "The school communicates one of:", points: ["Acceptance", "Conditional acceptance", "Waitlist", "Regret letter, if we are unable to offer a place"], note: "Successful applicants receive an offer letter, fee invoice and start date." },
];
