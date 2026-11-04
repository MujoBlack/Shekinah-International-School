import { useState } from "react";
import Layout from "@/components/site/Layout";
import FaqSection from "@/components/site/FaqSection";
import Voices from "@/components/site/Voices";
import { PencilBuddy, SproutBuddy, StarBuddy, SunBuddy } from "@/components/site/Critters";
import { Moments } from "@/components/site/Program";
import { LoopVideo } from "@/components/site/Video";
import { Btn, Label, Marquee, vi } from "@/components/site/ui";
import { Link } from "react-router-dom";
import { img } from "@/lib/img";
import { MoreAcademics, StageCards } from "../shared";

const VISION = "To be a centre of excellence in education throughout Uganda, allowing children to participate, excel and develop a passion for God and life.";

const how = [
  { t: "Broad and balanced", p: "Ten Primary subjects and seven Early Years areas, so every child discovers what they love and builds every skill they need.", tint: "c-mint", Buddy: SunBuddy },
  { t: "Small, caring classes", p: "Teachers know every child personally, so nobody drifts quietly at the back and nobody is held back from their next step.", tint: "c-butter", Buddy: SproutBuddy },
  { t: "Assessment that helps", p: "A strong, ongoing assessment system shows where each child stands, and we build support around anything that needs strengthening.", tint: "c-blush", Buddy: StarBuddy },
];

const approach = [
  { icon: "ri-hearts-line", t: "Character and faith", p: "Christian values are lived out gently in how we speak, care for each other and care for the world, so kindness and responsibility become habits. Christian Religious Education is part of Humanities." },
  { icon: "ri-emotion-happy-line", t: "Social and emotional growth", p: "PSHE helps children understand their feelings, build friendships and look after their health, in a community of many cultures." },
  { icon: "ri-translate-2", t: "More than one language", p: "French is part of the Primary curriculum, so children grow up speaking more than one international language." },
  { icon: "ri-flask-line", t: "Science by doing", p: "Lab coats and goggles on. Children learn science in our own lab, by asking questions and testing ideas." },
  { icon: "ri-palette-line", t: "Creativity every week", p: "Music, art, and design and technology give every child a way to express themselves and make things that work." },
];

const faqs = [
  { q: "Is the National Curriculum of England the same as the British curriculum?", a: "Yes. When people talk about a British curriculum school, they usually mean a school following the National Curriculum of England, as we do from Kindergarten 1 through Primary." },
  { q: "What does the curriculum cover in Early Years?", a: "Seven areas of learning: personal, social and emotional development; communication and language; physical development; mathematics; literacy; understanding the world; and expressive arts and design." },
  { q: "Which subjects are taught in Primary?", a: "Literacy, numeracy, science, humanities (history, geography and Christian Religious Education), PSHE, design and technology, art and craft, ICT, French and music." },
  { q: "How do you track my child's progress?", a: "A strong, ongoing assessment system shows exactly where each child stands, and we build support around any area that needs strengthening." },
  { q: "Can I see the curriculum in action?", a: "Yes. Book a visit during the school day to walk the campus, meet a teacher and see a class in session." },
];

function Deck() {
  const [k, setK] = useState(0);
  const go = (d: number) => setK((k + d + approach.length) % approach.length);
  const a = approach[k];
  return (
    <div className="deck-wrap">
      <div className="deck rv rv-scale" style={vi(1)}>
        <span className="deck-back b2" aria-hidden="true" />
        <span className="deck-back b1" aria-hidden="true" />
        <article className="deck-card" key={k}>
          <span className="pg-ic" aria-hidden="true"><i className={a.icon} /></span>
          <h3 className="s-h3">{a.t}</h3>
          <p>{a.p}</p>
          <span className="label" style={{ marginTop: "auto" }}>{String(k + 1).padStart(2, "0")} / {String(approach.length).padStart(2, "0")}</span>
        </article>
      </div>
      <div className="arrows deck-arrows">
        <button type="button" aria-label="Previous" onClick={() => go(-1)}><i className="ri-arrow-left-line" /></button>
        <button type="button" aria-label="Next" onClick={() => go(1)}><i className="ri-arrow-right-line" /></button>
      </div>
    </div>
  );
}

export default function Curriculum() {
  return (
    <Layout footer={{ title: "See the curriculum in action", text: "Visit during the school day and watch a real lesson.", image: img("teachers-students-07") }}>
      <header className="pghero cur-hero">
        <div className="wrap center">
          <span className="crumbs fade-up" style={{ ["--d" as string]: "0.1s" }}>
            <Link to="/">Home</Link> <i className="ri-arrow-right-s-line" aria-hidden="true" /> <Link to="/academics">Academics</Link>{" "}
            <i className="ri-arrow-right-s-line" aria-hidden="true" /> Our Curriculum
          </span>
          <span className="pg-eyebrow fade-up" style={{ ["--d" as string]: "0.2s" }}>The National Curriculum of England</span>
          <h1 className="s-h1 fade-up" style={{ ["--d" as string]: "0.3s" }}>A learning path that starts with your child</h1>
          <p className="fade-up" style={{ ["--d" as string]: "0.45s" }}>
            By building on each child's strengths and curiosity, the English curriculum, taught the Shekinah way, helps children become confident, engaged learners.
          </p>
          <div className="fade-up" style={{ ["--d" as string]: "0.6s", marginTop: 26 }}>
            <Btn href="#programmes" variant="red" arrow>Explore our programmes</Btn>
          </div>
        </div>
        <span className="floaty f1" aria-hidden="true"><SunBuddy edge="edge-l" /></span>
        <span className="floaty f2" aria-hidden="true"><StarBuddy edge="edge-r" /></span>
        <span className="floaty f3" aria-hidden="true"><PencilBuddy /></span>
        <span className="floaty f4" aria-hidden="true"><SproutBuddy /></span>
      </header>

      <section className="sec">
        <div className="wrap pg-two pg-center">
          <div>
            <Label n="01" className="rv">Our curriculum</Label>
            <h2 className="s-h2 rv" style={vi(1)}>An education that matches how children learn best</h2>
            <div className="pg-copy rv" style={vi(2)}>
              <p>Shekinah follows the National Curriculum of England, the curriculum used by British schools at home and around the world. It is taught through a broad, balanced and stimulating programme that fits the needs and interests of our children.</p>
              <p>Because it is recognised internationally, children can move confidently between British-curriculum schools if their family relocates.</p>
            </div>
          </div>
          <div className="film-card rv rv-scale" style={vi(1)}>
            <LoopVideo name="science-teacher-loop" label="A teacher guiding pupils in the science lab" />
          </div>
        </div>
      </section>

      <section className="sec sec-top0">
        <div className="wrap">
          <div className="center">
            <Label n="02" className="rv">How it works</Label>
            <h2 className="s-h2 rv" style={vi(1)}>Taught the Shekinah way</h2>
          </div>
          <div className="why short" style={{ marginTop: 48 }}>
            {how.map((h, i) => (
              <article className={`wcard ${h.tint} rv`} key={h.t} style={vi(i)}>
                <h3 className="s-h3">{h.t}</h3>
                <p className="body" style={{ opacity: 1 }}>{h.p}</p>
                <h.Buddy />
              </article>
            ))}
          </div>
          <figure className="pg-quote rv rv-scale">
            <img src={img("teachers-students-03")} alt="A Shekinah teacher with her class" loading="lazy" />
            <blockquote>
              <p>“{VISION}”</p>
              <figcaption>Our vision</figcaption>
            </blockquote>
          </figure>
        </div>
      </section>

      <div className="marquee-wrap" style={{ padding: "10px 0 70px" }}>
        <Marquee className="band-b" items={["literacy", "numeracy", "science", "French", "music", "ICT", "art", "humanities"]} icon="ri-sparkling-2-fill" />
      </div>

      <section className="sec sec-top0">
        <div className="wrap pg-two pg-center">
          <div>
            <Label n="03" className="rv">A holistic approach</Label>
            <h2 className="s-h2 rv" style={vi(1)}>A comprehensive approach to learning</h2>
            <p className="pg-copy rv" style={vi(2)}>
              Our teachers use varied methods through the day, from stories and songs to experiments, making and movement, so every child connects with learning in their own way.
            </p>
          </div>
          <Deck />
        </div>
      </section>

      <Moments
        n="04"
        label="Curriculum and development"
        title="How the curriculum is organised"
        text={<p>The English curriculum is organised in stages, so learning builds step by step from age 2.</p>}
        note="Primary year groups currently offered: to confirm with the school"
        items={[
          { tag: "Early Years", t: "Early Years · ages 2 to 5", p: "Kindergarten 1, Kindergarten 2 and Reception follow the Early Years stage, with seven areas of learning explored through purposeful play.", img: img("home-why-shekinah-learning-development") },
          { tag: "Key Stage 1", t: "Key Stage 1 · Years 1 and 2", p: "Children build secure reading, writing and number skills, and begin science, humanities, French, music and more as separate subjects.", img: img("home-learning-journey-primary") },
          { tag: "Key Stage 2", t: "Key Stage 2 · Years 3 to 6", p: "Deeper knowledge across ten subjects, with growing independence, reasoning and responsibility for their own learning.", img: img("science-class-03") },
        ]}
      />

      <section id="programmes" className="sec stage-anchor">
        <div className="wrap">
          <div className="center">
            <Label n="05" className="rv">Our programmes</Label>
            <h2 className="s-h2 rv" style={vi(1)}>Programmes for every stage of the journey</h2>
          </div>
          <StageCards
            items={[
              { t: "Early Years", meta: "KG1 · KG2 · Reception", p: "Ages 2 to 5. Learning through play across the seven areas of learning.", to: "/academics/early-years", img: img("academics-early-years-1"), alt: "An Early Years pupil drawing", icon: "ri-seedling-line", tint: "t-mint" },
              { t: "Primary", meta: "From Year 1", p: "Ten subjects taught in small classes, from literacy and numeracy to science, French and music.", to: "/academics/primary", img: img("science-class-04"), alt: "A Primary pupil in the science lab", icon: "ri-pencil-ruler-2-line", tint: "t-butter" },
              { t: "Beyond the classroom", meta: "School Life", p: "Learning weeks, sport, swimming, music and family days that make Shekinah feel like home.", to: "/school-life", img: img("music-class-03"), alt: "Pupils playing recorders", icon: "ri-sparkling-2-line", tint: "t-blush" },
            ]}
          />
        </div>
      </section>

      <Voices n="06" />

      <FaqSection n="07" items={faqs} intro="What parents ask us about the curriculum." />
      <div className="wrap" style={{ marginTop: -60, marginBottom: 40 }}>
        <MoreAcademics current="/academics/curriculum" />
      </div>
    </Layout>
  );
}
