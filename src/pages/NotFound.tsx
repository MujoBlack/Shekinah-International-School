import Layout from "@/components/site/Layout";
import Buddy from "@/components/site/Buddy";
import { Btn, VISIT } from "@/components/site/ui";

export default function NotFound() {
  return (
    <Layout>
      <section className="sec" style={{ paddingTop: 170, textAlign: "center" }}>
        <div className="wrap">
          <Buddy variant="still" pose="shrug" className="buddy-404" say="Oops! This page went on a field trip." />
          <span className="label"><b>404</b> · Page not found</span>
          <h1 className="s-h2" style={{ fontSize: 64 }}>This page wandered off at break time</h1>
          <p className="s-lead" style={{ marginTop: 16 }}>Let's get you back to class.</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            <Btn to="/" variant="pine" arrow>Back to Home</Btn>
            <Btn to={VISIT} variant="line">Book a School Visit</Btn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
