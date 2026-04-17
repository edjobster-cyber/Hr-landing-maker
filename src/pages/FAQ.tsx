import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContactForm from "@/components/ContactForm";

const FAQ = () => {
  useEffect(() => {
    document.title = "Frequently Asked Questions | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Find answers to common questions about Edjobster's ATS, subscriptions, billing, and more."
      );
    }
  }, []);

  const leftFaq = [
    {
      id: "what-is-ats",
      q: "What is an Applicant Tracking System (ATS)?",
      a: (
        <p>
          Applicant Tracking System (ATS) is hiring software used by organizations to streamline their hiring process. It integrates with job boards, tracks applicants at every step until hire, and helps you hire faster and smarter. Edjobster is an AI-driven ATS you can use to organize your recruitment.
        </p>
      ),
      defaultOpen: true,
    },
    { id: "purpose", q: "What is the purpose of this software?", a: (<p>Edjobster is an AI powered Applicant tracking system (ATS). It helps you organized, manage and track every job application that you receive from multiple sources i.e. job board, employee referral, newspaper ads. Edjobster streamline and automate your hiring process and you can hire faster.</p>) },
    { id: "users", q: "How many people can use the software?", a: (<p>One license can be used by 1 employee, but you can add contact of your team and take them into the process through email. You can send notification to the interviewer, request feedback from the department and do more.</p>) },
    { id: "ai-ats", q: "What is AI-powered Applicant Tracking System?", a: (<p>Artificial intelligence (AI) ATS enables you to automate the recruitment process. It automates candidate sourcing, resume screening, candidate filter. Automation helps screen thousands of resumes and reduces repetitive manual tasks. AI-powered recruitment software helps you recruit employees smarter and faster who suits the job and your organization.</p>) },
  ];

  const rightFaq = [
    {
      id: "automate",
      q: "How can I automate my recruitment process?",
      a: (
        <>
        <p>Here are few ways to automate your hiring process</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Create a hiring pipeline</li>
          <li>Send updates to candidates using bulk emails</li>
          <li>Save time using pre-defined questionnaires as pre-screening assessments</li>
        </ul>
        </>
      ),
      defaultOpen: true,
    },
    { id: "free", q: "Can I sign up for free?", a: (<p>Yes, You can sign up for free and explore every feature. The free trial will be valid for 14 days.</p>) },
    { id: "cancel", q: "Can I cancel my subscription?", a: (<p>Yes, If you are not satisfied with our product/service. You can get a full refund as per our refund policy.</p>) },
    { id: "payment", q: "What are the payment options?", a: (<p>We accept all kind of online payments. We also accept wire transfer for an annual plan.</p>) },
    { id: "more", q: "Have more questions?", a: (<p>If you have more questions about Edjobster, you can book a demo with our team lead.</p>) },
  ];

  const leftDefaultId = (leftFaq.find(i => (i as any).defaultOpen) || leftFaq[0])?.id;
  const rightDefaultId = (rightFaq.find(i => (i as any).defaultOpen) || rightFaq[0])?.id;

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-8">
        <section className="pt-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">Some Frequently asked Questions</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <Accordion type="single" collapsible defaultValue={leftDefaultId} className="divide-y rounded-md border">
                {leftFaq.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="px-4">
                    <AccordionTrigger className={`text-base md:text-lg transition-colors data-[state=open]:text-primary data-[state=open]:font-semibold`}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Accordion type="single" collapsible defaultValue={rightDefaultId} className="divide-y rounded-md border">
                {rightFaq.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="px-4">
                    <AccordionTrigger className={`text-base md:text-lg transition-colors data-[state=open]:text-primary data-[state=open]:font-semibold`}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
            <div className="mt-16">
              <ContactForm platform="faq page" title="If you have more questions. Let us know below!" subTitle="We are here to help you with any questions you may have." />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
