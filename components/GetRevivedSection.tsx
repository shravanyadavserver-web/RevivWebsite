"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import getRevivedData from "@/data/get-revived.json";

function FlipCard({ item, flipped }: { item: (typeof getRevivedData)[number]; flipped: boolean }) {
  const holdingRef = useRef(false);
  const [localFlipped, setLocalFlipped] = useState(flipped);

  useEffect(() => {
    if (!holdingRef.current) {
      setLocalFlipped(flipped);
    }
  }, [flipped]);

  const onHoldStart = () => {
    holdingRef.current = true;
  };

  const onHoldEnd = () => {
    holdingRef.current = false;
    setLocalFlipped(flipped);
  };

  return (
    <div
      className="[perspective:1000px]"
      onMouseDown={onHoldStart}
      onMouseUp={onHoldEnd}
      onMouseLeave={onHoldEnd}
      onTouchStart={onHoldStart}
      onTouchEnd={onHoldEnd}
      aria-label={`${item.title} — ${localFlipped ? "showing recommended therapies" : "hold to pause"}`}
    >
      <div
        className={`relative w-full min-h-[200px] transition-transform duration-500 [transform-style:preserve-3d] ${
          localFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
          <Image
            src={item.icon}
            alt={item.title}
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="text-[22px] font-normal text-primary mb-2 leading-none tracking-normal">
            {item.title}
          </h3>
          <p className="text-[14px] font-normal text-gray-600 leading-none tracking-normal">
            {item.description}
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary rounded-xl p-6 flex flex-col justify-center">
          <p className="text-white font-semibold text-base mb-4">
            Best IV Therapies:
          </p>
          <ul className="space-y-2">
            {item.therapies.map((therapy) => (
              <li key={therapy} className="text-white text-lg font-semibold">
                ● {therapy}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function GetRevivedSection() {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-[48px] font-normal leading-none tracking-normal capitalize text-primary mb-12">
          Get REVIVed Today
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getRevivedData.map((item) => (
            <FlipCard key={item.title} item={item} flipped={flipped} />
          ))}
        </div>
      </div>
    </section>
  );
}
