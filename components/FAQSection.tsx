"use client";

import { useState } from "react";
import faqs from "@/data/faqs.json";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-white py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <p className="text-sm font-semibold text-[#041E42] uppercase tracking-wider mb-2">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Your Guide To Common Questions
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Answers to commonly asked questions about IV therapy, consultations, and
          clinical care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-2 border-primary rounded-xl overflow-hidden h-[120px]"
            >
              <div
                className="w-full p-6 text-left h-full"
              >
                <h3 className="text-base font-semibold text-primary mb-2 line-clamp-1">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
