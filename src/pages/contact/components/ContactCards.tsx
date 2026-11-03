import Reveal from "@/components/base/Reveal";
import { contactAddress, contactEmail, contactPhones, contactWhatsApp } from "@/mocks/contact";

export default function ContactCards() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-16 md:px-8 md:pt-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        <Reveal>
          <div className="h-full rounded-[22px] border border-background-200 bg-white p-6 shadow-card md:p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <i className="ri-map-pin-line text-[20px] leading-none" />
            </span>
            <h2 className="mt-5 font-heading text-[21px] font-normal text-foreground-950 md:text-[23px]">
              Visit us
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-foreground-600">{contactAddress}</p>
            <p className="mt-4 text-[12px] uppercase tracking-[0.16em] text-foreground-400">
              Bugonga · Entebbe
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex h-full flex-col rounded-[22px] border border-background-200 bg-white p-6 shadow-card md:p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <i className="ri-phone-line text-[20px] leading-none" />
            </span>
            <h2 className="mt-5 font-heading text-[21px] font-normal text-foreground-950 md:text-[23px]">
              Call us
            </h2>
            <ul className="mt-3 space-y-1.5">
              {contactPhones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="inline-flex cursor-pointer items-center gap-2 text-[15px] text-foreground-700 transition-colors hover:text-primary-600"
                  >
                    <i className="ri-arrow-right-s-line text-[13px] leading-none text-primary-400" />
                    <span className="whitespace-nowrap">{phone}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-primary-500/50 px-4 py-2.5 text-[14px] font-medium text-primary-700 transition-colors hover:bg-primary-50 sm:w-auto"
            >
              <i className="ri-whatsapp-line text-[16px] leading-none" />
              <span className="whitespace-nowrap">WhatsApp us</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="h-full rounded-[22px] border border-background-200 bg-white p-6 shadow-card md:p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <i className="ri-mail-line text-[20px] leading-none" />
            </span>
            <h2 className="mt-5 font-heading text-[21px] font-normal text-foreground-950 md:text-[23px]">
              Email us
            </h2>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-2.5 block cursor-pointer break-all text-[15px] leading-relaxed text-foreground-700 transition-colors hover:text-primary-600"
            >
              {contactEmail}
            </a>
            <p className="mt-4 text-[12px] uppercase tracking-[0.16em] text-foreground-400">
              We reply within a day
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}