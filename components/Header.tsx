"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import navLinks from "@/data/navigation.json";
import type { NavLink } from "@/types";

const links: NavLink[] = navLinks;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // When near top of page, set Home as active
      if (window.scrollY < 200) {
        setActiveHash("#");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= 200) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-16 h-[68px]">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/Logo.svg"
            alt="REVIV Hyderabad logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-[16px] font-normal tracking-normal capitalize leading-none transition-colors duration-200 py-1 ${
                activeHash === link.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-primary hover:text-primary-dark"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#book-appointment"
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark hover:shadow-lg transition-all duration-200"
        >
          Book Appointment
        </a>

        {/* Mobile: Book + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#book-appointment"
            className="inline-flex items-center px-4 py-2 bg-primary text-white text-xs font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Book Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block text-[16px] font-normal tracking-normal capitalize leading-none py-3 px-3 rounded-lg transition-colors ${
                activeHash === link.href
                  ? "text-primary bg-primary/5"
                  : "text-primary hover:text-primary-dark hover:bg-gray-50"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book-appointment"
            className="block text-center px-5 py-3 mt-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
