import { Button } from "@/components/ui/button";
import { Link, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import MagicButton from "./MagicButton";
import GenerateButton from "./GenerateButton";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); // dropdown toggle
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenSection, setMobileOpenSection] = useState<
    null | "solutions" | "products" | "resources" | "company"
  >(null);
  const { pathname } = useLocation();
  const isAtsRoute = pathname === "/products/ats";
  const navigation = {
    solutions: [
      { href: "/solutions/education-institutions", label: "Education Institutions" },
      // { href: "/solutions/recruitment-agencies", label: "Recruitment Agencies" },
      // { href: "/solutions/multi-campus", label: "Multi-campus" },
      { href: "/solutions/manufacturing", label: "Manufacturing" },
      { href: "/solutions/technology", label: "Technology" },

    ],
    products: [
      { href: "/products/ats", label: "ATS" },
      { href: "/products/career-portal", label: "Career Portal", disabled: true },
      { href: "/products/resume-builder", label: "Resume Builder", disabled: true },
      { href: "/products/teacher-ai", label: "Teacher AI", disabled: true },
      { href: "https://ai.edjobster.com/", label: "AI Docs HR"},
      // { href: "/products/jd-generator", label: "JD Generator" },
    ],
    // resources: [
    //   { href: "/resources/blogs", label: "Blogs" },
    //   { href: "/resources/events", label: "Events" },
    //   { href: "/resources/podcasts", label: "Podcasts" },
    //   { href: "/resources/guides", label: "Guides" },
    //   { href: "/resources/templates", label: "Templates" },
    // ],
    // company: [
    //   { href: "/company/about-us", label: "About" },
    //   // { href: "/company/leadership", label: "Leadership" },
    //   // { href: "/company/careers", label: "Careers" },
    //   { href: "/company/contact-us", label: "Contact" },
    // ],
  };
  return (
    <header
      className={`fixed top-0 w-full z-50 ${isAtsRoute ? "bg-gradient-to-r from-[rgb(233,228,211)]/90 to-[rgb(207,225,224)]/90" : "bg-white/90 border-b border-primary/10"} backdrop-blur-sm `}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <div className="w-[8rem] sm:w-[9rem] md:w-[10rem] lg:w-[11.5rem] h-8 sm:h-9 md:h-10 rounded-lg bg-transparent flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-base md:text-lg">
              <img src={logo} alt="logo" className="h-full w-full object-contain" />
            </span>
          </div>
          {/* <div>
            <h1 className="text-xl font-bold text-primary">Edjobster</h1>
            <p className="text-sm text-muted-foreground">HR Consultant</p>
          </div> */}
        </div>

        {/* Desktop Navigation (large screens only) */}
        <nav className="hidden xl:flex items-center space-x-8 relative">
          <a
            href="/"
            className="text-foreground text-md hover:text-primary transition-colors font-medium font-medium"
          >
            HOME
          </a>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-md space-x-1 text-foreground hover:text-primary transition-colors font-medium font-medium">
              <span>SOLUTIONS</span>
              <ChevronDown size={16} />
            </button>

            {activeDropdown === "solutions" && (
              <div className="absolute top-full left-0  w-56 rounded-lg bg-white shadow-lg border border-gray-100 py-2">
                {navigation.solutions.map((item) => (
                  <a key={item.href} href={item.href}>
                    <a
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      role="menuitem"
                      data-testid={`dropdown-${item.href.split('/').pop()}`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.label}
                    </a>
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-md space-x-1 text-foreground hover:text-primary transition-colors font-medium font-medium">
              <span>PRODUCTS</span>
              <ChevronDown size={16} />
            </button>

            {activeDropdown === "products" && (
              <div className="absolute top-full left-0  w-56 rounded-lg bg-white shadow-lg border border-gray-100 py-2">
                {navigation.products.map((item) => (
                  item.disabled ? (
                    <div
                      key={item.href}
                      className="px-4 py-3 text-sm text-gray-400 cursor-not-allowed select-none flex items-center justify-between"
                      role="menuitem"
                      aria-disabled="true"
                      data-testid={`dropdown-${item.href.split('/').pop()}`}
                    >
                      <span>{item.label}</span>
                      <span className="ml-2 text-[11px] rounded bg-red-100 text-red-500 px-2 py-0.5">Coming soon</span>
                    </div>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      role="menuitem"
                      data-testid={`dropdown-${item.href.split('/').pop()}`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            )}
          </div>
          {/* <a
            href="/pricing"
            className="text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </a> */}
          {/* <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <span>Resources</span>
              <ChevronDown size={16} />
            </button>

            {activeDropdown === "resources" && (
              <div className="absolute top-full left-0  w-56 rounded-lg bg-white shadow-lg border border-gray-100 py-2">
                {navigation.resources.map((item) => (
                  <a key={item.href} href={item.href}>
                    <a
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      role="menuitem"
                      data-testid={`dropdown-${item.href.split('/').pop()}`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.label}
                    </a>
                  </a>
                ))}
              </div>
            )}
          </div> */}
          {/* <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center text-lg space-x-1 text-foreground hover:text-primary transition-colors">
              <span>Company</span>
              <ChevronDown size={16} />
            </button>

            {activeDropdown === "company" && (
              <div className="absolute top-full left-0  w-56 rounded-lg bg-white shadow-lg border border-gray-100 py-2">
                {navigation.company.map((item) => (
                  <a key={item.href} href={item.href}>
                    <a
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      role="menuitem"
                      data-testid={`dropdown-${item.href.split('/').pop()}`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.label}
                    </a>
                  </a>
                ))}
              </div>
            )}
          </div> */}
          <a
            href="/company/about-us"
            className="text-foreground text-md hover:text-primary transition-colors font-medium"
          >
            ABOUT US
          </a>
          <a
            href="/company/contact-us"
            className="text-foreground text-md hover:text-primary transition-colors font-medium"
          >
            CONTACT US
          </a>

          {/* <a
            href="/#contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a> */}
        </nav>

        {/* CTA Buttons (large screens only) */}

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex gap-5">
            {!location.pathname.includes('/jd-generator') && <MagicButton />}
            <Button variant="cta">
              {/* <a href="/company/contact-us">Talk To As</a> */}
              <a href="https://app.edjobster.com/login">Login/Sign-up</a>

            </Button>
          </div>
          {/* Mobile/Tablet Menu Button */}
          <button
            className="xl:hidden p-2"
            onClick={() => {
              setIsMenuOpen((prev) => {
                if (prev) setMobileOpenSection(null);
                return !prev;
              });
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-primary/10">
          {/* Menu header */}
          {/* <div className="container mx-auto px-4 py-4 flex items-center justify-between border-b">
            <span className="text-lg font-semibold text-foreground">Menu</span>
            <button aria-label="Close menu" onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }} className="p-2">
              <X size={20} />
            </button>
          </div> */}
          <nav className="container mx-auto px-4 py-2">
            <a
              href="/"
              className="block py-4 text-foreground hover:text-primary transition-colors border-b"
              onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}
            >
              HOME
            </a>

            {/* Solutions (Mobile) */}
            <details className="group border-b" open={mobileOpenSection === "solutions"}>
              <summary
                className="flex items-center justify-between py-4 cursor-pointer text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpenSection((prev) => (prev === "solutions" ? null : "solutions"));
                }}
              >
                <span>SOLUTIONS</span>
                <ChevronDown size={16} className="transition-transform group-open:-rotate-180" />
              </summary>
              <div className="ml-2 mb-4 space-y-3">
                {navigation.solutions.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details>

            {/* Products (Mobile) */}
            <details className="group border-b" open={mobileOpenSection === "products"}>
              <summary
                className="flex items-center justify-between py-4 cursor-pointer text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpenSection((prev) => (prev === "products" ? null : "products"));
                }}
              >
                <span>PRODUCTS</span>
                <ChevronDown size={16} className="transition-transform group-open:-rotate-180" />
              </summary>
              <div className="ml-2 mb-4 space-y-3">
                {navigation.products.map((item) => (
                  item.disabled ? (
                    <div
                      key={item.href}
                      className="text-sm text-gray-400 flex items-center justify-between select-none"
                      aria-disabled="true"
                    >
                      <span>{item.label}</span>
                      <span className="ml-2 text-[11px] rounded bg-red-100 text-red-500 px-2 py-0.5">Coming soon</span>
                    </div>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block text-sm text-gray-700 hover:text-primary"
                      onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </details>

            {/* Resources (Mobile) */}
            {/* <details className="group border-b" open={mobileOpenSection === "resources"}>
              <summary
                className="flex items-center justify-between py-4 cursor-pointer text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpenSection((prev) => (prev === "resources" ? null : "resources"));
                }}
              >
                <span>Resources</span>
                <ChevronDown size={16} className="transition-transform group-open:-rotate-180" />
              </summary>
              <div className="ml-2 mb-4 space-y-3">
                {navigation.resources.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details> */}

            {/* Company (Mobile) */}
            {/* <details className="group border-b" open={mobileOpenSection === "company"}>
              <summary
                className="flex items-center justify-between py-4 cursor-pointer text-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpenSection((prev) => (prev === "company" ? null : "company"));
                }}
              >
                <span>Company</span>
                <ChevronDown size={16} className="transition-transform group-open:-rotate-180" />
              </summary>
              <div className="ml-2 mb-4 space-y-3">
                {navigation.company.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-gray-700 hover:text-primary"
                    onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details> */}
            <a
              href="/company/about-us"
              className="block py-4 text-foreground hover:text-primary transition-colors border-b"
              onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}
            >
              ABOUT US
            </a>
            <a
              href="/company/contact-us"
              className="block py-4 text-foreground hover:text-primary transition-colors border-b"
              onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}
            >
              CONTACT US
            </a>
            {/* <a
              href="/pricing"
              className="block py-4 text-foreground hover:text-primary transition-colors"
              onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}
            >
              Pricing
            </a> */}

            <div className="py-4 space-y-3">
              {!location.pathname.includes('/jd-generator') && (
                <div className="flex justify-center">
                  <MagicButton />
                </div>
              )}
              <Button variant="cta" size="lg" className="w-full">
                {/* <a href="/company/contact-us" onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}>Talk To As</a> */}
                <a href="https://app.edjobster.com/login" onClick={() => { setIsMenuOpen(false); setMobileOpenSection(null); }}>Login/Sign-up</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
