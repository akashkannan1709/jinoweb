import { Link, useNavigate } from "react-router-dom";
import ThemeSwitcher from "../common/ThemeSwitcher.jsx";
import { logout } from "../../redux/slices/authSlice.js";
import { useDispatch } from "react-redux";

export default function AuthNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="navbar app-glass-header fixed left-0 right-0 top-0 z-50 min-h-[4.5rem] px-4 md:px-6">
        <div className="navbar-start">
          <Link to="/auth" className="btn btn-ghost normal-case flex items-center gap-2 h-auto px-1 text-[1.45rem] font-extrabold tracking-[0.01em] text-base-content hover:bg-white/20">
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
              <Link to="/auth" className="text-base font-semibold text-base-content/80 hover:bg-white/20">Home</Link>
            </li>
            <li>
              <Link to="/aboutus" className="text-base font-semibold text-base-content/80 hover:bg-white/20">About Us</Link>
            </li>
            <li>
              <Link to="/pricing" className="text-base font-semibold text-base-content/80 hover:bg-white/20">Pricing</Link>
            </li>
            <li>
              <Link to="/contact" className="text-base font-semibold text-base-content/80 hover:bg-white/20">Contact</Link>
            </li>
            <li>
              <Link to="/auth/profile" className="text-base font-semibold text-base-content/80 hover:bg-white/20">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <ThemeSwitcher />
          <button className="btn btn-sm border-none bg-primary text-white hover:bg-primary-focus" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
