"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function AboutButton() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const itemClass = (href: string) =>
    `block px-4 py-3 text-sm text-black hover:bg-black/5 ${
      pathname === href ? "underline underline-offset-4 font-semibold" : ""
    }`;

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        className="rounded-full px-5 py-2 text-emerald-950"
        style={{ backgroundColor: "var(--accent)" }}
        onClick={() => setOpen(!open)}
      >
        About
      </button>

      {open && (
        <div className="absolute right-0 mt-1 z-50 rounded-2xl overflow-hidden shadow-lg min-w-55" style={{ backgroundColor: "#f1f1f1" }}>
          <Link className={itemClass("/vision")} href="/vision" onClick={() => setOpen(false)}>
            The CampusCodes Vision
          </Link>
          <Link className={itemClass("/contact")} href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link className={itemClass("/faqs")} href="/faqs" onClick={() => setOpen(false)}>
            FAQs
          </Link>
          <Link className={itemClass("/AboutMe")} href="/AboutMe" onClick={() => setOpen(false)}>
            About Me
          </Link>
        </div>
      )}
    </div>
  );
}
