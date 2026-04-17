import { useEffect } from "react";
import { Play, Download, Calendar, Clock, User, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Podcasts = () => {
  useEffect(() => {
    document.title = "Podcasts - HR Leadership Conversations | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Listen to conversations with HR leaders and recruitment experts. Get insights on hiring trends, best practices, and industry innovations.');
    }
  }, []);

  const podcastEpisodes = [
    {
      title: "The Future of Campus Recruiting with Dr. Sarah Martinez",
      description: "Exploring how universities are adapting their recruitment strategies in the digital age and what's next for campus hiring.",
      guest: "Dr. Sarah Martinez",
      guestTitle: "VP of Talent, State University System",
      duration: "42 mins",
      publishDate: "December 20, 2024",
      episode: 45,
      featured: true,
      topics: ["Campus Recruiting", "Digital Transformation", "Future Trends"]
    },
    {
      title: "Building Inclusive Hiring Practices That Actually Work",
      description: "Practical strategies for creating more inclusive recruitment processes, with real examples from successful implementations.",
      guest: "Michael Chen",
      guestTitle: "Chief Diversity Officer, TechEdu Corp",
      duration: "38 mins",
      publishDate: "December 13, 2024",
      episode: 44,
      featured: false,
      topics: ["Diversity & Inclusion", "Best Practices", "Implementation"]
    },
    {
      title: "AI in Recruitment: Hype vs Reality",
      description: "Separating fact from fiction when it comes to AI in hiring, with insights on what's actually working today.",
      guest: "Dr. Angela Rodriguez",
      guestTitle: "AI Research Director, Future Work Institute",
      duration: "45 mins",
      publishDate: "December 6, 2024",
      episode: 43,
      featured: false,
      topics: ["Artificial Intelligence", "Technology", "Innovation"]
    },
    {
      title: "Scaling Recruitment for Rapid Growth",
      description: "How fast-growing organizations can build scalable hiring processes without sacrificing quality.",
      guest: "James Wilson",
      guestTitle: "VP of People, GrowthTech",
      duration: "35 mins",
      publishDate: "November 29, 2024",
      episode: 42,
      featured: false,
      topics: ["Scaling", "Growth", "Process Design"]
    },
    {
      title: "Multi-Campus Hiring: Challenges and Solutions",
      description: "Strategies for managing recruitment across multiple locations while maintaining consistency and quality.",
      guest: "Lisa Thompson",
      guestTitle: "CHRO, Global Education Network",
      duration: "40 mins",
      publishDate: "November 22, 2024",
      episode: 41,
      featured: false,
      topics: ["Multi-Campus", "Coordination", "Consistency"]
    },
    {
      title: "The Evolution of Remote Hiring",
      description: "How the shift to remote work has changed recruitment and what organizations are learning along the way.",
      guest: "David Kim",
      guestTitle: "Head of Remote Work, DistributedCorp",
      duration: "37 mins",
      publishDate: "November 15, 2024",
      episode: 40,
      featured: false,
      topics: ["Remote Work", "Virtual Hiring", "Adaptation"]
    }
  ];

  const categories = ["All Episodes", "Leadership", "Technology", "Best Practices", "Case Studies", "Trends"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/5 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-testid="hero-title">
                HR Leadership <span className="text-primary">Conversations</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Listen to conversations with HR leaders and recruitment experts about the future of hiring.
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Headphones className="w-5 h-5 mr-2 text-primary" />
                  <span>30+ Episodes</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  <span>Weekly</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Links */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 mb-6">Listen on your favorite platform</p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Apple Podcasts", "Spotify", "Google Podcasts", "Amazon Music", "RSS Feed"].map((platform, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="flex items-center space-x-2"
                    data-testid={`platform-${platform.toLowerCase().replace(' ', '-')}`}
                  >
                    <span>{platform}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
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
        </section>

        {/* Featured Episode */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Episode</h2>
              <p className="text-gray-600">Don't miss our newest conversation</p>
            </div>

            {podcastEpisodes.filter(episode => episode.featured).map((episode, index) => (
              <div key={index} className="bg-white rounded-brand shadow-brand-lg overflow-hidden lg:grid lg:grid-cols-3 lg:gap-8" data-testid="featured-episode">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-12 h-12 text-white ml-1" />
                    </div>
                    <p className="text-gray-600 font-medium">Episode {episode.episode}</p>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Latest Episode
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{episode.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{episode.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6 space-x-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{episode.guest}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{episode.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{episode.publishDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {episode.topics.map((topic, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-primary text-white hover:bg-primary-dark" data-testid="featured-play">
                      <Play className="w-4 h-4 mr-2" />
                      Play Episode
                    </Button>
                    <Button variant="outline" data-testid="featured-download">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Episode List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All Episodes</h2>
              <p className="text-gray-600">Browse our complete archive of conversations</p>
            </div>

            <div className="space-y-6">
              {podcastEpisodes.filter(episode => !episode.featured).map((episode, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-brand p-6 hover:shadow-brand transition-shadow" data-testid={`episode-${index}`}>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-brand flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-gray-500">Episode {episode.episode}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{episode.publishDate}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{episode.title}</h3>
                      <p className="text-gray-600 mb-3">{episode.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{episode.guest}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{episode.duration}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {episode.topics.map((topic, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0 flex space-x-2">
                      <Button size="sm" data-testid={`play-${index}`}>
                        <Play className="w-4 h-4 mr-1" />
                        Play
                      </Button>
                      <Button variant="outline" size="sm" data-testid={`download-${index}`}>
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" data-testid="load-more">
                Load More Episodes
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="newsletter-title">
              Never Miss an Episode
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="newsletter-subtitle">
              Subscribe to get notified when new episodes are released.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="newsletter-subscribe">
              Subscribe to Podcast
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Podcasts;
