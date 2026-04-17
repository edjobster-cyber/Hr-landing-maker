import { useEffect } from "react";
import { MapPin, Clock, Users, Heart, Briefcase, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers - Join Our Team | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join the Edjobster team! Explore open positions and help us transform hiring in education. Remote-friendly with competitive benefits.');
    }
  }, []);

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Build scalable systems that help organizations hire better. Work with React, Node.js, and modern cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, TypeScript, and Node.js",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Define and execute product strategy for our hiring platform. Work closely with customers to understand needs and drive product decisions.",
      requirements: [
        "3+ years of product management experience",
        "B2B SaaS experience preferred",
        "Strong analytical and communication skills",
        "Customer-focused mindset"
      ]
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "2+ years",
      description: "Help our clients succeed with implementation and ongoing optimization. Build relationships and drive adoption.",
      requirements: [
        "2+ years in customer success or account management",
        "Experience with B2B software implementations",
        "Excellent communication and relationship-building skills",
        "Problem-solving mindset"
      ]
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote / Boston",
      type: "Full-time",
      experience: "1+ years",
      description: "Generate qualified leads and build pipeline for our sales team. Work with marketing to identify and engage prospects.",
      requirements: [
        "1+ years of sales or business development experience",
        "Strong communication and persistence",
        "Interest in education or HR technology",
        "Goal-oriented and metrics-driven"
      ]
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive demand generation and brand awareness. Manage content marketing, campaigns, and lead generation programs.",
      requirements: [
        "3+ years of B2B marketing experience",
        "Experience with digital marketing and content creation",
        "Analytics-driven approach to marketing",
        "Strong writing and communication skills"
      ]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      experience: "3+ years",
      description: "Create intuitive, beautiful experiences for our users. Work closely with product and engineering to design features that delight.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and design systems",
        "Experience with B2B software design",
        "Portfolio demonstrating strong design thinking"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness stipend"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-competitive salary plus equity package and performance bonuses"
    },
    {
      icon: Clock,
      title: "Flexible Time Off",
      description: "Unlimited PTO policy and flexible working arrangements"
    },
    {
      icon: Users,
      title: "Professional Development",
      description: "$2,000 annual learning budget and conference attendance"
    },
    {
      icon: MapPin,
      title: "Remote-First",
      description: "Work from anywhere with quarterly team meetups and annual offsite"
    },
    {
      icon: Briefcase,
      title: "Equipment & Setup",
      description: "MacBook, monitor, and $1,000 home office setup stipend"
    }
  ];

  const values = [
    "Customer obsession - Everything we do starts with understanding our customers' needs",
    "Innovation - We're not afraid to try new approaches and learn from failures",
    "Transparency - Open communication and honest feedback at every level",
    "Excellence - We hold ourselves to high standards and deliver quality work",
    "Growth mindset - Continuous learning and improvement in everything we do",
    "Impact - We measure success by the positive impact we create"
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
                Join Our <span className="text-primary">Mission</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Help us transform hiring in education and make a meaningful impact on students' lives worldwide.
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  <span>50+ Team Members</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  <span>Remote-First</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="why-join-title">
                  Why Join Edjobster?
                </h2>
                <p className="text-lg text-gray-600 mb-8" data-testid="why-join-description">
                  We're building the future of hiring in education. Join a team of passionate professionals who believe technology can make hiring more effective, fair, and human.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Meaningful Impact</h3>
                      <p className="text-gray-600 text-sm">Help educational institutions find great talent that impacts students' lives.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Growth Opportunities</h3>
                      <p className="text-gray-600 text-sm">Take on new challenges and grow your career in a fast-paced environment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Innovative Technology</h3>
                      <p className="text-gray-600 text-sm">Work with cutting-edge tools and technologies in AI, machine learning, and more.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Collaborative Culture</h3>
                      <p className="text-gray-600 text-sm">Work with a diverse team that values different perspectives and ideas.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-brand p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start" data-testid={`value-${index}`}>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="benefits-title">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600" data-testid="benefits-subtitle">
                We invest in our team's success and well-being
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-brand p-6 shadow-brand" data-testid={`benefit-${index}`}>
                    <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="positions-title">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600" data-testid="positions-subtitle">
                Find the role that's right for you
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-brand p-8 hover:shadow-brand transition-shadow" data-testid={`position-${index}`}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {position.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{position.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8 flex-shrink-0">
                      <Button className="bg-primary text-white hover:bg-primary-dark" data-testid={`apply-${index}`}>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Don't see a role that fits? We're always looking for exceptional talent.</p>
              <Button variant="outline" data-testid="general-application">
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="process-title">
                Our Hiring Process
              </h2>
              <p className="text-lg text-gray-600" data-testid="process-subtitle">
                Transparent, efficient, and designed to find the right fit
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
                <p className="text-gray-600 text-sm">Submit your application and we'll review it within 2 business days.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Screen</h3>
                <p className="text-gray-600 text-sm">30-minute conversation with our recruiting team to learn more about you.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
                <p className="text-gray-600 text-sm">Meet with the hiring manager and potential teammates to discuss the role.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Decision</h3>
                <p className="text-gray-600 text-sm">We'll make a decision quickly and provide feedback regardless of outcome.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Join our team and help transform how education institutions find and hire great talent.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
              Browse Open Positions
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
