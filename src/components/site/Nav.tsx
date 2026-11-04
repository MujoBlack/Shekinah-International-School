import { useEffect, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { Btn, VISIT } from "./ui";

const logo = `${__BASE_PATH__.replace(/\/$/, "")}/images/shekinah-logo.svg`;

export const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics", sub: true },
  { label: "Admission", to: "/admission" },
  { label: "School Life", to: "/school-life" },
  { label: "Contact", to: "/contact" },
];

export const academicsMenu = [
  { label: "Overview", to: "/academics", text: "How learning works at Shekinah", icon: "ri-compass-3-line" },
  { label: "Our Curriculum", to: "/academics/curriculum", text: "The National Curriculum of England", icon: "ri-book-open-line" },
  { label: "Early Years", to: "/academics/early-years", text: "KG1, KG2 and Reception, ages 2 to 5", icon: "ri-seedling-line" },
  { label: "Primary", to: "/academics/primary", text: "From Year 1, strong foundations", icon: "ri-pencil-ruler-2-line" },
];

const isOn = (pathname: string, to: string) => (to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/"));

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // tuck the nav away when scrolling down fast, bring it back on any upward scroll
      if (y > 600 && y - last > 6) setHidden(true);
      else if (last - y > 4 || y < 600) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? "is-scrolled" : ""} ${hidden && !open ? "is-hidden" : ""}`} aria-label="Main">
        <Link to="/" className="logo" aria-label="Shekinah International School home">
          <img src={logo} alt="Shekinah International School" width={1233} height={932} />
        </Link>
        <ul>
          {links.map((l) => (
            <li key={l.to} className={l.sub ? "has-sub" : undefined}>
              <Link to={l.to} className={isOn(pathname, l.to) ? "on" : ""} aria-haspopup={l.sub ? "true" : undefined}>
                {l.label}
                {l.sub && <i className="ri-arrow-down-s-line caret" aria-hidden="true" />}
              </Link>
              {l.sub && (
                <div className="sub">
                  <div className="sub-in">
                    {academicsMenu.map((m, k) => (
                      <Link key={m.to} to={m.to} className={pathname === m.to ? "here" : ""} style={{ "--i": k } as CSSProperties}>
                        <span className="si" aria-hidden="true"><i className={m.icon} /></span>
                        <span>
                          <b>{m.label}</b>
                          <small>{m.text}</small>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <Btn to={VISIT} variant="red">
          Book a School Visit
        </Btn>
        <button type="button" className="icon-btn menu" aria-label="Open menu" onClick={() => setOpen(true)}>
          <i className="ri-menu-3-line" />
        </button>
      </nav>

      {open && (
        <div className="mnav" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mnav-top">
            <Link to="/">
              <img src={logo} alt="Shekinah International School" />
            </Link>
            <button type="button" className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
              <i className="ri-close-line" />
            </button>
          </div>
          <div className="mnav-links">
            {links.map((l, i) => (
              <div key={l.to} className="mnav-item">
                <Link to={l.to} className={isOn(pathname, l.to) ? "on" : ""} style={{ "--i": i } as CSSProperties}>
                  {l.label}
                  <i className="ri-arrow-right-up-line" />
                </Link>
                {l.sub && (
                  <div className="mnav-sub" style={{ "--i": i } as CSSProperties}>
                    {academicsMenu.slice(1).map((m) => (
                      <Link key={m.to} to={m.to} className={pathname === m.to ? "on" : ""}>
                        {m.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Btn to={VISIT} variant="red" arrow>
            Book a School Visit
          </Btn>
        </div>
      )}
    </>
  );
}
