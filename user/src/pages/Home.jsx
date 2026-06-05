import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Apple,
  Bolt,
  CalendarDays,
  CheckCircle2,
  Droplets,
  Dumbbell,
  GlassWater,
  Lightbulb,
  ParkingCircle,
  Shirt,
  ShowerHead,
  Sparkles,
  Tag,
} from "lucide-react";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const bookingPath = isLoggedIn ? "/auth/profile" : "/login";

  const features = [
    {
      title: "Elite Speed",
      description:
        "Our light-speed booking engine ensures bookings are confirmed quickly so your match day stays simple.",
      icon: Bolt,
    },
    {
      title: "Absolute Reliability",
      description:
        "Guaranteed slots with verified facilities, clean schedules, and real-time availability updates.",
      icon: CheckCircle2,
    },
    {
      title: "Best Pricing",
      description:
        "Unlock partner rates, group offers, and seasonal discounts designed for local teams.",
      icon: Tag,
    },
  ];

  const amenities = [
    { title: "Artificial Turf", label: "Available", icon: Sparkles },
    { title: "Flood Light", label: "Available", icon: Lightbulb },
    { title: "Purified Water", label: "Available", icon: Droplets },
    { title: "Washroom", label: "Available", icon: ShowerHead },
    { title: "Parking", label: "Available", icon: ParkingCircle },
    { title: "Cafe", label: "Available", icon: GlassWater },
    { title: "Changing Room", label: "Available", icon: Shirt },
    { title: "Sport Equipments", label: "Available", icon: Dumbbell },
  ];

  const steps = [
    { title: "Search", text: "Check our live calendar for open slots." },
    { title: "Select", text: "Choose the best turf and time for your team." },
    { title: "Book", text: "Confirm the reservation in a few taps." },
    { title: "Play", text: "Arrive, warm up, and enjoy the game." },
  ];

  return (
    <div className="arena-home min-h-screen overflow-x-hidden">
      <section className="arena-hero">
        <div className="arena-shell grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
          <div className="max-w-2xl">
            <div className="arena-pill">
              <span />
              Live booking 24/7
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Experience Pamban&apos;s <span>Premier Turf</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 sm:text-base">
              The ultimate sports destination in Pamban. Book your professional-grade match
              experience on our world-class synthetic surface today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to={bookingPath} className="arena-btn arena-btn-primary">
                Book Your Slot
              </Link>
              <a href="#amenities" className="arena-btn arena-btn-muted">
                Pitch Details
              </a>
            </div>
          </div>

          <div className="arena-device-wrap">
            <div className="arena-confirm">
              <CheckCircle2 size={18} />
              <div>
                <strong>Booking Confirmed</strong>
                <span>Arena One - 7PM</span>
              </div>
            </div>
            <div className="arena-device">
              <img src="/banner-1.png" alt="Arena booking app preview" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="arena-section">
        <div className="arena-shell">
          <div className="arena-section-title centered">
            <h2>Why Professional Athletes Choose J4</h2>
            <span />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="arena-feature-card">
                  <div className="arena-icon-box">
                    <Icon size={20} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="amenities" className="arena-section">
        <div className="arena-shell">
          <div className="arena-section-title">
            <p>Experience Our</p>
            <h2>Premium Amenities</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <article key={amenity.title} className="arena-amenity-card">
                  <div>
                    <Icon size={26} />
                  </div>
                  <h3>{amenity.title}</h3>
                  <p>{amenity.label}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-shell">
          <div className="arena-section-title centered">
            <h2>How To Get Started</h2>
            <p>Play your game plan in four smooth steps.</p>
          </div>
          <div className="arena-steps">
            {steps.map((step, index) => (
              <article key={step.title}>
                <div>{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="arena-section arena-app-section">
        <div className="arena-shell">
          <div className="arena-app-cta">
            <div>
              <h2>
                Get the J4 Arena App for the <span>Best Experience</span>
              </h2>
              <p>
                Download our app on the Play Store to manage your bookings, track your
                performance, and stay ahead of the game.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="arena-store-btn">
                  <Apple size={20} />
                  <span>
                    Download on
                    <strong>App Store</strong>
                  </span>
                </a>
                <Link to={bookingPath} className="arena-store-btn ghost">
                  <CalendarDays size={20} />
                  <span>
                    Instant
                    <strong>Booking</strong>
                  </span>
                </Link>
              </div>
            </div>
            <div className="arena-phone-card">
              <img src="/banner-2.png" alt="J4 Arena mobile app screen" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
