import Image from "next/image";

export default function AboutMePage() {
  const cardStyle = { backgroundColor: "var(--surface)", border: "1px solid var(--border)" };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-52 w-52 overflow-hidden rounded-full shadow-lg" style={{ border: "3px solid #7c3aed", boxShadow: "0 0 32px rgba(124,58,237,0.25)" }}>
              <Image src="/about-me.jpg" alt="About me photo" fill className="object-cover" priority />
            </div>
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              About Me
            </h1>
            <p className="mt-3 text-base sm:text-lg font-medium gradient-text">
              Helping Students Achieve Their Educational Dreams
            </p>

            <div className="mt-6 max-w-xl rounded-2xl p-6" style={cardStyle}>
              <p className="leading-7 text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
                Welcome! I'm passionate about making higher education accessible to all
                students, regardless of their financial background. Through this platform, I
                connect deserving students with scholarship opportunities that can transform
                their futures.
              </p>
            </div>

            {/* Badges */}
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <span className="btn-gradient inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full">
                <span>🎓</span> Education Advocate
              </span>
              <span className="btn-outline inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full">
                <span>💡</span> Scholarship Expert
              </span>
              <span className="btn-gradient inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full">
                <span>🧑‍🎓</span> Student Mentor
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-16" style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🚀</span>
            <h2 className="text-xl font-bold text-white">My Mission</h2>
          </div>
          <div className="h-0.5 w-12 rounded-full mb-5" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
          <p className="leading-7 text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
            Every student deserves the opportunity to pursue their educational goals without the burden
            of financial constraints. My mission is to create a comprehensive resource that simplifies
            the scholarship search process and empowers students to secure the funding they need. I
            believe that education is the key to breaking cycles of poverty and creating positive change
            in communities worldwide.
          </p>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
            Have questions about scholarships or need guidance on your application? I&apos;d love to hear from you!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:mousaabuzar@gmail.com" className="btn-gradient px-8 py-3 text-sm font-semibold inline-flex items-center gap-2">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/mousa-abuzar/" target="_blank" rel="noreferrer" className="btn-outline px-8 py-3 text-sm font-semibold inline-flex items-center gap-2">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
