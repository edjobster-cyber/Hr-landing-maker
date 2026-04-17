import { useEffect } from "react";
import { Target, Users, Award, Globe, Crown, Code, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
// import aboutBanner from "@/assets/about_white.png";
import aboutBanner from "@/assets/about dark light.png";
// import aboutBanner from "@/assets/about-us-banner.jpg";


const About = () => {
  useEffect(() => {
    document.title = "About - Our Mission and Story | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Edjobster\'s mission to transform hiring in education. 10 years of HR leadership experience serving global clients.');
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our technology to our customer service."
    },
    {
      icon: Users,
      title: "People-First",
      description: "We believe great hiring starts with putting people first - both candidates and clients."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously innovate to solve real problems and create better hiring experiences."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're committed to making great hiring accessible to organizations worldwide."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Consulting service",
      description: "Started with a vision to transform hiring in education institutions by providing talent acquisition services."
    },
    {
      year: "2020",
      title: "First 100 Clients",
      description: "Reached our first major milestone of serving 100 educational institutions and corporate companies."
    },
    {
      year: "2021",
      title: "We go global",
      description: "While providing services to clients in India we started catering our services in UAE, KSA, Germany, China and USA."
    },
    {
      year: "2022",
      title: "Founded Edjobster",
      description: "With the Vision to Integrate AI in hiring process. Launch Edjobster to transform hiring."
    },
    {
      year: "2025",
      title: "AI Tools Launched",
      description: "With deep understanding of problems faced by organisations. Launched ATS, CV tuner and many Gen AI tools for hiring managers."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-20 lg:pt-32 lg:pb-2 flex items-center min-h-[400px] sm:min-h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 blur-sm"
            style={{ backgroundImage: `url(${aboutBanner})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#b54891]/60 to-[#1a58a5]/60" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight" data-testid="hero-title">
                Transforming HR Excellence
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-none sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed" data-testid="hero-subtitle">
                Born from a passion for connecting great talent with amazing opportunities in education.
              </p>
            </div>
          </div>
        </section>
        {/* <section className="relative overflow-hidden py-20 lg:py-32 min-h-[520px] md:min-h-[620px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{ backgroundImage: `url(${aboutBanner})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 opacity-100 translate-y-0`}
                data-testid="hero-title"
                style={{ transitionDelay: '0.2s' }}
              >
                AI-Powered Hiring Built for Tech Companies
              </h1>
              <p
                className={`text-xl md:text-2xl text-white/90 mb-8 leading-relaxed transition-all duration-1000 opacity-100 translate-y-0`}
                data-testid="hero-subtitle"
                style={{ transitionDelay: '0.4s' }}
              >
                From engineers to product managers, Edjobster streamlines sourcing, screening, and assessments with AI so you can scale innovation faster.
              </p>
            </div>
          </div>
        </section> */}

        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="mission-title">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6" data-testid="mission-description">
                  We believe that success is achieved when you have great people in your team. Our mission is to help educational institutions and organizations worldwide find, hire, and retain the talent they need to create exceptional learning experiences.

                  Through AI enabled innovative technology, proven processes, and deep expertise in Streamlining hiring process, we're making it easier for organisations to build teams that helps them achieve their success goals.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Through innovative technology, proven processes, and deep expertise in education hiring, we're making it easier for institutions to build teams that make a difference in students' lives.
                </p>
                {/* <a href="/company/contact-us">
                  <Button className="bg-primary text-white hover:bg-primary-dark" data-testid="mission-cta">
                    Work With Us
                  </Button>
                </a> */}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-brand p-8">
                <div className="bg-white rounded-brand p-8 shadow-brand">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">100+</div>
                      <div className="text-gray-600">Organizations Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">250+</div>
                      <div className="text-gray-600">Successful Placements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">25+</div>
                      <div className="text-gray-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">40%</div>
                      <div className="text-gray-600">Average Time Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="story-title">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="story-subtitle">
              What started as a small consultancy has grown into a global platform serving thousands of organizations.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6" data-testid={`milestone-${index}`}>
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-brand p-6 shadow-brand">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="values-title">
                Our Values
              </h2>
              <p className="text-lg text-gray-600" data-testid="values-subtitle">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center" data-testid={`value-${index}`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
         
        {/* Team Section */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="team-title">
                Built by HR Experts
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="team-subtitle">
                Our team combines decades of HR leadership experience with cutting-edge technology expertise to deliver solutions that actually work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-brand p-8 shadow-brand text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">HR Leadership</h3>
                <p className="text-gray-600 mb-4">Former CHROs and VP-level executives from leading educational institutions</p>
                <div className="text-sm text-primary font-medium">10+ years experience</div>
              </div>

              <div className="bg-white rounded-brand p-8 shadow-brand text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Experts</h3>
                <p className="text-gray-600 mb-4">Engineers and product managers from top tech companies and startups</p>
                <div className="text-sm text-primary font-medium">Deep tech expertise</div>
              </div>

              <div className="bg-white rounded-brand p-8 shadow-brand text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Specialists</h3>
                <p className="text-gray-600 mb-4">Former educators and administrators who understand the unique challenges of education hiring Education Focus</p>
                <div className="text-sm text-primary font-medium">Education focus</div>
              </div>
            </div>

            {/* <div className="text-center mt-12">
              <a href="/company/leadership">
                <Button variant="outline" data-testid="leadership-cta">
                  Meet Our Leadership Team
                </Button>
              </a>
            </div> */}
          </div>
        </section>

        {/* CTA */}
        {/* <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Join thousands of organizations that trust Edjobster with their most important hiring decisions.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
                Get Started Today
              </Button>
            </a>
          </div>
        </section> */}
        <ContactForm platform="About" title="Ready to Transform Your Hiring?" subTitle="Join 100+ of organizations that trust Edjobster with their most important hiring decisions." />

      </main>

      <Footer />
    </div>
  );
};

export default About;
