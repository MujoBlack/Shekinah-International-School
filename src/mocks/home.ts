import { img } from "@/lib/img";

export const facts = [
  {
    icon: "ri-history-line",
    title: "Since 2014",
    caption: "Over 12 years in Entebbe",
  },
  {
    icon: "ri-book-2-line",
    title: "National Curriculum of England",
    caption: "Broad, balanced and stimulating",
  },
  {
    icon: "ri-global-line",
    title: "Pupils from 15 nationalities",
    caption: "A genuinely multicultural family",
  },
  {
    icon: "ri-graduation-cap-line",
    title: "Early Years & Primary",
    caption: "Kindergarten to Primary on one campus",
  },
];

export const promiseCards = [
  {
    icon: "ri-lightbulb-flash-line",
    title: "Learning",
    text: "Lessons are planned to spark curiosity, so children ask questions, explore ideas and build understanding that lasts.",
    tint: "bg-primary-50",
    iconTint: "bg-background-50 text-primary-600",
  },
  {
    icon: "ri-seedling-line",
    title: "Growth",
    text: "Small classes mean every child is known by name, encouraged at their own pace and challenged at the right level.",
    tint: "bg-secondary-100",
    iconTint: "bg-background-50 text-secondary-700",
  },
  {
    icon: "ri-heart-3-line",
    title: "Wellbeing",
    text: "A calm, safe and prayerful environment where children feel secure enough to try, to stumble and to try again.",
    tint: "bg-accent-50",
    iconTint: "bg-background-50 text-accent-600",
  },
  {
    icon: "ri-team-line",
    title: "Community",
    text: "Families from many nations belong here, and parents are welcomed as real partners in their child's progress.",
    tint: "bg-background-200",
    iconTint: "bg-background-50 text-primary-600",
  },
];

export const journeyCards = [
  {
    title: "Early Years",
    ageTag: "Ages 2 - 5",
    stages: "KG1  ·  KG2  ·  Reception",
    description:
      "Warm, play-rich classrooms where our youngest children learn to listen, share, speak up and wonder. Carefully guided play builds the confidence and early skills they carry into Primary.",
    image: img("home-learning-journey-early-years"),
    href: "/academics",
  },
  {
    title: "Primary",
    ageTag: "Year 1 upwards",
    stages: "Year 1  -  Year 6",
    description:
      "A structured, enquiry-led programme following the National Curriculum of England. Children read widely, reason confidently and take on responsibility as they move up through the school.",
    image: img("home-learning-journey-primary"),
    href: "/academics",
  },
];

export const whyCards = [
  {
    title: "A supportive environment",
    text: "Teachers know every child personally. Kindness, patience and clear expectations shape the whole day.",
    image: img("home-why-shekinah-supportive-environment"),
  },
  {
    title: "Learning and development",
    text: "A broad curriculum with real depth in literacy, numeracy and enquiry, tracked closely so no child drifts.",
    image: img("home-why-shekinah-learning-development"),
  },
  {
    title: "Activities beyond the classroom",
    text: "Sport, music, art and hands-on projects that let children discover what they love outside a textbook.",
    image: img("home-why-shekinah-beyond-classroom"),
  },
  {
    title: "A caring parent community",
    text: "Open doors, honest feedback and a parent body that genuinely looks out for one another.",
    image: img("home-why-shekinah-community"),
  },
];

export const lifeImages = [
  { label: "Classroom learning", className: "col-span-2 row-span-2", image: img("home-meet-shekinah") },
  { label: "Sports", className: "col-span-1 row-span-1", image: img("home-life-grid-sports") },
  { label: "Outdoor play", className: "col-span-1 row-span-2", image: img("school-life-gallery-outdoor") },
  { label: "Play", className: "col-span-1 row-span-1", image: img("home-life-grid-play") },
  { label: "Science", className: "col-span-2 row-span-1", image: img("academics-subject-science") },
  { label: "Crafts", className: "col-span-1 row-span-1", image: img("home-life-grid-crafts") },
  { label: "ICT", className: "col-span-1 row-span-1", image: img("home-life-grid-ict") },
  { label: "School events", className: "col-span-2 md:col-span-4", image: img("school-life-events-cookery-day") },
];

export const testimonials = [
  {
    quote:
      "We moved to Entebbe not knowing a single family. Within one term Shekinah felt like home. Our daughter is known, encouraged and genuinely happy to go to school each morning.",
    name: "Sarah N.",
    role: "Parent of Amara, Year 2",
  },
  {
    quote:
      "What impressed us most was how carefully the teachers notice the small things. They told us exactly where our son was thriving and where he needed a nudge, and then they acted on it.",
    name: "David and Grace O.",
    role: "Parents of Elijah, Year 4",
  },
  {
    quote:
      "It is a school with real warmth but still high expectations. The Christian values are lived out gently, and our children have made friends from six different countries.",
    name: "Marie-Claire B.",
    role: "Parent of Léa, Reception",
  },
];

export const admissionSteps = [
  { number: "01", title: "Enquire", text: "Send us a short message about your child and the year group you need." },
  { number: "02", title: "Visit", text: "Come and walk the campus, meet a teacher and see a class in session." },
  { number: "03", title: "Apply", text: "Complete the application form and share previous school records." },
  { number: "04", title: "Assessment", text: "A friendly, age-appropriate assessment and a conversation with you." },
  { number: "05", title: "Enrol", text: "Accept your place, complete the paperwork and join the family." },
];