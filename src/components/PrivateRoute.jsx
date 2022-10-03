import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children, ...restProps }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Route {...restProps}>
      {isLoggedIn ? children : <Navigate to="/login" replace={true} />}
    </Route>
  );
};
