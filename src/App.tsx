import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AtsPage from "./pages/Ats";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/toaster";
import EducationInstitutions from "./pages/EducationInstitutions";
import RecruitmentAgencies from "./pages/RecruitmentAgencies";
import MultiCampus from "./pages/MultiCampus";
import CareerPortal from "./pages/CareerPortal";
import ResumeBuilder from "./pages/ResumeBuilder";
import TeacherAI from "./pages/TeacherAI";
import Pricing from "./pages/Pricing";
import ResourcesHub from "./pages/ResourcesHub";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import Podcasts from "./pages/Podcasts";
import Guides from "./pages/Guides";
import Templates from "./pages/Templates";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Careers";
import Testimonials from "./pages/Testimonials";
import Manufacturing from "./pages/Manufacturing";
import Technology from "./pages/Technology";
import JobDescriptionGenerator from "./pages/JobDescriptionGenerator";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
// import RefundPolicy from "./pages/RefundPolicy";
import FAQ from "./pages/FAQ";
import RefundPolicy from "./pages/RefundPolicy";
import DidacEvent from "./pages/DidacEvent";
import AiDocsHr from "./pages/AiDocsHr";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/ats" element={<AtsPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

          <Route path="/" element={<Index />} />

          {/* Solutions */}
          <Route path="/solutions/education-institutions" element={<EducationInstitutions />} />
          {/* <Route path="/solutions/recruitment-agencies" element={<RecruitmentAgencies />} /> */}
          {/* <Route path="/solutions/multi-campus" element={<MultiCampus />} /> */}
          <Route path="/solutions/manufacturing" element={ <Manufacturing />} />
          <Route path="/solutions/technology" element={<Technology />} />



          {/* Products */}
          <Route path="/products/ats" element={<AtsPage />} />
          <Route path="/products/career-portal" element={<CareerPortal/>} />
          <Route path="/products/resume-builder" element={<ResumeBuilder/>} />
          <Route path="/products/teacher-ai" element={<TeacherAI/>} />
          <Route path="/products/ai-docs-hr" element={<AiDocsHr/>} />
          <Route path="/jd-generator" element={<JobDescriptionGenerator/>} />
          
          {/* Pricing */}
          <Route path="/pricing" element={<Pricing/>} />

          {/* Resources */}
          <Route path="/resources" element={<ResourcesHub/>} />
          <Route path="/resources/blogs" element={<Blogs/>} />
          <Route path="/resources/events" element={<Events/>} />
          <Route path="/resources/podcasts" element={<Podcasts/>} />
          <Route path="/resources/guides" element={<Guides/>} />
          <Route path="/resources/templates" element={<Templates/>} />

          {/* Company */}
          <Route path="/company/about-us" element={<About/>} />
          <Route path="/company/leadership" element={<Leadership/>} />
          <Route path="/company/careers" element={<Careers/>} />
          <Route path="/company/contact-us" element={<Contact/>} />
          <Route path="/company/testimonials" element={<Testimonials/>} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          {/* Help */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/didac-india-2025" element={<DidacEvent />} />
          

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
