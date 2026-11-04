import Layout from "@/components/site/Layout";
import Jump from "@/components/site/Jump";
import FaqSection from "@/components/site/FaqSection";
import { ApproachList, DetailsIntro, Enrichment, Indicators, Moments, NextStep, Partners, ProgramHero, SafetySplit } from "@/components/site/Program";
import { earlyYearsSubjects } from "@/mocks/academics";
import { img } from "@/lib/img";
import { MoreAcademics } from "../shared";

const jump = [
  { label: "Overview", id: "overview" },
  { label: "Approach", id: "approach" },
  { label: "Areas of learning", id: "areas" },
  { label: "Year groups", id: "years" },
  { label: "A day here", id: "day" },
  { label: "Questions", id: "questions" },
];

const VISION = "To be a centre of excellence in education throughout Uganda, allowing children to participate, excel and develop a passion for God and life.";

const faqs = [
  { q: "What age can my child start?", a: "Children can join from age 2 in Kindergarten 1, then move through Kindergarten 2 and Reception before starting Primary in Year 1." },
  { q: "What will my child learn in Early Years?", a: "We follow the Early Years stage of the National Curriculum of England, which covers seven areas of learning, from communication and language to expressive arts. Most of it happens through purposeful play." },
  { q: "Can you support children with special care needs?", a: "Every family has a friendly assessment meeting before joining, where we get to know your child's level and any special care needs, and talk honestly about the support we can offer." },
  { q: "Can I visit before applying?", a: "Yes, and we'd love you to. Book a visit and we'll show you the Early Years classrooms, introduce you to a teacher and let you see a class in session." },
  { q: "When can my child start?", a: "Get in touch and we'll talk you through available places and start dates for your child's year group." },
];

export default function EarlyYears() {
  return (
    <Layout footer={{ title: "The right start changes everything", text: "See our Early Years classrooms in action and meet the teachers who will know your child by name.", image: img("academics-early-years-2") }}>
      <ProgramHero
        crumb="Early Years"
        eyebrow="Ages 2 to 5 · KG1 · KG2 · Reception"
        title="Early Years Programme"
        text="A time of wonder and discovery. Our Early Years classes blend warm, nurturing care with playful challenge, so every child grows in confidence, language and curiosity."
        images={[
          { src: img("academics-early-years-1"), alt: "An Early Years pupil drawing on the carpet" },
          { src: img("home-learning-journey-early-years"), alt: "A teacher reading to Early Years pupils" },
          { src: img("home-why-shekinah-learning-development"), alt: "Two pupils building with blocks" },
        ]}
      />
      <Jump items={jump} />

      <DetailsIntro
        id="overview"
        title="Growing with confidence"
        ages="Ages 2 – 5"
        details={[
          { k: "Year groups", v: "Kindergarten 1, Kindergarten 2 and Reception" },
          { k: "Curriculum", v: "Early Years stage of the National Curriculum of England" },
          { k: "Classes", v: "Small classes, so every child is known", confirm: true },
        ]}
      >
        <p>At Shekinah, our youngest learners are met with the right blend of care and challenge. They explore, express themselves and build independence at their own pace.</p>
        <p>Warm teachers, familiar routines and a Christian, multicultural community help every child feel safe, so confidence can take root and they are ready for whatever comes next.</p>
      </DetailsIntro>

      <ApproachList
        id="approach"
        n="02"
        title="Big steps toward independence"
        text="Between two and five, children want to do things all by themselves. We support that drive with care, structure and joyful learning, blending early academics, social development and playful discovery."
        heading="How we support Early Years growth"
        items={[
          { icon: "ri-shapes-line", t: "Early academic foundations", p: "Early number and letter skills are introduced through hands-on games, stories and everyday play." },
          { icon: "ri-music-2-line", t: "Whole-child enrichment", p: "Music, singing, movement and creative arts are part of the classroom week." },
          { icon: "ri-user-smile-line", t: "Independence building", p: "Daily routines help children manage their belongings, take turns and look after themselves." },
          { icon: "ri-heart-3-line", t: "Social and emotional growth", p: "Children learn to share, manage their feelings and build friendships with classmates from many cultures." },
          { icon: "ri-run-line", t: "Physical development", p: "Outdoor play, movement games and making things build gross and fine motor skills." },
          { icon: "ri-chat-smile-2-line", t: "Language and communication", p: "Stories, songs and conversation grow confident speakers and listeners." },
          { icon: "ri-line-chart-line", t: "Progress partnership", p: "Ongoing assessment shows where each child stands, and we share progress with families." },
        ]}
      />

      <Indicators
        id="areas"
        n="03"
        tone="butter"
        title="Seven areas of learning"
        text="The Early Years curriculum is built around seven areas. Through this stage your child develops the skills that prepare them for Year 1."
        bullets={earlyYearsSubjects.map((s) => (
          <>
            <i className={s.icon} aria-hidden="true" />
            <span><b>{s.title}.</b> {s.text}</span>
          </>
        ))}
        image={img("home-life-grid-crafts")}
        alt="Early Years pupils making crafts"
      />

      <NextStep
        id="years"
        n="04"
        title="Three years, one connected journey"
        text="Each Early Years class builds on the last, honouring how young children grow while introducing the routines that make the step into Primary feel natural."
        chain={[
          { label: "Kindergarten 1" },
          { label: "Kindergarten 2" },
          { label: "Reception" },
          { label: "Year 1", to: "/academics/primary" },
        ]}
        current={["Kindergarten 1", "Kindergarten 2", "Reception"]}
        cards={[
          { id: "kg1", icon: "ri-seedling-line", t: "Kindergarten 1 · ages 2–3", p: "Gentle settling in, first friendships and plenty of play." },
          { id: "kg2", icon: "ri-plant-line", t: "Kindergarten 2 · ages 3–4", p: "Growing independence, spoken language and early mark-making." },
          { id: "reception", icon: "ri-tree-line", t: "Reception · ages 4–5", p: "Early reading, writing and number, built on a strong base of play." },
          { icon: "ri-door-open-line", t: "Ready for Year 1", p: "Confident, curious learners ready for the move into Primary." },
        ]}
      />

      <Enrichment
        n="05"
        title="Big discoveries for growing minds"
        text="Little ones are eager to explore, and enrichment brings that curiosity to life. Music, movement, art and outdoor play are part of every week."
        items={[
          { t: "Music and singing", p: "Songs, rhythm and simple instruments build listening, memory and early maths skills." },
          { t: "Creative arts", p: "Painting, drawing, making and role play nurture imagination and fine motor skills." },
          { t: "Outdoor play", p: "Running, climbing and see-saws in our playground build strength, balance and confidence." },
          { t: "Stories and books", p: "Story time every day grows vocabulary and a lifelong love of reading." },
        ]}
        media={
          <div className="pg-photo" style={{ aspectRatio: "4 / 3.2" }}>
            <img src={img("school-life-sports-2")} alt="Early Years children running on the grass" loading="lazy" />
          </div>
        }
      />

      <Moments
        id="day"
        n="06"
        title="A day of discovery in Early Years"
        text={<p>Our day blends structure and discovery, so children build independence, skills and confidence through purposeful play.</p>}
        note="Daily routine: to confirm with the school"
        items={[
          { tag: "Morning welcome", t: "Morning welcome", p: "Children hang up their bags, greet their friends and settle in with a familiar routine that makes school feel like home.", img: img("compound-19") },
          { tag: "Group learning", t: "Group learning", p: "Stories, songs and circle time on the carpet build language, listening and a sense of belonging.", img: img("about-our-story-1") },
          { tag: "Learning through play", t: "Learning through play", p: "Activity tables and learning corners invite children to count, build, draw and explore in their own way.", img: img("about-setting-early-years-classroom") },
          { tag: "Outdoor play", t: "Outdoor play", p: "Fresh air, running and climbing build strong bodies and friendships, and give busy minds a break.", img: img("home-life-grid-play") },
        ]}
      />

      <SafetySplit
        title="Safe, familiar and caring"
        image={img("compound-06")}
        alt="The Shekinah International School sign at the gate"
        note="Safety details (entry, pick-up, staff checks): to confirm with the school"
        cta={{ label: "See it on a visit", to: "/visit" }}
      >
        <p>Young children are ready to explore, but they still need the reassurance of a safe, familiar place.</p>
        <p>Small classes mean our teachers know every child personally, and every family meets us before their child joins so we understand their needs from day one.</p>
      </SafetySplit>

      <Partners
        n="07"
        title="Partners in their journey"
        text="These are years of huge growth. We keep you close to the milestones, discoveries and joy that make them special."
        note="How and how often progress is shared: to confirm with the school"
        cards={[
          { icon: "ri-line-chart-line", t: "Progress you can see", p: "Ongoing assessment helps you see how your child is growing and what comes next." },
          { icon: "ri-user-voice-line", t: "Talk to the teacher", p: "Teachers who know your child well and are happy to talk about their day." },
          { icon: "ri-calendar-event-line", t: "Family events", p: "Celebrations, learning weeks and family days that bring our community together." },
          { icon: "ri-door-open-line", t: "An open door", p: "Questions are always welcome. Call, message or drop in to the office." },
        ]}
        quote={{ text: VISION, by: "Our vision", img: img("school-life-parents-community"), alt: "Two Early Years girls running hand in hand" }}
      />

      <div id="questions">
        <FaqSection n="08" className="sec sec-top0" items={faqs} intro="What parents of little ones usually ask us first." />
      </div>
      <div className="wrap" style={{ marginTop: -60, marginBottom: 40 }}>
        <MoreAcademics current="/academics/early-years" />
      </div>
    </Layout>
  );
}
