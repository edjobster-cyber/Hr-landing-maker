import { useEffect } from "react";
import { BookOpen, Clock, Lightbulb, PenTool, CheckCircle, Star, Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const TeacherAI = () => {
  useEffect(() => {
    document.title = "Teacher AI - Save Hours on Lesson Plans | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI-powered tools for teachers. Create lesson plans, assessments, and educational content in minutes, not hours.');
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
              AI-Powered Assistant for <span className="text-primary">Educators</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                AI-powered tools built specifically for teachers. Create engaging lesson plans, assessments, and educational content in minutes.
              </p>
              <Button
                className="bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary-dark shadow-brand"
                data-testid="hero-cta"
                onClick={() => {
                  const el = document.getElementById('teacher-ai-contact');
                  if (el && typeof el.scrollIntoView === 'function') {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.location.hash = '#teacher-ai-contact';
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
                Reclaim Your Time
              </h2>
              <p className="text-lg text-gray-600" data-testid="time-savings-subtitle">
                Spend less time planning, more time teaching
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">10 Hours/Week Saved</h3>
                <p className="text-gray-600">Average time saved on lesson planning and content creation per teacher.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5 Minutes</h3>
                <p className="text-gray-600">Create a complete lesson plan with objectives, activities, and assessments.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Grade K-12</h3>
                <p className="text-gray-600">Pre-built prompts and templates for all grade levels and subjects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="ai-features-title">
                AI Prompts Built for Teachers
              </h2>
              <p className="text-lg text-gray-600" data-testid="ai-features-subtitle">
                Specialized AI tools designed specifically for educational needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Lesson Plan Generator</h3>
                <p className="text-gray-600">Generate high-quality lesson plans tailored to syllabus and class needs.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Teaching Material Enhancer</h3>
                <p className="text-gray-600">Improve lecture slides, notes, and handouts using AI recommendations.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment Builder</h3>
                <p className="text-gray-600">Create quizzes, MCQs, and assignments aligned with learning goals.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Activity Ideas</h3>
                <p className="text-gray-600">Get creative, engaging activity suggestions based on your topic and grade level.</p>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Management</h3>
                <p className="text-gray-600">Optimize lesson timing and pacing for maximum student engagement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Classroom Ready */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-testid="classroom-ready-title">
                  Classroom-Ready Outputs
                </h2>
                <p className="text-lg text-gray-600 mb-8" data-testid="classroom-ready-description">
                  Every output is designed to be immediately usable in your classroom, saving you editing and formatting time.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Formatted & Ready</h3>
                      <p className="text-gray-600">All content comes pre-formatted and ready to print or share digitally.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Multiple Formats</h3>
                      <p className="text-gray-600">Export to Word, PDF, Google Docs, or your preferred format.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Customizable Templates</h3>
                      <p className="text-gray-600">Adapt and modify templates to match your teaching style and school requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Resource Links</h3>
                      <p className="text-gray-600">Includes relevant educational resources and supplementary materials.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-brand">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Sample Lesson Plan Output</h3>
                <div className="bg-white p-6 rounded shadow space-y-4">
                  <div className="border-b pb-2">
                    <h4 className="font-medium text-gray-900">Grade 5 Science: Ecosystems</h4>
                    <p className="text-sm text-gray-600">Duration: 45 minutes</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Learning Objectives:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Students will identify components of an ecosystem</li>
                      <li>• Students will explain food chains and energy flow</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">Activities:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Warm-up: Ecosystem sorting game (10 min)</li>
                      <li>• Main activity: Build a food chain (25 min)</li>
                      <li>• Wrap-up: Exit ticket assessment (10 min)</li>
                    </ul>
                  </div>
                  
                  <div className="text-xs text-gray-500 pt-2 border-t">
                    Aligned with NGSS 5-LS2-1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teacher Testimonials */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="testimonials-title">
                What Teachers Are Saying
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
                  "Teacher AI has revolutionized my lesson planning. What used to take me 2 hours now takes 15 minutes, and the quality is amazing."
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                  <div className="text-sm text-gray-600">4th Grade Teacher, Lincoln Elementary</div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "The differentiation suggestions are incredible. I can now easily adapt lessons for all my students' needs."
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">James Thompson</div>
                  <div className="text-sm text-gray-600">High School Biology Teacher</div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-brand shadow-brand">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "As a new teacher, this tool has been a lifesaver. The lesson plans are professional and engaging."
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Kim</div>
                  <div className="text-sm text-gray-600">1st Year Middle School Math Teacher</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Start Teaching Smarter Today
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Join thousands of teachers already using AI to create better lessons in less time.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
                See How It Works
              </Button>
            </a>
          </div>
        </section> */}
        <div id="teacher-ai-contact" className="scroll-mt-24">
          <ContactForm
            platform="TeacherAi"
            title="Start Teaching Smarter Today"
            subTitle="Join thousands of teachers already using AI to create better lessons in less time."
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeacherAI;
