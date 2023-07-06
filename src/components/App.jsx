import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { UseAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'))
const Register = lazy(() => import('../pages/Register/Register'))
const Login = lazy(() => import('../pages/Login/Login'))
const Contacts = lazy(() => import('../pages/Contacts/Contacts'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = UseAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
