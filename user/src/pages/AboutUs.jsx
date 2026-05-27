const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#020707] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">About Us</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Welcome to J4 Arena</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            J4 Arena is Pamban&apos;s premier turf booking destination, designed for athletes and teams who want a premium match-day experience. We combine world-class facilities, fast booking, and reliable stadium partners to keep your game moving.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-bold text-white">Our Mission</h2>
            <p className="mt-3 text-slate-300">
              To deliver a seamless booking experience and help local teams access the best synthetic turf facilities in Pamban.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-bold text-white">What We Offer</h2>
            <p className="mt-3 text-slate-300">
              Secure slots instantly, enjoy stadium-grade amenities, and stay updated with real-time booking confirmations.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-bold text-white">Why Choose Us</h2>
            <p className="mt-3 text-slate-300">
              We prioritize reliability, transparency, and comfort so your team can focus on playing the game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
