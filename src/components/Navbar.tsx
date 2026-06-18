"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream-50/80 backdrop-blur-md border-b border-warm-100">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-warm-800">
          Heavy Blink Co.
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-blush-50 transition"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-warm-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-warm-100 bg-cream-50 px-6 py-4 flex flex-col gap-4">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/book", label: "Book Now" },
  ];

  return (
    <>
      {links.map((link) =>
        link.label === "Book Now" ? (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className="inline-flex items-center justify-center rounded-full bg-blush-400 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blush-500"
          >
            {link.label}
          </Link>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className="text-sm font-medium text-warm-600 transition hover:text-blush-500"
          >
            {link.label}
          </Link>
        )
      )}
    </>
  );
}
