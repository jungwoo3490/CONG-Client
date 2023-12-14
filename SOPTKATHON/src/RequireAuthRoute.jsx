import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuthRoute = () => {
  const location = useLocation();
  const auth = sessionStorage.getItem('userId');

  return auth ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireAuthRoute;
