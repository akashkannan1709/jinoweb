const Contact = () => {
  return (
    <div className="min-h-screen bg-[#020707] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Contact</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Let&apos;s get you on the field</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Need help with a booking or want to inquire about stadium availability? Reach out and our team will respond quickly.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">Contact Info</h2>
            <p className="mt-4 text-slate-300">Email: hello@j4arena.com</p>
            <p className="mt-2 text-slate-300">Phone: +91 12345 67890</p>
            <p className="mt-2 text-slate-300">Location: Pamban Turf Arena, Pamban</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">Send a message</h2>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-white outline-none placeholder:text-slate-500"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-white outline-none placeholder:text-slate-500"
              />
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-white outline-none placeholder:text-slate-500"
              />
              <button className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
