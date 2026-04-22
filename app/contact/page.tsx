export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-14" style={{ backgroundColor: "var(--background)" }}>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Contact us <span className="align-middle">📬</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg leading-7" style={{ color: "var(--text-muted)" }}>
          Feel free to reach out using this contact form, or just shoot me a message on{" "}
          <a
            className="underline underline-offset-4 hover:opacity-80 gradient-text"
            href="https://www.linkedin.com/in/mousa-abuzar/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          🙂
        </p>
      </div>

      {/* Form Card */}
      <div
        className="mx-auto mt-12 max-w-xl rounded-3xl p-8 shadow-lg"
        style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-white">Name</label>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs" style={{ color: "var(--text-muted)" }}>
                  First Name <span className="text-red-400">(required)</span>
                </label>
                <input
                  className="mt-2 w-full rounded-xl px-4 py-3 text-white outline-none text-sm transition-shadow focus:ring-1 focus:ring-purple-500"
                  style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border)" }}
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div>
                <label className="block text-xs" style={{ color: "var(--text-muted)" }}>
                  Last Name <span className="text-red-400">(required)</span>
                </label>
                <input
                  className="mt-2 w-full rounded-xl px-4 py-3 text-white outline-none text-sm transition-shadow focus:ring-1 focus:ring-purple-500"
                  style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border)" }}
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-white">
              Email <span className="text-red-400 text-xs">(required)</span>
            </label>
            <input
              className="mt-2 w-full rounded-xl px-4 py-3 text-white outline-none text-sm transition-shadow focus:ring-1 focus:ring-purple-500"
              style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border)" }}
              type="email"
              name="email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-white">
              Message <span className="text-red-400 text-xs">(required)</span>
            </label>
            <textarea
              className="mt-2 min-h-[140px] w-full resize-y rounded-xl px-4 py-3 text-white outline-none text-sm transition-shadow focus:ring-1 focus:ring-purple-500"
              style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border)" }}
              name="message"
              required
            />
          </div>

          {/* Button */}
          <button type="submit" className="btn-gradient w-full py-3 font-semibold text-sm">
            Send
          </button>

          <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>
            I'll get back to you as soon as I can.
          </p>
        </form>
      </div>
    </main>
  );
}
