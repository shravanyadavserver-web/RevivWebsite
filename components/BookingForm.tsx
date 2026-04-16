"use client";

import { useState, FormEvent } from "react";
import ivTherapies from "@/data/iv-therapies.json";
import boosterShots from "@/data/booster-shots.json";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
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
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">
          Book Your Appointment
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Fill in the details below and our team will get back to you.
        </p>

        <form
          name="booking"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
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
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="[0-9+\-\s]{10,15}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-1">
                Treatment Type *
              </label>
              <select
                id="treatment"
                name="treatment"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white"
              >
                <option value="">Select a treatment</option>
                <optgroup label="IV Therapies">
                  {ivTherapies.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Booster Shots">
                  {boosterShots.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
            </div>
            <div>
              <label htmlFor="time-slot" className="block text-sm font-medium text-gray-700 mb-1">
                Time Slot *
              </label>
              <select
                id="time-slot"
                name="time-slot"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white"
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
              placeholder="Any additional information or questions..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm"
          >
            Submit Appointment Request
          </button>
        </form>
      </div>
    </section>
  );
}
