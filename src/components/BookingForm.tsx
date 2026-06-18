"use client";

import { useState } from "react";

const services = [
  "Lash Extension",
  "Lash Lift",
  "Lash Tint",
  "Lash Removal",
  "Mega Volume Lash Extension",
  "Lash Fills",
  "Bottom Lash Extension",
  "Bridal Package",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
          <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-script)] text-3xl text-purple-700">Thank You!</h3>
        <p className="mt-2 text-dark-700/70">
          Your booking request has been received. We&apos;ll confirm your appointment shortly via text or email.
        </p>
        <p className="mt-1 text-purple-500 text-sm font-medium">
          See you soon! 💜
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
          <label htmlFor="firstName" className="block text-sm font-medium text-dark-800 mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="w-full rounded-xl border-2 border-purple-200 bg-white px-4 py-3 text-sm text-dark-800 placeholder-dark-700/40 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-dark-800 mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="w-full rounded-xl border-2 border-purple-200 bg-white px-4 py-3 text-sm text-dark-800 placeholder-dark-700/40 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-800 mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border-2 border-purple-200 bg-white px-4 py-3 text-sm text-dark-800 placeholder-dark-700/40 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none"
            placeholder="jane@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark-800 mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border-2 border-purple-200 bg-white px-4 py-3 text-sm text-dark-800 placeholder-dark-700/40 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-dark-800 mb-1.5">
          Service
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-xl border-2 border-purple-200 bg-white px-4 py-3 text-sm text-dark-800 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none appearance-none"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-dark-800 mb-1.5">
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="w-full rounded-xl border-2 border-purple-200 bg-white px-4 py-3 text-sm text-dark-800 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-dark-800 mb-1.5">
            Preferred Time
          </label>
          <select
            id="time"
            name="time"
            required
            className="w-full rounded-xl border-2 border-purple-200 bg-white px-4 py-3 text-sm text-dark-800 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none appearance-none"
          >
            <option value="">Select a time...</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-dark-800 mb-1.5">
          Notes <span className="text-dark-700/40 font-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full rounded-xl border-2 border-purple-200 bg-white px-4 py-3 text-sm text-dark-800 placeholder-dark-700/40 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-none resize-none"
          placeholder="Any allergies, sensitivities, or lash preferences..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-purple-600 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-700 focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:outline-none shadow-lg shadow-purple-200"
      >
        Request Appointment 💜
      </button>
    </form>
  );
}
