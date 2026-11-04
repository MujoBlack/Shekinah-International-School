import { useEffect, useState, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { Btn, VISIT } from "./ui";

const logo = `${__BASE_PATH__.replace(/\/$/, "")}/images/shekinah-logo.svg`;

export const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admission", to: "/admission" },
  { label: "School Life", to: "/school-life" },
  { label: "Contact", to: "/contact" },
];

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
            <li key={l.to}>
              <Link to={l.to} className={pathname === l.to ? "on" : ""}>
                {l.label}
              </Link>
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
              <Link key={l.to} to={l.to} className={pathname === l.to ? "on" : ""} style={{ "--i": i } as CSSProperties}>
                {l.label}
                <i className="ri-arrow-right-up-line" />
              </Link>
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
