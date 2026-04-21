"use client";
import Link from "next/link";
import { useState } from "react";
import NavAuthButton from "./NavAuthButton";
import CartButton from "./CartButton";
import AboutButton from "./Aboutbutton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="w-full px-4 pt-4">
        <div
          className="flex items-center justify-between rounded-2xl px-5 py-3 text-emerald-50 shadow-sm"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <Link href="/" className="text-base font-semibold tracking-tight">
            Campus Coach
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <AboutButton />
            <Link
              href="/scholarships"
              className="rounded-full px-4 py-2 font-medium text-emerald-950"
              style={{ background: "var(--accent)" }}
            >
              Browse scholarships
            </Link>
            <CartButton />
            <NavAuthButton />
          </nav>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-emerald-50 transition-all duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-emerald-50 transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-emerald-50 transition-all duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className="md:hidden mt-2 rounded-2xl px-4 py-4 shadow-md flex flex-col gap-3 text-sm"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <AboutButton />
            <Link
              href="/scholarships"
              className="rounded-full px-4 py-2 font-medium text-emerald-950 text-center"
              style={{ background: "var(--accent)" }}
              onClick={() => setMenuOpen(false)}
            >
              Browse scholarships
            </Link>
            <div className="flex items-center gap-3">
              <CartButton />
              <NavAuthButton />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
