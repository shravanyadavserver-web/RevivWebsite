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
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-gray max-w-none space-y-6 text-[#5D5D5D] leading-relaxed">
            <h2 className="text-xl font-semibold text-primary mt-8">
              Introduction
            </h2>
            <p>
              This Privacy Policy applies to all of the products, services and websites
              offered by REVIV, its subsidiaries, divisions, brands or affiliated
              companies (collectively, our &quot;Brands and Services&quot;).
            </p>
            <p>
              We respect your privacy and are committed to protecting the personal
              information you share with us. This statement describes how we collect and
              use your personal information to provide services that you request or when
              you choose to provide us with your personal information.
            </p>

            <h2 className="text-xl font-semibold text-primary mt-8">
              Personal Information
            </h2>
            <p>
              Personal information means any information that may be used to identify an
              individual, including, but not limited to, a first and last name, e-mail
              address, a home, postal or other physical address, other contact
              information, title, occupation, industry, personal interests, and other
              information when needed to provide a service or product or carry out a
              transaction you have requested.
            </p>
            <p>
              When you browse our website, you do so anonymously, unless you have
              previously registered with us. We do not automatically collect personal
              information, including your e-mail address. We do log your IP address (the
              Internet address of your computer) to give us an idea of which part of our
              website you visit and how long you spend there. But we do not link your IP
              address to any personal information unless you have registered with us.
            </p>
            <p>
              Because REVIV is a global company, your personal information may be shared
              with other REVIV offices around the world. All such entities are governed
              by this Privacy Statement or are bound by appropriate confidentiality and
              data transfer agreements. Your personal information is never shared outside
              of REVIV. Inside REVIV, data is stored in controlled servers with limited
              access. Your information may be stored and processed in India or any other
              country where REVIV, its subsidiaries, affiliates or agents are located.
            </p>

            <h2 className="text-xl font-semibold text-primary mt-8">
              Use of Cookies
            </h2>
            <p>
              A cookie is a small data file that certain websites write to your
              computer&apos;s hard drive when you visit them. A cookie file can contain
              information such as a user ID that the site uses to track the pages you
              have visited, but the only personal information a cookie can contain is
              information you supply yourself. A cookie cannot read data off your hard
              disk or read cookie files created by other sites. Some parts of the website
              use cookies to track user traffic patterns. We do this in order to
              determine the usefulness of our website information to our users and to see
              how effective our navigational structure is in helping users reach that
              information.
            </p>
            <p>
              HTML-formatted e-mail newsletters may use web beacons in conjunction with
              cookies to understand user behavior. A web beacon is an electronic image,
              called a single-pixel (1×1) or clear GIF. Web beacons can recognize
              certain types of information on a visitor&apos;s computer, such as a
              visitor&apos;s cookie number, time and date of a page view, and a
              description of the page where the web beacon is placed. Some web beacons
              may be unusable if you elect to reject their associated cookies.
            </p>
            <p>
              We may associate that information with your personal information in order
              to provide you more focused e-mail communications or purchase information.
              Each e-mail communication includes an unsubscribe link allowing you to stop
              delivery of that type of communication. If you prefer not to receive
              cookies while browsing our website or via HTML-formatted e-mails, you can
              set your browser to warn you before accepting cookies and refuse the cookie
              when your browser alerts you to its presence. You can also refuse all
              cookies by turning them off in your browser, although you may not be able
              to take full advantage of the website if you do so.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
