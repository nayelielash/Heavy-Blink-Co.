import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import Butterfly from "@/components/Butterfly";

export const metadata: Metadata = {
  title: "Services & Pricing | Heavy Blink Co.",
  description:
    "Browse our lash extension services — classic, hybrid, volume, and mega volume sets and fills.",
};

const fullSets = [
  {
    name: "Classic Lash Extension",
    description:
      "One extension per natural lash for a natural, polished look. Perfect for first-timers.",
    price: "$150",
    duration: "2 hours",
  },
  {
    name: "Hybrid Lash Extension",
    description:
      "A mix of classic and volume fans for added texture and dimension.",
    price: "$180",
    duration: "2.5 hours",
  },
  {
    name: "Volume Lash Extension",
    description:
      "Handmade fans of 3-6 extensions per lash for a full, fluffy look.",
    price: "$220",
    duration: "2.5 hours",
  },
  {
    name: "Mega Volume Lash Extension",
    description:
      "Ultra-dense fans of 6-16 extensions per lash for maximum drama.",
    price: "$280",
    duration: "3 hours",
  },
  {
    name: "Bottom Lash Extension",
    description:
      "Extensions for your lower lash line for a complete, wide-eyed look.",
    price: "$50",
    duration: "30 min",
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
    name: "Lash Lift",
    description: "Semi-permanent curl for your natural lashes. Lasts 6-8 weeks.",
    price: "$75",
    duration: "1 hour",
  },
  {
    name: "Lash Tint",
    description: "Darken your natural lashes for a mascara-free look.",
    price: "$35",
    duration: "30 min",
  },
  {
    name: "Lash Removal",
    description: "Safe, gentle removal of existing lash extensions.",
    price: "$30",
    duration: "30 min",
  },
  {
    name: "Bridal Package",
    description: "Full glam lash set with trial session for your special day.",
    price: "$350",
    duration: "3 hours",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 relative wave-divider">
        <Butterfly className="absolute top-6 right-12 w-5 h-5 text-white/15 rotate-12" />
        <Butterfly className="absolute bottom-20 left-8 w-4 h-4 text-white/10 -rotate-6" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center relative z-10">
          <h1 className="font-[family-name:var(--font-script)] text-4xl md:text-6xl text-white">
            Services &amp; Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-purple-100/80 leading-relaxed">
            All prices are starting rates. A consultation is included with every appointment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 space-y-14">
        {/* Full Sets */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Butterfly className="w-5 h-5 text-purple-400" />
            <h2 className="font-[family-name:var(--font-script)] text-3xl text-purple-700">Full Sets</h2>
          </div>
          <p className="text-sm text-dark-700/50 mb-6 ml-8">Brand new set of lash extensions</p>
          <div className="space-y-4">
            {fullSets.map((s) => (
              <ServiceCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Fills */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Butterfly className="w-5 h-5 text-purple-400" />
            <h2 className="font-[family-name:var(--font-script)] text-3xl text-purple-700">Fills</h2>
          </div>
          <p className="text-sm text-dark-700/50 mb-6 ml-8">Maintain your lash set (must have 40%+ retention)</p>
          <div className="space-y-4">
            {fills.map((s) => (
              <ServiceCard key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Extras */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Butterfly className="w-5 h-5 text-purple-400" />
            <h2 className="font-[family-name:var(--font-script)] text-3xl text-purple-700">Additional Services</h2>
          </div>
          <p className="text-sm text-dark-700/50 mb-6 ml-8">Lifts, tints, removal, and special packages</p>
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
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple-200 transition hover:bg-purple-700 hover:scale-105"
          >
            Book Your Appointment 💜
          </Link>
        </div>
      </section>
    </main>
  );
}
