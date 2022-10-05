import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const PublicRoute = ({ children, redirect = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRedirected = isLoggedIn && redirect;
  return isRedirected ? <Navigate to="/contacts" /> : children;
};
