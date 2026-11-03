import Layout from "@/components/feature/Layout";
import ContactHero from "@/pages/contact/components/ContactHero";
import ContactCards from "@/pages/contact/components/ContactCards";
import EnquiryForm from "@/pages/contact/components/EnquiryForm";
import FindUs from "@/pages/contact/components/FindUs";

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <div className="relative z-10 -mt-8 rounded-t-[32px] bg-background-100 md:-mt-10 md:rounded-t-[44px]">
        <ContactCards />
        <EnquiryForm />
        <FindUs />
      </div>
    </Layout>
  );
}