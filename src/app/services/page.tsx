import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services & Pricing | Heavy Blink Co.",
  description:
    "Browse our lash extension services — classic, hybrid, volume, and mega volume sets and fills.",
};

const fullSets = [
  {
    name: "Classic Full Set",
    description:
      "One extension per natural lash for a natural, polished look. Perfect for first-timers.",
    price: "$150",
    duration: "2 hours",
  },
  {
    name: "Hybrid Full Set",
    description:
      "A mix of classic and volume fans for added texture and dimension.",
    price: "$180",
    duration: "2.5 hours",
  },
  {
    name: "Volume Full Set",
    description:
      "Handmade fans of 3-6 extensions per lash for a full, fluffy look.",
    price: "$220",
    duration: "2.5 hours",
  },
  {
    name: "Mega Volume Full Set",
    description:
      "Ultra-dense fans of 6-16 extensions per lash for maximum drama.",
    price: "$280",
    duration: "3 hours",
  },
];

const fills = [
  {
    name: "Classic Fill",
    description: "Maintenance fill for classic sets. Recommended every 2-3 weeks.",
    price: "$65",
    duration: "1 hour",
  },
  {
    name: "Hybrid Fill",
    description: "Maintenance fill for hybrid sets. Recommended every 2-3 weeks.",
    price: "$80",
    duration: "1.5 hours",
  },
  {
    name: "Volume Fill",
    description: "Maintenance fill for volume sets. Recommended every 2-3 weeks.",
    price: "$95",
    duration: "1.5 hours",
  },
  {
    name: "Mega Volume Fill",
    description: "Maintenance fill for mega volume sets. Recommended every 2-3 weeks.",
    price: "$120",
    duration: "2 hours",
  },
];

const extras = [
  {
    name: "Lash Removal",
    description: "Safe, gentle removal of existing lash extensions.",
    price: "$30",
    duration: "30 min",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-gradient-to-br from-blush-50 to-cream-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-warm-800">
            Services &amp; Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-warm-600 leading-relaxed">
            All prices are starting rates. A consultation is included with every appointment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 space-y-14">
        {/* Full Sets */}
        <div>
          <h2 className="text-xl font-semibold text-warm-800 mb-1">Full Sets</h2>
          <p className="text-sm text-warm-400 mb-6">Brand new set of lash extensions</p>
          <div className="space-y-4">
            {fullSets.map((s) => (
              <ServiceCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Fills */}
        <div>
          <h2 className="text-xl font-semibold text-warm-800 mb-1">Fills</h2>
          <p className="text-sm text-warm-400 mb-6">Maintain your lash set (must have 40%+ lash retention)</p>
          <div className="space-y-4">
            {fills.map((s) => (
              <ServiceCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Extras */}
        <div>
          <h2 className="text-xl font-semibold text-warm-800 mb-1">Additional Services</h2>
          <p className="text-sm text-warm-400 mb-6">Removals and add-ons</p>
          <div className="space-y-4">
            {extras.map((s) => (
              <ServiceCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-blush-400 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blush-200 transition hover:bg-blush-500"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
