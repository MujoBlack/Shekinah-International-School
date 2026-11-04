import Layout from "@/components/site/Layout";
import Jump from "@/components/site/Jump";
import FaqSection from "@/components/site/FaqSection";
import { ApproachList, DetailsIntro, Enrichment, Indicators, Moments, NextStep, Partners, ProgramHero, SafetySplit } from "@/components/site/Program";
import { FilmCard } from "@/components/site/Video";
import { primarySubjects } from "@/mocks/academics";
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

const VISION = "To be a centre of excellence in education throughout Uganda, allowing children to participate, excel and develop a passion for God and life.";

const faqs = [
  { q: "Which curriculum do you follow in Primary?", a: "The National Curriculum of England, taught through a broad, balanced and stimulating programme of ten subjects, from literacy and numeracy to science, French and music." },
  { q: "Which year groups do you offer?", a: "Primary starts in Year 1, straight after Reception. Get in touch and we'll tell you which year groups have places for your child." },
  { q: "Do children learn another language?", a: "Yes. French is part of the Primary curriculum, so children grow up speaking more than one international language." },
  { q: "How do you track my child's progress?", a: "A strong, ongoing assessment system shows exactly where each child stands, and we build support around any area that needs strengthening." },
  { q: "Do you offer school transport?", a: "Yes. Transport around Entebbe is available, with costs based on distance. For areas outside Entebbe, please contact us for rates." },
];

export default function Primary() {
  return (
    <Layout footer={{ title: "See learning in action", text: "Visit during the school day, step into our science lab and watch a real lesson.", image: img("science-class-06") }}>
      <ProgramHero
        crumb="Primary"
        eyebrow="From Year 1 · Key Stages 1 and 2"
        title="Primary Programme"
        text="Strong foundations and growing independence. From Year 1, children build real depth in literacy and numeracy, explore science and the wider world, and learn to take responsibility for their own learning."
        images={[
          { src: img("science-class-04"), alt: "A Primary pupil in a lab coat pouring liquid through a funnel" },
          { src: img("home-learning-journey-primary"), alt: "Primary pupils writing at their desks" },
          { src: img("science-class-06"), alt: "Primary pupils in lab coats and goggles with their teacher" },
        ]}
      />
      <Jump items={jump} />

      <DetailsIntro
        id="overview"
        title="Strong foundations, growing independence"
        ages="Year 1 onward"
        details={[
          { k: "Year groups", v: "From Year 1", confirm: true },
          { k: "Curriculum", v: "Key Stages 1 and 2 of the National Curriculum of England" },
          { k: "Subjects", v: "Ten subjects, including science, French, ICT and music" },
        ]}
      >
        <p>Primary at Shekinah builds on everything children gained in Early Years. Lessons happen in small classes, where teachers know every child and can support and stretch them at the right moment.</p>
        <p>Alongside strong literacy and numeracy, children explore science in our own lab, learn French, make music and grow in character through Christian values lived out each day.</p>
      </DetailsIntro>

      <ApproachList
        id="approach"
        n="02"
        title="Learning to own their learning"
        text="Primary is where curiosity turns into real skill. We balance high expectations with warm support, so children grow confident in every subject and in themselves."
        heading="How we support Primary learners"
        items={[
          { icon: "ri-book-read-line", t: "Confident readers and writers", p: "Daily literacy builds fluent reading, clear writing and a love of books." },
          { icon: "ri-calculator-line", t: "Number confidence", p: "Numeracy that moves from understanding to fluent, flexible problem solving." },
          { icon: "ri-flask-line", t: "Science by doing", p: "Goggles on in our science lab, where children learn by asking questions and testing ideas." },
          { icon: "ri-global-line", t: "The wider world", p: "History, geography and Christian Religious Education help children understand people and places." },
          { icon: "ri-translate-2", t: "More than one language", p: "French lessons help children speak more than one international language." },
          { icon: "ri-palette-line", t: "Creativity and making", p: "Music, art and design and technology give every child a way to express themselves." },
          { icon: "ri-line-chart-line", t: "Assessment and tailored support", p: "Ongoing assessment shows where each child stands, so support and challenge come at the right time." },
        ]}
      />

      <Indicators
        id="subjects"
        n="03"
        tone="mint"
        title="Ten subjects, one curious child"
        text="A broad, balanced timetable means every child discovers what they love, and builds the skills they need for the next stage."
        bullets={primarySubjects.map((s) => (
          <>
            <i className={s.icon} aria-hidden="true" />
            <span><b>{s.title}.</b> {s.text}</span>
          </>
        ))}
        image={img("academics-primary-1")}
        alt="A Primary pupil working in her exercise book"
      />

      <NextStep
        id="stages"
        n="04"
        title="Building year on year"
        text="Primary follows the Key Stages of the National Curriculum of England, so learning builds step by step and children can move confidently between British-curriculum schools."
        chain={[
          { label: "Reception", to: "/academics/early-years" },
          { label: "Key Stage 1 (Years 1–2)" },
          { label: "Key Stage 2 (Years 3–6)" },
        ]}
        current={["Key Stage 1 (Years 1–2)", "Key Stage 2 (Years 3–6)"]}
        cards={[
          { icon: "ri-book-open-line", t: "Reading for meaning", p: "From phonics and first books to reading widely and thinking about what they read." },
          { icon: "ri-pencil-ruler-2-line", t: "Number and reasoning", p: "From counting and calculation to fractions, measures and explaining their thinking." },
          { icon: "ri-microscope-line", t: "Thinking like scientists", p: "From noticing the world around them to planning fair tests in the lab." },
          { icon: "ri-user-star-line", t: "Taking responsibility", p: "From following routines to organising their own learning and helping others." },
        ]}
      >
      </NextStep>

      <Enrichment
        n="05"
        title="Big discoveries beyond the timetable"
        text="Enrichment brings learning to life. Our pupils learn science by doing it, make music together, and build confidence through sport."
        items={[
          { t: "Science lab", p: "Lab coats and goggles on. Experiments that turn questions into discoveries." },
          { t: "Music", p: "Recorders, singing and instruments in our own music room." },
          { t: "Swimming and sport", p: "Time in the pool and team games that build fitness, confidence and team spirit." },
          { t: "Design and making", p: "Projects that solve real problems and make things that work." },
        ]}
        media={<FilmCard title="Watch our science film" text="41 seconds · no sound" />}
      />

      <Moments
        id="day"
        n="06"
        title="A day of discovery in Primary"
        text={<p>A Primary day balances focused lessons with hands-on discovery, creativity and time to play.</p>}
        note="Daily timetable: to confirm with the school"
        items={[
          { tag: "Core lessons", t: "Core lessons", p: "Mornings focus on literacy and numeracy, in small classes where every child gets attention.", img: img("about-setting-library") },
          { tag: "Science lab", t: "In the science lab", p: "Pupils work at the bench, test their ideas and record what they find.", img: img("science-class-02") },
          { tag: "Music and arts", t: "Music and the arts", p: "Recorders, singing, art and making give every child a chance to express themselves.", img: img("music-class-02") },
          { tag: "Sport and play", t: "Sport and play", p: "Team games and playtime on our court build fitness, friendship and team spirit.", img: img("school-life-sports-1") },
        ]}
      />

      <SafetySplit
        title="Every child known, supported and stretched"
        image={img("science-class-05")}
        alt="A teacher with pupils in the science lab"
        cta={{ label: "Meet our teachers on a visit", to: "/visit" }}
      >
        <p>Small, caring classes mean nobody drifts quietly at the back, and nobody is held back from their next step.</p>
        <p>Our ongoing assessment shows exactly where each child stands, and we build support around any area that needs strengthening.</p>
      </SafetySplit>

      <Partners
        n="07"
        title="Partners in their journey"
        text="Primary is a time of big growth. We keep you close to your child's progress, achievements and next steps."
        note="How and how often reports are shared: to confirm with the school"
        cards={[
          { icon: "ri-file-chart-line", t: "Progress reports", p: "Clear updates on how your child is doing in each subject and what comes next." },
          { icon: "ri-user-voice-line", t: "Talk to the teacher", p: "Teachers who know your child well and are happy to talk through their progress." },
          { icon: "ri-calendar-event-line", t: "Learning weeks and events", p: "Science Week, Book Week, Sports Day and family days to share in." },
          { icon: "ri-door-open-line", t: "An open door", p: "Questions are always welcome. Call, message or drop in to the office." },
        ]}
        quote={{ text: VISION, by: "Our vision", img: img("full-school-02"), alt: "The whole school together on the painted steps" }}
      />

      <div id="questions">
        <FaqSection n="08" className="sec sec-top0" items={faqs} intro="What Primary parents usually ask us." />
      </div>
      <div className="wrap" style={{ marginTop: -60, marginBottom: 40 }}>
        <MoreAcademics current="/academics/primary" />
      </div>
    </Layout>
  );
}
