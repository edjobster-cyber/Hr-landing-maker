import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, Check, User, Building2 } from "lucide-react";
// import { log } from "console";

type ContactFormProps = { platform?: string, title?: string,subTitle?: string };
const ContactForm = ({ platform, title,subTitle }: ContactFormProps) => {
    console.log(platform)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        mobile: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [marketingOptIn, setMarketingOptIn] = useState(platform === "faq page" && true);
    const [message, setMessage] = useState<{ status: boolean; message: string }>({ status: false, message: "" })
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const baseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/?$/, "/");
            const response = await fetch(`${baseUrl}hr_services/contact-details/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    full_name: formData.name,
                    email: formData.email,
                    mobile_number: formData.mobile,
                    company_name: formData.company,
                    message: formData.message,
                    platform: platform,
                    unsubscribe: marketingOptIn
                }),
            });

            if (!response.ok) {
                let errorMessage = "Failed to send message.";
                try {
                    const errorData = await response.json();
                    errorMessage = typeof errorData === "string" ? errorData : (errorData.detail || JSON.stringify(errorData));
                } catch (_) {
                    // ignore json parse errors
                }
                throw new Error(errorMessage);
            }

            // Read JSON to extract server-provided message if available
            let responseData: unknown = null;
            try {
                responseData = await response.json();
            } catch (_) {
                // ignore json parse errors; server may return empty body
            }
            const serverMessage =
                (responseData && typeof responseData === "object" && (responseData as { message?: string }).message)
                || "Thanks! Your message has been sent.";
            setMessage({ status: true, message: serverMessage })
            // toast({
            //   title: "Message Sent Successfully!",
            //   description: "Thank you for your interest. I'll respond within 24 hours.",
            //   duration: 5000,
            // });

            setFormData({ name: "", email: "", company: "", mobile: "", message: "" });
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "There was an issue sending your message. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-white">
                            {/* We Are Your Strategic Hiring Partner! */}
                            {title}
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-white">
                            {/* Strategise your workforce planning to grow your business globally. */}
                            {subTitle}
                        </p>
                    </div>

                    <div className="grid gap-12">
                        {/* Contact Form */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            {message?.status ? (
                                <div className="flex flex-col items-center text-center p-6">
                                    <div className="w-[14rem] h-[14rem] rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <Check className="w-[11rem] h-[11rem] text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-1">Thank you</h3>
                                    <p className="text-muted-foreground">
                                        {message?.message}
                                    </p>
                                    <Button
                                        variant="cta"
                                        size="lg"
                                        className="mt-6"
                                        onClick={() => setMessage({ status: false, message: "" })}
                                    >
                                        Go further
                                    </Button>
                                </div>
                            ) : (
                                <><h3 className="text-2xl font-bold text-foreground mb-6">
                                    Send a Message
                                </h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Your full name"
                                                        className="w-full pl-9"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="your.email@company.com"
                                                        className="w-full pl-9"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-2">
                                                    Mobile Number *
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input
                                                        id="mobile"
                                                        name="mobile"
                                                        type="tel"
                                                        inputMode="tel"
                                                        required
                                                        value={formData.mobile}
                                                        onChange={handleChange}
                                                        placeholder="e.g., +91 9319976569"
                                                        className="w-full pl-9"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                                                    Company Name *
                                                </label>
                                                <div className="relative">
                                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input
                                                        id="company"
                                                        name="company"
                                                        type="text"
                                                        required
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        placeholder="Your company name"
                                                        className="w-full pl-9"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                                Message *
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Enter your message here..."
                                                rows={6}
                                                className="w-full"
                                            />
                                        </div>
                                        {platform === "faq page" && (
                                            <div className="mt-6 space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <Checkbox id="marketing-opt-in" checked={marketingOptIn} onCheckedChange={(v) => setMarketingOptIn(!!v)} />
                                                    <label htmlFor="marketing-opt-in" className="text-sm text-foreground select-none">
                                                    Subscribe to Edjobster Newsletter
                                                    </label>
                                                </div>
                                                <p className="text-xs text-muted-foreground">
                                                    You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy practices.
                                                </p>
                                            </div>
                                        )}
                                        <Button
                                            type="submit"
                                            variant="cta"
                                            size="xl"
                                            className="w-full"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form></>)
                            }
                        </div>

                        {/* Contact Information */}
                        <div className="bg-card rounded-xl p-6 shadow-card border-l-4 border-primary">
                            <h4 className="font-semibold text-foreground mb-2">
                                Urgent Hiring Need?
                            </h4>
                            <p className="text-muted-foreground text-sm mb-3">
                                For time-sensitive requirements, reach out directly for immediate assistance.
                            </p>
                            <a
                                href="tel:+919319976569"
                                className="text-primary font-medium hover:underline"
                            >
                                Call Now: +91 9319976569
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;