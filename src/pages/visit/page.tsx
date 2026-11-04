import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { VisitForm } from "@/components/site/forms";
import { Label, SITE, tel, vi } from "@/components/site/ui";
import { img } from "@/lib/img";

const expect = [
  { i: "ri-walk-line", t: "A tour of the campus", p: "Classrooms, library, science lab, ICT room and the outdoor spaces where children play." },
  { i: "ri-user-smile-line", t: "Meet the Principal", p: "Share your hopes for your child and ask anything about how we teach and care." },
  { i: "ri-presentation-line", t: "See a class in session", p: "Watch real lessons and get a feel for the warmth and the learning." },
];

export default function Visit() {
  return (
    <Layout footer={{ title: "We can't wait to meet you", text: "Prefer to talk first? Call us and we'll help you plan the visit.", image: img("home-why-shekinah-community") }}>
      <PageHero
        crumb="Book a School Visit"
        title="Come and see Shekinah for yourself"
        text="The best way to know if a school is right is to walk through the gate. Choose a day that suits you and we'll do the rest."
        image={img("contact-hero-campus")}
      />

      <section className="sec-tight">
        <div className="wrap">
          <div className="center">
            <Label n="01" className="rv">What to expect</Label>
            <h2 className="s-h2 rv" style={vi(1)}>About an hour, no pressure</h2>
          </div>
          <div className="prog cols-3">
            {expect.map((e, k) => (
              <div className={`cell rv ${["t-mint", "t-butter", "t-blush"][k]}`} key={e.t} style={{ ...vi(k), minHeight: 220 }}>
                <i className={`ico ${e.i}`} aria-hidden="true" />
                <h3 className="s-h3" style={{ marginTop: 18, fontSize: 24 }}>{e.t}</h3>
                <p>{e.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap split form-split">
          <div className="rv">
            <Label n="02">Request a visit</Label>
            <h2 className="s-h2" style={{ marginBottom: 28 }}>Pick a day that suits you</h2>
            <VisitForm />
          </div>
          <aside className="side" style={{ marginTop: 8 }}>
            <div className="card tint-butter rv" style={vi(1)}>
              <span className="ic white"><i className="ri-phone-line" /></span>
              <h3 className="s-h4 t">Rather call?</h3>
              <p className="body">Our admissions office is happy to book your visit by phone.</p>
              <p className="push" style={{ fontWeight: 600, color: "var(--pine)" }}>
                {SITE.phones.slice(0, 2).map((p) => (
                  <a key={p} href={tel(p)} className="tlink" style={{ marginRight: 14 }}>{p}</a>
                ))}
              </p>
            </div>
            <div className="card tint-mint rv" style={vi(2)}>
              <span className="ic white"><i className="ri-map-pin-2-line" /></span>
              <h3 className="s-h4 t">Where we are</h3>
              <p className="body">{SITE.address}</p>
              <p className="push"><Link className="tlink" to="/contact#find-us">Map and directions</Link></p>
            </div>
            <div className="card rv" style={vi(3)}>
              <span className="ic blush"><i className="ri-calendar-check-line" /></span>
              <h3 className="s-h4 t">What happens next</h3>
              <p className="body">We'll call or email to confirm your day and time. If your date isn't free, we'll suggest the nearest one.</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
