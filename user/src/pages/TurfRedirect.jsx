import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const TurfRedirect = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <Navigate to={isLoggedIn ? "/auth/profile" : "/login"} replace />;
};

export default TurfRedirect;
