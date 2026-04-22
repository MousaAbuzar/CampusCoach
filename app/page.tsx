"use client";
import Link from "next/link";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--background)" }}
    >
      <ParticleBackground />

      {/* Radial vignette — darkens center so text stays readable */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 1,
          background: "radial-gradient(ellipse at center, rgba(11,13,20,0.88) 0%, rgba(11,13,20,0.6) 45%, transparent 72%)",
        }}
      />

      {/* HERO — vertically centered, full height */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-24" style={{ zIndex: 2 }}>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.08] tracking-tight text-white max-w-4xl">
          Find{" "}
          <span className="gradient-text">scholarships</span>
          <br />
          all in one place.
        </h1>

        <p className="mt-6 text-base sm:text-lg max-w-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Search, filter, and track deadlines in one place for students across Canada.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/scholarships" className="btn-gradient px-8 py-3 text-sm font-semibold">
            Browse Scholarships
          </Link>
          <Link href="/contact" className="btn-outline px-8 py-3 text-sm font-semibold">
            Get in Touch
          </Link>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative w-full" style={{ zIndex: 2 }}>
        <div
          className="mx-auto w-full max-w-6xl px-6 pb-8 text-xs text-center"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()} Campus Scholarships
        </div>
      </footer>
    </main>
  );
}
