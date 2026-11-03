import Layout from "@/components/feature/Layout";
import SchoolLifeHero from "@/pages/school-life/components/SchoolLifeHero";
import LearningSection from "@/pages/school-life/components/LearningSection";
import SportsSection from "@/pages/school-life/components/SportsSection";
import ClubsSection from "@/pages/school-life/components/ClubsSection";
import TripsSection from "@/pages/school-life/components/TripsSection";
import EventsSection from "@/pages/school-life/components/EventsSection";
import ParentsSection from "@/pages/school-life/components/ParentsSection";
import GallerySection from "@/pages/school-life/components/GallerySection";
import SchoolLifeCta from "@/pages/school-life/components/SchoolLifeCta";

export default function SchoolLife() {
  return (
    <Layout>
      <SchoolLifeHero />
      <div className="relative z-10 -mt-8 rounded-t-[32px] bg-background-100 pb-16 md:-mt-10 md:rounded-t-[44px] md:pb-24">
        <LearningSection />
        <SportsSection />
        <ClubsSection />
        <TripsSection />
        <EventsSection />
        <ParentsSection />
        <GallerySection />
        <SchoolLifeCta />
      </div>
    </Layout>
  );
}