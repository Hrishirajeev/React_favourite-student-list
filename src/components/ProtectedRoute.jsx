import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Only logged-in users can access the student pages
  const loggedInUser = localStorage.getItem("loggedInUser");

  return loggedInUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;