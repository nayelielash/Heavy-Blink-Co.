import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-warm-800 text-warm-200 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Heavy Blink Co.</h3>
            <p className="text-sm leading-relaxed text-warm-400">
              Enhancing your natural beauty, one lash at a time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blush-300 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blush-300 transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-blush-300 transition">Services</Link></li>
              <li><Link href="/book" className="hover:text-blush-300 transition">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blush-300 mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>By Appointment Only</li>
              <li>DM on Instagram for inquiries</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-warm-600/30 pt-6 text-center text-xs text-warm-400">
          &copy; {new Date().getFullYear()} Heavy Blink Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
