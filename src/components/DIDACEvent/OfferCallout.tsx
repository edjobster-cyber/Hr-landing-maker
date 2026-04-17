import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import didacLogo from "@/assets/didac-logo.png";

const OfferCallout = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[#ffc105]/10 via-[#ffc105]/5 to-[#ffc105]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center">
            <img src={didacLogo} alt="DIDAC India" className="h-8 w-auto" />
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            DIDAC INDIA Exclusive Offer
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 py-8">
            {[
              "14 Days Free Access",
              "30% OFF Annual Plans",
              "Priority Onboarding Support"
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            onClick={scrollToForm}
          >
            Unlock My Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferCallout;
