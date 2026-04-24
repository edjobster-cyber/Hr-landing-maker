import { Mail, Linkedin, Twitter, MapPin, Facebook, Instagram } from "lucide-react";
import edjobster from "@/assets/edjobster.png"
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();
  const isAtsRoute = pathname === "/ats";
  const navigationLinks = [
    { label: "Our Solutions", sublabel: [{ label: "Education Institutions", href: "/solutions/education-institutions" }, { label: "Manufacturing", href: "/solutions/manufacturing" }, { label: "Technology", href: "/solutions/technology" }] },
    { label: "Our Products", sublabel: [{ lable: "ATS", href: "/products/ats" }, { lable: "Career Portal", href: "/products/career-portal" }, { lable: "Resume Builder", href: "/products/resume-builder" }, { lable: "Teacher AI", href: "/products/teacher-ai" },{ lable: "AI Docs HR", href: "https://ai.edjobster.com/" }] },
    { label: "Quick Links", sublable: [{ lable: "About", href: "/company/about-us" }, { lable: "Contact", href: "/company/contact-us" }, { lable: "FAQ", href: "/faq" }] },
    // { label: "Contact", href: "/company/contact-us" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/edjobster/?viewAsMember=true", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/edjobster", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/edjobster/", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/edjobster/", label: "Instagram" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:info@edjobster.com", label: "Email" }
  ];

  return (
    <footer className={`${isAtsRoute ? "bg-gray-900" : "bg-foreground"} text-white`}>
      <div className="container px-4 py-16">
        <div className="w-full">
          <div className="flex flex-wrap gap-8 justify-between">
            {/* Brand */}
            <div className="w-auto md:w-[45%] lg:w-[28%] xl:w-auto">
              <div className="flex items-center space-x-3 mb-6">
                {/* <span className="text-white font-bold text-xl">HR</span> */}
                {/* <div className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center">
                  <span className="text-white font-bold text-lg"><img src={edjobster}></img></span>
                </div> */}
                <div className="w-[11.5rem] h-10 rounded-lg bg-transparent flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    <img src={logo} alt="logo" />
                  </span>
                </div>
                {/* <div>
                  <h3 className="text-xl font-bold">Edjobster</h3>
                  <p className="text-white/70">HR Services Consultant</p>
                </div> */}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md pl-3">
                {/* Edjobster is a strategic partner for global companies for HR and Compliance services. */}
                Edjobster is a strategic partner for global companies for HR and compliance services. Edjobster helps you organise your hiring and recruitment process.

                It provides you easy to use interface to create jobs and publish them to job boards, track applicants and hire them with confidence.
              </p>
              <div className="flex items-center space-x-2 text-white/70 pl-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Delhi, India (Global Coverage)</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex gap-6 justify-between w-auto md:w-[50%] lg:w-[40%]">
              {navigationLinks.map((link, idx) => {
                const sublinks = (link as any).sublabel ?? (link as any).sublable;
                if (Array.isArray(sublinks) && sublinks.length > 0) {
                  return (
                    <div key={`group-${idx}`}>
                      <h4 className="text-lg font-semibold mb-6">{link.label}</h4>
                      <nav className="space-y-3">
                        {sublinks.map((s: any, sidx: number) => {
                          const display = s.label ?? s.lable;
                          const href = s.href ?? "#";
                          if (!display) return null;
                          return (
                            <a
                              key={`sublink-${idx}-${sidx}-${display}`}
                              href={href}
                              className="block text-white/70 hover:text-white transition-colors text-sm break-words"
                            >
                              {display}
                            </a>
                          );
                        })}
                      </nav>
                    </div>
                  );
                }
                if ((link as any).href) {
                  return (
                    <div key={`single-${idx}`}>
                      <h4 className="text-lg font-semibold mb-6">{link.label}</h4>
                      <nav className="space-y-3">
                        <a
                          href={(link as any).href}
                          className="block text-white/70 hover:text-white transition-colors text-sm break-words"
                        >
                          {link.label}
                        </a>
                      </nav>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Connect</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-white/70 mb-1">Email</div>
                  <a
                    href="mailto:info@edjobster.com"
                    className="text-white hover:text-primary-glow transition-colors"
                  >
                    info@edjobster.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Phone</div>
                  <a
                    href="tel:+919319976569"
                    className="text-white hover:text-primary-glow transition-colors"
                  >
                    +91 9319976569
                  </a>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <div className="text-sm text-white/70 mb-3">Follow</div>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-primary transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © {currentYear} Edjobster Private Limited.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
                <a href="/refund-policy" className="text-white/60 hover:text-white transition-colors">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;