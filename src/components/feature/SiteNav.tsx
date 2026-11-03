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
      <div className="hidden bg-primary-800 text-background-50 md:block">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-10 py-2 text-[13px]">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sun-300" aria-hidden="true" />
            Christian · Multicultural · National Curriculum of England
          </span>
          <span className="flex items-center gap-6">
            <a href="tel:+256755469134" className="cursor-pointer hover:text-sun-200">0755 469134</a>
            <a href="mailto:info@shekinahinternational.ac.ug" className="cursor-pointer hover:text-sun-200">
              info@shekinahinternational.ac.ug
            </a>
          </span>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 w-full bg-background-100/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_14px_30px_-24px_rgba(11,61,34,0.55)]" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1360px] items-center gap-4 px-4 py-2.5 md:px-10 md:py-3">
          <Logo />

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Main">
            {links.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                    active ? "bg-mint-100 text-primary-800" : "text-foreground-700 hover:bg-sun-100 hover:text-primary-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <Link
              to="/contact"
              className="hidden cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-coral-500 px-6 py-3 text-[14px] font-semibold text-white shadow-[0_4px_0_0_#A8331F] transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-400 sm:inline-flex"
            >
              Book a School Visit
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-mint-100 text-primary-900 transition-colors hover:bg-mint-200 lg:hidden"
            >
              <i className="ri-menu-3-line text-lg leading-none" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background-100 lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-coral-100 text-coral-700"
            >
              <i className="ri-close-line text-lg leading-none" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center overflow-y-auto px-5">
            {links.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`mb-2 flex cursor-pointer items-center justify-between rounded-[22px] px-5 py-4 font-heading text-[26px] text-foreground-950 ${["bg-mint-100","bg-sun-100","bg-sky-100","bg-coral-100","bg-lilac-100","bg-mint-100"][index]}`}
              >
                <span>{link.label}</span>
                <i className="ri-arrow-right-up-line text-xl text-primary-700" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-coral-500 px-6 py-4 text-[16px] font-semibold text-white shadow-[0_5px_0_0_#A8331F]"
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