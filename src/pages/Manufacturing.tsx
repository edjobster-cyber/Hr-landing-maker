import { useEffect, useState } from "react";
// import { Link } from "wouter";
import { Building2, Search, BarChart3, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import RecruitmentAgencie from "@/assets/RecruitmentAgencies.jpg";
import Arroy from "@/assets/Arroy.png";
import airesume from "@/assets/airesume.png";
import resume from "@/assets/resume.png";
import Ellipse_Pale from "@/assets/Ellipse_Pale Blue.png";
import Ellipse_Light from "@/assets/Ellipse_Light Peach.png";
import Testimonials from "@/components/Testimonials";
import WhatsIncluded from "@/components/WhatsIncluded";
import ContactForm from "@/components/ContactForm";
import ScheduleDialog from "@/components/ScheduleDialog";


const RecruitmentAgencies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ first: 0, second: 0, third: 0 });
  useEffect(() => {
    document.title = "Recruitment Agencies - Scaling Solutions | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Powerful recruiting tools for agencies. Scale your placements with advanced ATS, client management, and performance analytics.');
    }
    setIsVisible(true);

    // Counter animation
    const animateCounters = () => {
      const targets = { first: 70, second: 2, third: 50 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounters({
          first: Math.floor(targets.first * easeOut),
          second: Math.floor(targets.second * easeOut),
          third: Math.floor(targets.third * easeOut)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);
    };

    // Start counter animation after a delay
    setTimeout(animateCounters, 1000);
  }, []);

  const testimonials = [
    // {
    //   name: "Marcus Thompson",
    //   title: "CEO",
    //   company: "TechFlow Solutions",
    //   country: "🇺🇸",
    //   rating: 5,
    //   quote: "Sarah transformed our hiring process completely. Within 3 weeks, we had our entire leadership team in place. Her understanding of both local and international markets is exceptional.",
    //   result: "5 senior executives placed in 21 days"
    // },
    // {
    //   name: "Elena Rodriguez",
    //   title: "HR Director",
    //   company: "Global Dynamics",
    //   country: "🇪🇸",
    //   rating: 5,
    //   quote: "Working with Sarah was a game-changer for our European expansion. Her network and expertise in international compliance saved us months of research and potential legal issues.",
    //   result: "15-person team established across 4 countries"
    // },
    {
      name: "David Chen",
      title: "Founder",
      company: "InnovateLabs",
      country: "🇸🇬",
      rating: 5,
      quote: "The quality of candidates Sarah presented was outstanding. Every single hire is still with us 2 years later. Her assessment process is thorough and incredibly accurate.",
      result: "100% retention rate over 24 months"
    },
    {
      name: "Sarah Williams",
      title: "VP Operations",
      company: "Maritime Corp",
      country: "🇦🇺",
      rating: 5,
      quote: "Sarah's rapid response time and deep industry knowledge helped us meet a critical project deadline. She found specialized talent we couldn't locate through traditional channels.",
      result: "Mission-critical role filled in 48 hours"
    }
  ];
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 min-h-[480px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{ backgroundImage: `url(${RecruitmentAgencie})` }}
          />
          <div className="absolute inset-0 bg-[#5CA108]/80" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
              <h1
                className={`text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                data-testid="hero-title"
                style={{ transitionDelay: '0.2s' }}
              >
                AI-Powered Hiring Built for Manufacturing
              </h1>
              <p
                className={`text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                data-testid="hero-subtitle"
                style={{ transitionDelay: '0.4s' }}
              >
                From shop-floor technicians to plant managers, Edjobster automates every hiring step with AI, so you can focus on production and quality.
              </p>
              <div
                className={`transition-all duration-1000 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '0.6s' }}
              >
                <Button
                  className="w-full sm:w-auto bg-[#ff7300] hover:bg-[#ff7300] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-brand transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  data-testid="hero-cta"
                  onClick={() => window.location.href = 'https://app.edjobster.com/login'}
                >
                  Start 14 Day FREE Trial
                </Button>
                <ScheduleDialog
                  trigger={
                    <Button
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-brand transform hover:scale-105 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group"
                      data-testid="schedule-call-cta"
                    >
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Schedule a Call</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why This Solution */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="why-solution-title">
                Why Manufacturing Teams Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="why-solution-description">
                High-volume, skill-specific hiring demands speed and precision. Our AI platform meets the unique challenges of industrial recruitment.
              </p>
            </div>
            <div className="pb-10 md:pb-16">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-6">
                <div className="flex items-center flex-col relative w-full md:w-1/2">
                  <div className="relative text-center mb-8 md:mb-16 w-full">
                    <div>
                      <img
                        src={Ellipse_Pale}
                        alt="Background Circle"
                        className="absolute  top-[36%] left-[12%]  md:top-[25%] lg:top-[44%] md:left-1/3 lg:left-[11%] -translate-x-1/2 -translate-y-1/2 w-20 lg:w-28 h-auto object-contain pointer-events-none"
                      />
                      <img
                        src={Ellipse_Pale}
                        alt="Background Circle"
                        className="absolute  top-[65%] left-[70%] md:top-[76%] lg:top-[24]  md:right-[10%] lg:right-0 -translate-x-1/2 -translate-y-1/2 w-16 lg:w-24 h-auto object-contain pointer-events-none"
                      />
                    </div>
                    <p className="relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-primary w-full md:w-[100%] lg:w-[103%] mx-auto">
                      Large applicant pools, shortage of qualified skilled workers, and manual screening slow down plant operations.
                    </p>
                  </div>
                  <img
                    src={resume}
                    alt="Overwhelmed recruiter illustration"
                    className="mx-auto w-full max-w-lg sm:max-w-xl md:max-w-md h-auto object-contain rounded-lg pt-0 md:pt-0 lg:pt-30"
                  />
                </div>
                <img
                  src={Arroy}
                  alt="Divider arrow"
                  className="self-center h-20 sm:h-14 sm:h-20 md:h-auto md:h-full max-h-64 md:max-h-none my-4 md:my-0 pt-0 sm:pt-[33%] lg:pt-[33%] xl:pt-[20%] 2xl:pt-[18%] rotate-90 sm:rotate-0"
                />
                <div className="flex items-center flex-col relative w-full md:w-1/2">
                  <div className="relative text-center mb-8 md:mb-16 w-full">
                    <div>
                      <img
                        src={Ellipse_Light}
                        alt="Background Circle"
                        className="absolute  top-[41%] left-[16%] md:top-1/3 lg:top-[44%] md:left-1/3 lg:left-[22%] -translate-x-1/2 -translate-y-1/2 w-10 sm:w-20 lg:w-24 h-auto object-contain pointer-events-none"
                      />
                      <img
                        src={Ellipse_Light}
                        alt="Background Circle"
                        className="absolute top-[65%] left-[85%]  md:top-24 lg:top-[60%] md:right-[-5%] lg:right-[2%] -translate-x-1/2 -translate-y-1/2 w-12 sm:w-24 lg:w-28 h-auto object-contain pointer-events-none"
                      />
                    </div>
                    <p className="relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-[#FF7A32] w-full md:w-[100%] lg:w-[85%] mx-auto">
                      AI filters top candidates using skills-first screening, AI-generated assessments, and match scores tailored to technical competencies.
                    </p>
                  </div>
                  <img
                    src={airesume}
                    alt="AI screening illustration"
                    className="mx-auto w-full max-w-lg sm:max-w-xl md:max-w-md h-auto object-contain rounded-lg sm:pt-[0px] md:pt-[22px] lg:pt-[0px]"
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-[144px] items-center mb-16">
              <div className="sm:pl-[0px] md:pl-[23px] lg:pl-[100px]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Common Pain Points</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Difficulty verifying trade certifications and safety compliance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Seasonal or project-based hiring spikes
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Disconnect between HR and production supervisors
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Lack of visibility into pipeline across multiple facilities
                  </li>
                </ul>
              </div>
              <div className="sm:pl-[0px] md:pl-[23px] lg:pl-[100px]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Outcomes</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    50% reduction in time-to-hire for skilled roles
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Automated compliance checks and certification tracking
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Better candidate experience with quick, mobile-friendly application
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Real-time analytics for plant-wide hiring metrics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        {/* <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="whats-included-title">
                What's Included
              </h2>
              <p className="text-lg text-gray-600" data-testid="whats-included-description">
                Everything you need to scale your recruitment agency
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Client Management</h3>
                <p className="text-gray-600">Separate pipelines for each client with custom branding, workflows, and reporting capabilities.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Sourcing</h3>
                <p className="text-gray-600">AI-powered candidate matching, boolean search, and integration with major job boards and social platforms.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Analytics</h3>
                <p className="text-gray-600">Client dashboards showing fill rates, time-to-fill, candidate quality metrics, and ROI reporting.</p>
              </div>
            </div>
          </div>
        </section> */}
        <WhatsIncluded />

        {/* Results */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="results-title">
                Results You Can Expect
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2"> 70%</div>
                <div className="text-gray-600">Faster shortlisting with AI</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2x</div>
                <div className="text-gray-600">better candidate-to-role alignment using Match Score</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <div className="text-gray-600">lesser manual effort for academic hiring</div>
              </div>
              {/* <div>
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <div className="text-gray-600">Less Manual Screening</div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Customer Stories */}
        {/* <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="customer-stories-title">
                Customer Success Stories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-brand shadow-brand">
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "We tripled our placement volume in 6 months. The AI matching feature alone has saved us 20 hours per week on candidate screening."
                </blockquote>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🇬🇧</div>
                  <div>
                    <div className="font-semibold text-gray-900">Emma Richardson</div>
                    <div className="text-sm text-gray-600">CEO, TalentBridge Recruiting</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "Our client retention went from 70% to 95%. The transparency and reporting capabilities have completely changed our client relationships."
                </blockquote>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🇦🇺</div>
                  <div>
                    <div className="font-semibold text-gray-900">David Kim</div>
                    <div className="text-sm text-gray-600">Managing Director, Apex Recruitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <Testimonials testimonials={testimonials} /> */}
        {/* Get Started */}
        {/* <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="get-started-title">
            Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="get-started-description">
              Join hundreds of education institutions already using Edjobster to hire faster and smarter.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-white px-8 py-4 text-lg font-semibold" data-testid="get-started-cta">
                Talk to an Expert
              </Button>
            </a>
          </div>
        </section> */}
        <div id="manufacturing-contact" className="scroll-mt-24">
          <ContactForm platform="Manufacturing" title="Ready to Scale Your Manufacturing Hiring Process?" subTitle="Join the Manufacturing already using Edjobster to increase placements and grow revenue." />
        </div>
        {/* <ContactForm platform="Manufacturing" title="Ready to Scale Your Manufacturing Hiring Process?" subTitle="Join the Manufacturing already using Edjobster to increase placements and grow revenue."/> */}
      </main>

      <Footer />
    </div>
  );
};

export default RecruitmentAgencies;
