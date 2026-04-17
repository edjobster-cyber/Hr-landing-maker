import { useEffect } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Leadership = () => {
  useEffect(() => {
    document.title = "Leadership Team - Meet Our Experts | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the leadership team behind Edjobster. Experienced HR executives and technology leaders dedicated to transforming education hiring.');
    }
  }, []);

  const leaders = [
    {
      name: "Sarah Mitchell",
      title: "Chief Executive Officer & Co-Founder",
      bio: "Sarah brings over 15 years of HR leadership experience, including 8 years as CHRO at leading universities. She's passionate about using technology to solve real hiring challenges in education.",
      experience: [
        "Former CHRO at State University System",
        "Led hiring transformation at 3 major institutions",
        "MBA from Stanford Graduate School of Business"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@edjobster.com"
      }
    },
    {
      name: "Michael Chen",
      title: "Chief Technology Officer & Co-Founder",
      bio: "Michael is a seasoned technology leader with experience scaling platforms at high-growth companies. He combines deep technical expertise with a passion for improving user experiences.",
      experience: [
        "Former VP Engineering at EdTech unicorn",
        "Built scalable systems serving millions of users",
        "MS Computer Science from MIT"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@edjobster.com"
      }
    },
    {
      name: "Dr. Angela Rodriguez",
      title: "Chief Product Officer",
      bio: "Angela combines her background in organizational psychology with product expertise to create solutions that actually work for HR teams. She's passionate about evidence-based product design.",
      experience: [
        "Former Senior Product Manager at Google",
        "PhD in Organizational Psychology",
        "Published researcher in hiring practices"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "angela@edjobster.com"
      }
    },
    {
      name: "James Thompson",
      title: "Chief Revenue Officer",
      bio: "James has over 12 years of experience helping organizations adopt new technologies. He's focused on ensuring our clients achieve measurable ROI from their investment in better hiring.",
      experience: [
        "Former VP Sales at leading HR tech company",
        "Helped 500+ organizations transform hiring",
        "MBA from Wharton School"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@edjobster.com"
      }
    },
    {
      name: "Lisa Wang",
      title: "VP of Customer Success",
      bio: "Lisa ensures our clients not only implement successfully but achieve their hiring goals. She brings deep expertise in change management and customer success from the enterprise software world.",
      experience: [
        "Former Director of Customer Success at Salesforce",
        "Expert in change management and adoption",
        "MS in Business Analytics from Northwestern"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@edjobster.com"
      }
    },
    {
      name: "David Kim",
      title: "VP of Engineering",
      bio: "David leads our engineering team in building robust, scalable solutions. He's passionate about creating technology that makes complex processes simple and intuitive.",
      experience: [
        "Former Principal Engineer at Meta",
        "Led teams building products for billions of users",
        "BS Computer Science from UC Berkeley"
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@edjobster.com"
      }
    }
  ];

  const advisors = [
    {
      name: "Dr. Patricia Lopez",
      title: "Former CHRO, Major University System",
      expertise: "Higher Education HR Strategy"
    },
    {
      name: "Robert Martinez",
      title: "Former CEO, Leading EdTech Company",
      expertise: "Education Technology & Scaling"
    },
    {
      name: "Jennifer Adams",
      title: "Former VP Talent, Fortune 500",
      expertise: "Enterprise HR Transformation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/5 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-testid="hero-title">
                Meet Our <span className="text-primary">Leadership Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Experienced leaders combining deep HR expertise with innovative technology to transform hiring.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="leadership-title">
                Executive Leadership
              </h2>
              <p className="text-lg text-gray-600" data-testid="leadership-subtitle">
                The experienced team driving innovation in education hiring
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-brand p-8 hover:shadow-brand transition-shadow" data-testid={`leader-${index}`}>
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-primary font-medium text-sm">{leader.title}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Experience:</h4>
                    <ul className="space-y-1">
                      {leader.experience.map((exp, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={leader.social.linkedin}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`${leader.name} LinkedIn`}
                      data-testid={`leader-${index}-linkedin`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={leader.social.twitter}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`${leader.name} Twitter`}
                      data-testid={`leader-${index}-twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${leader.social.email}`}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={`Email ${leader.name}`}
                      data-testid={`leader-${index}-email`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="advisors-title">
                Advisory Board
              </h2>
              <p className="text-lg text-gray-600" data-testid="advisors-subtitle">
                Industry experts who guide our strategic direction
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-white rounded-brand p-8 shadow-brand text-center" data-testid={`advisor-${index}`}>
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{advisor.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{advisor.title}</p>
                  <p className="text-xs text-gray-600">{advisor.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="culture-title">
                  Our Leadership Philosophy
                </h2>
                <p className="text-lg text-gray-600 mb-6" data-testid="culture-description">
                  We believe in leading by example, fostering innovation, and putting our customers' success at the center of everything we do.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Customer-Centric</h3>
                      <p className="text-gray-600 text-sm">Every decision is made with our customers' success in mind.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Innovation-Driven</h3>
                      <p className="text-gray-600 text-sm">We continuously push boundaries to solve real problems.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Transparent</h3>
                      <p className="text-gray-600 text-sm">Open communication and honest feedback at every level.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Results-Oriented</h3>
                      <p className="text-gray-600 text-sm">We measure success by the impact we create for our clients.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-brand p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Our Team</h3>
                <p className="text-gray-600 mb-6">
                  We're always looking for talented individuals who share our passion for transforming education hiring.
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-brand p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Open Positions</h4>
                    <p className="text-sm text-gray-600">Senior Software Engineer, Product Manager, Customer Success Manager</p>
                  </div>
                  <a href="/company/careers">
                    <Button className="w-full bg-primary text-white hover:bg-primary-dark" data-testid="careers-cta">
                      View All Opportunities
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Get in touch to learn how our experienced leadership team can help transform your hiring process.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
                Contact Our Team
              </Button>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leadership;
