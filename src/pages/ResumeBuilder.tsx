import { useEffect } from "react";
import { FileText, Upload, Download, Zap, CheckCircle, Star, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const ResumeBuilder = () => {
  useEffect(() => {
    document.title = "Resume Builder - AI-Optimized Resumes | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create AI-optimized resumes that pass ATS screening. Upload, tailor, and download professional resumes in minutes.');
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
                <span className="text-primary">Build AI-Optimized Resumes</span> That Beat ATS
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Create professional resumes that pass ATS screening and land interviews. Upload, tailor, and download in minutes.
              </p>
              <Button
                className="bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary-dark shadow-brand"
                data-testid="hero-cta"
                onClick={() => {
                  const el = document.getElementById('resume-builder-contact');
                  if (el && typeof el.scrollIntoView === 'function') {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.location.hash = '#resume-builder-contact';
                  }
                }}
              >
                Try CV Tuner Now
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="how-it-works-title">
                Upload → Tailor → Download
              </h2>
              <p className="text-lg text-gray-600" data-testid="how-it-works-subtitle">
                Simple 3-step process to create optimized resumes
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Upload</h3>
                <p className="text-gray-600 mb-6">Upload your existing resume or create one from scratch using our intuitive builder.</p>
                <div className="bg-gray-50 p-4 rounded-brand">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>PDF, DOC, DOCX supported</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Tailor</h3>
                <p className="text-gray-600 mb-6">AI analyzes job descriptions and suggests improvements to increase your match rate.</p>
                <div className="bg-gray-50 p-4 rounded-brand">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Star className="w-4 h-4" />
                    <span>AI-powered optimization</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Download className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Download</h3>
                <p className="text-gray-600 mb-6">Download your polished, ATS-friendly resume and start applying with confidence.</p>
                <div className="bg-gray-50 p-4 rounded-brand">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Download className="w-4 h-4" />
                    <span>Multiple format options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="ai-features-title">
                  AI-Powered Optimization
                </h2>
                <p className="text-lg text-gray-600 mb-8" data-testid="ai-features-description">
                  Our AI analyzes thousands of successful resumes and job postings to optimize your content for maximum impact.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">AI Resume Rewriter</h3>
                      <p className="text-gray-600">Rebuild resumes with ATS-friendly formatting and job-relevant keywords.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Keyword Optimization</h3>
                      <p className="text-gray-600">Automatically identifies and suggests relevant keywords based on job descriptions.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">ATS Compatibility</h3>
                      <p className="text-gray-600">Ensures your resume passes through applicant tracking systems successfully.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Format Optimization</h3>
                      <p className="text-gray-600">Automatically adjusts formatting for readability and ATS parsing.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Format Optimization</h3>
                      <p className="text-gray-600">Automatically adjusts formatting for readability and ATS parsing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Resume Score Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">ATS Compatibility</span>
                      <span className="text-sm font-bold text-green-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Keyword Match</span>
                      <span className="text-sm font-bold text-blue-600">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Readability</span>
                      <span className="text-sm font-bold text-purple-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Score</span>
                      <span className="text-sm font-bold text-primary">91%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '91%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Match Rate Improvement */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="match-rate-title">
                Improve Your Match Rates
              </h2>
              <p className="text-lg text-gray-600" data-testid="match-rate-subtitle">
                See the difference optimized resumes make
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                <div className="text-gray-600">More Interview Callbacks</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">78%</div>
                <div className="text-gray-600">Higher ATS Pass Rate</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">45%</div>
                <div className="text-gray-600">Better Keyword Matching</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2min</div>
                <div className="text-gray-600">Average Optimization Time</div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-brand">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Before vs After</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white p-6 rounded-brand shadow">
                    <h4 className="font-semibold text-red-600 mb-3">Before Optimization</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Generic keywords</li>
                      <li>• Poor ATS formatting</li>
                      <li>• Weak action verbs</li>
                      <li>• Missing relevant skills</li>
                    </ul>
                    <div className="mt-4 text-2xl font-bold text-red-600">23% Match</div>
                  </div>

                  <div className="bg-white p-6 rounded-brand shadow">
                    <h4 className="font-semibold text-green-600 mb-3">After Optimization  (Sample Image of Resume)</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Targeted keywords</li>
                      <li>• ATS-friendly format</li>
                      <li>• Strong action verbs</li>
                      <li>• Relevant skill highlights</li>
                    </ul>
                    <div className="mt-4 text-2xl font-bold text-green-600">87% Match</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Start Building Better Resumes
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Join thousands of professionals using our AI-powered resume builder to land their dream jobs.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
                Try CV Tuner Now
              </Button>
            </a>
          </div>
        </section> */}
        <div id="resume-builder-contact" className="scroll-mt-24">
          <ContactForm
            platform="ResumeBuilder"
            title="Start Building Better Resumes"
            subTitle="Join thousands of professionals using our AI-powered resume builder to land their dream jobs."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumeBuilder;
