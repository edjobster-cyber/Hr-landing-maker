import { useEffect, useState } from "react";
// import { Link } from "wouter";
import { FileText, UserCheck, GraduationCap, CalendarClock, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import education_institutions from "@/assets/education-institutions.jpg";
import people_resum_chack from "@/assets/people_resum_chack.png";
import airesume from "@/assets/airesume.png";
import Vector from "@/assets/Vector.png";
import Arroy from "@/assets/Arroy.png";
import Ellipse_Pale from "@/assets/Ellipse_Pale Blue.png";
import Ellipse_Light from "@/assets/Ellipse_Light Peach.png";
import Testimonials from "@/components/Testimonials";
import WhatsIncluded from "@/components/WhatsIncluded";
import ContactForm from "@/components/ContactForm";
import ScheduleDialog from "@/components/ScheduleDialog";



const EducationInstitutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ first: 0, second: 0, third: 0 });

  useEffect(() => {
    document.title = "Education Institutions - Hiring Solutions | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Streamlined hiring for education institutions. ATS solutions built for schools, colleges, and universities with education-specific workflows.');
    }

    // Trigger animations on mount
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
    {
      name: "Elena Rodriguez",
      title: "HR Director",
      company: "Global Dynamics",
      country: "🇪🇸",
      rating: 5,
      quote: "Working with Sarah was a game-changer for our European expansion. Her network and expertise in international compliance saved us months of research and potential legal issues.",
      result: "15-person team established across 4 countries"
    },
    // {
    //   name: "David Chen",
    //   title: "Founder",
    //   company: "InnovateLabs",
    //   country: "🇸🇬",
    //   rating: 5,
    //   quote: "The quality of candidates Sarah presented was outstanding. Every single hire is still with us 2 years later. Her assessment process is thorough and incredibly accurate.",
    //   result: "100% retention rate over 24 months"
    // },
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
            style={{ backgroundImage: `url(${education_institutions})` }}
          />
          <div className="absolute inset-0 bg-[#0842A1]/80" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
              <h1
                className={`text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                data-testid="hero-title"
                style={{ transitionDelay: '0.2s' }}
              >
                AI-Powered Hiring for Education Institutions
              </h1>
              <p
                className={`text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                data-testid="hero-subtitle"
                style={{ transitionDelay: '0.4s' }}
              >
                From job posting to onboarding, Edjobster streamlines every step utilizing AI so your staff can focus more on students.
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
                Why Education Institutions Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="why-solution-description">
                Traditional hiring processes slow down education institutions. Our specialized platform addresses the unique challenges of academic hiring.
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
                        className="absolute  top-[40%] left-[14%] md:top-1/3 lg:top-[46%] md:left-[22%] lg:left-[14%] -translate-x-1/2 -translate-y-1/2 w-20 lg:w-[9rem] h-auto object-contain pointer-events-none"
                      />
                      <img
                        src={Ellipse_Pale}
                        alt="Background Circle"
                        className="absolute top-[65%] left-[70%] md:top-[66%] lg:top-[78%] md:right-[-7%] lg:right-0 -translate-x-1/2 -translate-y-1/2 w-16 lg:w-24 h-auto object-contain pointer-events-none"
                      />
                    </div>
                    <p className="relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-primary w-full md:w-[100%] lg:w-[103%] mx-auto">
                      Too Many Resumes, Not Enough Time,
                      Unstructured Faculty Evaluation with Manual Matching Processes
                    </p>
                  </div>
                  <img
                    src={people_resum_chack}
                    alt="AI filters top candidates"
                    className="mx-auto w-full max-w-lg md:max-w-md h-auto object-contain rounded-lg pt-0 md:pt-[23px]"
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
                        className="absolute top-[40%] left-[14%]  md:top-1/3 md:left-[19%] -translate-x-1/2 -translate-y-1/2 w-20 lg:w-24 h-auto object-contain pointer-events-none"
                      />
                      <img
                        src={Ellipse_Light}
                        alt="Background Circle"
                        className="absolute top-[65%] left-[70%] md:top-[8rem] lg:top-24 md:right-[-7%] lg:rigth-4 -translate-x-1/2 -translate-y-1/2 w-24 lg:w-28 h-auto object-contain pointer-events-none"
                      />
                    </div>
                    <p className="relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-[#FF7A32] w-full md:w-[100%] lg:w-[103%] mx-auto">
                      AI Filters Top Candidates Using Skills-First Screening, AI-generated Assessments and Match Scores
                    </p>
                  </div>
                  <img
                    src={airesume}
                    alt="AI filters top candidates"
                    className="mx-auto w-full max-w-lg md:max-w-md h-auto object-contain rounded-lg"
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
                    Traditional methods of hiring such as walk ins
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Disconnect between HR and academic departments
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Seasonal hiring spikes that overwhelm systems
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Lack of visibility into hiring pipeline
                  </li>
                </ul>
              </div>
              <div className="sm:pl-[0px] md:pl-[23px] lg:pl-[100px]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Outcomes</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    50% reduction in time-to-hire
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Streamlined approvals with automated workflows
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Better candidate experience and higher acceptance rates
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Real-time reporting and analytics
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
                Complete hiring solution tailored for education institutions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Job Description Generator</h3>
                <p className="text-gray-600">Create structured job descriptions, requirements, and benefits tailored specifically for education roles using AI.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-powered Candidate Screening</h3>
                <p className="text-gray-600">Instantly generate screening questions and match scores weightages based on must-have and preferred requirements.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Teacher AI for Lesson Material</h3>
                <p className="text-gray-600">Ensure teaching materials meet quality benchmarks with AI-driven validation and recommendations.</p>
              </div>
              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <CalendarClock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interview Scheduling</h3>
                <p className="text-gray-600">Streamline the interview process with scheduling and coordination.</p>
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
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <div className="text-gray-600">Faster shortlisting with AI</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2x</div>
                <div className="text-gray-600">Hbetter candidate-to-role alignment using Match Score</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <div className="text-gray-600">lesser manual effort for academic hiring</div>
              </div>
              {/* <div>
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <div className="text-gray-600">Reduction in Admin Time</div>
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
                  "Edjobster transformed our hiring process completely. What used to take 3 months now takes 6 weeks, and our department heads love the transparency."
                </blockquote>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🇺🇸</div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Patricia Lopez</div>
                    <div className="text-sm text-gray-600">VP Human Resources, State University</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "Implementation was seamless and faculty hiring now runs like clockwork. Our time-to-offer has dropped dramatically."
                </blockquote>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🇨🇦</div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Nguyen</div>
                    <div className="text-sm text-gray-600">Dean of Faculty, Northern Lakes College</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-brand shadow-brand">
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "The AI-driven screening helps our committees focus on the right candidates. Quality has improved across the board."
                </blockquote>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🇬🇧</div>
                  <div>
                    <div className="font-semibold text-gray-900">James Carter</div>
                    <div className="text-sm text-gray-600">Head of HR, City Polytechnic London</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-brand shadow-brand">
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "Scheduling across multiple campuses used to be a headache. Now it's automated and transparent for all stakeholders."
                </blockquote>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">🇦🇺</div>
                  <div>
                    <div className="font-semibold text-gray-900">Lisa Chen</div>
                    <div className="text-sm text-gray-600">Talent Acquisition Lead, Southern University</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <Testimonials testimonials={testimonials}/> */}

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
        <div id="edu-contact" className="scroll-mt-24">
          <ContactForm
            platform="Education Institution"
            title="Ready to Transform Your Hiring Process?"
            subTitle="Join hundreds of education institutions already using Edjobster to hire faster and smarter."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EducationInstitutions;
