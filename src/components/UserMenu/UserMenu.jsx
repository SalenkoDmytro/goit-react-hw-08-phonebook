import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
