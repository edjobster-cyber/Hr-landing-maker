import { useEffect } from "react";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Blogs = () => {
  useEffect(() => {
    document.title = "Blog - Hiring Insights and Best Practices | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on hiring trends, recruitment best practices, and HR strategy from industry leaders.');
    }
  }, []);

  const categories = ["All", "Best Practices", "Technology", "Education", "Trends", "Case Studies"];

  const blogPosts = [
    {
      title: "The Complete Guide to ATS Implementation in Higher Education",
      excerpt: "Everything you need to know about implementing an applicant tracking system in colleges and universities, from planning to go-live.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "12 min read",
      category: "Best Practices",
      featured: true
    },
    {
      title: "5 AI Trends Reshaping Recruitment in 2024",
      excerpt: "Explore how artificial intelligence is transforming the hiring landscape and what it means for recruitment professionals.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Technology",
      featured: false
    },
    {
      title: "Building Inclusive Hiring Practices: A Step-by-Step Guide",
      excerpt: "Learn how to create more inclusive recruitment processes that attract diverse talent and reduce unconscious bias.",
      author: "Dr. Angela Martinez",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Best Practices",
      featured: false
    },
    {
      title: "Case Study: How Metro University Reduced Time-to-Hire by 40%",
      excerpt: "Discover how one university transformed their hiring process and achieved remarkable results with strategic process improvements.",
      author: "David Thompson",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Case Studies",
      featured: false
    },
    {
      title: "The Future of Campus Recruiting: Trends and Predictions",
      excerpt: "What's next for campus recruiting? We explore emerging trends and make predictions for the future of university hiring.",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Trends",
      featured: false
    },
    {
      title: "Creating Effective Job Descriptions That Attract Top Talent",
      excerpt: "Master the art of writing compelling job descriptions that stand out in a competitive market and attract the right candidates.",
      author: "James Wilson",
      date: "December 3, 2024",
      readTime: "7 min read",
      category: "Best Practices",
      featured: false
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
                Hiring Insights & <span className="text-primary">Best Practices</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Expert advice, industry trends, and practical tips to help you hire better and faster.
              </p>
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
                  placeholder="Search articles..."
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
                    data-testid={`filter-${category.toLowerCase().replace(' ', '-')}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <p className="text-gray-600">Don't miss our most popular content</p>
            </div>

            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div key={index} className="bg-white rounded-brand shadow-brand overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8" data-testid="featured-post">
                <div className="bg-gray-200 h-64 lg:h-auto"></div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button className="self-start" data-testid="featured-read-more">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
              <p className="text-gray-600">Stay up to date with the latest hiring insights</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <article key={index} className="bg-white rounded-brand shadow-brand overflow-hidden hover:shadow-brand-lg transition-shadow" data-testid={`blog-post-${index}`}>
                  <div className="bg-gray-200 h-48"></div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <User className="w-3 h-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" data-testid={`read-more-${index}`}>
                      Read More
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" data-testid="load-more">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="newsletter-title">
              Never Miss an Update
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="newsletter-subtitle">
              Get the latest hiring insights and best practices delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white text-gray-900"
                  data-testid="newsletter-email"
                />
                <Button className="bg-white text-primary hover:bg-gray-100" data-testid="newsletter-subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;
