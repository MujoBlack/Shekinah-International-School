import { Link } from "react-router-dom";
import Logo from "@/components/feature/Logo";
import { WaveEdge, Star } from "@/components/base/Doodles";

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
    <footer className="relative mt-12 bg-primary-800 text-white">
      <WaveEdge color="oklch(0.31 0.062 156)" className="-mt-[47px]" />
      <Star className="bob absolute right-[8%] top-12 h-8 w-8" color="#FFD155" />
      <div className="mx-auto w-full max-w-[1360px] px-5 pb-8 pt-10 md:px-10 md:pb-10 md:pt-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_0.8fr_1.15fr] lg:gap-0 lg:divide-x lg:divide-white/15">
          <div className="lg:pr-12">
            <Logo size="lg" variant="light" />
            <p className="mt-6 max-w-sm hand text-[30px] leading-snug text-sun-300">
              Equipping Today. Shaping Tomorrow.
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/80">
              A small, Christian, multicultural primary school in Entebbe, following the National Curriculum of England
              since 2014.
            </p>
            <div className="mt-7 flex items-center gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-sun-300 hover:text-primary-950"
                >
                  <i className={`${social.icon} text-[18px] leading-none`} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:px-12">
            <h4 className="font-label text-[13px] font-bold uppercase tracking-[0.16em] text-sun-300">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="cursor-pointer text-[16px] text-white/90 transition-colors duration-200 hover:text-sun-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-12">
            <h4 className="font-label text-[13px] font-bold uppercase tracking-[0.16em] text-sun-300">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/85">
              <li className="flex gap-3">
                <i className="ri-map-pin-line mt-0.5 text-sun-300" />
                <span>Plot 1 Alex Ojera Road, Off Bugonga Road, Bugonga, Entebbe, Uganda</span>
              </li>
              <li className="flex gap-3">
                <i className="ri-phone-line mt-0.5 text-sun-300" />
                <span className="flex flex-col gap-1">
                  <a href="tel:+256755469134" className="cursor-pointer hover:text-sun-300">
                    0755 469134
                  </a>
                  <a href="tel:+256772469134" className="cursor-pointer hover:text-sun-300">
                    0772 469134
                  </a>
                  <a href="tel:+256312112421" className="cursor-pointer hover:text-sun-300">
                    0312 112421
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <i className="ri-mail-line mt-0.5 text-sun-300" />
                <a
                  href="mailto:info@shekinahinternational.ac.ug"
                  className="cursor-pointer break-all hover:text-sun-300"
                >
                  info@shekinahinternational.ac.ug
                </a>
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-7 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-coral-500 px-6 py-3 text-[15px] font-semibold text-white shadow-[0_4px_0_0_#A8331F] transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-400"
            >
              Book a School Visit
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-[13px] text-white/60 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Shekinah International School. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>National Curriculum of England</span>
            <span className="hidden h-px w-4 bg-white/30 md:block" />
            <span>Entebbe, Uganda</span>
          </p>
        </div>
      </div>
    </footer>
  );
}