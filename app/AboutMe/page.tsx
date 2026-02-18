import Image from "next/image";

export default function AboutMePage() {
  return (
    <main className="min-h-[calc(100vh-120px)] bg-[#fbf6ea]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-52 w-52 overflow-hidden rounded-full ring-4 ring-white shadow-lg">
              {/* Put your image in /public/about-me.jpg and update the src */}
              <Image
                src="/about-me.jpg"
                alt="About me photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: text */}
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-emerald-950">
              About Me
            </h1>

            <p className="mt-3 text-xl font-medium text-emerald-900/80">
              Helping Students Achieve Their Educational Dreams
            </p>

            <div className="mt-25 max-w-xl rounded-2xl bg-white/70 p-6 ring-1 ring-emerald-950/50 backdrop-blur-md shadow-2xl shadow-emerald-950/10">
                <p className="leading-7 text-emerald-950/80">
                    Welcome! I'm passionate about making higher education accessible to all
                    students, regardless of their financial background. Through this platform, I
                    connect deserving students with scholarship opportunities that can transform
                    their futures.
                </p>
                </div>


            {/* Badges */}
            <div className="mt-8 flex items-center gap-3 flex-nowrap">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 text-xs font-semibold text-white shadow-sm whitespace-nowrap flex-none transition-colors duration-150 hover:bg-emerald-900">
                <span className="shrink-0">🎓</span>
                Education Advocate
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#f4b400] px-4 py-2 text-xs font-semibold text-emerald-950 shadow-sm whitespace-nowrap flex-none transition-colors duration-150 hover:bg-[#d89f00]">
                <span className="shrink-0">💡</span>
                Scholarship Expert
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 text-xs font-semibold text-white shadow-sm whitespace-nowrap flex-none transition-colors duration-150 hover:bg-emerald-900">
                <span className="shrink-0">🧑‍🎓</span>
                Student Mentor
              </span>
            </div>
          </div>
        </div>
      </div>

        {/* Mission Section */}
    <section className="mt-16 bg-[#f3efe6] py-16">
    <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-10 shadow-md ring-1 ring-black/5">
        <div className="flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <h2 className="text-xl font-bold text-emerald-950">My Mission</h2>
            <span className="text-2xl">🚀</span>
        </div>

        <p className="mt-6 leading-7 text-balck">
            Every student deserves the opportunity to pursue their educational goals without the burden
            of financial constraints. My mission is to create a comprehensive resource that simplifies
            the scholarship search process and empowers students to secure the funding they need. I
            believe that education is the key to breaking cycles of poverty and creating positive change
            in communities worldwide.
        </p>
        </div>
    </div>
    </section>

    {/* Let's Connect */}
    <section className="bg-[#fbf6ea] py-20">
    <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-emerald-950">
        Let&apos;s Connect
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-emerald-950/70">
        Have questions about scholarships or need guidance on your application? I&apos;d love to hear
        from you!
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
        {/* Email */}
        <a
            href="mailto:mousaabuzar@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-8 py-3 text-sm font-semibold text-white hover:opacity-90 underline"
        >
            <span className="text-base"></span>
            Email Me
        </a>

        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/mousa-abuzar/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f4b400] px-8 py-3 text-sm font-semibold text-emerald-950 hover:opacity-90 underline"
        >
            <span className="text-base"></span>
            LinkedIn
        </a>

        {/* Email */}
        <a
            href="mailto:mousaabuzar@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-8 py-3 text-sm font-semibold text-white hover:opacity-90 underline"
        >
            <span className="text-base"></span>
            Github
        </a>
        </div>
    </div>
    </section>



    </main>

    
  );
}
