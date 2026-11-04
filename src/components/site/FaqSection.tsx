import { Link } from "react-router-dom";
import { img } from "@/lib/img";
import { faqs } from "./Path";
import { SunBuddy } from "./Critters";
import { Btn, CONTACT, Faq, Label, SITE, tel, vi } from "./ui";

/* Questions: heading and a friendly "ask us" card on the left, numbered accordion on the right. */
export default function FaqSection({ n, className = "sec" }: { n: string; className?: string }) {
  return (
    <section className={`${className} faq-sec`}>
      <div className="wrap faq-grid">
        <div className="faq-side">
          <Label n={n} className="rv">Questions</Label>
          <h2 className="s-h2 rv" style={vi(1)}>
            No stress.
            <br />
            No surprises.
          </h2>
          <p className="rv s-muted" style={{ ...vi(2), marginTop: 16 }}>
            Straight answers to the things parents ask us most.
          </p>
          <div className="ask-card rv rv-scale" style={vi(3)}>
            <div className="ask-ph">
              <img src={img("teachers-students-05")} alt="A Shekinah teacher with three of her pupils" loading="lazy" />
            </div>
            <b>Still wondering?</b>
            <p>Our admissions team is happy to talk it through.</p>
            <div className="ask-ctas">
              <Btn href={tel(SITE.phones[0])} variant="red">
                <i className="ri-phone-fill" /> Call us
              </Btn>
              <Btn href={SITE.whatsapp} variant="white">
                <i className="ri-whatsapp-line" /> WhatsApp
              </Btn>
            </div>
            <Link to={CONTACT} className="tlink">
              Or send us a message
            </Link>
            <SunBuddy />
          </div>
        </div>
        <Faq items={faqs} />
      </div>
    </section>
  );
}
