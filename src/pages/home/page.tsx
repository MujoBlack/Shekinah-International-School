import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import Path, { faqs } from "@/components/site/Path";
import { PencilBuddy, SproutBuddy, StarBuddy, SunBuddy } from "@/components/site/Critters";
import { Arrows, Btn, CONTACT, Faq, Label, Marquee, Rise, Slider, VISIT, vi, type SliderApi } from "@/components/site/ui";
import { img } from "@/lib/img";

function Hero() {
  return (
    <header className="hero">
      <img src={img("home-hero")} alt="Pupils at Shekinah International School" fetchPriority="high" />
      <div className="in">
        <span className="pill-news fade-up" style={{ ["--d" as string]: "0.1s" }}>
          <span>Est. 2014</span> Christian · Multicultural · National Curriculum of England
        </span>
        <h1 className="s-h1">
          <Rise text="A place to learn, grow and belong" />
        </h1>
        <p className="fade-up" style={{ ["--d" as string]: "0.7s" }}>
          A friendly, safe school in Bugonga, Entebbe, where every child can learn, develop and thrive.
        </p>
        <div className="ctas fade-up" style={{ ["--d" as string]: "0.9s" }}>
          <Btn to={VISIT} variant="white" arrow>
            Book a School Visit
          </Btn>
          <Btn to="/about" variant="ghost">
            Explore Our School
          </Btn>
        </div>
      </div>
      <Link to={`${CONTACT}#find-us`} className="find">
        <img src={img("contact-hero-campus")} alt="" />
        FIND US
      </Link>
    </header>
  );
}

function Intro() {
  const feats = [
    { i: "ri-seedling-line", h: "Ages 2 – 11", p: "Early Years and Primary on one campus" },
    { i: "ri-book-open-line", h: "English curriculum", p: "The National Curriculum of England" },
    { i: "ri-earth-line", h: "15 nationalities", p: "A genuinely multicultural family" },
    { i: "ri-heart-3-line", h: "Christian values", p: "Faith lived out gently, every day" },
  ];
  return (
    <section className="intro">
      <div className="wrap">
        <Label n="01" className="rv">Who we are</Label>
        <h2 className="s-serif rv" style={vi(1)}>
          A Christian, multicultural school in the heart of Entebbe, where children from <em>many nations</em> learn
          side by side, are known by name, and grow in faith, character and curiosity.
        </h2>
        <div className="feats">
          {feats.map((f, i) => (
            <div className="feat rv" key={f.h} style={vi(i + 2)}>
              <i className={f.i} aria-hidden="true" />
              <h4>{f.h}</h4>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Promise() {
  return (
    <section className="band">
      <div className="wrap band-grid">
        <div className="collage rv rv-scale">
          <div className="main">
            <img src={img("home-meet-shekinah")} alt="Children learning together" loading="lazy" />
          </div>
          <div className="pol">
            <img src={img("home-hero-alt")} alt="" loading="lazy" />
            <span>Friends from day one</span>
          </div>
        </div>
        <div>
          <span className="chip rv">02 · Our promise</span>
          <h2 className="s-h2 rv" style={vi(1)}>Every child is unique, and deserves to be seen that way.</h2>
          <p className="copy rv" style={vi(2)}>
            Small classes mean teachers know every child personally. We help each one discover their gifts early, and
            we welcome parents as real partners in their progress.
          </p>
          <div className="rv" style={vi(3)}>
            <Btn to="/about" variant="pine" arrow>
              Discover Our Story
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 03 · Why Shekinah, laid out like Ivy Kids' "Why" section */
function Why() {
  return (
    <section className="sec" style={{ paddingBottom: 40 }}>
      <div className="wrap">
        <div className="why-head">
          <Label n="03" className="rv">Why Shekinah</Label>
          <h2 className="s-h2 rv" style={vi(1)}>Growing curious minds and kind hearts</h2>
        </div>
        <div className="why">
          <article className="wcard c-mint rv" style={vi(0)}>
            <h3 className="s-h3">Learning shaped around your child</h3>
            <p className="q">“My teacher knows exactly how I learn.”</p>
            <p className="body">
              Small classes and teachers who know every child personally. A strong assessment system shows where each
              child stands, and support is built around what they need next.
            </p>
            <div className="push"><Link to="/academics" className="tlink">How we teach</Link></div>
            <SunBuddy />
          </article>
          <article className="wcard c-blush rv" style={vi(1)}>
            <h3 className="s-h3">A curriculum that travels with you</h3>
            <span className="badge tr" aria-hidden="true"><i className="ri-book-open-line" /></span>
            <p className="q">“We moved country and nothing was lost.”</p>
            <p className="body">
              The National Curriculum of England, with real depth in literacy, numeracy and enquiry, so children move
              on confidently wherever life takes the family.
            </p>
            <div className="push"><Link to="/academics" className="tlink">Our curriculum</Link></div>
            <PencilBuddy />
          </article>
          <article className="wcard c-butter rv" style={vi(2)}>
            <h3 className="s-h3">Faith and character, every day</h3>
            <span className="badge tr" aria-hidden="true"><i className="ri-hand-heart-line" /></span>
            <p className="q">“The first time they share without being asked, you'll know it's working.”</p>
            <p className="body">
              Christian values are lived out gently in how we speak, care for each other and care for the world, so
              kindness and responsibility become habits.
            </p>
            <div className="push"><Link to="/about" className="tlink">Our values</Link></div>
          </article>
          <figure className="wcard photo rv" style={vi(0)}>
            <img src={img("home-why-shekinah-learning-development")} alt="A pupil concentrating in class" loading="lazy" />
          </figure>
          <article className="wcard c-sage rv" style={vi(1)}>
            <h3 className="s-h3">Something new to try every week</h3>
            <p className="q">“There's always something new to try.”</p>
            <p className="body">
              Sport, music, art, ICT and hands-on science that let children discover what they love, beyond the
              classroom.
            </p>
            <div className="push"><Link to="/school-life" className="tlink">School life</Link></div>
            <span className="badge br" aria-hidden="true"><i className="ri-football-line" /></span>
            <StarBuddy />
          </article>
          <article className="wcard c-peach rv" style={vi(2)}>
            <h3 className="s-h3">A family from many nations</h3>
            <span className="badge tr" aria-hidden="true"><i className="ri-earth-line" /></span>
            <p className="q">“It feels like a family here.”</p>
            <p className="body">
              Open doors, honest feedback and a parent community from around 15 nationalities that looks out for one
              another.
            </p>
            <div className="push"><Link to="/school-life#parents" className="tlink">Parents &amp; community</Link></div>
            <SproutBuddy />
          </article>
        </div>
      </div>
    </section>
  );
}

function Break() {
  return (
    <div className="marquee-wrap" aria-label="Equipping today, shaping tomorrow">
      <Marquee
        className="band-a"
        items={["Equipping today", "Shaping tomorrow", "Ages 2 – 11", "15 nationalities", "Christian values", "Since 2014"]}
        icon="ri-sparkling-2-fill"
      />
      <Marquee
        className="band-b"
        reverse
        items={["learn", "grow", "belong", "explore", "create", "play", "discover"]}
        icon="ri-heart-3-fill"
      />
    </div>
  );
}

const programmes = [
  { t: "Kindergarten 1", p: "Gentle first steps into school: friendships, routines and plenty of guided play.", age: "Ages 2 – 3", tag: "", tint: "t-mint", to: "/academics#early-years" },
  { t: "Kindergarten 2", p: "Growing independence, early language and number through hands-on discovery.", age: "Ages 3 – 4", tag: "y", tint: "t-butter", to: "/academics#early-years" },
  { photo: img("academics-early-years-2"), alt: "Early Years pupils building together" },
  { t: "Reception", p: "Confident early readers and thinkers, ready for the step up to Year 1.", age: "Ages 4 – 5", tag: "r", tint: "t-blush", to: "/academics#early-years" },
  { photo: img("academics-primary-1"), alt: "Primary pupils in class" },
  { t: "Lower Primary", p: "Years 1 – 3. Strong foundations in reading, writing and maths.", age: "Year 1 – 3", tag: "", tint: "t-mint", to: "/academics#primary" },
  { t: "Upper Primary", p: "Years 4 – 6. Enquiry, responsibility and confidence for the next school.", age: "Year 4 – 6", tag: "y", tint: "t-butter", to: "/academics#primary" },
  { t: "Beyond the classroom", p: "Sport, ICT, science, art and music woven through the week.", age: "All ages", tag: "r", tint: "t-blush", to: "/academics#beyond" },
];

function Programmes() {
  return (
    <section className="sec" style={{ paddingTop: 40 }}>
      <div className="wrap">
        <div className="center">
          <Label n="04" className="rv">Our programmes</Label>
          <h2 className="s-h2 rv" style={vi(1)}>Nurturing growth at every stage</h2>
        </div>
        <div className="prog">
          {programmes.map((c, i) =>
            c.photo ? (
              <div className="ph rv" key={i} style={vi(i)}>
                <img src={c.photo} alt={c.alt} loading="lazy" />
              </div>
            ) : (
              <Link to={c.to!} className={`rv ${c.tint}`} key={i} style={vi(i)}>
                <h3 className="s-h3">{c.t}</h3>
                <p>{c.p}</p>
                <span className="go" aria-hidden="true"><i className="ri-arrow-right-up-line" /></span>
                <span className={`age ${c.tag}`}>{c.age}</span>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* Curved ribbon whose text drifts as you scroll, with parallax photo and count-up stats */
function Ribbon() {
  const sec = useRef<HTMLElement>(null);
  const tp = useRef<SVGTextPathElement>(null);
  const photo = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sec.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const k = (window.innerHeight - r.top) / (window.innerHeight + r.height); // 0..1 while on screen
        if (k < -0.1 || k > 1.1) return;
        tp.current?.setAttribute("startOffset", `${-28 + k * 26}%`);
        if (photo.current) photo.current.style.transform = `translateY(${(k - 0.5) * -70}px)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  const phrase = "Equipping today · Shaping tomorrow · ";
  return (
    <section className="ribbon" ref={sec}>
      <img ref={photo} src={img("school-life-hero")} alt="" loading="lazy" />
      <svg viewBox="0 0 1440 220" aria-hidden="true">
        <path id="ribbon-curve" d="M-200 150 C 360 20, 720 20, 1080 110 S 1440 170, 1700 120" fill="none" stroke="#FAE6B9" strokeWidth="74" strokeLinecap="round" />
        <text fontFamily="Parkinsans" fontSize="34" fontWeight="600" fill="#0D3B22" dy="12">
          <textPath ref={tp} href="#ribbon-curve" startOffset="-20%">
            {phrase.repeat(6)}
          </textPath>
        </text>
      </svg>
      <div className="stats">
        <div className="wrap">
          <div className="rv"><b data-count="2014" data-from="1990">2014</b><span>Serving Entebbe families since</span></div>
          <div className="rv" style={vi(1)}><b data-count="15">15</b><span>Nationalities learning together</span></div>
          <div className="rv" style={vi(2)}><b data-count="2">2</b><span>Stages on one caring campus</span></div>
          <div className="rv" style={vi(3)}><b>1</b><span>Curriculum: the National Curriculum of England</span></div>
        </div>
      </div>
    </section>
  );
}

const activities = [
  { label: "Sport & play", t: "On the court and the lawn", p: "Ball games, races and free play that build teamwork and confidence.", image: img("home-life-grid-sports"), to: "/school-life#sports" },
  { label: "Science", t: "Hands-on discovery", p: "Real experiments in our science lab, goggles and all.", image: img("academics-subject-science"), to: "/school-life#learning" },
  { label: "Art & design", t: "Making and creating", p: "Design, craft and art that let every child's ideas take shape.", image: img("home-life-grid-crafts"), to: "/school-life#creative" },
  { label: "ICT", t: "Curious with computers", p: "Using technology to find, create and share information.", image: img("home-life-grid-ict"), to: "/academics#primary" },
  { label: "Events", t: "Days to remember", p: "Family fun days, cookery days and celebrations as a school family.", image: img("school-life-events-cookery-day"), to: "/school-life#events" },
];

function Life() {
  const [api, setApi] = useState<SliderApi | null>(null);
  return (
    <section className="sec-dark on-dark">
      <div className="wrap head">
        <div>
          <Label n="05" className="rv">Life at Shekinah</Label>
          <h2 className="s-h2 rv" style={{ ...vi(1), maxWidth: 620 }}>Each day is filled with small adventures</h2>
        </div>
        <Arrows api={api} />
      </div>
      <Slider arrowsTarget={setApi}>
        {activities.map((a, i) => (
          <Link to={a.to} className="act rv rv-right" key={a.t} style={vi(i)}>
            <div className="im"><img src={a.image} alt="" loading="lazy" draggable={false} /></div>
            <div className="tx">
              <span className="label">{a.label}</span>
              <h3 className="s-h3">{a.t}</h3>
              <p>{a.p}</p>
              <span className="sm">Show details <i className="ri-arrow-right-line" /></span>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
}

function Voices() {
  const quotes = [
    { q: "Within one term Shekinah felt like home. Our daughter is known, encouraged and happy to go to school each morning.", who: "Parent · Year 2" },
    { q: "The teachers notice the small things, tell us exactly where our son is thriving, and act on it.", who: "Parents · Year 4" },
    { q: "Real warmth with high expectations. Our children have made friends from all over the world.", who: "Parent · Reception" },
  ];
  return (
    <section className="voices on-dark">
      <div className="wrap">
        <Label n="06" className="rv">Parent voices</Label>
        <h2 className="s-serif rv" style={vi(1)}>From our families to yours</h2>
        <div className="vgrid">
          {quotes.map((v, i) => (
            <figure className="v rv" key={v.who} style={vi(i)}>
              <span className="st" aria-label="5 stars">★★★★★</span>
              <blockquote>“{v.q}”</blockquote>
              <small>{v.who}</small>
            </figure>
          ))}
        </div>
        <span className="tag-ph">Placeholder quotes: replace with real parent testimonials before launch</span>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="sec">
      <div className="wrap">
        <Label n="07" className="rv">Joining Shekinah</Label>
        <h2 className="s-h2 rv" style={vi(1)}>Your path to Shekinah</h2>
        <Path />
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Btn to="/admission" variant="red" arrow>
            Begin Your Journey
          </Btn>
        </div>
      </div>
    </section>
  );
}

function Questions() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap center">
        <Label n="08" className="rv">Questions</Label>
        <h2 className="s-h2 rv" style={vi(1)}>No stress. No surprises.</h2>
        <Faq items={faqs} />
        <p className="rv s-muted" style={{ marginTop: 28 }}>
          Still wondering about something? <Link to={CONTACT} className="tlink">Ask us a question</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Promise />
      <Why />
      <Break />
      <Programmes />
      <Ribbon />
      <Life />
      <Voices />
      <Journey />
      <Questions />
    </Layout>
  );
}
