import { CheckCircle, Users, Globe, Zap } from "lucide-react";

const About = () => {
  const differentiators = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Extensive connections."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Delivery",
      description: "48-hour response."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "International Labour law knowledge."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose Edjobster?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  With a decade of senior HR leadership across 100+ companies globally
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                10+ Years Experience, 95% Success Rate
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Differentiators */}
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;