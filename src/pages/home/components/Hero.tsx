import Button from "@/components/base/Button";

export default function Hero() {
  return (
    <section className="relative flex h-[min(100vh,760px)] min-h-[560px] w-full items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Warm%20sunlit%20school%20courtyard%20in%20Entebbe%20Uganda%2C%20group%20of%20primary%20school%20children%20aged%20five%20to%20eleven%20of%20African%20and%20international%20backgrounds%20smiling%20together%20in%20cream%20and%20green%20uniforms%2C%20palm%20trees%20and%20low%20cream%20school%20buildings%20behind%20with%20no%20signage%20or%20lettering%20anywhere%2C%20soft%20golden%20afternoon%20light%2C%20editorial%20school%20photography%2C%20calm%20premium%20atmosphere%2C%20shallow%20depth%20of%20field&width=1920&height=1200&seq=home-hero-e1&orientation=landscape"
          alt="Children smiling together in the courtyard of Shekinah International School in Entebbe"
          title="Shekinah International School Entebbe primary school community"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 hero-veil" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-5 pb-16 md:px-10 md:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-primary-950/50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-background-50">
            <span className="h-1.5 w-1.5 rounded-full bg-background-50" aria-hidden="true" />
            Christian international school in Entebbe
          </span>

          <h1 className="mt-7 font-heading text-[40px] leading-[1.02] text-background-50 sm:text-[56px] md:text-[76px]">
            A Place to Learn,
            <br className="hidden sm:block" /> Grow and Belong
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-background-50 md:text-[18px]">
            Creating a friendly and safe environment where every child can learn, develop and thrive.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/about" variant="cream">
              Explore Our School
            </Button>
            <Button to="/admission" variant="outlineLight">
              Enquire About Admissions
            </Button>
          </div>

          <div className="mt-9 inline-flex items-center gap-3 rounded-full bg-primary-950/50 px-4 py-2">
            <span className="h-px w-5 bg-background-50" aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-background-50">
              Equipping Today. Shaping Tomorrow.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}