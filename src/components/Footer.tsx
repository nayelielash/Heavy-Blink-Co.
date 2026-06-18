import Link from "next/link";
import Butterfly from "./Butterfly";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-purple-200 mt-auto relative overflow-hidden">
      <Butterfly className="absolute top-6 right-10 w-5 h-5 text-purple-700/30 rotate-12" />
      <Butterfly className="absolute bottom-8 left-8 w-4 h-4 text-purple-700/20 -rotate-12" />

      <div className="mx-auto max-w-6xl px-6 py-12 relative z-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-[family-name:var(--font-script)] text-3xl text-gold-400 mb-2">
              Heavy Blink Co.
            </h3>
            <p className="text-sm leading-relaxed text-purple-300/70 italic">
              Eyes that stop the room
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gold-400 transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-gold-400 transition">Services</Link></li>
              <li><Link href="/book" className="hover:text-gold-400 transition">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>By Appointment Only</li>
              <li>DM on Instagram for inquiries</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-purple-800/50 pt-6 text-center text-xs text-purple-400/60">
          &copy; {new Date().getFullYear()} Heavy Blink Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
