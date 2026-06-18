import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book an Appointment | Heavy Blink Co.",
  description:
    "Schedule your lash extension appointment online with Heavy Blink Co.",
};

export default function BookPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-gradient-to-br from-blush-50 to-cream-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-warm-800">
            Book an Appointment
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-warm-600 leading-relaxed">
            Fill out the form below and we&apos;ll confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl border border-warm-100 bg-white p-6 md:p-10 shadow-sm">
          <BookingForm />
        </div>

        <div className="mt-10 rounded-2xl border border-warm-100 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-warm-800 mb-4">Before Your Appointment</h3>
          <ul className="space-y-3 text-sm text-warm-600">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-500 text-xs font-bold">1</span>
              Arrive with clean, makeup-free eyes
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-500 text-xs font-bold">2</span>
              Avoid caffeine before your appointment for less eye movement
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-500 text-xs font-bold">3</span>
              Remove contact lenses before your session
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush-100 text-blush-500 text-xs font-bold">4</span>
              A $25 deposit is required to secure your booking
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
