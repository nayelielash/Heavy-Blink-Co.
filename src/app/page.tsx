import Link from "next/link";
import Butterfly from "@/components/Butterfly";
import { LOGO_SRC } from "@/lib/logo";

const lashServices = [
  "Lash Extension",
  "Lash Lift",
  "Lash Tint",
  "Lash Removal",
  "Mega Volume Lash Extension",
  "Lash Fills",
  "Bottom Lash Extension",
  "Bridal Package",
];

const policies = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Appointments",
    desc: "Please book at least 24 hours ahead to ensure your spot.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Deposit",
    desc: "All bookings require a non-refundable $25 fee to secure your appointment.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Late Arrivals",
    desc: "A late fee will be charged if you arrive after the 5-min grace period.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    title: "Cancellation",
    desc: "Cancel up to 6 hours ahead of your appointment to avoid fees.",
  },
];

const beforeAppt = [
  "Notify us if you have allergies",
  "Remove all makeup",
  "Come with clean eyelashes",
  "Wear comfortable clothes",
  "Inform us if you're feeling sick",
  "Cancel if you can't make it",
  "Inform us if you'll be late",
  "No extra guests & pets",
  "Ensure deposit is paid",
  "Arrive on time",
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 wave-divider">
        <Butterfly className="absolute top-8 left-8 w-6 h-6 text-white/20 rotate-12" />
        <Butterfly className="absolute top-16 right-16 w-5 h-5 text-white/15 -rotate-6" />
        <Butterfly className="absolute bottom-24 left-1/4 w-4 h-4 text-white/10 rotate-45" />

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-32 text-center relative z-10">
          <img
            src={LOGO_SRC}
            alt="Heavy Blink Co."
            width={180}
            height={180}
            className="mx-auto mb-6 drop-shadow-2xl"
          />
          <h1 className="font-[family-name:var(--font-script)] text-4xl md:text-6xl text-white leading-tight">
            Elevate Your Beauty
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-purple-100/90 leading-relaxed">
            Custom lash extensions tailored to your eye shape and style.
            From subtle classics to show-stopping volume.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-purple-700 shadow-xl transition hover:bg-gold-300 hover:text-dark-900"
            >
              Book Your Appointment 💜
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/10 hover:border-white/70"
            >
              View Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Hours / Contact / Location */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Hours */}
            <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-6 text-center">
              <Butterfly className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-3">Hours</h3>
              <div className="text-sm text-dark-700 space-y-1">
                <p className="font-medium">10:00 AM - 4:00 PM</p>
                <p>Monday to Saturday</p>
                <p className="text-purple-500 font-medium">CLOSED SUNDAY</p>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-6 text-center">
              <Butterfly className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-3">Contact</h3>
              <div className="text-sm text-dark-700 space-y-1">
                <p>📞 (123) 456 789</p>
                <p>📧 email@gmail.com</p>
                <p>📸 @yourinstagramuser</p>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-6 text-center">
              <Butterfly className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-700 mb-3">Location</h3>
              <div className="text-sm text-dark-700 space-y-1">
                <p>123 Street, Name City,</p>
                <p>State, US, ZIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lash Services */}
      <section className="bg-purple-600 wave-divider wave-divider-top py-20 relative">
        <Butterfly className="absolute top-20 right-12 w-6 h-6 text-white/15 rotate-12" />
        <Butterfly className="absolute bottom-28 left-10 w-5 h-5 text-white/10 -rotate-12" />

        <div className="mx-auto max-w-4xl px-6 text-center relative z-10 pt-8">
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl text-white mb-10">
            Lash Services
          </h2>
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            {lashServices.map((service) => (
              <Link
                key={service}
                href="/services"
                className="rounded-xl border-2 border-white/50 bg-white/10 backdrop-blur-sm px-4 py-3 text-sm font-semibold text-white uppercase tracking-wide transition hover:bg-white/20 hover:border-white/80 hover:scale-105"
              >
                {service}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-purple-200 italic">
            * Please send an inquiry for special or custom services
          </p>
        </div>
      </section>

      {/* Booking Policies */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl text-purple-700 mb-10">
            Booking Policies
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {policies.map((p) => (
              <div key={p.title} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  {p.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-dark-800 mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-dark-700/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Purple hearts decoration */}
          <div className="flex justify-center gap-2 mt-8 text-purple-300">
            <span>💜</span>
            <span>💜</span>
            <span>💜</span>
          </div>
        </div>
      </section>

      {/* Before Your Appointment */}
      <section className="bg-purple-600 wave-divider wave-divider-top py-20 relative">
        <Butterfly className="absolute top-24 left-8 w-5 h-5 text-white/15 -rotate-12" />
        <Butterfly className="absolute bottom-28 right-10 w-6 h-6 text-white/10 rotate-45" />

        <div className="mx-auto max-w-4xl px-6 text-center relative z-10 pt-8">
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl text-white mb-10">
            Before your Appointment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {beforeAppt.map((item) => (
              <div
                key={item}
                className="rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-4 py-3 text-sm font-medium text-white flex items-center gap-3"
              >
                <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl text-purple-700 mb-4">
            Ready for your lash transformation?
          </h2>
          <p className="text-dark-700/60 mb-8">
            New clients welcome. Book your first set today.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-10 py-4 text-sm font-semibold text-white shadow-xl shadow-purple-200 transition hover:bg-purple-700 hover:scale-105"
          >
            Book Now 💜
          </Link>

          <div className="flex justify-center gap-3 mt-8">
            <Butterfly className="w-5 h-5 text-purple-300" />
            <Butterfly className="w-4 h-4 text-purple-200 rotate-12" />
            <Butterfly className="w-5 h-5 text-purple-300 -rotate-12" />
          </div>
        </div>
      </section>
    </main>
  );
}
