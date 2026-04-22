import Image from "next/image";

export default function VisionPage() {
  const cardStyle = { backgroundColor: "var(--surface)", border: "1px solid var(--border)" };

  return (
    <main className="min-h-screen pb-16" style={{ backgroundColor: "var(--background)" }}>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-12">

        {/* Hero heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
            My Vision for CampusCoach
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
            "Finding scholarships,{" "}
            <span className="gradient-text">made simple.</span>"
          </h1>
        </div>

        {/* Images row */}
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap mb-12">
          {["/images/vision1.jpg", "/images/vision2.jpg", "/images/vision3.jpg"].map((src, i) => (
            <div key={i} className="relative h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full shrink-0" style={{ border: "3px solid #7c3aed" }}>
              <Image src={src} alt="vision" fill className="object-cover" sizes="128px" priority={i === 0} />
            </div>
          ))}
        </div>

        {/* Intro paragraphs */}
        <div className="mx-auto max-w-3xl space-y-4 text-base sm:text-lg leading-7 mb-14" style={{ color: "var(--text-muted)" }}>
          <p>
            CampusCoach is built to make scholarships easier to access for
            students across Canada—without the endless searching, confusing
            eligibility rules, and stressful deadlines.
          </p>
          <p>
            My mission is to simplify the scholarship process from start to
            finish, while also helping underrepresented students—such as
            women in tech and students with disabilities—discover
            opportunities such as scholarships, internships and research.
          </p>
        </div>

        {/* 3 sections */}
        <div className="space-y-6">
          {[
            {
              title: "A simpler way to find scholarships in Canada",
              body: "Scholarships, bursaries, and grants are scattered across many different sites, and students are often forced to search through long lists that don't match their eligibility. CampusCoach is designed to bring scholarship discovery into one streamlined experience so students can search in a structured way, quickly understand requirements, and focus on opportunities that are actually relevant to them.",
            },
            {
              title: "More visibility for underrepresented students",
              body: "CampusCoach also aims to make it easier to discover opportunities created for students who face extra barriers, including women in technology and students with disabilities. Many awards and programs exist, but they aren't always easy to find unless you already know the right keywords or organizations.",
            },
            {
              title: "Stay organized and actually apply",
              body: "Finding an opportunity is only the first step—students also need a simple way to keep track of what they want to apply for and return to it later. CampusCoach is built to support follow-through by helping students keep scholarships in one place, reduce last-minute stress, and apply with more confidence.",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl p-6 sm:p-8" style={cardStyle}>
              <div className="h-0.5 w-12 rounded-full mb-4" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm sm:text-base leading-7" style={{ color: "var(--text-muted)" }}>{s.body}</p>
            </div>
          ))}
        </div>

        {/* Sign-off */}
        <div className="mt-10 text-sm" style={{ color: "var(--text-muted)" }}>
          <p className="text-white font-medium">Mousa Abuzar</p>
          <p>Founder, CampusCoach 😎</p>
        </div>

      </section>
    </main>
  );
}
