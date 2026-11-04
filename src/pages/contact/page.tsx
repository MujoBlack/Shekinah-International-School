import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/forms";
import { Btn, Label, SITE, VISIT, tel, vi } from "@/components/site/ui";
import { img } from "@/lib/img";

const mapEmbedUrl = "https://www.google.com/maps?q=Plot%201%20Alex%20Ojera%20Road%2C%20Bugonga%2C%20Entebbe%2C%20Uganda&z=15&hl=en&output=embed";
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Plot%201%20Alex%20Ojera%20Road%2C%20Bugonga%2C%20Entebbe%2C%20Uganda";

const cards = [
  { i: "ri-phone-line", t: "Call us", v: SITE.phones.join(" · "), href: tel(SITE.phones[0]), tint: "" },
  { i: "ri-mail-line", t: "Email", v: SITE.email, href: `mailto:${SITE.email}`, tint: "blush" },
  { i: "ri-whatsapp-line", t: "WhatsApp", v: "Message us on WhatsApp", href: SITE.whatsapp, tint: "butter" },
  { i: "ri-map-pin-2-line", t: "Visit us", v: "Off Bugonga Road, Entebbe", href: "#find-us", tint: "" },
];

export default function Contact() {
  return (
    <Layout footer={{ title: "Ready to see it in person?", text: "Book a visit to walk the campus, meet a teacher and see a class in session.", image: img("home-hero-alt") }}>
      <PageHero
        crumb="Contact"
        title="We'd love to hear from you"
        text="Questions about admissions, fees, transport or anything else? Send us a message or give us a call."
        image={img("compound-06")}
        position="center 55%"
      />

      <section className="sec-tight">
        <div className="wrap">
          <div className="bento cols-4" style={{ marginTop: 0 }}>
            {cards.map((c, k) => (
              <a key={c.t} href={c.href} className="card ccard rv" style={vi(k)} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <span className={`ic ${c.tint}`}><i className={c.i} /></span>
                <span className="label" style={{ marginTop: 6 }}>{c.t}</span>
                <span className="val">{c.v}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 20 }}>
        <div className="wrap split form-split">
          <div className="rv">
            <Label n="01">Send a message</Label>
            <h2 className="s-h2" style={{ marginBottom: 28 }}>How can we help?</h2>
            <ContactForm />
          </div>
          <aside className="side" style={{ marginTop: 8 }}>
            <div className="card tint-butter rv" style={vi(1)}>
              <span className="ic white"><i className="ri-calendar-event-line" /></span>
              <h3 className="s-h4 t">Looking for a tour?</h3>
              <p className="body">School visits have their own booking form, so you can pick the day that suits you.</p>
              <div className="push"><Btn to={VISIT} variant="red" arrow>Book a School Visit</Btn></div>
            </div>
            <div className="card rv" style={vi(2)}>
              <span className="ic"><i className="ri-time-line" /></span>
              <h3 className="s-h4 t">When we reply</h3>
              <p className="body">We aim to answer every message within one school day.</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="find-us" className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <Label n="02" className="rv">Find us</Label>
              <h2 className="s-h2 rv" style={vi(1)}>In Bugonga, Entebbe</h2>
            </div>
            <div className="rv" style={vi(2)}>
              <p className="s-muted" style={{ maxWidth: 380 }}>{SITE.address}</p>
              <div style={{ marginTop: 16 }}><Btn href={directionsUrl} variant="pine" arrow>Get Directions</Btn></div>
            </div>
          </div>
          <div className="map rv rv-scale" style={{ marginTop: 40 }}>
            <iframe title="Map showing Shekinah International School" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
