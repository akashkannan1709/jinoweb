import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeSwitcher from "../common/ThemeSwitcher";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="navbar app-glass-header fixed left-0 right-0 top-0 z-50 min-h-[4.5rem] px-4 md:px-6 animate-slide-in-top">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case flex items-center gap-2 h-auto px-1 text-[1.45rem] font-extrabold tracking-[0.01em] text-base-content hover:bg-white/20">
          <img
            src="/logo.png?v=2"
            alt="Arena"
            className="h-14 w-14 object-contain"
            loading="eager"
            decoding="async"
          />
          Arena
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-base font-semibold text-base-content/80 hover:text-emerald-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-base font-semibold text-base-content/80 hover:text-emerald-400">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="text-base font-semibold text-base-content/80 hover:text-emerald-400">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-base font-semibold text-base-content/80 hover:text-emerald-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <ThemeSwitcher />
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="btn btn-sm border-none bg-primary text-white hover:bg-primary-focus">
              Login
            </Link>
            <Link to="/signup" className="btn btn-sm rounded-full border border-emerald-500 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15">
              Sign Up
            </Link>
          </>
        ) : (
          <Link to="/auth/profile" className="btn btn-sm border-none bg-primary text-white hover:bg-primary-focus">
            Profile
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
