import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import Butterfly from "@/components/Butterfly";

export const metadata: Metadata = {
  title: "Book an Appointment | Heavy Blink Co.",
  description:
    "Schedule your lash extension appointment online with Heavy Blink Co.",
};

export default function BookPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 relative wave-divider">
        <Butterfly className="absolute top-6 right-12 w-5 h-5 text-white/15 rotate-12" />
        <Butterfly className="absolute bottom-20 left-8 w-4 h-4 text-white/10 -rotate-6" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center relative z-10">
          <h1 className="font-[family-name:var(--font-script)] text-4xl md:text-6xl text-white">
            Book an Appointment
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-purple-100/80 leading-relaxed">
            Fill out the form below and we&apos;ll confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl border-2 border-purple-200 bg-white p-6 md:p-10 shadow-lg">
          <div className="text-center mb-8">
            <Butterfly className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <h2 className="font-[family-name:var(--font-script)] text-2xl text-purple-700">
              Request your Appointment
            </h2>
          </div>
          <BookingForm />
        </div>

        <div className="mt-10 rounded-2xl border-2 border-purple-200 bg-white p-6 md:p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="font-[family-name:var(--font-script)] text-2xl text-purple-700">
              Before Your Appointment
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Notify us if you have allergies",
              "Remove all makeup",
              "Come with clean eyelashes",
              "Wear comfortable clothes",
              "Inform us if you're feeling sick",
              "Cancel if you can't make it",
              "Ensure deposit is paid",
              "Arrive on time",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border-2 border-purple-100 bg-purple-50 px-4 py-3 text-sm text-dark-800"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-200 text-purple-700 text-xs font-bold">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border-2 border-purple-200 bg-white p-6 md:p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="font-[family-name:var(--font-script)] text-2xl text-purple-700">
              Booking Policies
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📅", title: "Appointments", desc: "Book 24hrs ahead" },
              { icon: "💰", title: "Deposit", desc: "$25 non-refundable" },
              { icon: "⏰", title: "Late Arrivals", desc: "5-min grace period" },
              { icon: "❌", title: "Cancellation", desc: "6hrs advance notice" },
            ].map((p) => (
              <div key={p.title} className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-xl">
                  {p.icon}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-dark-800">{p.title}</h4>
                <p className="text-xs text-dark-700/50 mt-0.5">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
