import { FileCheck, Search, CalendarCheck, UserCheck } from "lucide-react";

const steps = [
  {
    icon: FileCheck,
    title: "Create Job",
    description: "AI generates job description instantly.",
  },
  {
    icon: Search,
    title: "Screen Candidates",
    description: "Match Score prioritizes top talent.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Interviews",
    description: "One-click time slot booking + reminders.",
  },
  {
    icon: UserCheck,
    title: "Hire & Onboard",
    description: "Track onboarding progress centrally.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" style={{ width: "calc(100% - 120px)", marginLeft: "60px" }} />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
