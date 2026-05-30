import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Bolt, ShieldCheck, Tag, CheckCircle2, CalendarDays, MapPin, Navigation2, Smartphone } from "lucide-react";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { turfs } = useSelector((state) => state.turf);
  const primaryTurf = turfs[0];

  const bookingPath = isLoggedIn ? "/auth/profile" : "/login";

  const features = [
    {
      title: "Elite Speed",
      description: "High-performance engine ensures bookings are processed in under 3 seconds.",
      icon: Bolt,
    },
    {
      title: "Absolute Reliability",
      description: "Guaranteed slots with verified stadium owners so your game is always on.",
      icon: ShieldCheck,
    },
    {
      title: "Best Pricing",
      description: "Exclusive partner rates and seasonal discounts not available anywhere else.",
      icon: Tag,
    },
  ];

  const amenities = [
    { title: "Artificial Turf", image: "/turf.png" },
    { title: "Flood Light", image: "/Floodlight.png" },
    { title: "Purified Water", image: "/water.png" },
    { title: "Washroom", image: "/washroom.png" },
    { title: "Parking", image: "/parking.png" },
    { title: "Cafe", image: "/Cafe.png" },
    { title: "Changing Room", image: "/changing room.png" },
    { title: "Sport Equipments", image: "/equiment.jpeg" },
  ];

  const steps = [
    { label: "Search", description: "Check our live calendar for open slots.", icon: Navigation2 },
    { label: "Select", description: "Pick the best pitch and time for your match.", icon: MapPin },
    { label: "Book", description: "Reserve your turf with instant confirmation.", icon: CalendarDays },
    { label: "Play", description: "Show up and enjoy a premium game experience.", icon: Smartphone },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020707] text-white">
      <section className="relative overflow-hidden pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.2),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.14),transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live booking active
              </div>
              <div className="space-y-5">
                <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                  Experience Pamban&apos;s <span className="text-emerald-400">Premier Turf</span>
                </h1>
                <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
                  The ultimate sports destination in Pamban. Book your professional-grade match experience on our world-class synthetic surface today.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://j4turf-user.vercel.app"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                >
                  Book Your Slot
                </a>
                <Link
                  to="#amenities"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  Pitch Details
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-4xl font-extrabold text-white">4.9</p>
                  <p className="mt-3 text-sm text-slate-400">Average rating from match-day teams.</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-4xl font-extrabold text-white">1.2k+</p>
                  <p className="mt-3 text-sm text-slate-400">Bookings served across Pamban this season.</p>
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[30rem]">
              <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute -right-10 bottom-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/95 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
                <img
                  src="/banner-1.png"
                  alt="Arena booking preview"
                  className="h-[650px] w-full object-cover object-center"
                />
                <div className="absolute left-6 top-6 right-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-4 shadow-lg shadow-slate-950/40 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Booking Confirmed</p>
                      <p className="mt-1 text-sm font-semibold text-white">Arena One • 7PM</p>
                    </div>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-900/80 p-3 text-sm text-slate-200">
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">Date</p>
                      <p className="mt-2 font-semibold">Mar 28</p>
                    </div>
                    <div className="rounded-3xl bg-slate-900/80 p-3 text-sm text-slate-200">
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">Players</p>
                      <p className="mt-2 font-semibold">10 / 10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">Why Professional Athletes Choose J4</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white">Built for performance, speed, and consistency.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_34px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">Pricing</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white">Choose the plan that fits your team</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Daily Match", price: "₹499", description: "Perfect for one-time bookings and practice sessions." },
            { title: "Weekly Pass", price: "₹1,799", description: "Save more when you book regularly with a weekly plan." },
            { title: "Season Partner", price: "Custom", description: "Get the best rates for recurring team bookings." },
          ].map((plan) => (
            <div key={plan.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-[0_34px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
              <p className="mt-4 text-4xl font-black text-emerald-400">{plan.price}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{plan.description}</p>
              <Link
                to={bookingPath}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="amenities" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">Experience Our</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white">Premium Amenities</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <div key={amenity.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-400/20">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300">
                <img src={amenity.image} alt={amenity.title} className="h-12 w-12 object-contain" loading="lazy" decoding="async" />
              </div>
              <h3 className="text-base font-semibold text-white">{amenity.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-emerald-400">Available</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[3rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <span className="text-sm font-black">{index + 1}</span>
                  </div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-emerald-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.label}</h3>
                  <p className="text-sm leading-6 text-slate-400">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] lg:grid-cols-[0.95fr_1.05fr] lg:p-14">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">Get the J4 Arena App</p>
            <h2 className="text-4xl font-black text-white sm:text-5xl">Get the best experience for your match day</h2>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Download our app on the Play Store to manage your bookings, track performance, and stay ahead of the game with real-time notifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-emerald-500/20"
              >
                Get it on Google Play
              </a>
              <a
                href="https://j4turf-user.vercel.app"
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/20 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/10"
              >
                Book a slot
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <img
              src="/banner-2.png"
              alt="App preview"
              className="relative z-10 h-[28rem] w-full max-w-[22rem] rounded-[2.25rem] border-2 object-cover shadow-2xl shadow-emerald-500/10"
            />
          </div>
        </div>
      </section>
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[3rem] border border-white/10 bg-white/5 p-10 text-center shadow-[0_34px_60px_rgba(15,23,42,0.12)]">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-400">Contact</p>
          <h2 className="mt-4 text-4xl font-extrabold text-white">Ready to reserve your turf?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Reach out to our team or book instantly online. We&apos;re here to help you get on the field with the best possible experience.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href="mailto:hello@j4arena.com" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              Email Us
            </a>
            <Link to={bookingPath} className="inline-flex items-center justify-center rounded-full border border-emerald-500/20 bg-slate-900/80 px-8 py-4 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/10">
              Reserve Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
