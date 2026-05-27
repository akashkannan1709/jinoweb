import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ProtectedLayout from "./layouts/ProtectedLayout";
import NotFound from "./components/common/NotFound";
import Profile from "./pages/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/auth",
    element: <ProtectedLayout />,
    // errorElement: <div>Error</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
