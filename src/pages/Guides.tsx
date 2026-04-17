import { useEffect } from "react";
import { Download, Clock, BookOpen, Star, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Guides = () => {
  useEffect(() => {
    document.title = "Guides - Comprehensive Hiring Resources | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download comprehensive guides to improve your hiring process, from ATS implementation to building inclusive recruitment practices.');
    }
  }, []);

  const guides = [
    {
      title: "The Complete ATS Implementation Guide",
      description: "Everything you need to know about selecting, implementing, and optimizing an applicant tracking system for your organization.",
      pages: 45,
      readTime: "2-3 hours",
      category: "Implementation",
      featured: true,
      topics: ["ATS Selection", "Implementation Planning", "Change Management", "Best Practices"],
      downloadCount: "2.1k"
    },
    {
      title: "Building Inclusive Hiring Practices",
      description: "A comprehensive guide to creating more diverse and inclusive recruitment processes that attract top talent from all backgrounds.",
      pages: 32,
      readTime: "1.5 hours",
      category: "Diversity & Inclusion",
      featured: false,
      topics: ["Bias Reduction", "Inclusive Job Descriptions", "Diverse Sourcing", "Interview Training"],
      downloadCount: "1.8k"
    },
    {
      title: "Campus Recruiting Strategy Handbook",
      description: "Proven strategies for successful campus recruiting, from building university partnerships to managing intern programs.",
      pages: 38,
      readTime: "2 hours",
      category: "Campus Recruiting",
      featured: false,
      topics: ["University Partnerships", "Event Planning", "Student Engagement", "Pipeline Building"],
      downloadCount: "1.5k"
    },
    {
      title: "Remote Hiring Best Practices",
      description: "Master the art of remote recruitment with proven strategies for virtual interviews, onboarding, and team integration.",
      pages: 28,
      readTime: "1.5 hours",
      category: "Remote Work",
      featured: false,
      topics: ["Virtual Interviews", "Remote Onboarding", "Digital Tools", "Culture Building"],
      downloadCount: "2.3k"
    },
    {
      title: "Scaling Recruitment for Growth",
      description: "How to build scalable hiring processes that maintain quality while supporting rapid organizational growth.",
      pages: 42,
      readTime: "2.5 hours",
      category: "Scaling",
      featured: false,
      topics: ["Process Design", "Team Building", "Technology Stack", "Quality Control"],
      downloadCount: "1.2k"
    },
    {
      title: "Multi-Campus Hiring Coordination",
      description: "Strategies for managing recruitment across multiple locations while maintaining consistency and quality standards.",
      pages: 35,
      readTime: "2 hours",
      category: "Multi-Campus",
      featured: false,
      topics: ["Centralization", "Local Flexibility", "Communication", "Reporting"],
      downloadCount: "950"
    }
  ];

  const categories = ["All Guides", "Implementation", "Best Practices", "Diversity & Inclusion", "Technology", "Scaling"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/5 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-testid="hero-title">
                Comprehensive <span className="text-primary">Hiring Guides</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                In-depth resources to help you master every aspect of the recruitment process.
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-primary" />
                  <span>15+ Guides</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-5 h-5 mr-2 text-primary" />
                  <span>Free Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-primary text-white" : ""}
                  data-testid={`filter-${category.toLowerCase().replace(' ', '-').replace('&', 'and')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guide */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Guide</h2>
              <p className="text-gray-600">Our most comprehensive and popular resource</p>
            </div>

            {guides.filter(guide => guide.featured).map((guide, index) => (
              <div key={index} className="bg-white rounded-brand shadow-brand-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8" data-testid="featured-guide">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-white rounded-lg shadow-brand mx-auto mb-6 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-primary" />
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <span>{guide.pages} pages</span>
                      <span>•</span>
                      <span>{guide.downloadCount} downloads</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Featured Guide
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{guide.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{guide.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>{guide.pages} pages</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{guide.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      <span>{guide.downloadCount} downloads</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {guide.topics.map((topic, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <Button className="self-start bg-primary text-white hover:bg-primary-dark" data-testid="featured-download">
                    <Download className="w-4 h-4 mr-2" />
                    Download Guide
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guide Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All Guides</h2>
              <p className="text-gray-600">Browse our complete library of hiring resources</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.filter(guide => !guide.featured).map((guide, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-brand p-6 hover:shadow-brand transition-shadow" data-testid={`guide-${index}`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {guide.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                      <span>{guide.downloadCount}</span>
                    </div>
                  </div>
                  
                  <div className="w-20 h-24 bg-gray-100 rounded mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{guide.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm text-center">{guide.description}</p>
                  
                  <div className="flex items-center justify-center text-xs text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <BookOpen className="w-3 h-3 mr-1" />
                      <span>{guide.pages} pages</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-6 justify-center">
                    {guide.topics.slice(0, 2).map((topic, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                    {guide.topics.length > 2 && (
                      <span className="text-xs text-gray-500">+{guide.topics.length - 2} more</span>
                    )}
                  </div>

                  <Button className="w-full" variant="outline" data-testid={`download-${index}`}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Guide
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="benefits-title">
                Why Our Guides Work
              </h2>
              <p className="text-lg text-gray-600" data-testid="benefits-subtitle">
                Practical, actionable advice from real-world experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Research-Based</h3>
                <p className="text-gray-600">Every guide is backed by extensive research and real-world data from successful implementations.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert-Reviewed</h3>
                <p className="text-gray-600">All content is reviewed by industry experts and HR leaders with decades of experience.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Action-Oriented</h3>
                <p className="text-gray-600">Step-by-step instructions and practical templates you can implement immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Ready to Improve Your Hiring?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Download our guides and start implementing proven strategies today.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
                Get Started with Edjobster
              </Button>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Guides;
