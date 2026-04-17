import { Card, CardContent } from "@/components/ui/card";
import { FileText, BrainCircuit, Calendar, BarChart3, Target, Globe, Upload, RefreshCw } from "lucide-react";

const atsFeatures = [
  {
    icon: FileText,
    title: "AI Job Description Generator",
    description: "Generate clear, standardized job descriptions in seconds based on role, department & seniority — no manual writing required.",
  },
  {
    icon: BrainCircuit,
    title: "AI Assessment Generator",
    description: "Automatically create screening & skill assessment questions tailored to job requirements to evaluate candidates fairly.",
  },
  {
    icon: Calendar,
    title: "Interview Scheduler",
    description: "Schedule interviews, send invites, track feedback and avoid back-and-forth coordination — all from one dashboard.",
  },
  {
    icon: BarChart3,
    title: "Hiring Dashboard & Analytics",
    description: "View pipeline progress, hiring stages, interview accuracy and time-to-hire metrics in a visual performance dashboard.",
  },
  {
    icon: Target,
    title: "Candidate Match Score",
    description: "Every application is automatically scored against job requirements to help you identify top candidates instantly.",
  },
];

const careerPortalFeatures = [
  {
    icon: Globe,
    title: "Branded Careers Page",
    description: "Your own professional jobs listing page with your school's logo, custom banner, values and culture story — no coding needed.",
  },
  {
    icon: Upload,
    title: "Easy Apply + Resume Parsing",
    description: "Candidates can apply in one click, and resumes are automatically parsed into structured profile data in the ATS.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Job Sync",
    description: "Jobs posted in Edjobster ATS automatically appear on your careers page and close themselves when filled — always up to date.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Hire Great Teachers
          </h2>
        </div>
        
        {/* ATS App Features */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center sm:text-left">
            ATS App Features
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {atsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Career Portal Features */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center sm:text-left">
            Career Portal Features
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPortalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
