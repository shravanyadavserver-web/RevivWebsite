"use client";

import { useState, FormEvent } from "react";
import treatmentOptions from "@/data/treatment-options.json";

const timeSlots = [
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setError(false);

    try {
      const body = new URLSearchParams(formData as unknown as Record<string, string>).toString();
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="book-appointment" className="bg-primary/5 py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600">
              Your appointment request has been received. Our team will contact you
              shortly to confirm your booking.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-appointment" className="bg-primary/5 py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-16">
        <h2 className="section-heading mb-2 text-center">
          Book Your Appointment
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Fill in the details below and our team will get back to you.
        </p>

        <form
          name="booking"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-sm space-y-6"
        >
          <input type="hidden" name="form-name" value="booking" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="form-label">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="[0-9+\-\s]{10,15}"
                className="form-input"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="treatment" className="form-label">
                Treatment Type *
              </label>
              <select
                id="treatment"
                name="treatment"
                required
                className="form-input bg-white"
              >
                <option value="">Select a treatment</option>
                {treatmentOptions.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="form-label">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="time-slot" className="form-label">
                Time Slot *
              </label>
              <select
                id="time-slot"
                name="time-slot"
                required
                className="form-input bg-white"
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="form-label">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="form-input resize-none"
              placeholder="Any additional information or questions..."
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center" role="alert">
              Something went wrong. Please try again or call us at +91 888 555 0059.
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Submit Appointment Request"}
          </button>
        </form>
      </div>
    </section>
  );
}
