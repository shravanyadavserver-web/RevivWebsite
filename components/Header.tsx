"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "IV Therapies", href: "#iv-therapies" },
  { label: "Booster Shots (IM)", href: "#booster-shots" },
  { label: "Why REVIV", href: "#why-reviv" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blogs", href: "#" },
  { label: "Contact Us", href: "#footer" },
];

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
            src="/logo.png"
            alt="REVIV Hyderabad logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-[13px] font-semibold tracking-wide uppercase transition-colors duration-200 py-1 ${
                activeHash === link.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-gray-600 hover:text-primary"
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
          aria-label="Toggle menu"
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block text-sm font-semibold py-3 px-3 rounded-lg transition-colors ${
                activeHash === link.href
                  ? "text-primary bg-primary/5"
                  : "text-gray-600 hover:text-primary hover:bg-gray-50"
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
