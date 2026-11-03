import Layout from "@/components/feature/Layout";
import AdmissionHero from "@/pages/admission/components/AdmissionHero";
import WhySection from "@/pages/admission/components/WhySection";
import ProcessSection from "@/pages/admission/components/ProcessSection";
import EnquirySection from "@/pages/admission/components/EnquirySection";
import TransportSection from "@/pages/admission/components/TransportSection";
import AdmissionCta from "@/pages/admission/components/AdmissionCta";
import StickyVisitBar from "@/pages/admission/components/StickyVisitBar";

export default function Admission() {
  return (
    <Layout reserveBottomBar>
      <AdmissionHero />
      <div className="relative z-10 -mt-8 rounded-t-[32px] bg-background-100 pb-28 md:-mt-10 md:rounded-t-[44px] md:pb-24">
        <WhySection />
        <ProcessSection />
        <EnquirySection />
        <TransportSection />
        <AdmissionCta />
      </div>
      <StickyVisitBar />
    </Layout>
  );
}