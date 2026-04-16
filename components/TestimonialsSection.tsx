"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import testimonials from "@/data/testimonials.json";

// Group testimonials into pairs for 2-at-a-time display
const pairs: (typeof testimonials)[] = [];
for (let i = 0; i < testimonials.length; i += 2) {
  pairs.push(testimonials.slice(i, i + 2));
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="flex flex-col h-[320px]">
      {/* Card body */}
      <div className="relative bg-white rounded-[2rem] pl-[90px] pr-6 pt-8 pb-6 flex-1 flex flex-col">
        {/* Circular photo overlapping left edge */}
        <div className="absolute -left-[60px] top-1/2 -translate-y-1/2 z-10">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name} - REVIV patient`}
            width={150}
            height={150}
            className="rounded-full object-cover w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] border-4 border-blue-200/60"
          />
        </div>
        {/* Quote text */}
        <p className="text-gray-600 leading-relaxed text-sm lg:text-[15px] flex-1">
          {testimonial.quote}
        </p>
        {/* Name at bottom */}
        <p className="font-bold text-gray-900 text-base mt-4">
          {testimonial.name}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const maxPage = pairs.length - 1;

  const goNext = useCallback(() => {
    setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
  }, [maxPage]);

  const goPrev = useCallback(() => {
    setCurrentPage((prev) => (prev <= 0 ? maxPage : prev - 1));
  }, [maxPage]);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section id="testimonials" className="bg-primary py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header with arrows */}
        <div className="flex items-start justify-between mb-14">
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
              WE ARE TOP RATED ON GOOGLE!
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              What Our Patients Say
            </h2>
          </div>
          <div className="hidden md:flex gap-3 mt-2">
            <button
              onClick={goPrev}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel - 2 cards at a time */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${pairs.length * 100}%`,
              transform: `translateX(-${currentPage * (100 / pairs.length)}%)`,
            }}
          >
            {pairs.map((pair, pageIdx) => (
              <div
                key={pageIdx}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 pl-16 pr-4"
                style={{ width: `${100 / pairs.length}%` }}
              >
                {pair.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          <button
            onClick={goPrev}
            aria-label="Previous testimonials"
            className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-white"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Next testimonials"
            className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-white"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
