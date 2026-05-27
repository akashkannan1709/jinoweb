import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://turf-spot-be.vercel.app",
});

axiosInstance.interceptors.request.use((config) => {
  let token = null;
  try {
    const persistedUser = localStorage.getItem("persist:user");
    if (persistedUser) {
      const parsedUser = JSON.parse(persistedUser);
      if (parsedUser.auth) {
        const parsedAuth = JSON.parse(parsedUser.auth);
        token = parsedAuth.token;
      }
    }
  } catch (error) {
    console.error("Error parsing persisted user data:", error);
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (
      status === 401 &&
      (message === "Unauthorized: Invalid or expired token" ||
        message === "Invalid or expired token")
    ) {
      localStorage.removeItem("persist:user");
      delete axiosInstance.defaults.headers.common.Authorization;

      const isProtectedUserPath = window.location.pathname.startsWith("/auth");
      if (isProtectedUserPath) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
