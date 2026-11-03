import Eyebrow from "@/components/base/Eyebrow";

export default function AboutHero() {
  return (
    <section className="relative flex h-[min(78vh,640px)] min-h-[480px] w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Warm%20wide%20view%20of%20a%20small%20international%20primary%20school%20campus%20in%20Entebbe%20Uganda%2C%20cream%20classroom%20buildings%20with%20deep%20green%20roofs%20among%20tall%20palm%20trees%20and%20flowering%20shrubs%2C%20a%20neat%20green%20lawn%20in%20the%20foreground%2C%20absolutely%20no%20signage%20lettering%20or%20painted%20words%20on%20any%20building%2C%20soft%20golden%20late%20afternoon%20light%2C%20calm%20premium%20editorial%20architectural%20photography%2C%20no%20people&width=1920&height=1100&seq=about-hero-e2&orientation=landscape"
          alt="The leafy campus of Shekinah International School in Bugonga, Entebbe"
          title="Shekinah International School campus in Entebbe Uganda"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 hero-veil" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-5 pb-16 md:px-10 md:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary-950/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-background-50">
            <span className="h-1.5 w-1.5 rounded-full bg-background-50" aria-hidden="true" />
            About Us
          </span>

          <h1 className="mt-7 font-heading text-[38px] leading-[1.02] text-background-50 sm:text-[52px] md:text-[68px]">
            Equipping today&apos;s children for tomorrow.
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-background-50 md:text-[18px]">
            A Christian, multicultural school in Entebbe, nurturing every child since 2014.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary-950/50 px-4 py-2">
            <Eyebrow tone="cream" className="!text-[10px]">
              Plot 1 Alex Ojera Road, Bugonga, Entebbe
            </Eyebrow>
          </div>
        </div>
      </div>
    </section>
  );
}