import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | Edjobster";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read Edjobster's Website Terms and Conditions of Use."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-8">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Website Terms and Conditions of Use</h1>

            <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-h1:mb-4 prose-h2:mt-8 prose-a:text-primary hover:prose-a:underline prose-strong:text-gray-900 prose-li:marker:text-gray-400 prose-img:rounded-xl prose-img:border prose-img:border-gray-200 prose-img:shadow-md prose-img:mx-auto prose-img:my-6">
              <h2>1. Terms</h2>
              <p>
                By accessing this Website, accessible from <a href="https://edjobster.com/">https://edjobster.com/</a>, you are
                agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the
                agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from
                accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Edjobster Pvt. Ltd.'s Website for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained on Edjobster Pvt. Ltd.'s Website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>
                This will let Edjobster Pvt. Ltd. to terminate upon violations of any of these restrictions. Upon termination, your
                viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it
                is printed or electronic format. These Terms of Service has been created with the help of the Terms Of Service
                Generator.
              </p>

              <h2>3. Disclaimer</h2>
              <p>
                All the materials on Edjobster Pvt. Ltd.'s Website are provided "as is". Edjobster Pvt. Ltd. makes no warranties,
                may it be expressed or implied, therefore negates all other warranties. Furthermore, Edjobster Pvt. Ltd. does not
                make any representations concerning the accuracy or reliability of the use of the materials on its Website or
                otherwise relating to such materials or any sites linked to this Website.
              </p>

              <h2>4. Limitations</h2>
              <p>
                Edjobster Pvt. Ltd. or its suppliers will not be hold accountable for any damages that will arise with the use or
                inability to use the materials on Edjobster Pvt. Ltd.'s Website, even if Edjobster Pvt. Ltd. or an authorize
                representative of this Website has been notified, orally or written, of the possibility of such damage. Some
                jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages,
                these limitations may not apply to you.
              </p>

              <h2>5. Revisions and Errata</h2>
              <p>
                The materials appearing on Edjobster Pvt. Ltd.'s Website may include technical, typographical, or photographic
                errors. Edjobster Pvt. Ltd. will not promise that any of the materials in this Website are accurate, complete, or
                current. Edjobster Pvt. Ltd. may change the materials contained on its Website at any time without notice.
                Edjobster Pvt. Ltd. does not make any commitment to update the materials.
              </p>

              <h2>6. Links</h2>
              <p>
                Edjobster Pvt. Ltd. has not reviewed all of the sites linked to its Website and is not responsible for the
                contents of any such linked site. The presence of any link does not imply endorsement by Edjobster Pvt. Ltd. of
                the site. The use of any linked website is at the user's own risk.
              </p>

              <h2>7. Site Terms of Use Modifications</h2>
              <p>
                Edjobster Pvt. Ltd. may revise these Terms of Use for its Website at any time without prior notice. By using this
                Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
              </p>

              <h2>8. Your Privacy</h2>
              <p>Please read our Privacy Policy.</p>

              <h2>9. Governing Law</h2>
              <p>
                Any claim related to Edjobster Pvt. Ltd.'s Website shall be governed by the laws of af without regards to its
                conflict of law provisions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
