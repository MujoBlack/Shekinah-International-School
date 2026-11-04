import { useState } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Jump from "@/components/site/Jump";
import { Arrows, Btn, Label, Slider, VISIT, vi, type SliderApi } from "@/components/site/ui";
import { earlyYearsSubjects, primarySubjects } from "@/mocks/academics";
import { img } from "@/lib/img";

const jump = [
  { label: "Curriculum", id: "curriculum" },
  { label: "Early Years", id: "early-years" },
  { label: "Primary", id: "primary" },
  { label: "Beyond the classroom", id: "beyond" },
];

const stages = [
  { t: "Kindergarten 1", p: "Gentle settling in, first friendships and plenty of play.", age: "Ages 2 – 3", tag: "", tint: "t-mint" },
  { t: "Kindergarten 2", p: "Growing independence, spoken language and early mark-making.", age: "Ages 3 – 4", tag: "y", tint: "t-butter" },
  { t: "Reception", p: "Confident learners ready for the step into Year 1.", age: "Ages 4 – 5", tag: "r", tint: "t-blush" },
];

const beyond = [
  { t: "Science Week", p: "Experiments, visitors and curious questions all week long.", image: img("academics-beyond-classroom"), label: "Every year" },
  { t: "Sport and play", p: "Team games and active play that build teamwork and confidence.", image: img("school-life-sports-2"), label: "Every week" },
  { t: "Creative arts", p: "Music, drama and art that help every child express themselves.", image: img("about-setting-art-room"), label: "Every week" },
  { t: "Design and making", p: "Projects that solve real problems and make things that work.", image: img("academics-subject-design-technology"), label: "Projects" },
];

const tints = ["t-mint", "t-butter", "t-blush"];

export default function Academics() {
  const [api, setApi] = useState<SliderApi | null>(null);
  return (
    <Layout footer={{ title: "See learning in action", text: "Visit during the school day and watch a real lesson.", image: img("academics-primary-2") }}>
      <PageHero
        crumb="Academics"
        title="A broad, balanced curriculum that starts with the child"
        text="The National Curriculum of England, taught in small classes, from Kindergarten 1 through Primary."
        image={img("academics-hero")}
      />
      <Jump items={jump} />

      <section id="curriculum" className="intro" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <Label n="01" className="rv">Our curriculum</Label>
          <h2 className="s-serif rv" style={vi(1)}>
            Shekinah follows the <em>National Curriculum of England</em>, taught through a broad, balanced and
            stimulating programme that fits the needs and interests of our children.
          </h2>
          <p className="s-lead rv" style={{ ...vi(2), maxWidth: 640, margin: "24px auto 0" }}>
            Lessons happen in small classes, with regular assessment so every child is supported and stretched at the
            right moment.
          </p>
        </div>
      </section>

      <section id="early-years" className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <Label n="02" className="rv">Early Years</Label>
              <h2 className="s-h2 rv" style={vi(1)}>Learning through play, ages 2 to 5</h2>
            </div>
            <p className="rv" style={vi(2)}>Three warm, play-filled years that build the confidence, language and curiosity every child needs for Year 1.</p>
          </div>
          <div className="prog">
            {stages.map((s, i) => (
              <div className={`cell rv ${s.tint}`} key={s.t} style={vi(i)}>
                <h3 className="s-h3">{s.t}</h3>
                <p>{s.p}</p>
                <span className={`age ${s.tag}`}>{s.age}</span>
              </div>
            ))}
            <div className="ph rv" style={vi(3)}><img src={img("academics-early-years-1")} alt="Early Years pupils painting" loading="lazy" /></div>
          </div>
          <h3 className="s-h4 rv" style={{ marginTop: 56 }}>Seven areas of learning</h3>
          <div className="prog" style={{ marginTop: 20 }}>
            {earlyYearsSubjects.map((s, i) => (
              <div className={`cell rv ${tints[i % 3]}`} key={s.title} style={{ ...vi(i), minHeight: 210 }}>
                <i className={`ico ${s.icon}`} aria-hidden="true" />
                <h3 className="s-h4" style={{ marginTop: 16 }}>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
            <div className="ph rv" style={vi(7)}><img src={img("academics-early-years-2")} alt="" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section id="primary" className="band mint">
        <div className="wrap band-grid flip">
          <div className="collage rv rv-scale">
            <div className="main"><img src={img("academics-primary-1")} alt="Primary pupils in class" loading="lazy" /></div>
            <div className="pol"><img src={img("academics-subject-literacy")} alt="" loading="lazy" /><span>Reading together</span></div>
          </div>
          <div>
            <span className="chip rv">03 · Primary</span>
            <h2 className="s-h2 rv" style={vi(1)}>Strong foundations, growing independence</h2>
            <p className="copy rv" style={vi(2)}>
              From Year 1, children build real depth in literacy and numeracy, explore science and the wider world, and
              learn to take responsibility for their own learning.
            </p>
            <p className="note-flag rv" style={vi(3)}><i className="ri-information-line" /> Year groups offered: to confirm with the school</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="center">
            <Label n="04" className="rv">Primary subjects</Label>
            <h2 className="s-h2 rv" style={vi(1)}>Ten subjects, one curious child</h2>
          </div>
          <div className="prog cols-5">
            {primarySubjects.map((s, i) => (
              <div className={`cell rv ${tints[i % 3]}`} key={s.title} style={{ ...vi(i), minHeight: 210 }}>
                <i className={`ico ${s.icon}`} aria-hidden="true" />
                <h3 className="s-h4" style={{ marginTop: 16 }}>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="beyond" className="sec-dark on-dark">
        <div className="wrap head">
          <div>
            <Label n="05" className="rv">Beyond the classroom</Label>
            <h2 className="s-h2 rv" style={vi(1)}>Learning that doesn't stop at the door</h2>
          </div>
          <Arrows api={api} />
        </div>
        <Slider arrowsTarget={setApi}>
          {beyond.map((b, i) => (
            <div className="act rv rv-right" key={b.t} style={vi(i)}>
              <div className="im"><img src={b.image} alt="" loading="lazy" draggable={false} /></div>
              <div className="tx">
                <span className="label">{b.label}</span>
                <h3 className="s-h3">{b.t}</h3>
                <p>{b.p}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="wrap" style={{ marginTop: 48 }}>
          <Btn to={VISIT} variant="white" arrow>Book a School Visit</Btn>
        </div>
      </section>
    </Layout>
  );
}
