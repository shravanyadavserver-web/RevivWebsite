"use client";

import { useState, useCallback, useEffect, memo } from "react";
import Image from "next/image";
import testimonials from "@/data/testimonials.json";
import type { Testimonial } from "@/types";

const TestimonialCard = memo(function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col md:h-[320px] pt-[60px]">
      {/* Card body */}
      <div className="relative bg-white rounded-[2rem] px-6 pt-16 pb-6 flex-1 flex flex-col">
        {/* Circular photo at top center */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[60px] z-10">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name} - REVIV patient`}
            width={150}
            height={150}
            sizes="140px"
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
        </div>
        {/* Quote text */}
        <p className="text-[15px] font-normal text-[#5D5D5D] leading-[22px] tracking-normal capitalize flex-1 text-center">
          {testimonial.quote}
        </p>
        {/* Name at bottom */}
        <p className="text-[16px] font-bold text-[#2A2A2A] leading-[22px] tracking-normal capitalize mt-4 text-center">
          {testimonial.name}
        </p>
      </div>
    </div>
  );
});

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setPerPage(e.matches ? 2 : 1);
      setCurrentIndex(0);
    };
    onChange(mql);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const totalPages = Math.ceil(testimonials.length / perPage);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  return (
    <section id="testimonials" className="bg-primary py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header with arrows */}
        <div className="flex items-start justify-between mb-14">
          <div>
            <p className="text-[20px] font-normal text-white leading-none tracking-normal uppercase mb-4">
              WE ARE TOP RATED ON GOOGLE!
            </p>
            <h2 className="text-[48px] font-normal text-white leading-none tracking-normal capitalize">
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

        {/* Carousel */}
        <div className="overflow-hidden" aria-live="polite" aria-atomic="true">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${totalPages * 100}%`,
              transform: `translateX(-${currentIndex * (100 / totalPages)}%)`,
            }}
          >
            {Array.from({ length: totalPages }, (_, pageIdx) => {
              const start = pageIdx * perPage;
              const pageItems = testimonials.slice(start, start + perPage);
              return (
                <div
                  key={pageIdx}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 px-4"
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {pageItems.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              );
            })}
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
