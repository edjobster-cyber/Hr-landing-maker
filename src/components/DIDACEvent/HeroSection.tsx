import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* <video 
                src="https://youtu.be/bAFm_xKLJNc?si=VOzP57Th-yU4_99f" 
                className="w-full h-auto"
                autoPlay
                loop
                // muted
                playsInline
              /> */}
              {/* <iframe
                className="w-full h-[400px]"
                src="https://www.youtube.com/embed/KoIbnYbDRfM?si=2YJbdP12nPw_BbZg"
                // title="YouTube video"
                allow="autoplay;"
                // allowFullScreen
              /> */}
              <iframe
                className="w-full h-[221px] sm:h-[405px] lg:h-[362px]"
                src="https://www.youtube.com/embed/KoIbnYbDRfM?autoplay=1&loop=1&mute=1&playlist=KoIbnYbDRfM"
                allow="autoplay;"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl pointer-events-none"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              AI-Powered Hiring for Educational Institutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Faster hiring. Better teacher selection. Less admin work.
            </p>

            <Badge className="bg-[#ffc105] hover:bg-[#ffc105] text-[#091b43] border-[#ffc105] text-sm px-4 py-2">
              DIDAC EXCLUSIVE OFFER — 14 Day Free Access + 30% OFF Annual Plans
            </Badge>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-base font-semibold"
                onClick={scrollToForm}
              >
                Get Started Free
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold hover:bg-[#ffc105] hover:text-[#091b43]"
              >
                Watch 60-Second Demo
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
