import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchUserData } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage';
import { PrivateRoute } from '../Utils/PrivateRoute';
import { PublicRoute } from '../Utils/PublicRoute';

const ContactPage = lazy(() => import('../pages/ContactPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute redirect>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute redirect>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
