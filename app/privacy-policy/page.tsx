import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for REVIV Hyderabad - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p>
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              1. Information We Collect
            </h2>
            <p>
              When you book an appointment or contact us, we may collect your name,
              email address, phone number, preferred treatment type, and any additional
              information you provide in the message field. We do not collect sensitive
              medical records through our website.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used solely to process appointment requests, respond
              to inquiries, and improve our services. We do not sell, rent, or share
              your personal data with third parties for marketing purposes.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              3. Data Storage & Security
            </h2>
            <p>
              Form submissions are processed through Netlify Forms and stored securely.
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              4. Cookies
            </h2>
            <p>
              This website may use essential cookies for functionality. No tracking or
              advertising cookies are used without your explicit consent.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of
              your personal data. To exercise these rights, please contact us at{" "}
              <a
                href="mailto:revivhyderabad@gmail.com"
                className="text-primary hover:underline"
              >
                revivhyderabad@gmail.com
              </a>.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">
              6. Contact
            </h2>
            <p>
              For questions about this privacy policy, contact:
              <br />
              REVIV (Shravan Wellness)
              <br />
              First Floor, House No. 8-2-293/A/82/1299-F1, Road No. 68, Jubilee
              Hills, Hyderabad - 500033, Telangana, India
              <br />
              Email:{" "}
              <a
                href="mailto:revivhyderabad@gmail.com"
                className="text-primary hover:underline"
              >
                revivhyderabad@gmail.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+918885550059"
                className="text-primary hover:underline"
              >
                +91 888 555 0059
              </a>
            </p>

            <p className="text-sm text-gray-500 mt-8">
              *The services provided have not been evaluated by the Food and Drug
              Administration. These products are not intended to diagnose, treat, cure
              or prevent any disease.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
