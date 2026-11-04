import { useMemo, useState } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Jump from "@/components/site/Jump";
import { SunBuddy } from "@/components/site/Critters";
import { Arrows, Btn, CONTACT, Label, Marquee, Slider, vi, type SliderApi } from "@/components/site/ui";
import { events, galleryImages, learningFeatures, parentsImage, sportsFeature } from "@/mocks/schoolLife";
import { img } from "@/lib/img";

const jump = [
  { label: "Learning", id: "learning" },
  { label: "Sport & play", id: "sports" },
  { label: "Creative", id: "creative" },
  { label: "Events", id: "events" },
  { label: "Parents", id: "parents" },
  { label: "Gallery", id: "gallery" },
];

const filters = ["All", "Early Years", "Learning", "Sports", "Events", "School Life"];

export default function SchoolLife() {
  const [api, setApi] = useState<SliderApi | null>(null);
  const [filter, setFilter] = useState("All");
  const shown = useMemo(() => galleryImages.filter((g) => filter === "All" || g.category === filter), [filter]);

  return (
    <Layout footer={{ title: "Come and feel the buzz", text: "The best way to see school life is on a normal school day." }}>
      <PageHero
        crumb="School Life"
        title="Each day is filled with small adventures"
        text="Learning weeks, sport, music, art and family days that make Shekinah feel like home."
        image={img("school-life-hero")}
      />
      <Jump items={jump} />

      <section id="learning" className="sec" style={{ paddingTop: 80 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <Label n="01" className="rv">Learning weeks</Label>
              <h2 className="s-h2 rv" style={vi(1)}>Whole weeks of wonder</h2>
            </div>
            <p className="rv" style={vi(2)}>Each year, special weeks turn the whole school towards one big idea.</p>
          </div>
          <div className="bento cols-2">
            {learningFeatures.map((f, i) => (
              <article className="card rv" key={f.tag} style={{ ...vi(i), padding: 0, minHeight: 0 }}>
                <div className="ph-frame" style={{ borderRadius: 0, aspectRatio: "16 / 9" }}>
                  <img src={f.image} alt="" loading="lazy" />
                </div>
                <div style={{ padding: 28 }}>
                  <span className="label">{f.tag}</span>
                  <h3 className="s-h3" style={{ marginTop: 10 }}>{f.title}</h3>
                  <p className="body">{f.text}</p>
                </div>
                <span className={`ic ${i ? "butter" : ""}`}><i className={f.icon} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sports" className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <Label n="02" className="rv">Sport &amp; play</Label>
              <h2 className="s-h2 rv" style={vi(1)}>Room to run, climb and cheer</h2>
            </div>
          </div>
          <div className="bento">
            <figure className="card photo span-2 rv" style={{ ...vi(0), minHeight: 380 }}>
              <img src={sportsFeature.image} alt="Sports Day at Shekinah" loading="lazy" />
              <figcaption>{sportsFeature.tag}</figcaption>
            </figure>
            <article className="card tint-butter rv" style={vi(1)}>
              <span className="ic white"><i className="ri-trophy-line" /></span>
              <h3 className="s-h3 t">Sports Day</h3>
              <p className="body">{sportsFeature.text}</p>
            </article>
            <article className="card rv" style={vi(2)}>
              <span className="ic"><i className="ri-football-line" /></span>
              <h3 className="s-h3 t">Team games</h3>
              <p className="body">Team games and sport that build fitness and team spirit.</p>
            </article>
            <article className="card tint-mint rv" style={vi(3)}>
              <span className="ic white"><i className="ri-run-line" /></span>
              <h3 className="s-h3 t">Playtime</h3>
              <p className="body">Room to run, climb, dig and simply be a child between lessons.</p>
              <SunBuddy />
            </article>
            <figure className="card photo rv" style={vi(4)}>
              <img src={img("school-life-sports-1")} alt="Pupils playing sport" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      <div className="marquee-wrap" style={{ padding: "20px 0 60px" }}>
        <Marquee className="band-b" items={["music", "art", "craft", "singing", "drama", "making"]} icon="ri-music-2-fill" />
      </div>

      <section id="creative" className="band blush">
        <div className="wrap band-grid">
          <div className="collage rv rv-scale">
            <div className="main"><img src={img("school-life-clubs-art-craft")} alt="Pupils doing art and craft" loading="lazy" /></div>
            <div className="pol"><img src={img("home-life-grid-crafts")} alt="" loading="lazy" /><span>Made by us</span></div>
          </div>
          <div>
            <span className="chip rv">03 · Creative</span>
            <h2 className="s-h2 rv" style={vi(1)}>Music, art and making</h2>
            <p className="copy rv" style={vi(2)}>
              Instruments, singing and rhythm. Paint, clay and making things by hand. Every child gets the chance to
              express themselves and discover what they love.
            </p>
            <ul className="checks rv" style={vi(3)}>
              <li><i className="ri-music-2-line" /> Music and singing</li>
              <li><i className="ri-palette-line" /> Art and craft</li>
              <li><i className="ri-tools-line" /> Design and technology</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="events" className="sec-dark on-dark">
        <div className="wrap head">
          <div>
            <Label n="04" className="rv">Events</Label>
            <h2 className="s-h2 rv" style={vi(1)}>Days the whole family remembers</h2>
          </div>
          <Arrows api={api} />
        </div>
        <Slider arrowsTarget={setApi}>
          {events.map((e, i) => (
            <div className="act rv rv-right" key={e.title} style={vi(i)}>
              <div className="im"><img src={e.image} alt="" loading="lazy" draggable={false} /></div>
              <div className="tx">
                <span className="label">{e.number}</span>
                <h3 className="s-h3">{e.title}</h3>
                <p>{e.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section id="parents" className="sec">
        <div className="wrap split">
          <div className="ph-frame rv rv-scale">
            <img src={parentsImage} alt="Parents and teachers together at Shekinah" loading="lazy" />
            <div className="sticker"><i className="ri-group-line" /><div><b>Parents as partners</b><span>From the very first day</span></div></div>
          </div>
          <div>
            <Label n="05" className="rv">Parents &amp; community</Label>
            <h2 className="s-h2 rv" style={vi(1)}>A community that shows up</h2>
            <p className="s-lead rv" style={{ ...vi(2), marginTop: 18 }}>
              Our parents are involved in their children's personal and school life. They take an active part in school
              activities, and we hold seminars on parenting, supporting your child's reading, understanding the
              curriculum and much more.
            </p>
            <ul className="checks rv" style={vi(3)}>
              {["Parent seminars", "Reading workshops", "Curriculum evenings", "Family events"].map((t) => (
                <li key={t}><i className="ri-check-line" /> {t}</li>
              ))}
            </ul>
            <div className="rv" style={{ ...vi(4), marginTop: 28 }}><Btn to={CONTACT} variant="pine" arrow>Get Involved</Btn></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap center">
          <Label n="06" className="rv">Gallery</Label>
          <h2 className="s-h2 rv" style={vi(1)}>A peek inside</h2>
          <div className="filters" role="group" aria-label="Filter photos">
            {filters.map((f) => (
              <button type="button" key={f} className={filter === f ? "on" : ""} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
          <div className="gal" key={filter}>
            {shown.map((g, i) => (
              <figure key={g.label + i} style={vi(i)}>
                <img src={g.image} alt={g.label} loading="lazy" />
                <figcaption>{g.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
