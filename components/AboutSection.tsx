"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import aboutFeatures from "@/data/about-features.json";

const totalPages = Math.ceil(aboutFeatures.length / 2);

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const itemWidth = container.offsetWidth / 2;
      const maxScroll = container.scrollWidth - container.offsetWidth;

      if (container.scrollLeft >= maxScroll - 1) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: itemWidth * 2, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const pageWidth = container.offsetWidth;
      const page = Math.round(container.scrollLeft / pageWidth);
      setActivePage(page);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-section-bg py-4 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-0 sm:px-6 lg:px-16">
        {/* Mobile: horizontal scroll, 2 visible per screen */}
        <div className="lg:hidden overflow-hidden">
          <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {aboutFeatures.map((feature, i) => (
              <div key={feature.title} className="flex items-center gap-2 min-w-[50%] w-[50%] flex-shrink-0 snap-start box-border pr-4">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} ${feature.description}`}
                  width={32}
                  height={32}
                  className="flex-shrink-0"
                />
                <div>
                  <p className="text-[14px] font-normal text-primary leading-tight tracking-normal">{feature.title}</p>
                  <p className="text-[14px] font-normal text-primary leading-tight tracking-normal">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to page ${i + 1}`}
                onClick={() => {
                  const container = scrollRef.current;
                  if (!container) return;
                  container.scrollTo({ left: container.offsetWidth * i, behavior: "smooth" });
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activePage === i
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex flex-wrap justify-between items-center gap-8">
          {aboutFeatures.map((feature) => (
            <div key={feature.title} className="flex items-center gap-3">
              <Image
                src={feature.icon}
                alt={`${feature.title} ${feature.description}`}
                width={40}
                height={40}
              />
              <div>
                <p className="text-[18px] font-normal text-primary leading-none tracking-normal">{feature.title}</p>
                <p className="text-[18px] font-normal text-primary leading-none tracking-normal">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
