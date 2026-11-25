import Layout from "@/components/site/Layout";
import Jump from "@/components/site/Jump";
import FaqSection from "@/components/site/FaqSection";
import { ApproachList, DetailsIntro, Enrichment, Indicators, Moments, NextStep, Partners, ProgramHero, SafetySplit } from "@/components/site/Program";
import { FilmCard } from "@/components/site/Video";
import { img } from "@/lib/img";
import { MoreAcademics } from "../shared";

const jump = [
  { label: "Overview", id: "overview" },
  { label: "Approach", id: "approach" },
  { label: "Subjects", id: "subjects" },
  { label: "Key stages", id: "stages" },
  { label: "A day here", id: "day" },
  { label: "Questions", id: "questions" },
];

const VISION = "We are a centre of excellence in education service provision, allowing children to participate, excel and develop a passion for Christ and life.";

/* Subject list kept general on purpose: the exact Secondary timetable and qualifications are to confirm with the school. */
const subjects = [
  { icon: "ri-book-read-line", title: "English", text: "Reading, writing and speaking with confidence, accuracy and style." },
  { icon: "ri-calculator-line", title: "Mathematics", text: "Fluent, flexible problem solving and clear mathematical reasoning." },
  { icon: "ri-flask-line", title: "Sciences", text: "Practical work in our science lab, from first experiments to independent investigations." },
  { icon: "ri-global-line", title: "Humanities", text: "History, geography and Christian Religious Education to understand people, places and faith." },
  { icon: "ri-translate-2", title: "Languages", text: "Continuing French, so students speak more than one international language." },
  { icon: "ri-robot-2-line", title: "ICT and robotics", text: "Computing skills and robotics projects that build logical, creative thinking." },
  { icon: "ri-hammer-line", title: "Design and technology", text: "Designing, making and testing real things in the workshop." },
  { icon: "ri-restaurant-line", title: "Home economics", text: "Practical life skills, from nutrition to cooking and managing a home." },
  { icon: "ri-palette-line", title: "Creative arts", text: "Music, art and dance that give every student a way to express themselves." },
  { icon: "ri-basketball-line", title: "Sport", text: "Swimming, basketball and roller skating that build fitness, discipline and teamwork." },
];

const faqs = [
  { q: "Which curriculum do you follow in Secondary?", a: "The National Curriculum of England, with Pearson Edexcel as our examining body." },
  { q: "Which year groups do you offer?", a: "Secondary covers Key Stage 3, Years 7 to 11 (ages 11 to 16), followed by Years 12 and 13 (ages 17 to 19). Get in touch and we'll tell you which year groups have places for your child." },
  { q: "Can my child join from another school?", a: "Yes. Students join from British-curriculum and other schools. After a visit and parent interview, a short assessment helps us find the right class." },
  { q: "How do you track my child's progress?", a: "A strong, ongoing assessment system shows exactly where each student stands, and we build support around any area that needs strengthening." },
  { q: "Do you offer school transport?", a: "Yes. Transport around Entebbe is available, with costs based on distance. For areas outside Entebbe, please contact us for rates." },
];

export default function Secondary() {
  return (
    <Layout footer={{ title: "See Secondary in action", text: "Visit during the school day, meet our teachers and see our students at work.", image: img("science-class-06") }}>
      <ProgramHero
        crumb="Secondary"
        eyebrow="Years 7 to 13 · Ages 11 to 19"
        title="Secondary School"
        text="Bold, strong and courageously living for Christ. From Year 7, students build real depth across a broad range of subjects, examined by Pearson Edexcel, and grow into confident young leaders ready for university and the world beyond."
        images={[
          { src: img("teachers-students-01"), alt: "Secondary students in blazers with their teacher" },
          { src: img("science-class-03"), alt: "A student working at the science bench" },
          { src: img("academics-subject-design-technology"), alt: "A student drilling wood in design and technology" },
        ]}
      />
      <Jump items={jump} />

      <DetailsIntro
        id="overview"
        title="Deep learning, strong character"
        ages="Ages 11 – 19"
        details={[
          { k: "Year groups", v: "Years 7 to 13" },
          { k: "Curriculum", v: "National Curriculum of England" },
          { k: "Examining body", v: "Pearson Edexcel" },
        ]}
      >
        <p>Secondary at Shekinah continues the journey from Early Years and Primary on the same campus. Small classes mean teachers know every student, and can support and stretch them at the right moment.</p>
        <p>Alongside strong academics, students lead, serve and grow in faith, so they leave us ready to make a positive impact in their communities.</p>
      </DetailsIntro>

      <ApproachList
        id="approach"
        n="02"
        title="Ready for what comes next"
        text="Secondary is where students take ownership of their learning. We hold high expectations with warm support, so every student grows in knowledge, character and confidence."
        heading="How we support Secondary students"
        items={[
          { icon: "ri-award-line", t: "Academic excellence", p: "Focused teaching towards Pearson Edexcel examinations, with clear targets and regular feedback." },
          { icon: "ri-user-star-line", t: "Leadership", p: "Real responsibility in school life, so students learn to lead with integrity and serve others." },
          { icon: "ri-cross-line", t: "Faith that is lived", p: "Students grow in their walk with Christ, boldly living out Christian values each day." },
          { icon: "ri-lightbulb-flash-line", t: "Independent thinking", p: "Research, discussion and projects that build critical, creative minds." },
          { icon: "ri-line-chart-line", t: "Assessment and tailored support", p: "Ongoing assessment shows where each student stands, so support and challenge come at the right time." },
          { icon: "ri-compass-3-line", t: "Guidance for the future", p: "Help choosing subjects and planning the next step, towards university and beyond." },
        ]}
      />

      <Indicators
        id="subjects"
        n="03"
        tone="mint"
        title="A broad range of subjects"
        text="A balanced timetable means every student builds strong foundations and discovers where their gifts lie."
        bullets={subjects.map((s) => (
          <>
            <i className={s.icon} aria-hidden="true" />
            <span><b>{s.title}.</b> {s.text}</span>
          </>
        ))}
        image={img("science-class-06")}
        alt="Secondary students in lab coats and goggles with their teacher"
      />

      <NextStep
        id="stages"
        n="04"
        title="Building year on year"
        text="Secondary follows the Key Stages of the National Curriculum of England, so learning builds step by step towards Pearson Edexcel examinations."
        chain={[
          { label: "Key Stage 2 (Years 3–6)", to: "/academics/primary" },
          { label: "Key Stage 3 (Years 7–11)" },
          { label: "Key Stage (Years 12–13)" },
        ]}
        current={["Key Stage 3 (Years 7–11)", "Key Stage (Years 12–13)"]}
        cards={[
          { icon: "ri-book-open-line", t: "Key Stage 3", p: "Years 7 to 11, ages 11 to 16. A broad range of subjects, examined by Pearson Edexcel." },
          { icon: "ri-graduation-cap-line", t: "Years 12 and 13", p: "Ages 17 to 19. The final years of school, preparing students for university and the world beyond." },
          { icon: "ri-team-line", t: "Leading others", p: "Older students mentor younger pupils and take on leadership roles across the school." },
          { icon: "ri-heart-line", t: "Serving the community", p: "Students care for each other and the community, so kindness and responsibility become a habit." },
        ]}
      >
      </NextStep>

      <Enrichment
        n="05"
        title="Beyond the classroom"
        text="Our activities build skill, discipline and teamwork, and help every student find something they love."
        items={[
          { t: "Sport", p: "Swimming, basketball and roller skating, with expert coaching." },
          { t: "Robotics and chess", p: "Building, coding and strategy that sharpen logical thinking." },
          { t: "Home economics and D&T", p: "Practical skills for life, from the kitchen to the workshop." },
          { t: "Dance and creative arts", p: "Music, art and dance that build confidence and expression." },
        ]}
        media={<FilmCard title="Watch our science film" text="41 seconds · no sound" />}
      />

      <Moments
        id="day"
        n="06"
        title="A day in Secondary"
        text={<p>A Secondary day balances focused lessons with practical work, activities and time together.</p>}
        note="Daily timetable: to confirm with the school"
        items={[
          { tag: "Lessons", t: "Focused lessons", p: "Small classes where every student takes part, asks questions and gets feedback.", img: img("teachers-students-01") },
          { tag: "Science lab", t: "In the science lab", p: "Practical investigations that build real scientific skill.", img: img("science-class-04") },
          { tag: "Making", t: "Design and technology", p: "Designing, making and testing in the workshop.", img: img("academics-subject-design-technology") },
          { tag: "Sport", t: "Sport and activities", p: "Basketball, swimming and roller skating that build fitness and teamwork.", img: img("team-girls-ball") },
        ]}
      />

      <SafetySplit
        title="Every student known, supported and stretched"
        image={img("science-class-05")}
        alt="A teacher with students in the science lab"
        cta={{ label: "Meet our teachers on a visit", to: "/visit" }}
      >
        <p>Small, caring classes mean nobody drifts quietly at the back, and nobody is held back from their next step.</p>
        <p>Our ongoing assessment shows exactly where each student stands, and we build support around any area that needs strengthening.</p>
      </SafetySplit>

      <Partners
        n="07"
        title="Partners in their journey"
        text="The Secondary years are full of big decisions. We keep you close to your child's progress, achievements and next steps."
        note="How and how often reports are shared: to confirm with the school"
        cards={[
          { icon: "ri-file-chart-line", t: "Progress reports", p: "Clear updates on how your child is doing in each subject and what comes next." },
          { icon: "ri-user-voice-line", t: "Talk to the teacher", p: "Teachers who know your child well and are happy to talk through their progress." },
          { icon: "ri-compass-3-line", t: "Planning ahead", p: "Support with subject choices, examinations and the step to university." },
          { icon: "ri-door-open-line", t: "An open door", p: "Questions are always welcome. Call, message or drop in to the office." },
        ]}
        quote={{ text: VISION, by: "Our vision", img: img("full-school-02"), alt: "The whole school together on the painted steps" }}
      />

      <div id="questions">
        <FaqSection n="08" className="sec sec-top0" items={faqs} intro="What Secondary parents usually ask us." />
      </div>
      <div className="wrap" style={{ marginTop: -60, marginBottom: 40 }}>
        <MoreAcademics current="/academics/secondary" />
      </div>
    </Layout>
  );
}
