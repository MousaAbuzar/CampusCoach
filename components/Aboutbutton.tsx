"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutButton() {
  const pathname = usePathname();

  const itemClass = (href: string) =>
    `block px-4 py-3 text-sm hover:bg-black/5 ${
      pathname === href ? "underline underline-offset-4 font-semibold" : ""
    }`;

  return (
    <div className="dropdown">
      <button className="rounded-full px-5 py-2 text-emerald-950 underline-offset-4" style={{ backgroundColor: "var(--accent)" }}>About</button>

      <div className="dropdown-content">
        <Link className={itemClass("/vision")} href="/vision">
          The CampusCodes Vision
        </Link>

        <Link className={itemClass("/contact")} href="/contact">
          Contact
        </Link>

        <Link className={itemClass("/faqs")} href="/faqs">
          FAQs
        </Link>

        <Link className={itemClass("/AboutMe")} href="/AboutMe">
          About Me
        </Link>
      </div>
    </div>
  );
}
