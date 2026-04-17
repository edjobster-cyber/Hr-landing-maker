import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { ArrowRight, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScheduleDialog from "./ScheduleDialog";
import { useState, useEffect } from "react";

const BookingButton = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [iframeWidth, setIframeWidth] = useState("1100px");
  const iframeUrl = "https://crm.zoho.in/bookings/IntroductoryDemoMeeting?rid=e3c1335734151d00da088f55f34a4e1c1104ed686638b562b24d6547b94c42a382e4220808fbdfc07cc7b8f6bfdc8024gid1e33b3fc60b1d6fc0529de33bf4cfd48222fbc3aaeb966b0f34de5a465ed34c8&option=embed";

  useEffect(() => {
    const handleResize = () => {
      setIframeWidth(window.innerWidth <= 1024 ? "90%" : "1100px");
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openIframe = () => {
    setShowIframe(true);
    document.body.style.overflow = 'hidden';
  };

  const closeIframe = () => {
    setShowIframe(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* <button 
        onClick={openIframe}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 group"
      >
        <Calendar className="w-5 h-5 mr-2 group-hover:fill-none" />
        Book call for ATS
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button> */}
      {/* <Button variant="glass" size="xl" onClick={openIframe} className="group">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button> */}

      <ScheduleDialog
        trigger={
          <Button variant="glass" size="xl" className="group">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Call
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        }
      />

      {/* {showIframe && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center p-4 pt-32">
          <div className="relative" style={{ width: iframeWidth, height: '700px' }}>
            <button
              onClick={closeIframe}
              className="absolute -right-12 -top-12 p-2 text-white hover:text-gray-200 transition-colors"
              aria-label="Close booking"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <iframe
              src={iframeUrl}
              className="w-full h-full bg-white rounded-lg border border-gray-200 shadow-lg"
              title="Book a Call"
              allowFullScreen
            />
          </div>
        </div>
      )} */}
    </>
  );
};

const Hero = () => {
  const { toast } = useToast();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient-overlay" />

      {/* Animated Fluid Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto md:space-y-7 lg:space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hire Globally within Days
            {/* ,{" "} */}
            {/* <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Delivered in Days
            </span> */}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed">
            10 years of corporate HR leadership. Fast, reliable talent solutions for global clients.
          </p>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            250+ Successful Placements, 4 Continents Served, 48hrs Average Response.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:pt-8">
            {/* <ScheduleDialog
              trigger={
                <Button variant="glass" size="xl" className="group animate-glass-bg">
                  <Calendar className="w-5 h-5 mr-2 group-hover:fill-none" />
                  Schedule a Call
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            /> */}
            <BookingButton />
            {/* <Button variant="glass" size="xl" onClick={() => (window.location.href = "/#contact")} className="group">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button> */}
            <Button
              variant="cta"
              size="xl"
              onClick={() => {
                try {
                  // toast({ title: "Scrolling to Services", description: "Explore what we offer." });
                } catch (_) { }
                const el = document.getElementById("services");
                if (el && typeof el.scrollIntoView === "function") {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  // Fallback if element not found
                  window.location.hash = "#services";
                }
              }}
            >
              View our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm">Successful Placements</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">25</div>
              <div className="text-sm">Countries Served</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">48hrs</div>
              <div className="text-sm">Average Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;