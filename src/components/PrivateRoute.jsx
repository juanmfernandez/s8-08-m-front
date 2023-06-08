import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ element }) {
  const isAuthenticated = useSelector(
    (state) => state.user.status === "authenticated"
  );
  console.log("authenticated", isAuthenticated);
  return isAuthenticated ? (
    <Routes>
     <Route path={"/"} element={element} />
    </Routes>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoute;
