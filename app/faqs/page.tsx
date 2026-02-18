// app/faq/page.tsx
// (No navbar) Long FAQ page with your green/yellow theme.
// Updated to reflect the expanded mission: helping underrepresented groups (e.g., women in tech, students with disabilities)
// Removed ALL placeholder text + lorem ipsum while keeping the same layout + colors.


export const metadata = {
  title: "CampusCoach FAQ | Scholarships, Bursaries & Student Opportunities in Canada",
  description:
    "Get answers about CampusCoach—how to find scholarships, bursaries, grants, internships and research opportunities in Canada. Built to help students, including women in tech and students with disabilities, discover more funding opportunities.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "CampusCoach FAQ | Scholarships & Student Funding in Canada",
    description:
      "Learn how CampusCoach helps Canadian students find scholarships, bursaries, grants, internships and research opportunities—especially for underrepresented groups like women in tech and students with disabilities.",
    url: "/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusCoach FAQ | Scholarships & Student Funding in Canada",
    description:
      "Answers about scholarships, bursaries, grants, internships and research opportunities in Canada—built for students and underrepresented groups.",
  },
};


export default function FAQPage() {
  const faqs = [
    {
      q: "What is CampusCoach?",
      a: "CampusCoach is a scholarship and opportunity discovery platform for students in Canada. It helps you find scholarships, bursaries, grants, internships, and research opportunities in one place, then filter and save the ones that match you—so you can spend less time searching and more time applying.",
    },
    {
      q: "Who is CampusCoach for?",
      a: "CampusCoach is for students across Canada—whether you’re in high school, undergraduate studies, or graduate school. It’s especially designed to make it easier for underrepresented students, like women in tech and students with disabilities, to discover opportunities that are often scattered across different sites.",
    },
    {
      q: "How does CampusCoach support underrepresented groups?",
      a: "CampusCoach helps by making targeted opportunities easier to find and easier to filter for. Many scholarships and programs for women in STEM, students with disabilities, and other underrepresented groups exist—but they’re not always visible unless you already know where to look. CampusCoach improves visibility and reduces the search effort.",
    },
    {
      q: "Is CampusCoach only for University of Alberta students?",
      a: "No. The goal is to support students across Canada. Some opportunities will be school-specific, but the platform is built to grow across provinces and institutions over time.",
    },
    {
      q: "Do I need an account to use CampusCoach?",
      a: "You can browse without an account. Creating an account unlocks features like saving opportunities, keeping a shortlist, and staying organized so you can return to scholarships later without losing track.",
    },
    {
      q: "How does filtering work?",
      a: "Filtering helps you narrow results by eligibility and practical criteria—like program, level of study, location, deadline timing, award type, and more. The goal is to reduce noise so you only see opportunities that you’re actually likely to qualify for.",
    },
    {
      q: "How do I know an opportunity is legitimate?",
      a: "CampusCoach prioritizes reputable sources and clearly shows where the opportunity comes from. You should still verify the final details on the official provider’s website before applying, especially for deadlines and required documents.",
    },
    {
      q: "Can CampusCoach apply for scholarships on my behalf?",
      a: "Not right now. CampusCoach helps you discover and organize opportunities, but official applications are still submitted through the scholarship provider, university portal, or organization running the program.",
    },
    {
      q: "Can I submit a scholarship or opportunity to be added?",
      a: "Yes. You’ll be able to submit a link and basic details so it can be reviewed and added. This helps CampusCoach grow faster and include opportunities that students find through clubs, departments, and organizations.",
    },
    {
      q: "Is CampusCoach free to use?",
      a: "Yes—the core search experience is free. If premium features are ever added, the goal would be to keep the main scholarship discovery and saving experience accessible to students.",
    },
    {
      q: "How often is the information updated?",
      a: "Opportunities are updated as sources change. Some providers update their pages frequently, while others only update seasonally. If a deadline or requirement changes, the goal is to reflect that as quickly as possible once it’s detected or reported.",
    },
    {
      q: "I found incorrect information. What should I do?",
      a: "Use the feedback/report option on the listing (or contact the site) and include what’s wrong and the correct source link if you have it. That helps the listing get reviewed and corrected quickly so other students don’t waste time.",
    },
    {
      q: "What data do you store about me?",
      a: "Only what’s needed to provide account features—like authentication and your saved opportunities. CampusCoach is built to be student-first: your personal data isn’t sold, and saved lists are meant to help you stay organized, not tracked.",
    },
    {
      q: "What’s next for CampusCoach?",
      a: "More filters, clearer listing details, and smoother workflows for saving and revisiting opportunities. A big focus is improving discoverability for underrepresented students by making targeted funding, internships, and research opportunities easier to surface and track.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B2B1E] text-white">
      {/* Hero / Header section like your screenshot (but your colors) */}
      <section className="bg-[#0A241A]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            <span className="relative inline-block">
              Frequently Asked Questions
              {/* thick underline */}
              <span className="absolute left-0 -bottom-3 h-[10px] w-full rounded-full bg-[#FACC15]/90" />
              {/* keep text above underline */}
              <span className="absolute inset-0" aria-hidden="true" />
            </span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-white/80 leading-7">
            Answers about how CampusCoach works, who it’s for, and how it helps
            students—especially underrepresented groups like women in tech and
            students with disabilities—find more opportunities.
          </p>
        </div>
      </section>

      {/* Content */}
      <section id="faq" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-10">
          {faqs.map((item, idx) => (
            <article
              key={idx}
              className="rounded-3xl bg-white/5 p-8 shadow-sm ring-1 ring-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {item.q}
              </h2>

              <div className="mt-4 h-[3px] w-24 rounded-full bg-[#FACC15]" />

              <p className="mt-6 text-white/80 leading-8">{item.a}</p>
            </article>
          ))}
        </div>

        {/* Extra “long page” sections (no placeholders) */}
        <div className="mt-16 grid gap-10">
          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <h3 className="text-2xl font-bold">Tips for Finding Scholarships</h3>
            <div className="mt-4 h-[3px] w-24 rounded-full bg-[#FACC15]" />
            <ul className="mt-6 space-y-4 text-white/80 leading-7 list-disc pl-6">
              <li>
                Start with eligibility-first filtering so you don’t waste time
                on opportunities you can’t apply for.
              </li>
              <li>
                Build a shortlist and revisit it weekly—deadlines and
                requirements change throughout the semester.
              </li>
              <li>
                Keep a simple “application kit” ready: transcript, résumé,
                reference contacts, and a base personal statement you can tailor.
              </li>
              <li>
                Apply to smaller, targeted awards too—many students only chase
                the biggest scholarships, which increases competition.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <h3 className="text-2xl font-bold">Common Mistakes to Avoid</h3>
            <div className="mt-4 h-[3px] w-24 rounded-full bg-[#FACC15]" />
            <p className="mt-6 text-white/80 leading-8">
              Most missed scholarships come down to timing and organization, not
              talent. A strong application usually requires a bit of planning,
              so avoid the last-minute rush whenever possible.
            </p>
            <ul className="mt-6 space-y-4 text-white/80 leading-7 list-disc pl-6">
              <li>Waiting until the week of the deadline to start.</li>
              <li>Skipping details in eligibility requirements.</li>
              <li>Submitting the same essay without tailoring it to the prompt.</li>
              <li>
                Forgetting required documents like transcripts, proof of
                enrollment, or disability documentation where applicable.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <h3 className="text-2xl font-bold">What we’re building next</h3>
            <div className="mt-4 h-[3px] w-24 rounded-full bg-[#FACC15]" />
            <p className="mt-6 text-white/80 leading-8">
              CampusCoach is being built in layers. The focus is to keep the
              experience fast and simple while adding features that help
              students follow through on applications and discover more targeted
              opportunities.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  t: "More filters",
                  d: "More eligibility and category filters so students can narrow opportunities faster and more accurately.",
                },
                {
                  t: "Smarter matching",
                  d: "Better recommendations based on what you save and what you’re eligible for, without making the app feel complicated.",
                },
                {
                  t: "Deadline support",
                  d: "Improved ways to keep track of deadlines and revisit saved opportunities so you don’t lose momentum.",
                },
              ].map((card) => (
                <div
                  key={card.t}
                  className="rounded-2xl bg-[#0B2B1E]/50 p-5 ring-1 ring-white/10"
                >
                  <p className="font-semibold text-white">{card.t}</p>
                  <p className="mt-2 text-sm text-white/70 leading-6">
                    {card.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="border-t border-white/10 bg-[#081E16]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="rounded-3xl bg-white/5 p-10 ring-1 ring-white/10 text-center">
            <h3 className="text-3xl font-extrabold">Still have questions?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-white/80 leading-7">
              If something isn’t clear, reach out through the contact page. If
              you found an opportunity we should add, send the link and we’ll
              review it.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="rounded-full bg-[#FACC15] px-7 py-3 font-semibold text-[#0B2B1E] hover:brightness-95 transition"
              >
                Go to Contact Form
              </a>
            </div>
          </div>

          {/* Extra sections (no placeholders) */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
              <h4 className="text-xl font-bold">Privacy</h4>
              <p className="mt-4 text-white/80 leading-7">
                CampusCoach stores only what it needs to provide features like
                sign-in and saved opportunities. The goal is to keep the product
                student-first: no selling personal data and no surprise
                marketing. If you ever want your account removed, you can
                request deletion through the contact page.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
              <h4 className="text-xl font-bold">Support</h4>
              <p className="mt-4 text-white/80 leading-7">
                Need help using filters, saving opportunities, or reporting a
                listing issue? Send a message through the contact page with a
                quick description of what happened and (if relevant) the link to
                the listing so it can be fixed quickly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
