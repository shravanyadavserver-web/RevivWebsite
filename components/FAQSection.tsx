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
        <p className="text-[20px] font-normal text-navy leading-none tracking-normal uppercase mb-2">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <h2 className="text-[48px] font-normal leading-none tracking-normal capitalize text-primary mb-4">
          Your Guide To Common Questions
        </h2>
        <p className="text-[20px] font-normal text-[#5D5D5D] leading-[22px] tracking-normal mb-10 max-w-2xl">
          Answers to commonly asked questions about IV therapy, consultations, and
          clinical care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`border-2 border-primary rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "h-auto" : "h-[120px]"
              }`}
            >
              <button
                type="button"
                className="w-full p-6 text-left h-full"
                onClick={() => toggle(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(index);
                  }
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className={`text-base font-semibold text-primary mb-2 ${openIndex === index ? "" : "line-clamp-1"}`}>
                  {faq.question}
                </h3>
                <p
                  id={`faq-answer-${index}`}
                  className={`text-sm text-gray-600 leading-relaxed ${openIndex === index ? "" : "line-clamp-2"}`}
                >
                  {faq.answer}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
