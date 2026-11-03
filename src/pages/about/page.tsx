import Layout from "@/components/feature/Layout";
import AboutHero from "@/pages/about/components/AboutHero";
import StorySection from "@/pages/about/components/StorySection";
import VisionMission from "@/pages/about/components/VisionMission";
import ValuesSection from "@/pages/about/components/ValuesSection";
import ApproachSection from "@/pages/about/components/ApproachSection";
import PrincipalSection from "@/pages/about/components/PrincipalSection";
import SettingSection from "@/pages/about/components/SettingSection";
import FinalCta from "@/pages/home/components/FinalCta";

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <div className="relative z-10 -mt-8 rounded-t-[32px] bg-background-100 pb-16 md:-mt-10 md:rounded-t-[44px] md:pb-24">
        <StorySection />
        <VisionMission />
        <ValuesSection />
        <ApproachSection />
        <PrincipalSection />
        <SettingSection />
        <FinalCta />
      </div>
    </Layout>
  );
}