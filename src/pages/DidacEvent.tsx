// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
// import FeaturesGrid from "@/components/FeaturesGrid";
// import HowItWorks from "@/components/HowItWorks";
// import OfferCallout from "@/components/OfferCallout";
// import LeadForm from "@/components/LeadForm";
// import Footer from "@/components/Footer";

import FeaturesGrid from "@/components/DIDACEvent/FeaturesGrid";
import Footer from "@/components/DIDACEvent/Footer";
import Header from "@/components/DIDACEvent/Header";
import HeroSection from "@/components/DIDACEvent/HeroSection";
import HowItWorks from "@/components/DIDACEvent/HowItWorks";
import LeadForm from "@/components/DIDACEvent/LeadForm";
import OfferCallout from "@/components/DIDACEvent/OfferCallout";

const DidacEvent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <OfferCallout />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default DidacEvent;
