import { Home, Send, UserRound, Youtube, Instagram, Facebook, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navItems = isLoggedIn
    ? [
        {
          label: "Home",
          icon: Home,
          to: "/auth",
          active: location.pathname === "/auth",
        },
        {
          label: "Profile",
          icon: UserRound,
          to: "/auth/profile",
          active: location.pathname.includes("/profile"),
        },
      ]
    : [
        {
          label: "Home",
          icon: Home,
          to: "/",
          active: location.pathname === "/",
        },
        {
          label: "Profile",
          icon: UserRound,
          to: "/login",
          active: location.pathname.includes("/login"),
        },
      ];

  return (
    <>
      <footer className="hidden border-t border-base-content/10 bg-base-200/80 md:block">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-[1.15fr_0.75fr_0.75fr_1fr] lg:px-8">
          <div>
            <h3 className="text-base font-extrabold text-base-content">J4 Turf</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-base-content/65">
              The elite platform for professional sports booking. Engineered for performance.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-base-content">Quick Links</h4>
            <div className="mt-3 grid gap-2 text-sm text-base-content/65">
              <Link to="/aboutus" className="w-fit hover:text-primary">About Us</Link>
              <Link to="/pricing" className="w-fit hover:text-primary">Pricing</Link>
              <Link to="/privacy" className="w-fit hover:text-primary">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-base-content">Support</h4>
            <div className="mt-3 grid gap-2 text-sm text-base-content/65">
              <Link to="/contact" className="w-fit hover:text-primary">Help Center</Link>
              <a href="mailto:hello@j4arena.com" className="w-fit hover:text-primary">hello@j4arena.com</a>
              <Link to="/privacy" className="w-fit hover:text-primary">Terms of Service</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.14em] text-base-content">Follow Us</h4>
            <div className="mt-4 flex gap-3">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-base-100 p-2.5 text-base-content/65 transition-all hover:bg-primary hover:text-white">
                <Youtube size={18} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-base-100 p-2.5 text-base-content/65 transition-all hover:bg-primary hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-base-100 p-2.5 text-base-content/65 transition-all hover:bg-primary hover:text-white">
                <X size={18} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-base-100 p-2.5 text-base-content/65 transition-all hover:bg-primary hover:text-white">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-base-content/10 py-4 text-center text-xs text-base-content/55">
          &copy; {new Date().getFullYear()} J4 Turf. All rights reserved.
        </div>
      </footer>
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-xs -translate-x-1/2 md:hidden">
        <nav className="app-bottom-nav flex items-center justify-between rounded-full p-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                to={item.to}
                className={`flex min-w-0 flex-1 flex-col items-center justify-center rounded-full px-2 py-2 text-[10px] font-extrabold uppercase tracking-[0.08em] transition-all ${
                  item.active
                    ? "bg-primary text-white shadow-md shadow-emerald-200"
                    : "text-base-content/80 hover:bg-base-100/60"
                }`}
              >
                <Icon size={19} strokeWidth={2.4} className="mb-1" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Footer;
