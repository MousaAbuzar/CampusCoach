import Image from "next/image";

export default function VisionPage() {
  return (
    <main className="bg-[#fbf6ea] pb-10">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10">
        <div
          className="rounded-[28px] px-6 sm:px-10 md:px-14 py-10 sm:py-14"
          style={{ backgroundColor: "var(--primary)" }}
        >
          {/* TOP: title + images (2 cols on md+) */}
          <div className="grid items-start gap-8 md:grid-cols-2">
            {/* LEFT: label + heading */}
            <div>
              <p className="text-sm/6 opacity-90 underline text-white">
                My Vision for CampusCoach:
              </p>

              <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] text-white">
                "Finding scholarships,
                <br />
                made{" "}
                <span className="relative inline-block px-1">
                  <span className="relative z-10">simple.</span>

                  {/* pencil underline */}
                  <svg
                    className="absolute left-0 -bottom-2 z-0 w-full"
                    height="14"
                    viewBox="0 0 200 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10 C 30 2, 60 14, 90 8 C 120 2, 150 14, 196 6"
                      stroke="#FACC15"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.95"
                    />
                  </svg>
                </span>{" "}
                "
              </h1>
            </div>

            {/* RIGHT: 3 circles */}
            <div className="flex justify-center md:justify-end">
              <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center">
                <div className="relative h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-yellow-400/90 shrink-0">
                  <Image
                    src="/images/vision1.jpg"
                    alt="vision"
                    fill
                    className="object-cover"
                    sizes="128px"
                    priority
                  />
                </div>

                <div className="relative h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-yellow-400/90 shrink-0">
                  <Image
                    src="/images/vision2.jpg"
                    alt="vision"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>

                <div className="relative h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-yellow-400/90 shrink-0">
                  <Image
                    src="/images/vision3.jpg"
                    alt="vision"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
            </div>

            {/* FULL WIDTH PARAGRAPHS */}
            <div className="md:col-span-2">
              <p className="mt-4 w-full text-base sm:text-xl leading-7 text-white/90">
                CampusCoach is built to make scholarships easier to access for
                students across Canada—without the endless searching, confusing
                eligibility rules, and stressful deadlines.
              </p>

              <p className="mt-6 w-full text-base sm:text-xl leading-7 text-white/90">
                My mission is to simplify the scholarship process from start to
                finish, while also helping underrepresented students—such as
                women in tech and students with disabilities—discover
                opportunities such as scholarships, internships and research.
              </p>
            </div>
          </div>

          {/* 3 SUBHEADINGS */}
          <div className="mt-12 sm:mt-16 space-y-10 sm:space-y-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                A simpler way to find scholarships in Canada
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-7 text-white/90">
                Scholarships, bursaries, and grants are scattered across many
                different sites, and students are often forced to search through
                long lists that don't match their eligibility. CampusCoach is
                designed to bring scholarship discovery into one streamlined
                experience so students can search in a structured way, quickly
                understand requirements, and focus on opportunities that are
                actually relevant to them.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                More visibility for underrepresented students
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-7 text-white/90">
                CampusCoach also aims to make it easier to discover opportunities
                created for students who face extra barriers, including women in
                technology and students with disabilities. Many awards and
                programs exist, but they aren't always easy to find unless you
                already know the right keywords or organizations. CampusCoach
                helps surface these opportunities in a clearer and more
                accessible way.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Stay organized and actually apply
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-7 text-white/90">
                Finding an opportunity is only the first step—students also need
                a simple way to keep track of what they want to apply for and
                return to it later. CampusCoach is built to support follow-through
                by helping students keep scholarships in one place, reduce
                last-minute stress, and apply with more confidence.
              </p>

              <p className="mt-6 text-white/50">----</p>
            </div>

            <p className="text-white">Mousa Abuzar</p>
          </div>

          <p className="mt-2 text-white">Founder, CampusCoach 😎</p>
        </div>
      </section>
    </main>
  );
}
