import { CalendarDays, Home, UserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { turfs } = useSelector((state) => state.turf);
  const primaryTurf = turfs[0];
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
      <footer className="hidden bg-base-200 py-8 text-center md:block">
        <p>&copy; {new Date().getFullYear()} J4 Turf. All rights reserved.</p>
        <p>Developed by Cxt Innovex</p>
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
