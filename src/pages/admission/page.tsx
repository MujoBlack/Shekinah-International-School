import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import Path, { faqs } from "@/components/site/Path";
import { Btn, CONTACT, Faq, Label, SITE, VISIT, tel, vi } from "@/components/site/ui";
import { admissionWhyImage, transportDetails, whyPoints } from "@/mocks/admission";
import { img } from "@/lib/img";

export default function Admission() {
  return (
    <Layout footer={{ title: "Start with a visit", text: "Most families decide after walking the campus. Come and see for yourself." }}>
      <PageHero
        crumb="Admission"
        title="Joining Shekinah is simple"
        text="Five friendly steps from your first question to your child's first day. We're with you at every one."
        image={img("admission-hero")}
      >
        <Btn to={VISIT} variant="white" arrow>Book a School Visit</Btn>
        <Btn to={CONTACT} variant="ghost">Ask Admissions a Question</Btn>
      </PageHero>

      <section className="sec">
        <div className="wrap split">
          <div className="ph-frame rv rv-scale">
            <img src={admissionWhyImage} alt="Pupils at Shekinah International School" loading="lazy" />
            <div className="sticker">
              <i className="ri-heart-3-line" />
              <div><b>Since 2014</b><span>Serving Entebbe families</span></div>
            </div>
          </div>
          <div>
            <Label n="01" className="rv">Why families choose us</Label>
            <h2 className="s-h2 rv" style={vi(1)}>A school that feels like family</h2>
            <div style={{ display: "grid", gap: 14, marginTop: 32 }}>
              {whyPoints.map((w, i) => (
                <div className="card rv" key={w.title} style={{ ...vi(i + 2), minHeight: 0, padding: "22px 24px", flexDirection: "row", gap: 18, alignItems: "center" }}>
                  <span className={`ic ${["", "blush", "butter"][i]}`} style={{ position: "static", flex: "none" }}><i className={w.icon} /></span>
                  <div>
                    <h3 className="s-h4">{w.title}</h3>
                    <p className="s-muted" style={{ fontSize: 15, marginTop: 4 }}>{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
            <div>
              <Label n="02" className="rv">The process</Label>
              <h2 className="s-h2 rv" style={vi(1)}>Your path to Shekinah</h2>
            </div>
            <p className="rv" style={vi(2)}>Ages 2 to 11, with places from Kindergarten 1 through Primary. Every step starts with a conversation.</p>
          </div>
          <Path />
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 56 }}>
            <Btn to={VISIT} variant="red" arrow>Book a School Visit</Btn>
            <Btn href={tel(SITE.phones[0])} variant="line">Call {SITE.phones[0]}</Btn>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap band-grid">
          <div className="collage rv rv-scale" style={{ height: 460 }}>
            <div className="main"><img src={img("school-life-gallery-outdoor")} alt="" loading="lazy" /></div>
          </div>
          <div>
            <span className="chip rv">03 · Transport</span>
            <h2 className="s-h2 rv" style={vi(1)}>Getting to school, safely</h2>
            <p className="copy rv" style={vi(2)}>
              Shekinah provides transport services, with costs based on distance. {transportDetails.outOfTown}
            </p>
            <div className="price rv" style={vi(3)}>
              <i className="ri-bus-2-line" />
              <div><b>{transportDetails.price}</b><span>Per month · Entebbe · to and from</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap center">
          <Label n="04" className="rv">Questions</Label>
          <h2 className="s-h2 rv" style={vi(1)}>No stress. No surprises.</h2>
          <Faq items={faqs} />
        </div>
      </section>
    </Layout>
  );
}
