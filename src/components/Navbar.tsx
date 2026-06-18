"use client";

import Link from "next/link";
import { useState } from "react";
import { LOGO_SRC } from "@/lib/logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="Heavy Blink Co." width={50} height={50} className="h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="text-xl font-semibold tracking-tight text-dark-800">
              Heavy Blink Co.
            </span>
            <p className="text-[10px] text-purple-500 italic -mt-0.5">Eyes that stop the room</p>
          </div>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-dark-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="md:hidden border-t border-purple-100 bg-white px-6 py-4 flex flex-col gap-4">
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
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 shadow-md shadow-purple-200"
          >
            {link.label}
          </Link>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className="text-sm font-medium text-dark-700 transition hover:text-purple-600"
          >
            {link.label}
          </Link>
        )
      )}
    </>
  );
}
