import { useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const Clients = () => {
  const clients = [
    { name: "Microsoft", logo: "🏢", industry: "Technology" },
    { name: "Goldman Sachs", logo: "🏦", industry: "Financial Services" },
    { name: "Deloitte", logo: "📊", industry: "Consulting" },
    { name: "Siemens", logo: "⚡", industry: "Industrial" },
    { name: "Spotify", logo: "🎵", industry: "Media & Entertainment" },
    { name: "Airbus", logo: "✈️", industry: "Aerospace" },
    { name: "IKEA", logo: "🏠", industry: "Retail" },
    { name: "Volkswagen", logo: "🚗", industry: "Automotive" },
    { name: "Nestlé", logo: "🍫", industry: "Consumer Goods" },
    { name: "Shell", logo: "⛽", industry: "Energy" },
    { name: "Samsung", logo: "📱", industry: "Technology" },
    { name: "L'Oréal", logo: "💄", industry: "Beauty & Cosmetics" }
  ];

  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current?.scrollNext) {
        carouselRef.current.scrollNext();
      }
    }, 2000); // Auto-scroll every 5 seconds for slower, more elegant transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by Global Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Fortune 500 companies to innovative startups, I've helped organizations 
              across industries build exceptional teams worldwide.
            </p>
          </div>

          {/* Clients Slider */}
          <div className="relative mb-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                // duration: 100, // Smooth transition duration
                dragFree: false, // Prevent manual dragging interruption
              }}
              setApi={(api) => {
                carouselRef.current = api;
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 pb-3">
                {clients.map((client, index) => (
                  <CarouselItem key={`${client.name}-${index}`} className="pl-2 basis-1/2 md:basis-1/6 lg:basis-1/5">
                    <div className="group p-6 bg-card rounded-lg  transition-all duration-300 text-center min-w-[50px]">
                      <div className="text-4xl mb-3 transition-transform duration-300">
                        {client.logo}
                      </div>
                      <div className="font-semibold text-foreground text-sm mb-1">
                        {client.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {client.industry}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" /> */}
            </Carousel>
          </div>

          {/* Success Metrics */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-8">
              Delivered Results Across Industries
            </h3>
          <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/90">Industries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-white/90">Fortune 500 Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-white/90">Repeat Client Rate</div>
              </div>
            </div>
          </div>

          {/* Case Studies Preview */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Notable Success Stories
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                <div className="text-3xl mb-4">🚀</div>
                <h4 className="font-semibold text-foreground mb-2">Tech Startup Scale-up</h4>
                <p className="text-sm text-muted-foreground">
                  Helped a Series B startup grow from 15 to 150 employees across 8 countries in 12 months.
                </p>
              </div>
              <div className="p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                <div className="text-3xl mb-4">🏭</div>
                <h4 className="font-semibold text-foreground mb-2">Manufacturing Expansion</h4>
                <p className="text-sm text-muted-foreground">
                  Led HR strategy for $2B industrial company's expansion into Southeast Asian markets.
                </p>
              </div>
              <div className="p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                <div className="text-3xl mb-4">💰</div>
                <h4 className="font-semibold text-foreground mb-2">Financial Services Turnaround</h4>
                <p className="text-sm text-muted-foreground">
                  Restructured leadership team for struggling fintech, resulting in successful acquisition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;