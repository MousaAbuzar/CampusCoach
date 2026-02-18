
export default function ContactPage() {


  return (
    <main className="min-h-screen bg-[#0B2B1E] px-6 py-14">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Contact us <span className="align-middle">📬</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-white/80 leading-7">
          Feel free to reach out using this contact form, or just shoot me a
          message on{" "}
          <a
            className="text-[#FACC15] underline underline-offset-4 hover:opacity-90"
            href="#"
          >
            LinkedIn
          </a>{" "}
          🙂
        </p>
      </div>

      {/* Form Card */}
      <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-white/95 p-8 shadow-lg">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-[#0B2B1E]">
              Name
            </label>

            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs text-[#0B2B1E]/70">
                  First Name <span className="text-red-500">(required)</span>
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border border-[#0B2B1E]/20 bg-white px-4 py-3 text-[#0B2B1E] outline-none
                             focus:border-[#FACC15] focus:ring-4 focus:ring-[#FACC15]/25"
                  type="text"
                  name="firstName"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-[#0B2B1E]/70">
                  Last Name <span className="text-red-500">(required)</span>
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border border-[#0B2B1E]/20 bg-white px-4 py-3 text-[#0B2B1E] outline-none
                             focus:border-[#FACC15] focus:ring-4 focus:ring-[#FACC15]/25"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#0B2B1E]">
              Email <span className="text-red-500 text-xs">(required)</span>
            </label>
            <input
              className="mt-2 w-full rounded-2xl border border-[#0B2B1E]/20 bg-white px-4 py-3 text-[#0B2B1E] outline-none
                         focus:border-[#FACC15] focus:ring-4 focus:ring-[#FACC15]/25"
              type="email"
              name="email"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#0B2B1E]">
              Message <span className="text-red-500 text-xs">(required)</span>
            </label>
            <textarea
              className="mt-2 min-h-[140px] w-full resize-y rounded-2xl border border-[#0B2B1E]/20 bg-white px-4 py-3 text-[#0B2B1E] outline-none
                         focus:border-[#FACC15] focus:ring-4 focus:ring-[#FACC15]/25"
              name="message"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-[#FACC15] px-5 py-3 font-semibold text-[#0B2B1E]
                       hover:brightness-95 transition"
          >
            Send
          </button>

          <p className="text-center text-xs text-[#0B2B1E]/60">
            I’ll get back to you as soon as I can.
          </p>
        </form>
      </div>
    </main>
  );
}
