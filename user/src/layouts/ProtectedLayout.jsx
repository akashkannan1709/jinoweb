import { Navigate, Outlet } from "react-router-dom";
import AuthNavbar from "../components/auth/AuthNavbar";
import Footer from "../components/layout/Footer";
import {useSelector} from "react-redux"

 

export default function ProtectedLayout() {
  const {isLoggedIn} = useSelector(state=> state.auth)
  if(!isLoggedIn){
    return <Navigate to= "/login" replace />
   }

  return (
    <div className="flex flex-col min-h-screen ">
      <AuthNavbar />
      <main className="flex-grow pt-[4.5rem] pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
