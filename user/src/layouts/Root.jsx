 
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow pt-[4.5rem] pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
