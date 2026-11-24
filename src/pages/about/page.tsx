import { useState } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { SunBuddy, StarBuddy, SproutBuddy } from "@/components/site/Critters";
import { Arrows, Btn, Label, Slider, VISIT, vi, type SliderApi } from "@/components/site/ui";
import { discipline, pillars, settingImages, storyParagraphs, values } from "@/mocks/about";
import { img } from "@/lib/img";
import PeopleSwipe from "@/components/site/PeopleSwipe";

const buddies = [SunBuddy, StarBuddy, SproutBuddy];
const tints = ["c-mint", "c-blush", "c-butter", "c-sage", "c-peach", "c-mint"];

export default function About() {
  const [api, setApi] = useState<SliderApi | null>(null);
  return (
    <Layout footer={{ title: "Come and see for yourself", text: "Walk the campus, meet a teacher and see why families feel at home here.", image: img("full-school-03") }}>
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
                We are a centre of excellence in education service provision, allowing children to participate, excel and develop a passion for <em>Christ and life.</em>
              </p>
            </div>
            <div className="card rv" style={{ ...vi(1), minHeight: 280 }}>
              <span className="ic blush"><i className="ri-compass-3-line" /></span>
              <span className="label">Our mission</span>
              <p className="s-serif" style={{ fontSize: 22, marginTop: 28 }}>
                We provide an education system that recognises the unique calling of every child, celebrates talents and
                abilities, and provides opportunities for investigation, experimentation, invention and innovation, allowing
                every child to attain their full potential in Christ <em>spiritually, mentally and physically.</em>
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
              <Label n="04" className="rv">Our 5 pillars</Label>
              <h2 className="s-h2 rv" style={vi(1)}>What every child is built on</h2>
            </div>
            <p className="rv" style={vi(2)}>Five pillars shape everything we do, from Early Years through to Secondary School.</p>
          </div>
          <div className="prog cols-5 pillars">
            {pillars.map((a, i) => (
              <div className={`cell rv ${["t-mint", "t-butter", "t-blush", "t-mint", "t-butter"][i]}`} key={a.title} style={vi(i)}>
                <span className="label">{String(i + 1).padStart(2, "0")}</span>
                <i className={`ico ${a.icon}`} aria-hidden="true" style={{ marginTop: 14 }} />
                <h3 className="s-h3" style={{ marginTop: 14 }}>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="center">
            <span className="chip rv">05 · Discipline</span>
            <h2 className="s-h2 rv" style={vi(1)}>Disciplined in community, thought and action</h2>
          </div>
          <div className="prog cols-3 lists">
            {discipline.map((d, i) => (
              <div className={`cell rv ${["t-mint", "t-butter", "t-blush"][i]}`} key={d.title} style={vi(i)}>
                <i className={`ico ${d.icon}`} aria-hidden="true" />
                <h3 className="s-h3" style={{ marginTop: 18 }}>{d.title}</h3>
                <ul className="checks">
                  {d.points.map((pt) => (
                    <li key={pt}><i className="ri-check-line" aria-hidden="true" />{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Label n="06" className="rv">From the Director</Label>
          <div className="quote-card rv" style={{ ...vi(1), marginTop: 24 }}>
            <div className="portrait">
              <img src={img("director-jackie-lwande")} alt="Ms. Jackie Lwande, Director of Shekinah International School" loading="lazy" />
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
                Ms. Jackie Lwande <span className="label" style={{ marginLeft: 8 }}>Director</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <Label n="07" className="rv">Our people</Label>
              <h2 className="s-h2 rv" style={vi(1)}>One school family</h2>
            </div>
            <p className="rv" style={vi(2)}>Pupils and staff from many nations, on the painted steps at the heart of our campus.</p>
          </div>
          <div className="bento people">
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
          <PeopleSwipe
            photos={[
              { src: img("full-school-01"), alt: "The whole Shekinah school and staff together", caption: "The whole school" },
              { src: img("teachers-students-01"), alt: "Senior pupils with their teacher", caption: "Our seniors" },
              ...["teachers-students-04", "teachers-students-07", "teachers-students-09"].map((n) => ({ src: img(n), alt: "A class with their teachers" })),
            ]}
          />
        </div>
      </section>

      <section className="sec-dark on-dark">
        <div className="wrap head">
          <div>
            <Label n="08" className="rv">Our setting</Label>
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
