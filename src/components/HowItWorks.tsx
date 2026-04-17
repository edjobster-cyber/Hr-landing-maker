import { MessageCircle, FileSearch, UserPlus, Calendar, ArrowRight } from "lucide-react";
import ScheduleDialog from "./ScheduleDialog";
import WoldMap from "../assets/WoldMap.png";
import { useEffect, useState } from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "1. Discovery & Strategy",
      description: "30-min consultation, We understand your requiement.",
      // details: "Free 30-minute consultation to understand your challenges and objectives."
    },
    {
      icon: <FileSearch className="w-12 h-12" />,
      title: "2. Sourcing & Screening",
      description: "Global network of skilled manpower aligned with your needs.",
      // details: "Comprehensive screening process with cultural fit assessment and skills validation."
    },
    {
      icon: <UserPlus className="w-12 h-12" />,
      title: "3. Delivery & Support",
      description: "Streamlined hiring process along with smooth onboarding.",
      // details: "6-month placement guarantee with continued support and performance monitoring."
    }
  ];
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamlined 3-step process
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary/20 transform translate-x-4 -translate-y-1/2 z-0" />
                )}

                {/* Step Card */}
                <div className="relative z-10 text-center p-8 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  {/* <p className="text-sm text-primary font-medium">
                    {step?.details}
                  </p> */}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their teams with our proven process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ScheduleDialog
                  trigger={
                    <button
                      className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-elegant hover:shadow-glow"
                      aria-label="Schedule Free Consultation"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Schedule a Call</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  }
                />
                {/* <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-elegant hover:shadow-glow" onClick={openIframe}>
                  Schedule Free Consultation
                </button>
                {showIframe && (
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

                {/* <ScheduleDialog /> */}
                <a
                  href={WoldMap}
                  download="WoldMap.png"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                  aria-label="Download Process Guide"
                >
                  Download Process Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;