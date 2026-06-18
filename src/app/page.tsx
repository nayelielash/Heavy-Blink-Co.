import Link from "next/link";

const highlights = [
  {
    title: "Classic Lashes",
    desc: "Natural, elegant extensions for everyday beauty.",
    icon: (
      <svg className="w-8 h-8 text-blush-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Hybrid & Volume",
    desc: "Fuller, fluffier lashes for a glamorous look.",
    icon: (
      <svg className="w-8 h-8 text-blush-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Easy Booking",
    desc: "Pick your service, date, and time in minutes.",
    icon: (
      <svg className="w-8 h-8 text-blush-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blush-50 via-cream-100 to-blush-100">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blush-500 mb-4">
            Lash Artist &amp; Technician
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-warm-800 leading-tight">
            Your Lashes,{" "}
            <span className="text-blush-400">Perfected</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-warm-600 leading-relaxed">
            Custom lash extensions tailored to your eye shape and style.
            From subtle classics to show-stopping volume — we&apos;ve got you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-blush-400 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blush-200 transition hover:bg-blush-500 hover:shadow-blush-300"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-warm-200 px-8 py-3.5 text-sm font-medium text-warm-600 transition hover:border-blush-300 hover:text-blush-500"
            >
              View Services &amp; Pricing
            </Link>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blush-200/30 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-cream-200/60 blur-3xl" />
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-warm-100 bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blush-50">
                {h.icon}
              </div>
              <h3 className="text-lg font-semibold text-warm-800">{h.title}</h3>
              <p className="mt-2 text-sm text-warm-400 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blush-400 to-blush-500">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready for your lash transformation?
          </h2>
          <p className="mt-3 text-blush-100 text-base">
            New clients welcome. Book your first set today.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blush-500 shadow transition hover:bg-cream-50"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
