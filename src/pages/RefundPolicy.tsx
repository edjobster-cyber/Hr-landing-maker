import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Cancellation & Refund Policy | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read Edjobster's Cancellation and Refund Policy for subscriptions. Learn how cancellations work, our 14-day refund window, and exceptions."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-8">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Cancellation and Refund Policy</h1>
            <p className="text-gray-600 mb-10">Last updated: September 30th, 2025</p>

            <div className="prose prose-gray max-w-none">
              <p>
                At Edjobster Pvt. Ltd., we understand that sometimes things don't work out as planned. If you need to cancel your
                subscription to our SaaS website, we have a straightforward cancellation and refund policy in place to ensure the
                process is simple and fair for all parties involved.
              </p>

              <h2>Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may cancel your subscription at any time by logging into your account and navigating to the subscription management section.</li>
                <li>Your subscription will be cancelled at the end of the current billing cycle.</li>
                <li>We do not offer partial refunds for unused time within a billing cycle.</li>
              </ul>

              <h2>Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>If you cancel your subscription within the first 14 days of signing up, you will be eligible for a full refund.</li>
                <li>After the initial 14-day period, we do not offer refunds for any reason.</li>
                <li>If you cancel a yearly subscription early, we do not offer a prorated refund.</li>
              </ul>

              <h2>Exceptions to the Refund Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We may make exceptions to our refund policy on a case-by-case basis if there are extenuating circumstances that
                  prevent you from using our SaaS website.
                </li>
                <li>
                  If we determine that there has been fraudulent or abusive activity on your account, we reserve the right to
                  terminate your subscription without providing a refund.
                </li>
                <li>
                  Please note that any fees paid for third-party services that are integrated with our SaaS website, such as payment
                  processing fees, are non-refundable.
                </li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about our cancellation and refund policy, please contact our customer support
                team. We are happy to assist you and ensure that you have a positive experience using our SaaS website.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
