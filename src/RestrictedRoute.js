import { UseAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';


export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = UseAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
