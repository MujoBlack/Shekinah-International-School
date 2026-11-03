import Layout from "@/components/feature/Layout";
import Hero from "@/pages/home/components/Hero";
import FactsBar from "@/pages/home/components/FactsBar";
import PromiseSection from "@/pages/home/components/PromiseSection";
import MeetSection from "@/pages/home/components/MeetSection";
import JourneySection from "@/pages/home/components/JourneySection";
import WhySection from "@/pages/home/components/WhySection";
import LifeSection from "@/pages/home/components/LifeSection";
import VoicesSection from "@/pages/home/components/VoicesSection";
import AdmissionsSection from "@/pages/home/components/AdmissionsSection";
import FinalCta from "@/pages/home/components/FinalCta";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FactsBar />
      <PromiseSection />
      <MeetSection />
      <JourneySection />
      <WhySection />
      <LifeSection />
      <VoicesSection />
      <AdmissionsSection />
      <FinalCta />
    </Layout>
  );
}