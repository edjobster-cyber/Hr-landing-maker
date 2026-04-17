import { useEffect } from "react";
import { FileText, Zap, Shield, Clock, CheckCircle, Star, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const AiDocsHr = () => {
  useEffect(() => {
    document.title = "AI Docs HR - Generate HR Documents in Seconds | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI-powered HR document generation. Create offer letters, policies, contracts, and compliance documents in minutes with intelligent templates.');
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
                AI-Powered <span className="text-primary">HR Documents</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Generate professional HR documents in seconds. From offer letters to policies, create compliant, personalized documents with AI.
              </p>
              <Button
                className="bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary-dark shadow-brand"
                data-testid="hero-cta"
                onClick={() => {
                  const el = document.getElementById('ai-docs-contact');
                  if (el && typeof el.scrollIntoView === 'function') {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.location.hash = '#ai-docs-contact';
                  }
                }}
              >
                See How It Works
              </Button>
            </div>
          </div>
        </section>

        {/* Time Savings */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="time-savings-title">
                Save Hours on Document Creation
              </h2>
              <p className="text-lg text-gray-600" data-testid="time-savings-subtitle">
                Focus on people, not paperwork
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">90% Faster</h3>
                <p className="text-gray-600">Generate complete HR documents in under 2 minutes instead of hours.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">100% Compliant</h3>
                <p className="text-gray-600">Built-in compliance checks ensure your documents meet legal standards.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI-Personalized</h3>
                <p className="text-gray-600">Automatically customize documents based on role, location, and company policies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="ai-features-title">
                Documents You Can Generate
              </h2>
              <p className="text-lg text-gray-600" data-testid="ai-features-subtitle">
                Complete library of HR documents powered by intelligent AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Offer Letters</h3>
                <p className="text-gray-600">Generate personalized offer letters with compensation details, benefits, and terms tailored to each candidate.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HR Policies</h3>
                <p className="text-gray-600">Create comprehensive policy documents including remote work, leave, code of conduct, and more.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Employment Contracts</h3>
                <p className="text-gray-600">Draft legally sound contracts with role-specific clauses, NDAs, and non-compete agreements.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Onboarding Checklists</h3>
                <p className="text-gray-600">Generate role-specific onboarding plans with tasks, timelines, and resource allocations.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Reviews</h3>
                <p className="text-gray-600">Create balanced performance evaluation templates and feedback forms for any role.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Documents</h3>
                <p className="text-gray-600">Generate region-specific compliance forms, tax documents, and regulatory filings automatically.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="features-title">
                  Smart Document Management
                </h2>
                <p className="text-lg text-gray-600 mb-8" data-testid="features-description">
                  Beyond generation - manage, track, and optimize your entire HR document workflow with AI assistance.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Version Control</h3>
                      <p className="text-gray-600">Track changes and maintain document history with automatic versioning.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">E-Signatures</h3>
                      <p className="text-gray-600">Built-in digital signing workflow with audit trails and reminders.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Template Library</h3>
                      <p className="text-gray-600">Access 100+ pre-built templates or create your own custom document types.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Multi-Language Support</h3>
                      <p className="text-gray-600">Generate documents in multiple languages for global teams automatically.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-brand">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Sample Offer Letter</h3>
                <div className="bg-white p-6 rounded shadow space-y-4">
                  <div className="border-b pb-2">
                    <h4 className="font-medium text-gray-900">Job Offer - Senior Software Engineer</h4>
                    <p className="text-sm text-gray-600">Generated: Just now</p>
                  </div>
                  
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>Dear [Candidate Name],</p>
                    <p>We are pleased to offer you the position of Senior Software Engineer at [Company Name].</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Position Details:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Start Date: [Date]</li>
                      <li>• Salary: $[Amount] per annum</li>
                      <li>• Location: [Office/Remote]</li>
                      <li>• Reporting to: [Manager Name]</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Benefits Include:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Health insurance coverage</li>
                      <li>• 401(k) matching</li>
                      <li>• Flexible PTO policy</li>
                    </ul>
                  </div>
                  
                  <div className="text-xs text-gray-500 pt-2 border-t">
                    Compliant with: Federal & State Employment Laws
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="testimonials-title">
                What HR Teams Are Saying
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "AI Docs HR has transformed our onboarding process. What used to take days now takes minutes, and the quality is consistently professional."
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">HR Director, TechStart Inc.</div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "The compliance features give us peace of mind. Every document is automatically checked against current regulations."
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-600">VP of People Operations, GrowthLabs</div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "We've reduced our document creation time by 85%. Our HR team can now focus on strategic initiatives instead of paperwork."
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Williams</div>
                  <div className="text-sm text-gray-600">Chief People Officer, ScaleUp Co.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="ai-docs-contact" className="scroll-mt-24">
          <ContactForm
            platform="AiDocsHr"
            title="Transform Your HR Document Workflow"
            subTitle="Join hundreds of HR teams already using AI to create better documents in less time."
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiDocsHr;
