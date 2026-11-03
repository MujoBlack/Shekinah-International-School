import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import { contactAddressShort, directionsUrl, mapEmbedUrl } from "@/mocks/contact";

export default function FindUs() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
      <Reveal>
        <Eyebrow tone="mint">Find us</Eyebrow>
        <div className="mt-5 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-10">
          <h2 className="max-w-xl font-heading text-[28px] font-normal leading-[1.14] text-foreground-950 md:text-[40px]">
            A quiet corner of Bugonga, minutes from the lake.
          </h2>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 cursor-pointer items-center gap-3 rounded-full bg-primary-500 px-5 py-2.5 text-[15px] font-medium text-background-50 transition-colors hover:bg-primary-600 md:px-6 md:py-3"
          >
            <span className="whitespace-nowrap">Get Directions</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background-50 text-primary-600 transition-transform duration-300 group-hover:translate-x-1">
              <i className="ri-arrow-right-up-line text-[15px] leading-none" />
            </span>
          </a>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="relative mt-8 overflow-hidden rounded-[24px] border border-background-200 bg-background-200 md:rounded-[28px]">
          <iframe
            title="Map showing Shekinah International School in Bugonga, Entebbe"
            src={mapEmbedUrl}
            width="100%"
            height="460"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[320px] w-full border-0 md:h-[440px]"
          />

          <div className="pointer-events-none absolute bottom-4 left-4 right-4 hidden sm:block md:bottom-6 md:left-6">
            <div className="inline-flex items-center gap-3 rounded-[16px] border border-background-200 bg-background-50/95 px-4 py-3 shadow-card backdrop-blur-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-background-50">
                <i className="ri-map-pin-2-fill text-[17px] leading-none" />
              </span>
              <div>
                <p className="text-[13px] font-medium leading-tight text-foreground-950">
                  Shekinah International School
                </p>
                <p className="mt-0.5 text-[12px] leading-tight text-foreground-500">
                  Plot 1 Alex Ojera Road, Bugonga
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-[14px] text-foreground-600">
            <i className="ri-road-map-line text-[15px] leading-none text-primary-500" />
            {contactAddressShort}
          </p>
          <p className="text-[13px] text-foreground-400">Free parking on site · Wheelchair accessible entrance</p>
        </div>
      </Reveal>
    </section>
  );
}