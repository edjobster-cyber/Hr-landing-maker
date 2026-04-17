import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Aftab_Pathan from "@/assets/Testimonials/Aftab Pathan.jpg";
import Vinoth_Kannan from "@/assets/Testimonials/Vinoth Kannan.jpg"
import saket_kumar from "@/assets/Testimonials/saket.jpg"
import Yannick_Soth from "@/assets/Testimonials/yannick.jpg"
import ContactFormHome from "@/components/ContactFormHome";

const Index = () => {
  useEffect(() => {
    // Set up SEO meta tags
    document.title = "Edjobster - Global HR Consultant | International HR Staffing Expert";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert international HR consultant with 10+ years experience. Rapid HR staffing solutions across 25+ countries. Get qualified candidates in days, not weeks.');
    }

    // Add JSON-LD Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "name": "Edjobster",
          "jobTitle": "HR Services Consultant",
          "description": "10 years corporate HR experience serving global clients with rapid talent acquisition and strategic HR consulting.",
          "url": window.location.origin,
          "sameAs": [
            "https://linkedin.com/in/sarahmitchellhr",
            "https://twitter.com/sarahmitchellhr"
          ],
          "knowsAbout": [
            "International HR Consulting",
            "Talent Acquisition",
            "Executive Search",
            "HR Compliance",
            "Organizational Development"
          ],
          "workLocation": {
            "@type": "Place",
            "name": "London, UK",
            "description": "Global Coverage"
          }
        },
        {
          "@type": "Service",
          "serviceType": "HR Staffing & Consultancy",
          "name": "International HR Consulting Services",
          "description": "Comprehensive HR solutions including executive search, talent acquisition, compliance consulting, and organizational development for global businesses.",
          "provider": {
            "@type": "Person",
            "name": "Edjobster"
          },
          "areaServed": "Worldwide",
          "availableLanguage": "English"
        },
        {
          "@type": "Organization",
          "name": "Edjobster HR Consulting",
          "description": "Global HR expertise delivered in days. International talent solutions and strategic HR consulting.",
          "founder": {
            "@type": "Person",
            "name": "Edjobster"
          },
          "serviceArea": "Worldwide",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "email": "info@edjobster.com",
            "contactType": "Customer Service"
          }
        }
      ]
    });
    document.head.appendChild(script);

    // Add Open Graph meta tags
    const addMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('og:title', 'Edjobster - Global HR Consultant | International HR Staffing Expert');
    addMetaTag('og:description', 'Expert international HR consultant with 10+ years experience. Rapid HR staffing solutions across 25+ countries.');
    addMetaTag('og:type', 'website');
    addMetaTag('og:url', window.location.href);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  const testimonials = [
    {
      name: "Aftab Pathan",
      title: "Senior Executive – HR",
      company: "DAJINA Infra LLP",
      country: "🇮🇳",
      rating: 5,
      quote: "My experience with Edjobster was excellent. Right from the initial contact to the final onboarding, the process was seamless and well-coordinated. The team was highly responsive, guided me at every step, and made the transition into my new role smooth and stress-free. I truly appreciate their professionalism and would definitely recommend Edjobster to any job seeker looking for genuine support.",
      result: "Seamless, well-coordinated process and smooth onboarding",
      image: Aftab_Pathan
    },
    {
      name: "Saket Kumar",
      title: "Back Office Sr. Executive",
      company: "Garware HI Tech Films",
      country: "🇮🇳",
      rating: 5,
      quote: "Thanks to Shilpi Ma’am and Hamid Sir for their support. The process was seamless, onboarding smooth, and I would suggest every company should have a vendor like Edjobster.",
      result: "Seamless process, smooth onboarding, highly recommended",
      image: saket_kumar
    },
    {
      name: "Yannick Söth",
      title: "European Sales Manager & Head of Europe PPF",
      company: "Garware Hi-Tech Films Ltd.",
      country: "🇩🇪",
      rating: 5,
      quote: "Edjobster made the hiring process smooth and efficient. The interview and onboarding were handled professionally, making my transition into the role seamless and stress-free.",
      result: "Smooth process; professional interview and onboarding",
      image: Yannick_Soth
    },
    {
      name: "Vinoth Kannan. S",
      title: "Regional Sales Manager – Middle East",
      company: "Garware High Tech Window Films",
      country: "🇦🇪",
      rating: 5,
      quote: "Thanks to Mr. Syed Hamid Hasan and Edjobster, I received a great opportunity with Garware High Tech Window Films. He guided me through interviews with top companies and supported me throughout the onboarding process. I was looking for a better offer and work culture, and Edjobster delivered. Highly recommended for professionals seeking career growth.",
      result: "Guided through interviews; smooth onboarding; career growth delivered",
      image: Vinoth_Kannan
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Testimonials testimonials={testimonials}/>
        {/* <Clients /> */}
        <ContactFormHome platform="Home Page" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
