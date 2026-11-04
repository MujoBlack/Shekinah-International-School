import { useState } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { SunBuddy, StarBuddy, SproutBuddy } from "@/components/site/Critters";
import { Arrows, Btn, Label, Slider, VISIT, vi, type SliderApi } from "@/components/site/ui";
import { approachPoints, settingImages, storyParagraphs, values } from "@/mocks/about";
import { img } from "@/lib/img";

const buddies = [SunBuddy, StarBuddy, SproutBuddy];
const tints = ["c-mint", "c-blush", "c-butter"];

export default function About() {
  const [api, setApi] = useState<SliderApi | null>(null);
  return (
    <Layout>
      <PageHero
        crumb="About Us"
        title="Rooted in faith, open to the world"
        text="Since 2014, Shekinah has been a Christian, multicultural school where every child is known, valued and helped to flourish."
        image={img("about-hero")}
      >
        <Btn to={VISIT} variant="white" arrow>Book a School Visit</Btn>
      </PageHero>

      <section className="sec">
        <div className="wrap split">
          <div>
            <Label n="01" className="rv">Our story</Label>
            <h2 className="s-h2 rv" style={vi(1)}>Equipping today's children for tomorrow</h2>
            {storyParagraphs.map((p, i) => (
              <p className="s-lead rv" key={i} style={{ ...vi(i + 2), marginTop: 18 }}>{p}</p>
            ))}
          </div>
          <div className="collage rv rv-scale">
            <div className="main"><img src={img("compound-18")} alt="The green walkway with our 10 years sign" loading="lazy" style={{ objectPosition: "center 35%" }} /></div>
            <div className="pol"><img src={img("about-our-story-2")} alt="" loading="lazy" /><span>10 years and counting</span></div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="center">
            <span className="chip rv">02 · Vision &amp; mission</span>
            <h2 className="s-h2 rv" style={vi(1)}>Why we exist</h2>
          </div>
          <div className="bento cols-2">
            <div className="card rv" style={{ ...vi(0), minHeight: 280 }}>
              <span className="ic"><i className="ri-eye-line" /></span>
              <span className="label">Our vision</span>
              <p className="s-serif" style={{ fontSize: 28, marginTop: 28 }}>
                To be a centre of excellence in education throughout Uganda, allowing children to participate, excel and develop a passion for God and life.
              </p>
            </div>
            <div className="card rv" style={{ ...vi(1), minHeight: 280 }}>
              <span className="ic blush"><i className="ri-compass-3-line" /></span>
              <span className="label">Our mission</span>
              <p className="s-serif" style={{ fontSize: 28, marginTop: 28 }}>
                To provide an education that will <em>equip today's children for tomorrow.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="why-head">
            <Label n="03" className="rv">Our values</Label>
            <h2 className="s-h2 rv" style={vi(1)}>What we hold on to</h2>
          </div>
          <div className="why">
            {values.map((v, i) => {
              const Buddy = buddies[i];
              return (
                <article className={`wcard ${tints[i]} rv`} key={v.title} style={vi(i)}>
                  <span className="num label"><b>{v.number}</b></span>
                  <h3 className="s-h3" style={{ marginTop: 18 }}>{v.title}</h3>
                  <p className="body">{v.text}</p>
                  <span className="badge br" aria-hidden="true"><i className={v.icon} /></span>
                  {i === 0 && <Buddy />}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <Label n="04" className="rv">Our approach</Label>
              <h2 className="s-h2 rv" style={vi(1)}>How every child is helped to grow</h2>
            </div>
            <p className="rv" style={vi(2)}>Three things shape every classroom at Shekinah, from Kindergarten 1 to the top of Primary.</p>
          </div>
          <div className="prog cols-3">
            {approachPoints.map((a, i) => (
              <div className={`cell rv ${["t-mint", "t-butter", "t-blush"][i]}`} key={a.title} style={vi(i)}>
                <i className={`ico ${a.icon}`} aria-hidden="true" />
                <h3 className="s-h3" style={{ marginTop: 18 }}>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Label n="05" className="rv">From the Principal</Label>
          <div className="quote-card rv" style={{ ...vi(1), marginTop: 24 }}>
            <div className="portrait">
              <div>
                <b>JL</b>
                <span>Portrait coming soon</span>
              </div>
            </div>
            <div>
              <blockquote>
                “We raise children to have a passion for God and for life, in a safe, secure and stimulating environment
                that gives them the opportunity to explore, grow and become useful citizens, nationally and globally.”
              </blockquote>
              <p className="s-muted" style={{ marginTop: 18 }}>
                Through our strong assessment system, we track every child's progress and create programmes tailored to
                strengthen any area where they need support. When you entrust your child to us, we commit to their
                progress, growth, security and wellbeing, and to making them feel accepted and loved.
              </p>
              <p style={{ marginTop: 18, fontWeight: 600, color: "var(--pine)" }}>
                Ms. Jackie Lwande <span className="label" style={{ marginLeft: 8 }}>Principal</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <Label n="06" className="rv">Our people</Label>
              <h2 className="s-h2 rv" style={vi(1)}>One school family</h2>
            </div>
            <p className="rv" style={vi(2)}>Pupils and staff from many nations, on the painted steps at the heart of our campus.</p>
          </div>
          <div className="bento">
            <figure className="card photo span-2 rv" style={{ ...vi(0), minHeight: 420 }}>
              <img src={img("full-school-01")} alt="The whole Shekinah school and staff together" loading="lazy" />
              <figcaption>The whole school</figcaption>
            </figure>
            <figure className="card photo rv" style={vi(1)}>
              <img src={img("teachers-students-01")} alt="Senior pupils with their teacher" loading="lazy" />
            </figure>
            {["teachers-students-04", "teachers-students-07", "teachers-students-09"].map((n, i) => (
              <figure className="card photo rv" key={n} style={{ ...vi(i + 2), minHeight: 240 }}>
                <img src={img(n)} alt="A class with their teachers" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-dark on-dark">
        <div className="wrap head">
          <div>
            <Label n="07" className="rv">Our setting</Label>
            <h2 className="s-h2 rv" style={vi(1)}>Spaces made for learning</h2>
          </div>
          <Arrows api={api} />
        </div>
        <Slider arrowsTarget={setApi}>
          {[...settingImages, { label: "Music room", image: img("music-class-06") }, { label: "The court", image: img("compound-01") }, { label: "Playground", image: img("compound-13") }].map((s, i) => (
            <div className="act tall rv rv-right" key={s.label} style={vi(i)}>
              <div className="im"><img src={s.image} alt={s.label} loading="lazy" draggable={false} /></div>
              <div className="tx">
                <span className="label">Room {String(i + 1).padStart(2, "0")}</span>
                <h3 className="s-h3">{s.label}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </Layout>
  );
}
