import { Link, useLocation } from "react-router-dom";
import { img } from "@/lib/img";
import { Btn, CONTACT, SITE, VISIT, tel } from "./ui";

const logo = `${__BASE_PATH__.replace(/\/$/, "")}/images/shekinah-logo.svg`;

interface Props {
  title?: string;
  text?: string;
  image?: string;
  imagePos?: string;
}

export default function FooterPanel({
  title = "Come and see for yourself",
  text = "Walk the campus, meet a teacher and see a class in session.",
  image = img("school-life-gallery-outdoor"),
  imagePos,
}: Props) {
  const onVisit = useLocation().pathname === VISIT;
  return (
    <footer className="panel">
      <div className="cta">
        <img src={image} alt="" loading="lazy" style={imagePos ? { objectPosition: imagePos } : undefined} />
        <div className="in">
          <h2 className="s-h2">{title}</h2>
          <p style={{ marginTop: 12, opacity: 0.9 }}>{text}</p>
          <div className="ctas">
            {onVisit ? (
              <Btn href={tel(SITE.phones[0])} variant="red" arrow>
                Call {SITE.phones[0]}
              </Btn>
            ) : (
              <Btn to={VISIT} variant="red" arrow>
                Book a School Visit
              </Btn>
            )}
            <Btn to={CONTACT} variant="white">
              Ask Us a Question
            </Btn>
          </div>
        </div>
      </div>
      <div className="foot">
        <div>
          <h5>Contact</h5>
          <p>
            Plot 1 Alex Ojera Road, Off Bugonga Road,
            <br />
            Bugonga, Entebbe, Uganda
          </p>
          <p style={{ marginTop: 10 }}>
            <a className="ln" href={tel(SITE.phones[0])}>{SITE.phones[0]}</a> ·{" "}
            <a className="ln" href={tel(SITE.phones[1])}>{SITE.phones[1]}</a>
          </p>
          <p>
            <a className="ln" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>
        <div>
          <h5>School</h5>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/school-life">School Life</Link></li>
          </ul>
        </div>
        <div>
          <h5>Parents</h5>
          <ul>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to={VISIT}>Book a School Visit</Link></li>
            <li><Link to={CONTACT}>Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h5>Follow</h5>
          <ul>
            <li><a href={SITE.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><span title="Link to be added">Facebook</span></li>
            <li><span title="Link to be added">Instagram</span></li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <img src={logo} alt="Shekinah International School" />
        <span>© {new Date().getFullYear()} Shekinah International School · Equipping Today. Shaping Tomorrow.</span>
      </div>
    </footer>
  );
}
