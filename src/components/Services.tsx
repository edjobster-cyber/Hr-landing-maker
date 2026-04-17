import {
  Users,
  Search,
  ClipboardCheck,
  TrendingUp,
  Shield,
  Briefcase,
  Target,
  UserCheck
} from "lucide-react";
import hrServicesImage from "@/assets/hr-services.jpg";
import { useToast } from "@/hooks/use-toast";
import ScheduleDialog from "@/components/ScheduleDialog";
import { useEffect, useState } from "react";

const Services = () => {
  const { toast } = useToast();
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Executive Search",
      description: "C-suite recruitment."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Acquisition",
      description: "End-to-end recruitment."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "HR Compliance",
      description: "Policy and SOP guidance."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Organizational Development",
      description: "Workforce planning."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Market Entry Support",
      description: "Local to global hiring strategies."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Interim HR Leadership",
      description: "Temporary HR execs."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Contract Staffing",
      description: "Flexible staffing for short/long-term or seasonal projects, with candidates on our payroll."
    },
    // {
    //   icon: <Target className="w-8 h-8" />,
    //   title: "Market Analysis",
    //   description: "Compensation benchmarking and talent market insights for strategic decision making."
    // },
    // {
    //   icon: <UserCheck className="w-8 h-8" />,
    //   title: "Candidate Assessment",
    //   description: "Comprehensive evaluation including skills testing, cultural fit, and reference verification."
    // }
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
    <section id="services" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Services & Offerings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive HR solutions...
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={hrServicesImage}
              alt="HR Services Overview"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your HR?</h3>
                <p className="text-xl text-white/90 mb-6">Let's discuss your specific needs and create a custom solution.</p>
                <ScheduleDialog
                  trigger={
                    <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                      Start Consultation
                    </button>
                  }
                />
                {/* <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors" onClick={openIframe}>
                  Start Consultation
                </button>
                {showIframe && (
                  <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center p-4 pt-32">
                    <div className="relative bg-white" style={{ width: iframeWidth, height: '700px' }}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;