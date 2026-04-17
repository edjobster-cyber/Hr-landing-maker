import { useEffect } from "react";
import { Download, FileText, Star, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Templates = () => {
  useEffect(() => {
    document.title = "Templates - Ready-to-Use Hiring Resources | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download free hiring templates including job descriptions, interview scorecards, offer letters, and onboarding checklists.');
    }
  }, []);

  const templates = [
    {
      title: "Interview Scorecard Template",
      description: "Standardize your interview process with this comprehensive scorecard that ensures consistent candidate evaluation.",
      category: "Interviews",
      format: "Excel/PDF",
      downloadCount: "3.2k",
      featured: true,
      tags: ["Interviews", "Evaluation", "Standardization"]
    },
    {
      title: "Job Description Template Library",
      description: "Complete collection of job description templates for education roles, from teachers to administrators.",
      category: "Job Descriptions",
      format: "Word/PDF",
      downloadCount: "4.1k",
      featured: false,
      tags: ["Job Descriptions", "Education", "Templates"]
    },
    {
      title: "Candidate Rejection Email Templates",
      description: "Professional, empathetic email templates for candidate communication at every stage of the process.",
      category: "Communication",
      format: "Word/HTML",
      downloadCount: "2.8k",
      featured: false,
      tags: ["Communication", "Candidate Experience", "Email"]
    },
    {
      title: "Onboarding Checklist Template",
      description: "Comprehensive checklist to ensure new hires have everything they need for a successful start.",
      category: "Onboarding",
      format: "Excel/PDF",
      downloadCount: "2.5k",
      featured: false,
      tags: ["Onboarding", "Checklist", "New Hires"]
    },
    {
      title: "Reference Check Question Bank",
      description: "Pre-written questions for conducting thorough and legal reference checks with former employers.",
      category: "Background Checks",
      format: "Word/PDF",
      downloadCount: "1.9k",
      featured: false,
      tags: ["Reference Checks", "Verification", "Questions"]
    },
    {
      title: "Offer Letter Templates",
      description: "Professional offer letter templates that cover all legal requirements and set clear expectations.",
      category: "Offers",
      format: "Word/PDF",
      downloadCount: "3.5k",
      featured: false,
      tags: ["Offer Letters", "Legal", "Employment"]
    },
    {
      title: "Campus Recruiting Event Planner",
      description: "Complete planning template for organizing successful campus recruiting events and job fairs.",
      category: "Campus Recruiting",
      format: "Excel/Word",
      downloadCount: "1.2k",
      featured: false,
      tags: ["Campus Recruiting", "Events", "Planning"]
    },
    {
      title: "Diversity & Inclusion Audit Template",
      description: "Assess your current hiring practices and identify opportunities to improve diversity and inclusion.",
      category: "Diversity & Inclusion",
      format: "Excel/PDF",
      downloadCount: "1.6k",
      featured: false,
      tags: ["Diversity", "Inclusion", "Audit"]
    },
    {
      title: "Remote Interview Guide",
      description: "Step-by-step guide and checklist for conducting effective virtual interviews.",
      category: "Remote Work",
      format: "PDF/Word",
      downloadCount: "2.1k",
      featured: false,
      tags: ["Remote Work", "Virtual Interviews", "Guide"]
    }
  ];

  const categories = ["All Templates", "Interviews", "Job Descriptions", "Communication", "Onboarding", "Legal"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/5 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-testid="hero-title">
                Ready-to-Use <span className="text-primary">Templates</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Save time with our collection of proven hiring templates, checklists, and forms.
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  <span>25+ Templates</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-5 h-5 mr-2 text-primary" />
                  <span>Free Downloads</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search templates..."
                  className="pl-10"
                  data-testid="search-input"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
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
          </div>
        </section>

        {/* Featured Template */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Template</h2>
              <p className="text-gray-600">Our most popular and comprehensive template</p>
            </div>

            {templates.filter(template => template.featured).map((template, index) => (
              <div key={index} className="bg-white rounded-brand shadow-brand-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8" data-testid="featured-template">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-40 bg-white rounded-lg shadow-brand mx-auto mb-6 flex items-center justify-center">
                      <FileText className="w-16 h-16 text-primary" />
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <span>{template.format}</span>
                      <span>•</span>
                      <span>{template.downloadCount} downloads</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{template.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{template.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      <span>{template.format}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      <span>{template.downloadCount} downloads</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                      <span>{template.category}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {template.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="self-start bg-primary text-white hover:bg-primary-dark" data-testid="featured-download">
                    <Download className="w-4 h-4 mr-2" />
                    Download Template
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Template Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All Templates</h2>
              <p className="text-gray-600">Browse our complete collection of hiring templates</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.filter(template => !template.featured).map((template, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-brand p-6 hover:shadow-brand transition-shadow" data-testid={`template-${index}`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {template.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Download className="w-3 h-3 mr-1" />
                      <span>{template.downloadCount}</span>
                    </div>
                  </div>
                  
                  <div className="w-16 h-20 bg-gray-100 rounded mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{template.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm text-center">{template.description}</p>
                  
                  <div className="flex items-center justify-center text-xs text-gray-500 mb-4">
                    <FileText className="w-3 h-3 mr-1" />
                    <span>{template.format}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-6 justify-center">
                    {template.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {template.tags.length > 2 && (
                      <span className="text-xs text-gray-500">+{template.tags.length - 2}</span>
                    )}
                  </div>

                  <Button className="w-full" variant="outline" data-testid={`download-${index}`}>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" data-testid="load-more">
                Load More Templates
              </Button>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="how-to-use-title">
                How to Use Our Templates
              </h2>
              <p className="text-lg text-gray-600" data-testid="how-to-use-subtitle">
                Get the most value from our ready-to-use resources
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Download</h3>
                <p className="text-gray-600">Choose the template that fits your needs and download it in your preferred format.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customize</h3>
                <p className="text-gray-600">Adapt the template to match your organization's specific needs and branding.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Implement</h3>
                <p className="text-gray-600">Put the template into action and start improving your hiring process immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Need More Than Templates?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Get the complete hiring platform that integrates all these processes seamlessly.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
                Explore Edjobster Platform
              </Button>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Templates;
