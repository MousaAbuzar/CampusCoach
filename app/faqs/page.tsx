export const metadata = {
  title: "CampusCoach FAQ | Scholarships, Bursaries & Student Opportunities in Canada",
  description:
    "Get answers about CampusCoach—how to find scholarships, bursaries, grants, internships and research opportunities in Canada.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is CampusCoach?",
      a: "CampusCoach is a scholarship and opportunity discovery platform for students in Canada. It helps you find scholarships, bursaries, grants, internships, and research opportunities in one place, then filter and save the ones that match you—so you can spend less time searching and more time applying.",
    },
    {
      q: "Who is CampusCoach for?",
      a: "CampusCoach is for students across Canada—whether you're in high school, undergraduate studies, or graduate school. It's especially designed to make it easier for underrepresented students, like women in tech and students with disabilities, to discover opportunities that are often scattered across different sites.",
    },
    {
      q: "How does CampusCoach support underrepresented groups?",
      a: "CampusCoach helps by making targeted opportunities easier to find and easier to filter for. Many scholarships and programs for women in STEM, students with disabilities, and other underrepresented groups exist—but they're not always visible unless you already know where to look.",
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
      a: "Filtering helps you narrow results by eligibility and practical criteria—like program, level of study, location, deadline timing, award type, and more.",
    },
    {
      q: "How do I know an opportunity is legitimate?",
      a: "CampusCoach prioritizes reputable sources and clearly shows where the opportunity comes from. You should still verify the final details on the official provider's website before applying.",
    },
    {
      q: "Can CampusCoach apply for scholarships on my behalf?",
      a: "Not right now. CampusCoach helps you discover and organize opportunities, but official applications are still submitted through the scholarship provider or university portal.",
    },
    {
      q: "Is CampusCoach free to use?",
      a: "Yes—the core search experience is free. If premium features are ever added, the goal would be to keep the main scholarship discovery and saving experience accessible to students.",
    },
    {
      q: "What data do you store about me?",
      a: "Only what's needed to provide account features—like authentication and your saved opportunities. Your personal data isn't sold, and saved lists are meant to help you stay organized, not tracked.",
    },
    {
      q: "What's next for CampusCoach?",
      a: "More filters, clearer listing details, and smoother workflows for saving and revisiting opportunities. A big focus is improving discoverability for underrepresented students.",
    },
  ];

  const cardStyle = { backgroundColor: "var(--surface)", border: "1px solid var(--border)" };

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>

      {/* Hero */}
      <section className="text-center px-6 py-20 md:py-28" style={{ backgroundColor: "var(--background)" }}>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Frequently Asked{" "}
          <span className="gradient-text">Questions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl leading-7" style={{ color: "var(--text-muted)" }}>
          Answers about how CampusCoach works, who it's for, and how it helps
          students—especially underrepresented groups—find more opportunities.
        </p>
      </section>

      {/* FAQ list */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6">
          {faqs.map((item, idx) => (
            <article key={idx} className="rounded-2xl p-6 sm:p-8" style={cardStyle}>
              <h2 className="text-lg sm:text-xl font-bold text-white">{item.q}</h2>
              <div className="mt-3 h-0.5 w-16 rounded-full" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
              <p className="mt-4 leading-7 text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>{item.a}</p>
            </article>
          ))}
        </div>

        {/* Tips + Mistakes + Next */}
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl p-6 sm:p-8" style={cardStyle}>
            <h3 className="text-xl font-bold text-white">Tips for Finding Scholarships</h3>
            <div className="mt-3 h-0.5 w-16 rounded-full" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
            <ul className="mt-5 space-y-3 list-disc pl-5 text-sm leading-7" style={{ color: "var(--text-muted)" }}>
              <li>Start with eligibility-first filtering so you don't waste time on opportunities you can't apply for.</li>
              <li>Build a shortlist and revisit it weekly—deadlines and requirements change throughout the semester.</li>
              <li>Keep a simple "application kit" ready: transcript, résumé, reference contacts, and a base personal statement.</li>
              <li>Apply to smaller, targeted awards too—many students only chase the biggest scholarships, which increases competition.</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 sm:p-8" style={cardStyle}>
            <h3 className="text-xl font-bold text-white">Common Mistakes to Avoid</h3>
            <div className="mt-3 h-0.5 w-16 rounded-full" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
            <ul className="mt-5 space-y-3 list-disc pl-5 text-sm leading-7" style={{ color: "var(--text-muted)" }}>
              <li>Waiting until the week of the deadline to start.</li>
              <li>Skipping details in eligibility requirements.</li>
              <li>Submitting the same essay without tailoring it to the prompt.</li>
              <li>Forgetting required documents like transcripts or proof of enrollment.</li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 sm:p-8" style={cardStyle}>
            <h3 className="text-xl font-bold text-white">What we're building next</h3>
            <div className="mt-3 h-0.5 w-16 rounded-full" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { t: "More filters", d: "Narrow opportunities faster by eligibility and category." },
                { t: "Smarter matching", d: "Better recommendations based on what you save and qualify for." },
                { t: "Deadline support", d: "Track deadlines and revisit saved opportunities easily." },
              ].map((card) => (
                <div key={card.t} className="rounded-xl p-4" style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border)" }}>
                  <p className="font-semibold text-white text-sm">{card.t}</p>
                  <p className="mt-2 text-xs leading-5" style={{ color: "var(--text-muted)" }}>{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Still have questions?</h3>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-sm" style={{ color: "var(--text-muted)" }}>
            Reach out through the contact page or send a scholarship link you'd like added.
          </p>
          <div className="mt-8">
            <a href="/contact" className="btn-gradient px-8 py-3 text-sm font-semibold inline-block">
              Go to Contact Form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
