import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, updateUser } from "../redux/slices/authSlice";
import axiosInstance from "../hooks/useAxiosInstance";
import { toast } from "react-toastify";
import {
  User,
  Pencil,
  Calendar,
  Wallet,
  ChevronRight,
  CreditCard,
  LogOut,
  X,
  MessageSquareReply,
  Instagram,
  Youtube,
} from "lucide-react";

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [liveUser, setLiveUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({ name: "", email: "", phone: "" });
  const [isUpdating, setIsUpdating] = useState(false);

  // Unwrap the user object in case Redux stores it as user.user.
  const reduxUser = user?.user || user;
  const currentUser = liveUser || reduxUser;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchProfile = useCallback(async () => {
    try {
      if (!token && !user?.token) return;

      const response = await axiosInstance.get("/api/user/getprofile");

      if (response.data.success) {
        const userData = response.data.userData;
        setLiveUser(userData);
        dispatch(updateUser(userData));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching live profile data:", error);
      toast.error(error.message);
    }
  }, [dispatch, token, user?.token]);

  useEffect(() => {
    fetchProfile();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchProfile();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [fetchProfile]);

  const handleOpenEditModal = () => {
    setEditFormData({
      name: currentUser?.name || "",
      email: currentUser?.email || "",
      phone: currentUser?.phone || "",
    });
    setIsEditModalOpen(true);
  };

  const handleEditFormChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    try {
      const response = await axiosInstance.post("/api/user/update-profile", editFormData);

      if (response.data.success) {
        toast.success("Profile Updated");
        setIsEditModalOpen(false);
        await fetchProfile();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.message || error.message || "Failed to update profile");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="mt-10 min-h-screen bg-[#F8F9F8] pb-24 font-sans text-slate-900">
      <div className="mx-auto max-w-md space-y-6 p-4">
        <div className="flex flex-col items-center rounded-[40px] bg-white p-8 text-center shadow-sm">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-green-500 bg-gray-50">
              <User size={48} className="text-gray-400" />
            </div>
            <button
              onClick={handleOpenEditModal}
              className="absolute bottom-0 right-0 rounded-full border-2 border-white bg-[#14532D] p-1.5 text-white transition-colors hover:bg-green-900"
            >
              <Pencil size={14} />
            </button>
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight">{currentUser?.name || "User Name"}</h1>

          <div className="mt-3 w-full space-y-1">
            {currentUser?.phone && <p className="text-sm font-medium text-gray-600">{currentUser.phone}</p>}
            {currentUser?.email && <p className="text-sm font-medium text-gray-600">{currentUser.email}</p>}
            {!currentUser?.phone && !currentUser?.email && (
              <p className="text-sm font-medium text-gray-400">Phone / Email</p>
            )}
          </div>

          <span className="mt-4 rounded-full bg-[#DCFCE7] px-4 py-1 text-xs font-bold tracking-widest text-[#22C55E]">
            PLAYER
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[32px] bg-[#064E3B] p-5 text-white shadow-lg">
            <div className="flex items-start justify-between">
              <div className="rounded-lg bg-white/10 p-2">
                <Calendar size={20} />
              </div>
              <span className="text-[10px] font-bold tracking-widest opacity-60">ACTIVITY</span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold">{currentUser?.totalBookings || 0}</div>
              <div className="mt-1 text-xs opacity-80">Total Bookings</div>
            </div>
          </div>

          <div className="rounded-[32px] border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="rounded-lg bg-green-50 p-2 text-green-700">
                <Wallet size={20} />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-gray-400">WALLET</span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-slate-800">Rs. {currentUser?.wallet || 0}</div>
              <div className="mt-1 text-xs text-gray-500">Total Spent</div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 ml-2 text-[11px] font-bold tracking-[0.2em] text-gray-500">
            ACCOUNT ACTIVITIES
          </h3>
          <div className="space-y-3">
            <Link
              to="/auth/booking-history"
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-50 bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gray-50 p-3">
                  <Calendar className="text-green-800" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">My Bookings</p>
                  <p className="text-[11px] text-gray-500">View and manage your upcoming pitches</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </Link>

            <a
              href="https://www.instagram.com/j4multisportsarena?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-50 bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gray-50 p-3">
                  <Instagram className="text-green-800" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Follow on Instagram</p>
                  <p className="text-[11px] text-gray-500">Catch our latest highlights and news</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </a>
            <a
              href="https://www.youtube.com/@j4multisportsarena"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-50 bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gray-50 p-3">
                  <Youtube className="text-green-800" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Follow on YouTube</p>
                  <p className="text-[11px] text-gray-500">Subscribe to our channel for updates</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </a>
            <a
              href="https://wa.me/919994960166"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-50 bg-white p-4 shadow-sm transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gray-50 p-3">
                  <MessageSquareReply className="text-green-800" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Chat on Whatsapp</p>
                  <p className="text-[11px] text-gray-500">Direct support and quick inquiries</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </a>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border-2 border-red-400 px-8 py-3 text-sm font-bold text-red-500 transition-colors hover:bg-red-50"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm animate-in zoom-in rounded-3xl bg-white p-6 shadow-xl fade-in duration-200">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="rounded-full bg-gray-50 p-2 text-gray-400 transition-colors hover:text-gray-800"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-gray-500">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditFormChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-gray-500">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleEditFormChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-gray-500">PHONE</label>
                <input
                  type="tel"
                  name="phone"
                  value={editFormData.phone}
                  onChange={handleEditFormChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isUpdating}
                className="mt-4 w-full rounded-xl bg-[#14532D] py-4 font-bold text-white transition-colors hover:bg-green-900 disabled:opacity-50"
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
