import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Jump from "@/components/site/Jump";
import Voices from "@/components/site/Voices";
import { Moments } from "@/components/site/Program";
import { SproutBuddy, StarBuddy, SunBuddy, PencilBuddy } from "@/components/site/Critters";
import { Arrows, Btn, Label, Slider, VISIT, vi, type SliderApi } from "@/components/site/ui";
import { values } from "@/mocks/about";
import { img } from "@/lib/img";

const jump = [
  { label: "Our programmes", id: "programmes" },
  { label: "The journey", id: "journey" },
  { label: "Beyond the classroom", id: "beyond" },
  { label: "Our principles", id: "principles" },
];

const heroImages = [
  { src: img("academics-hero"), alt: "An Early Years classroom at Shekinah" },
  { src: img("science-class-01"), alt: "A pupil in goggles pouring blue liquid in the science lab", pos: "center 30%" },
  { src: img("music-class-01"), alt: "Pupils playing recorders with their music teacher" },
];

type Cell = { t: string; p: string; to: string; cta: string; age: string; tag: string; tint: string } | { photo: string; alt: string };
const grid: Cell[] = [
  { t: "Kindergarten 1", p: "Gentle settling in, first friendships and plenty of play as children find their feet.", to: "/academics/early-years#kg1", cta: "Explore Kindergarten 1", age: "Ages 2 – 3", tag: "", tint: "t-mint" },
  { t: "Kindergarten 2", p: "Growing independence, spoken language and early mark-making through hands-on play.", to: "/academics/early-years#kg2", cta: "Discover Kindergarten 2", age: "Ages 3 – 4", tag: "y", tint: "t-butter" },
  { photo: img("home-why-shekinah-learning-development"), alt: "Two Early Years girls building with blocks" },
  { t: "Reception", p: "Early reading, writing and number, built on play, ready for the step into Year 1.", to: "/academics/early-years#reception", cta: "See Reception", age: "Ages 4 – 5", tag: "r", tint: "t-blush" },
  { t: "Primary", p: "Ten subjects in small classes, from literacy and numeracy to science, French and music.", to: "/academics/primary", cta: "Explore Primary", age: "Year 1 onward", tag: "", tint: "t-mint" },
  { photo: img("science-class-02"), alt: "Primary pupils at the science bench" },
  { t: "Our Curriculum", p: "The National Curriculum of England, and how we teach it the Shekinah way.", to: "/academics/curriculum", cta: "Read about our curriculum", age: "All ages", tag: "y", tint: "t-butter" },
  { t: "Beyond the classroom", p: "Learning weeks, sport, swimming, music and family days that bring learning to life.", to: "/school-life", cta: "Discover School Life", age: "School Life", tag: "r", tint: "t-blush" },
];

const beyond = [
  { t: "Science Week", p: "Experiments, visitors and curious questions all week long.", image: img("science-class-01"), label: "Learning week" },
  { t: "Music", p: "Recorders, singing and instruments in our own music room.", image: img("music-class-02"), label: "Music room" },
  { t: "Swimming", p: "Time in the pool that builds confidence in the water.", image: img("swimming-01"), label: "Sport" },
  { t: "Sport and play", p: "Team games and active play that build teamwork and confidence.", image: img("school-life-sports-2"), label: "Sport" },
  { t: "Creative arts", p: "Music, drama and art that help every child express themselves.", image: img("about-setting-art-room"), label: "Arts" },
  { t: "Design and making", p: "Projects that solve real problems and make things that work.", image: img("academics-subject-design-technology"), label: "Projects" },
];

const principles = [
  ...values.map((v) => ({ t: v.title, p: v.text })),
  { t: "Small, caring classes", p: "Teachers know every child personally, so nobody drifts quietly at the back and nobody is held back from their next step." },
];
const tones = ["c-mint", "c-butter", "c-blush", "c-sage"];
const buddies = [SunBuddy, SproutBuddy, StarBuddy, PencilBuddy];

function HeroSlides() {
  const [k, setK] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = window.setInterval(() => setK((x) => (x + 1) % heroImages.length), 5000);
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="hub-slides fade-up" style={{ ["--d" as string]: "0.4s" }}>
      {heroImages.map((im, i) => (
        <img key={im.src} src={im.src} alt={im.alt} className={i === k ? "on" : ""} style={im.pos ? { objectPosition: im.pos } : undefined} fetchPriority={i === 0 ? "high" : undefined} />
      ))}
      <button type="button" className="icon-btn pg-arrow l" aria-label="Previous photo" onClick={() => setK((k + heroImages.length - 1) % heroImages.length)}><i className="ri-arrow-left-line" /></button>
      <button type="button" className="icon-btn pg-arrow r" aria-label="Next photo" onClick={() => setK((k + 1) % heroImages.length)}><i className="ri-arrow-right-line" /></button>
    </div>
  );
}

export default function Academics() {
  const [api, setApi] = useState<SliderApi | null>(null);
  return (
    <Layout footer={{ title: "Find the right fit for your child", text: "Visit during the school day and watch a real lesson.", image: img("academics-primary-2") }}>
      <header className="hub-hero">
        <div className="wrap hub-grid">
          <div>
            <span className="crumbs fade-up" style={{ ["--d" as string]: "0.1s" }}>
              <Link to="/">Home</Link> <i className="ri-arrow-right-s-line" aria-hidden="true" /> Academics
            </span>
            <h1 className="s-h1 fade-up" style={{ ["--d" as string]: "0.2s" }}>A journey as unique as your child</h1>
            <p className="fade-up" style={{ ["--d" as string]: "0.35s" }}>
              From Kindergarten 1 through Primary, we follow the National Curriculum of England in small classes. Each stage builds the confidence, skills and character your child needs for the next.
            </p>
            <div className="ctas fade-up" style={{ ["--d" as string]: "0.5s" }}>
              <Btn to={VISIT} variant="red" arrow>Book a School Visit</Btn>
              <Link to="/academics/curriculum" className="tlink">Our curriculum</Link>
            </div>
          </div>
          <HeroSlides />
        </div>
      </header>
      <Jump items={jump} />

      <section id="programmes" className="sec" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="center">
            <Label n="01" className="rv">Shekinah programmes</Label>
            <h2 className="s-h2 rv" style={vi(1)}>Growth at every stage</h2>
          </div>
          <div className="prog hub-prog">
            {grid.map((c, i) =>
              "photo" in c ? (
                <div className="ph rv" key={c.photo} style={vi(i)}><img src={c.photo} alt={c.alt} loading="lazy" /></div>
              ) : (
                <Link to={c.to} className={`cell rv ${c.tint}`} key={c.t} style={vi(i)}>
                  <h3 className="s-h3">{c.t}</h3>
                  <p>{c.p}</p>
                  <span className="tlink" style={{ marginTop: 16, alignSelf: "flex-start" }}>{c.cta}</span>
                  <span className={`age ${c.tag}`} style={{ marginTop: 18 }}>{c.age}</span>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <Moments
        id="journey"
        n="02"
        label="A connected journey"
        title="A connected journey for your child"
        text={<><p>Our progression balances comfort with challenge, giving security while introducing new skills at the right time.</p><p style={{ marginTop: 8 }}>See how confidence grows from Kindergarten 1 to the top of Primary.</p></>}
        items={[
          { tag: "Ages 2 – 3", t: "Kindergarten 1", p: "Gentle settling in, first friendships and plenty of play. Familiar routines help children feel safe enough to explore.", img: img("about-setting-early-years-classroom") },
          { tag: "Ages 3 – 4", t: "Kindergarten 2", p: "Growing independence and spoken language. Stories, songs and early mark-making stretch curiosity every day.", img: img("home-learning-journey-early-years") },
          { tag: "Ages 4 – 5", t: "Reception", p: "Early reading, writing and number, built on a strong base of play, so children are ready for Year 1.", img: img("about-setting-reception-classroom") },
          { tag: "Year 1 onward", t: "Primary", p: "Ten subjects, our own science lab, French and music, with growing responsibility for their own learning.", img: img("home-learning-journey-primary") },
        ]}
      />

      <section id="beyond" className="sec-dark on-dark">
        <div className="wrap head">
          <div>
            <Label n="03" className="rv">Beyond the classroom</Label>
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

      <section id="principles" className="sec">
        <div className="wrap">
          <div className="center">
            <Label n="04" className="rv">Principles</Label>
            <h2 className="s-h2 rv" style={vi(1)}>Learning rooted in care</h2>
            <p className="rv s-muted" style={{ ...vi(2), maxWidth: 620, margin: "18px auto 0" }}>
              Every stage at Shekinah is built on the same values, so children feel secure enough to explore and grow.
            </p>
          </div>
          <div className="why two" style={{ marginTop: 48 }}>
            {principles.map((v, i) => {
              const B = buddies[i];
              return (
                <article className={`wcard ${tones[i]} rv`} key={v.t} style={vi(i)}>
                  <h3 className="s-h3">{v.t}</h3>
                  <p className="body" style={{ opacity: 1 }}>{v.p}</p>
                  <B />
                </article>
              );
            })}
          </div>
        </div>
      </section>


      <Voices n="05" />
    </Layout>
  );
}
