import { useEffect } from "react";
import { Check, X, Star, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing - Simple Plans for Growing Teams | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Choose a plan that scales with your hiring needs. Free tier available with flexible pricing for organizations of all sizes.');
    }
  }, []);

  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 3 active jobs",
        "Basic candidate management",
        "Email notifications",
        "Standard support",
        "Basic reporting"
      ],
      limitations: [
        "Limited to 50 candidates",
        "No custom branding",
        "No integrations",
        "No advanced analytics"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Basic",
      price: "Contact for pricing",
      description: "Growing organizations with regular hiring needs",
      features: [
        "Unlimited jobs",
        "Advanced candidate management",
        "Custom workflows",
        "Email & SMS notifications",
        "Career portal",
        "Basic integrations",
        "Priority support",
        "Advanced reporting"
      ],
      limitations: [
        "Limited custom branding",
        "Basic analytics",
        "Standard onboarding"
      ],
      cta: "Request Pricing",
      popular: false
    },
    {
      name: "Pro",
      price: "Contact for pricing",
      description: "Established organizations with complex hiring needs",
      features: [
        "Everything in Basic",
        "Full custom branding",
        "Advanced integrations",
        "Multi-campus support",
        "Advanced analytics",
        "Custom reporting",
        "API access",
        "Dedicated support",
        "Custom onboarding"
      ],
      limitations: [
        "Enterprise features require upgrade"
      ],
      cta: "Request Pricing",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Contact for pricing",
      description: "Large organizations with enterprise requirements",
      features: [
        "Everything in Pro",
        "Single sign-on (SSO)",
        "Advanced security features",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom contracts",
        "Unlimited training",
        "24/7 phone support"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const addOns = [
    {
      name: "WhatsApp Integration",
      description: "Send automated messages and receive applications via WhatsApp",
      price: "Contact for pricing"
    },
    {
      name: "Additional Users",
      description: "Extra user seats beyond your plan's included users",
      price: "Contact for pricing"
    },
    {
      name: "White Label",
      description: "Complete white labeling with your branding throughout",
      price: "Contact for pricing"
    },
    {
      name: "Custom Integrations",
      description: "Connect with your existing HR and payroll systems",
      price: "Contact for pricing"
    }
  ];

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes up to 3 active jobs, basic candidate management, and standard support. Perfect for small teams to get started."
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes, we offer significant discounts for annual subscriptions. Contact our sales team to learn about current offers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for Basic and Pro plans. Enterprise plans may include implementation services as part of a custom package."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support. Pro and Enterprise plans get priority support with faster response times and dedicated account management."
    },
    {
      question: "Can I import my existing data?",
      answer: "Yes, we provide data migration assistance for all paid plans. Our team will help you migrate candidates, jobs, and historical data."
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
                Simple plans for <span className="text-primary">growing teams</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Choose a plan that scales with your hiring needs. Start free, upgrade as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-brand border-2 p-8 ${
                    plan.popular ? 'border-primary shadow-brand-lg' : 'border-gray-200 shadow-brand'
                  }`}
                  data-testid={`plan-${plan.name.toLowerCase()}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan.price === "0" ? "Free" : plan.price}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900">Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mt-6">Limitations:</h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start">
                              <X className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-500">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <a href="/company/contact-us">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-primary text-white hover:bg-primary-dark'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                      data-testid={`cta-${plan.name.toLowerCase()}`}
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="addons-title">
                Available Add-ons
              </h2>
              <p className="text-lg text-gray-600" data-testid="addons-subtitle">
                Extend your platform with additional features and integrations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white p-8 rounded-brand shadow-brand" data-testid={`addon-${index}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{addon.name}</h3>
                    <span className="text-primary font-medium">{addon.price}</span>
                  </div>
                  <p className="text-gray-600">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="faq-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600" data-testid="faq-subtitle">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8" data-testid={`faq-${index}`}>
                  <div className="flex items-start">
                    <HelpCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Choose the plan that's right for your organization and start hiring smarter today.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
                Request Pricing
              </Button>
            </a>
          </div>
        </section> */}
        <ContactForm platform="Pricing" title="Ready to Get Started?" subTitle="Choose the plan that's right for your organization and start hiring smarter today."/>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
