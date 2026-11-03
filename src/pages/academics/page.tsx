import Layout from "@/components/feature/Layout";
import AcademicsHero from "@/pages/academics/components/AcademicsHero";
import CurriculumSection from "@/pages/academics/components/CurriculumSection";
import StageNav from "@/pages/academics/components/StageNav";
import EarlyYearsSection from "@/pages/academics/components/EarlyYearsSection";
import PrimarySection from "@/pages/academics/components/PrimarySection";
import BeyondSection from "@/pages/academics/components/BeyondSection";
import AcademicsCta from "@/pages/academics/components/AcademicsCta";

export default function Academics() {
  return (
    <Layout>
      <AcademicsHero />
      <div className="relative z-10 -mt-8 rounded-t-[32px] bg-background-100 pb-16 md:-mt-10 md:rounded-t-[44px] md:pb-24">
        <CurriculumSection />
        <StageNav />
        <EarlyYearsSection />
        <PrimarySection />
        <BeyondSection />
        <AcademicsCta />
      </div>
    </Layout>
  );
}