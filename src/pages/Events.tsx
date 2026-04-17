import { useEffect } from "react";
import { Calendar, Clock, MapPin, Users, Video, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Events = () => {
  useEffect(() => {
    document.title = "Events - Webinars, Workshops & Conferences | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join our upcoming webinars, workshops, and conferences on recruitment, HR, and hiring best practices.');
    }
  }, []);

  const upcomingEvents = [
    {
      title: "The Future of AI in Recruitment",
      description: "Explore how artificial intelligence is transforming the hiring landscape and learn practical strategies for implementation.",
      date: "January 25, 2025",
      time: "2:00 PM - 3:30 PM EST",
      type: "Webinar",
      location: "Online",
      speakers: ["Dr. Sarah Chen", "Michael Rodriguez"],
      attendees: 245,
      featured: true
    },
    {
      title: "Building Inclusive Hiring Practices Workshop",
      description: "A hands-on workshop to help organizations create more inclusive recruitment processes.",
      date: "February 8, 2025",
      time: "10:00 AM - 12:00 PM PST",
      type: "Workshop",
      location: "San Francisco, CA",
      speakers: ["Angela Martinez", "James Thompson"],
      attendees: 89,
      featured: false
    },
    {
      title: "Campus Recruiting Summit 2025",
      description: "Join university recruiters and HR professionals for a day of networking and learning.",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM EST",
      type: "Conference",
      location: "Boston, MA",
      speakers: ["Multiple speakers"],
      attendees: 450,
      featured: false
    },
    {
      title: "ATS Implementation Best Practices",
      description: "Learn proven strategies for successful applicant tracking system implementation.",
      date: "February 22, 2025",
      time: "1:00 PM - 2:00 PM EST",
      type: "Webinar",
      location: "Online",
      speakers: ["David Kim"],
      attendees: 156,
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Scaling Recruitment for Growth Companies",
      description: "Strategies for building scalable hiring processes as your organization grows.",
      date: "December 10, 2024",
      type: "Webinar",
      attendees: 340,
      recording: true
    },
    {
      title: "Education Hiring Trends 2024",
      description: "Analysis of current trends and predictions for the future of education hiring.",
      date: "November 28, 2024",
      type: "Panel Discussion",
      attendees: 215,
      recording: true
    },
    {
      title: "Remote Hiring Workshop",
      description: "Best practices for conducting effective remote interviews and onboarding.",
      date: "November 15, 2024",
      type: "Workshop",
      attendees: 78,
      recording: false
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
                Events & <span className="text-primary">Learning</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="hero-subtitle">
                Join webinars, workshops, and conferences to stay ahead in recruitment and HR.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Event</h2>
              <p className="text-gray-600">Don't miss our upcoming flagship event</p>
            </div>

            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <div key={index} className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-brand p-8 lg:p-12" data-testid="featured-event">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{event.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-3 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-3 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        {event.location === "Online" ? (
                          <Video className="w-5 h-5 mr-3 text-primary" />
                        ) : (
                          <MapPin className="w-5 h-5 mr-3 text-primary" />
                        )}
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-3 text-primary" />
                        <span>{event.attendees} registered</span>
                      </div>
                    </div>

                    <Button size="lg" className="bg-primary text-white hover:bg-primary-dark" data-testid="featured-register">
                      Register Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="bg-white p-8 rounded-brand shadow-brand">
                    <h4 className="font-semibold text-gray-900 mb-4">Featured Speakers</h4>
                    <div className="space-y-4">
                      {event.speakers.map((speaker, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-900">{speaker}</div>
                            <div className="text-sm text-gray-500">HR Expert</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
              <p className="text-gray-600">Mark your calendar for these upcoming learning opportunities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.filter(event => !event.featured).map((event, index) => (
                <div key={index} className="bg-white rounded-brand shadow-brand p-6 hover:shadow-brand-lg transition-shadow" data-testid={`upcoming-event-${index}`}>
                  <div className="mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      {event.location === "Online" ? (
                        <Video className="w-4 h-4 mr-2 text-primary" />
                      ) : (
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                      )}
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      <span>{event.attendees} registered</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline" data-testid={`register-${index}`}>
                    Register
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Past Events</h2>
              <p className="text-gray-600">Catch up on events you might have missed</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-gray-50 rounded-brand p-6" data-testid={`past-event-${index}`}>
                  <div className="mb-4">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.attendees} attended</span>
                    </div>
                  </div>

                  {event.recording ? (
                    <Button className="w-full" variant="outline" data-testid={`watch-recording-${index}`}>
                      Watch Recording
                    </Button>
                  ) : (
                    <div className="text-center text-sm text-gray-500">
                      Recording not available
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              Stay in the Loop
            </h2>
            <p className="text-xl mb-8 opacity-90" data-testid="cta-description">
              Subscribe to our newsletter to get notified about upcoming events and exclusive content.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-subscribe">
              Subscribe to Updates
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
