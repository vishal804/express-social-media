import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { token } = useSelector((store) => store.authentication);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export { PrivateRoutes };
