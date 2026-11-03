import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/feature/Logo";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admission", to: "/admission" },
  { label: "School Life", to: "/school-life" },
  { label: "Contact", to: "/contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      <header
        className={`sticky top-0 z-50 w-full border-b border-primary-950/20 bg-background-100/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_12px_30px_-26px_rgba(11,61,34,0.65)]" : ""
        }`}
      >
        <div className="flex w-full items-stretch">
          <div className="flex items-center border-r border-primary-950/20 px-4 py-3 md:px-8 md:py-4">
            <Logo />
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex" aria-label="Main">
            {links.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative cursor-pointer whitespace-nowrap py-1 text-[13px] transition-colors duration-200 ${
                    active
                      ? "text-primary-950 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-primary-950"
                      : "text-foreground-600 hover:text-primary-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 border-l border-primary-950/20 px-4 py-3 md:gap-6 md:px-8 md:py-4">
            <Link
              to="/contact"
              className="hidden cursor-pointer whitespace-nowrap text-[13px] text-primary-950 underline decoration-primary-950/30 underline-offset-4 transition-colors hover:decoration-primary-950 md:inline-block"
            >
              Enquire
            </Link>
            <Link
              to="/contact"
              className="hidden cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-primary-950 bg-primary-950 px-6 py-2.5 text-[13px] font-medium text-background-50 transition-colors duration-300 hover:bg-transparent hover:text-primary-950 sm:inline-flex"
            >
              Book a School Visit
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[2px] border border-primary-950/30 text-primary-950 transition-colors hover:bg-primary-950 hover:text-background-50 lg:hidden"
            >
              <i className="ri-menu-3-line text-lg leading-none" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background-100 lg:hidden">
          <div className="flex items-center justify-between border-b border-primary-950/20 px-4 py-3">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[2px] border border-primary-950/30 text-primary-950"
            >
              <i className="ri-close-line text-lg leading-none" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center overflow-y-auto px-5">
            {links.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex cursor-pointer items-baseline justify-between border-b border-primary-950/15 py-4 font-heading text-[28px] text-foreground-950"
              >
                <span>{link.label}</span>
                <span className="text-[11px] tracking-[0.2em] text-primary-700">0{index + 1}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-8 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-primary-950 bg-primary-950 px-6 py-3.5 text-[15px] font-medium text-background-50"
            >
              Book a School Visit
            </Link>
            <p className="mt-6 text-center text-[12px] uppercase tracking-[0.16em] text-foreground-500">
              Plot 1 Alex Ojera Road, Bugonga, Entebbe
            </p>
          </nav>
        </div>
      )}
    </>
  );
}