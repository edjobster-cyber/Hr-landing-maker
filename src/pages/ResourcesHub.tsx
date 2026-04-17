import { useEffect } from "react";
import { BookOpen, Calendar, Headphones, FileText, Download, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ResourcesHub = () => {
  useEffect(() => {
    document.title = "Resources - Learn, Implement, and Grow | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our collection of hiring resources including blogs, events, podcasts, guides, and templates to improve your recruitment process.');
    }
  }, []);

  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Blogs",
      description: "Expert insights on hiring trends, best practices, and industry analysis",
      count: "50+ articles",
      href: "/resources/blogs",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Webinars, workshops, and conferences on recruitment and HR topics",
      count: "12 upcoming",
      href: "/resources/events",
      color: "green"
    },
    {
      icon: Headphones,
      title: "Podcasts",
      description: "Listen to conversations with HR leaders and recruitment experts",
      count: "30+ episodes",
      href: "/resources/podcasts",
      color: "purple"
    },
    {
      icon: FileText,
      title: "Guides",
      description: "Comprehensive guides to improve your hiring process and strategy",
      count: "15 guides",
      href: "/resources/guides",
      color: "orange"
    },
    {
      icon: Download,
      title: "Templates",
      description: "Ready-to-use templates for job descriptions, interviews, and more",
      count: "25+ templates",
      href: "/resources/templates",
      color: "red"
    }
  ];

  const featuredContent = [
    {
      category: "Blog",
      title: "The Complete Guide to ATS Implementation",
      description: "Everything you need to know about implementing an ATS in your organization.",
      readTime: "12 min read",
      href: "/resources/blogs"
    },
    {
      category: "Guide",
      title: "Hiring in Higher Education: Best Practices",
      description: "A comprehensive guide to effective hiring strategies for colleges and universities.",
      readTime: "Download PDF",
      href: "/resources/guides"
    },
    {
      category: "Template",
      title: "Interview Scorecard Template",
      description: "Standardize your interview process with our proven scorecard template.",
      readTime: "Free download",
      href: "/resources/templates"
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
                Learn, implement, <span className="text-primary">and grow</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Access expert resources to improve your hiring process and build better teams.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="categories-title">
                Explore Our Resources
              </h2>
              <p className="text-lg text-gray-600" data-testid="categories-subtitle">
                Find the right content to help you succeed in your hiring goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.slice(0, 4).map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <a key={index} href={category.href}>
                    <div className="bg-white p-8 rounded-brand shadow-brand hover:shadow-brand-lg transition-shadow cursor-pointer group" data-testid={`category-${category.title.toLowerCase()}`}>
                      <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary font-medium">{category.count}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </a>
                );
              })}
              
              {/* Templates - spans 2 columns on larger screens */}
              <a href={resourceCategories[4].href}>
                <div className="bg-white p-8 rounded-brand shadow-brand hover:shadow-brand-lg transition-shadow cursor-pointer group lg:col-span-2" data-testid="category-templates">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Download className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{resourceCategories[4].title}</h3>
                      <p className="text-gray-600 mb-4">{resourceCategories[4].description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary font-medium">{resourceCategories[4].count}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="featured-title">
                Featured Content
              </h2>
              <p className="text-lg text-gray-600" data-testid="featured-subtitle">
                Our most popular and highly-rated resources
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredContent.map((content, index) => (
                <div key={index} className="bg-white p-8 rounded-brand shadow-brand" data-testid={`featured-${index}`}>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {content.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{content.title}</h3>
                  <p className="text-gray-600 mb-6">{content.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                    <a href={content.href}>
                      <Button variant="outline" size="sm" data-testid={`featured-cta-${index}`}>
                        Learn More
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="newsletter-title">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8" data-testid="newsletter-subtitle">
              Get the latest hiring insights, tips, and resources delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary focus:border-primary"
                  data-testid="newsletter-email"
                />
                <Button className="bg-primary text-white hover:bg-primary-dark" data-testid="newsletter-submit">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Put these insights into practice with Edjobster's complete hiring platform.
            </p>
            <a href="/company/contact-us">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-button">
                Get Started Today
              </Button>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesHub;
