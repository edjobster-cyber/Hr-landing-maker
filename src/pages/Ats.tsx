import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AtsHero from "@/components/AtsHero";
import KeyFeatures from "@/components/KeyFeatures";
import Integrations from "@/components/Integrations";
import PipelineVisibility from "@/components/PipelineVisibility";
import SecurityCompliance from "@/components/SecurityCompliance";
import AtsCta from "@/components/AtsCta";
import ContactForm from "@/components/ContactForm";

const AtsPage = () => {
  return (
    <div>
      <Header />
      <main>
        <AtsHero />
        <KeyFeatures />
        <PipelineVisibility />
        <Integrations />
        <SecurityCompliance />
        {/* <AtsCta /> */}
        <div id="ats-contact" className="scroll-mt-24">
          <ContactForm
            platform="Ats"
            title="Ready to Streamline Your Hiring?"
            subTitle="See how Edjobster ATS can transform your recruitment process."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AtsPage;


