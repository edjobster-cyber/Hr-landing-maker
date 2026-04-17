import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    designation: "",
    company: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to be contacted to proceed.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}account/lead/capture/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          designation: formData.designation,
          company: formData.company,
          platform: "DIDAC event",
          source: "event",
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon!",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-md mx-auto border-primary/20">
            <CardContent className="pt-12 pb-12 text-center space-y-6">
              <div className="flex justify-center">
                <CheckCircle2 className="w-16 h-16 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  🎉 Thank you!
                </h3>
                <p className="text-muted-foreground">
                  Check your email to activate your account and unlock your DIDAC offer.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Start Your AI-Powered Hiring Journey
            </h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name *</Label>
                  <Input
                    id="fullname"
                    required
                    value={formData.fullname}
                    onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="designation">Designation *</Label>
                  <Input
                    id="designation"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution">School / Institution Name *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground leading-tight cursor-pointer"
                  >
                    I agree to be contacted by Edjobster regarding setup and onboarding.
                  </label>
                </div>

                <Button type="submit" className="w-full text-base font-semibold" size="lg">
                  Get My Access
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
