import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      title: "Daily Match",
      price: "₹499",
      description: "Single turf booking for one match.",
      features: ["Prime evening slots", "Fast confirmation", "Best turf quality"],
    },
    {
      title: "Weekly Pass",
      price: "₹1,799",
      description: "Weekly booking plan for regular teams.",
      features: ["Flexible timing", "Discounted rate", "Priority support"],
    },
    {
      title: "Season Partner",
      price: "Custom",
      description: "Tailored package for recurring bookings.",
      features: ["Dedicated partner pricing", "Premium access", "Event support"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#020707] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Pricing</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Choose the perfect booking plan</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Select the package that fits your team size and schedule. Whether you need a one-time match or recurring sessions, J4 Arena has a plan for you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">{plan.title}</p>
              <p className="mt-4 text-5xl font-black text-white">{plan.price}</p>
              <p className="mt-4 text-slate-300">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-left text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/signup"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
