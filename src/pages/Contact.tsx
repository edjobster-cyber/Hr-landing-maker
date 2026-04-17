import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import contactBanner from "@/assets/contact-us.jpg";

const Contact = () => {
  
  useEffect(() => {
    document.title = "Contact Us - Get in Touch | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with our team. Contact Edjobster for demos, support, partnerships, or general inquiries about our hiring platform.');
    }
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      description: "Call us for immediate assistance",
      details: "+91 9319976569",
      note: "Mon-Fri, 9am-6pm EST"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us a detailed message",
      details: "info@edjobster.com",
      note: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit our Office",
      details: "Delhi, India (Global Coverage)",
      note: "By Edjobster"
    },
    // {
    //   icon: Clock,
    //   title: "Support Hours",
    //   description: "When our team is available",
    //   details: "Monday - Friday, 9:00 AM - 6:00 PM EST",
    //   note: "Emergency support available 24/7"
    // }
  ];

  const teams = [
    {
      title: "Sales & Demos",
      email: "sales@edjobster.com",
      description: "Product demos, pricing information, and new client inquiries"
    },
    {
      title: "Customer Support",
      email: "support@edjobster.com",
      description: "Technical support, account assistance, and platform help"
    },
    {
      title: "Partnerships",
      email: "partnerships@edjobster.com",
      description: "Integration partnerships, channel partnerships, and business development"
    },
    {
      title: "Media & Press",
      email: "press@edjobster.com",
      description: "Press inquiries, media kits, and interview requests"
    }
  ];

  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "Most clients can be up and running within 2-4 weeks, depending on the complexity of your setup and data migration needs."
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes, we provide comprehensive onboarding, training sessions, and ongoing support to ensure your success with our platform."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "We offer integrations with most major HRIS, payroll, and communication systems. Our team will assess your specific needs during implementation."
    },
    {
      question: "What kind of reporting and analytics do you provide?",
      answer: "Our platform includes comprehensive reporting on hiring metrics, funnel analytics, source performance, and custom reports tailored to your needs."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:pt-32 lg:pb-2 flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 blur-sm"
            style={{ backgroundImage: `url(${contactBanner})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#b54891]/60 to-[#1a58a5]/60" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="hero-title">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed" data-testid="hero-subtitle">
                Ready to transform your hiring process? Our team is here to help you get started.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="contact-methods-title">
                How Can We Help?
              </h2>
              <p className="text-lg text-gray-600" data-testid="contact-methods-subtitle">
                Choose the best way to reach us for your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="text-center" data-testid={`contact-method-${index}`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{method.description}</p>
                    <p className="font-medium text-gray-900 mb-2">{method.details}</p>
                    <p className="text-xs text-gray-500">{method.note}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* Contact Form Section */}
        {(() => {
          // const platformParam = new URLSearchParams(window.location.search).get("platform") || "Contact page";
          return <ContactForm platform="contact page" title="We Are Your Strategic Hiring Partner!" subTitle="Strategise your workforce planning to grow your business globally." />;
        })()}

        {/* Team Contacts */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="teams-title">
                Contact Specific Teams
              </h2>
              <p className="text-lg text-gray-600" data-testid="teams-subtitle">
                Reach out directly to the right team for faster assistance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {teams.map((team, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-brand p-6" data-testid={`team-${index}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{team.title}</h3>
                  <a
                    href={`mailto:${team.email}`}
                    className="text-primary font-medium hover:text-primary-dark transition-colors mb-3 block"
                    data-testid={`team-email-${index}`}
                  >
                    {team.email}
                  </a>
                  <p className="text-gray-600 text-sm">{team.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* FAQ */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="faq-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600" data-testid="faq-subtitle">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-brand p-8 shadow-brand" data-testid={`faq-${index}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Have a different question?</p>
              <a
                href="mailto:info@edjobster.com"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
                data-testid="general-email"
              >
                Send us an email
              </a>
            </div> */}
          </div>
        </section>

        {/* Office Location */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="office-title">
                  Visit Our Office
                </h2>
                <p className="text-lg text-gray-600 mb-8" data-testid="office-description">
                  While we're a remote-first company, our San Francisco headquarters is always open for client meetings, partnerships, and team gatherings.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">Delhi, India (Global Coverage)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM PST<br />Weekends by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Phone</h3>
                      <p className="text-gray-600">+91 9319976569</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-brand h-80 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Placeholder</p>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
