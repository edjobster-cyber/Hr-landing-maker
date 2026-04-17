import { useEffect } from "react";
import { Globe, Smartphone, Search, BarChart3, CheckCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const CareerPortal = () => {
  useEffect(() => {
    document.title = "Career Portal - Branded Job Experience | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create a branded career portal with easy-apply flow. Improve candidate experience and boost application rates.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/5 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-testid="hero-title">
                <span className="text-primary">AI-Powered Branded Job Experience</span> That Converts
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Create a beautiful, mobile-optimized career portal that showcases your organization and makes applying effortless.
              </p>
              <Button
                className="bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary-dark shadow-brand"
                data-testid="hero-cta"
                onClick={() => {
                  const el = document.getElementById('career-portal-contact');
                  if (el && typeof el.scrollIntoView === 'function') {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.location.hash = '#career-portal-contact';
                  }
                }}
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Branded Experience */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="branded-title">
                  Showcase Your Brand
                </h2>
                <p className="text-lg text-gray-600 mb-8" data-testid="branded-description">
                  Create a career portal that reflects your organization's culture and values while providing an exceptional candidate experience.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">AI Resume Parsing</h3>
                      <p className="text-gray-600">Extract structured data from uploaded resumes instantly.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Custom Branding</h3>
                      <p className="text-gray-600">Your logo, colors, and messaging throughout the entire candidate journey.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">AI Candidate Fit Score Preview</h3>
                      <p className="text-gray-600">Show candidates how well they fit a role before applying.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Custom Domains</h3>
                      <p className="text-gray-600">Host your career portal on your own domain for a seamless brand experience.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="bg-gray-100 rounded-brand p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary rounded mr-3"></div>
                    <span className="font-semibold">Your Organization</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">Join our team and make a difference</div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border">
                      <div className="font-medium text-sm">Mathematics Teacher</div>
                      <div className="text-xs text-gray-500">Full-time • Remote</div>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <div className="font-medium text-sm">HR Coordinator</div>
                      <div className="text-xs text-gray-500">Part-time • On-site</div>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <div className="font-medium text-sm">IT Support Specialist</div>
                      <div className="text-xs text-gray-500">Full-time • Hybrid</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Easy Apply */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="easy-apply-title">
                Easy Apply & Resume Parse
              </h2>
              <p className="text-lg text-gray-600" data-testid="easy-apply-subtitle">
                Streamlined application process that reduces candidate drop-off
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-brand shadow-brand text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">One-Click Apply</h3>
                <p className="text-gray-600">Candidates can apply with LinkedIn, upload resume, or fill a simple form.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Resume Parsing</h3>
                <p className="text-gray-600">Automatically extract and structure candidate information from resumes.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Tracking</h3>
                <p className="text-gray-600">Candidates can track their application status in real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO & Sharing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-50 p-8 rounded-brand">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Optimization</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Google Indexing</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Meta Tags</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Structured Data</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Social Sharing</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="seo-title">
                  SEO & Social Sharing
                </h2>
                <p className="text-lg text-gray-600 mb-8" data-testid="seo-description">
                  Your jobs will be discovered organically through search engines and shared easily across social platforms.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">Automatically indexed by Google and other search engines</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">Rich snippets and structured data for better search visibility</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">Social media cards for beautiful sharing on aedIn, Facebook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="analytics-title">
                Detailed Analytics
              </h2>
              <p className="text-lg text-gray-600" data-testid="analytics-subtitle">
                Track performance and optimize your career portal
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-brand shadow-brand text-center">
                <div className="text-3xl font-bold text-primary mb-2">2.5x</div>
                <div className="text-gray-600">Higher Application Rates</div>
              </div>

              <div className="bg-white p-6 rounded-brand shadow-brand text-center">
                <div className="text-3xl font-bold text-primary mb-2">65%</div>
                <div className="text-gray-600">Lower Drop-off Rate</div>
              </div>

              <div className="bg-white p-6 rounded-brand shadow-brand text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-gray-600">Better Quality Candidates</div>
              </div>

              <div className="bg-white p-6 rounded-brand shadow-brand text-center">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-gray-600">Mobile Application Rate</div>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-brand shadow-brand">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Track What Matters</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Page Views & Sources</h4>
                  <p className="text-sm text-gray-600">See where candidates are coming from and which jobs are most popular</p>
                </div>
                <div className="text-center">
                  <Search className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Application Funnel</h4>
                  <p className="text-sm text-gray-600">Track drop-off points and optimize the application process</p>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-gray-900 mb-2">Candidate Experience</h4>
                  <p className="text-sm text-gray-600">Monitor application completion rates and user feedback</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Launch Your Career Portal Today
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Create a branded career experience that attracts top talent and converts applications.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
                Request a Demo
              </Button>
            </a>
          </div>
        </section> */}
        <div id="career-portal-contact" className="scroll-mt-24">
          <ContactForm
            platform="CareerPortal"
            title="Launch Your Career Portal Today"
            subTitle="Create a branded career experience that attracts top talent and converts applications."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareerPortal;
