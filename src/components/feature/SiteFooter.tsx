import { Link } from "react-router-dom";
import Logo from "@/components/feature/Logo";

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admission", to: "/admission" },
  { label: "School Life", to: "/school-life" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { icon: "ri-facebook-circle-line", label: "Facebook", href: "#" },
  { icon: "ri-instagram-line", label: "Instagram", href: "#" },
  { icon: "ri-whatsapp-line", label: "WhatsApp", href: "https://wa.me/256755469134" },
  { icon: "ri-mail-line", label: "Email", href: "mailto:info@shekinahinternational.ac.ug" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-primary-950/20 bg-background-100 text-foreground-900">
      <div className="mx-auto w-full max-w-[1360px] px-5 pb-8 pt-14 md:px-10 md:pb-10 md:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_0.8fr_1.15fr] lg:gap-0 lg:divide-x lg:divide-primary-950/20">
          <div className="lg:pr-12">
            <Logo size="lg" />
            <p className="mt-6 max-w-sm font-heading text-xl leading-snug text-foreground-950 md:text-2xl">
              Equipping Today. Shaping Tomorrow.
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-foreground-600">
              A small, Christian, multicultural primary school in Entebbe, following the National Curriculum of England
              since 2014.
            </p>
            <div className="mt-7 flex items-center gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[2px] border border-primary-950/25 text-primary-900 transition-colors duration-200 hover:bg-primary-950 hover:text-background-50"
                >
                  <i className={`${social.icon} text-[18px] leading-none`} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:px-12">
            <h4 className="font-label text-[11px] font-medium uppercase tracking-[0.24em] text-foreground-500">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="cursor-pointer text-[15px] text-foreground-800 transition-colors duration-200 hover:text-primary-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-12">
            <h4 className="font-label text-[11px] font-medium uppercase tracking-[0.24em] text-foreground-500">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-[15px] leading-relaxed text-foreground-700">
              <li className="flex gap-3">
                <i className="ri-map-pin-line mt-0.5 text-primary-800" />
                <span>Plot 1 Alex Ojera Road, Off Bugonga Road, Bugonga, Entebbe, Uganda</span>
              </li>
              <li className="flex gap-3">
                <i className="ri-phone-line mt-0.5 text-primary-800" />
                <span className="flex flex-col gap-1">
                  <a href="tel:+256755469134" className="cursor-pointer hover:text-primary-800">
                    0755 469134
                  </a>
                  <a href="tel:+256772469134" className="cursor-pointer hover:text-primary-800">
                    0772 469134
                  </a>
                  <a href="tel:+256312112421" className="cursor-pointer hover:text-primary-800">
                    0312 112421
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <i className="ri-mail-line mt-0.5 text-primary-800" />
                <a
                  href="mailto:info@shekinahinternational.ac.ug"
                  className="cursor-pointer break-all hover:text-primary-800"
                >
                  info@shekinahinternational.ac.ug
                </a>
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-7 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-primary-950 bg-primary-950 px-5 py-2.5 text-[14px] font-medium text-background-50 transition-colors duration-300 hover:bg-transparent hover:text-primary-950"
            >
              Book a School Visit
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-primary-950/20 pt-6 text-[13px] text-foreground-500 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Shekinah International School. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>National Curriculum of England</span>
            <span className="hidden h-px w-4 bg-primary-950/30 md:block" />
            <span>Entebbe, Uganda</span>
          </p>
        </div>
      </div>
    </footer>
  );
}