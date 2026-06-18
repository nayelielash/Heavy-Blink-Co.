"use client";

import { useState } from "react";

const services = [
  "Classic Full Set",
  "Hybrid Full Set",
  "Volume Full Set",
  "Mega Volume Full Set",
  "Classic Fill (2 weeks)",
  "Hybrid Fill (2 weeks)",
  "Volume Fill (2 weeks)",
  "Mega Volume Fill (2 weeks)",
  "Lash Removal",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-blush-200 bg-blush-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blush-100">
          <svg className="h-8 w-8 text-blush-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-warm-800">Request Received!</h3>
        <p className="mt-2 text-warm-600">
          Thank you for your booking request. We&apos;ll confirm your appointment shortly via text or email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-warm-800 mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm text-warm-800 placeholder-warm-400 transition focus:border-blush-300 focus:ring-2 focus:ring-blush-100 focus:outline-none"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-warm-800 mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm text-warm-800 placeholder-warm-400 transition focus:border-blush-300 focus:ring-2 focus:ring-blush-100 focus:outline-none"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-warm-800 mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm text-warm-800 placeholder-warm-400 transition focus:border-blush-300 focus:ring-2 focus:ring-blush-100 focus:outline-none"
            placeholder="jane@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-warm-800 mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm text-warm-800 placeholder-warm-400 transition focus:border-blush-300 focus:ring-2 focus:ring-blush-100 focus:outline-none"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-warm-800 mb-1.5">
          Service
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm text-warm-800 transition focus:border-blush-300 focus:ring-2 focus:ring-blush-100 focus:outline-none appearance-none"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-warm-800 mb-1.5">
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm text-warm-800 transition focus:border-blush-300 focus:ring-2 focus:ring-blush-100 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-warm-800 mb-1.5">
            Preferred Time
          </label>
          <select
            id="time"
            name="time"
            required
            className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm text-warm-800 transition focus:border-blush-300 focus:ring-2 focus:ring-blush-100 focus:outline-none appearance-none"
          >
            <option value="">Select a time...</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-warm-800 mb-1.5">
          Notes <span className="text-warm-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm text-warm-800 placeholder-warm-400 transition focus:border-blush-300 focus:ring-2 focus:ring-blush-100 focus:outline-none resize-none"
          placeholder="Any allergies, sensitivities, or lash preferences..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-blush-400 py-3.5 text-sm font-semibold text-white transition hover:bg-blush-500 focus:ring-2 focus:ring-blush-300 focus:ring-offset-2 focus:outline-none"
      >
        Request Appointment
      </button>
    </form>
  );
}
