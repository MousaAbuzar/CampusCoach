"use client";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e3]">
      {/* HERO (full-width background, wide container) */}
      <section className="w-full" style={{backgroundColor: "var(--background)"}}>
        <div className="mx-auto w-full  px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                <span style={{ textDecoration: 'underline' }}>Find scholarships</span> all in one place.
              </h1>

              <p className="mt-4 text-base sm:text-lg opacity-80">
                Search, filter, and track deadlines in one place
                students.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/scholarships"
                  className="rounded-full bg-emerald-950 px-5 py-3 text-sm font-medium text-emerald-50 hover:opacity-90 transition" style={{backgroundColor: "var(--primary)"}}
                >
                  Browse scholarships
                </Link>

            
              </div>
            </div>

            {/* Right */}
            <div className="w-full">
              <div>
                <div className="aspect-[4/3] w-full grid place-items-center ">
                  <img src="./gifs/animated.gif" alt="Coin" className="w-100 h-87 object-contain"/>
                  {/*<img src="./gifs/coinrotate.gif" alt="Coin rotating" className="w-87 h-100 object-contain"/>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES (same wide container) */}
      {/* FEATURES (same wide container) <section className="w-full">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 pb-12">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Filter fast",
                desc: "Faculty, year, tags, and deadlines in seconds.",
              },
              {
                title: "Save & track",
                desc: "Bookmark scholarships and keep a shortlist.",
              },
              {
                title: "Never miss deadlines",
                desc: "Sort by due date and see what’s urgent.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-3xl bg-white/70 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm opacity-80">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* HOW IT WORKS (same wide container) */}
      <section id="how-it-works" className="w-full" style={{backgroundColor: "var(--background)"}}>
        <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 pb-12">
          <div className="rounded-3xl bg-emerald-950 text-emerald-50 p-8 sm:p-10 shadow-sm" style={{backgroundColor: "var(--primary)"}}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-center">How it works</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  n: "1",
                  title: "Search & filter",
                  desc: "Find scholarships that match you.",
                },
                {
                  n: "2",
                  title: "Save your picks",
                  desc: "Build a shortlist with one click.",
                },
                {
                  n: "3",
                  title: "Apply on time",
                  desc: "Track deadlines and stay organized.",
                },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl p-5 bg-emerald-950"> 
                  <div className="text-sm opacity-80 ">Step {s.n}</div>
                  <div className="mt-1 text-lg font-semibold ">{s.title}</div>
                  <p className="mt-2 text-sm opacity-80">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (same wide container) */}
      <section id="about" className="w-full">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 pb-16">
          <div className="rounded-3xl bg-white/70 p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
            <p className="mt-3 text-sm sm:text-base opacity-80">
              Campus Scholarships is a student-built tool to make funding easier to find.
              Browse opportunities, compare eligibility, and keep your deadlines in one
              place.
            </p>

            <div className="mt-6">
              <Link
                href="/scholarships"
                className="inline-flex rounded-full bg-emerald-950 px-5 py-3 text-sm font-medium text-emerald-50 hover:opacity-90 transition"
              >
                Start browsing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (same wide container) */}
      <footer className="w-full">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 pb-10 text-xs opacity-70">
          © {new Date().getFullYear()} Campus Scholarships
        </div>
      </footer>
    </main>
  );
}
