"use client";
import Link from "next/link";
import { useState } from "react";
import NavAuthButton from "./NavAuthButton";
import CartButton from "./CartButton";
import AboutButton from "./Aboutbutton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="w-full px-4 pt-4">
        <div
          className="flex items-center justify-between rounded-2xl px-5 py-3 text-white shadow-lg"
          style={{ backgroundColor: "rgba(13, 16, 26, 0.88)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <Link href="/" className="text-base font-semibold tracking-tight text-white">
            Campus Coach
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <AboutButton />
            <Link
              href="/scholarships"
              className="btn-gradient px-5 py-2 text-sm font-medium"
            >
              Browse scholarships
            </Link>
            <CartButton />
            <NavAuthButton />
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden mt-2 rounded-2xl px-4 py-4 shadow-xl flex flex-col gap-3 text-sm"
            style={{ backgroundColor: "rgba(13, 16, 26, 0.95)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <AboutButton />
            <Link
              href="/scholarships"
              className="btn-gradient px-4 py-2 font-medium text-center"
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
