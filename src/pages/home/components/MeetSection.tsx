import Button from "@/components/base/Button";
import Eyebrow from "@/components/base/Eyebrow";
import Reveal from "@/components/base/Reveal";
import Doodle from "@/components/base/Doodle";

export default function MeetSection() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pt-20 md:px-8 md:pt-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="h-[360px] w-full overflow-hidden rounded-[24px] md:h-[520px]">
              <img
                src="https://readdy.ai/api/search-image?query=Two%20primary%20school%20pupils%20sitting%20on%20a%20wooden%20bench%20reading%20a%20picture%20book%20together%20in%20a%20bright%20classroom%20with%20cream%20walls%20and%20sage%20green%20shelves%2C%20warm%20natural%20window%20light%2C%20African%20and%20international%20children%20aged%20six%20and%20seven%2C%20gentle%20smiles%2C%20editorial%20school%20photography%2C%20soft%20film%20tones&width=900&height=1100&seq=shekinah-meet-15&orientation=portrait"
                alt="Two pupils reading together at Shekinah International School"
                title="Shekinah International School pupils reading together"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-background-50 px-4 py-3 shadow-card md:left-8 md:px-5 md:py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-100 text-secondary-800">
                <i className="ri-plant-line text-lg leading-none" />
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-lg text-foreground-950">Est. 2014</span>
                <span className="block text-[12px] text-foreground-500">A decade in Entebbe</span>
              </span>
            </div>

            <Doodle icon="ri-book-open-line" className="absolute -right-3 -top-5 hidden md:flex" size="text-3xl" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow tone="butter">Meet Shekinah</Eyebrow>
          <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.12] text-foreground-950 md:text-[46px]">
            More than a school. A <span className="highlight-swipe">community</span> for growing minds.
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-foreground-600 md:text-[17px]">
            <p>
              Shekinah is a Christian, multicultural school offering a broad, balanced and stimulating curriculum. Children
              from many nations learn side by side, guided by teachers who know each family by name.
            </p>
            <p>
              We help every child discover their potential, gifts and talents early, because every child is unique and
              deserves to be seen that way.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/about" variant="primary">
              Discover Our Story
            </Button>
            <span className="text-[13px] leading-relaxed text-foreground-500">
              Plot 1 Alex Ojera Road, Bugonga, Entebbe
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}