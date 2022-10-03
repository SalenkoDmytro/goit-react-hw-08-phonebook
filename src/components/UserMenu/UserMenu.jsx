import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/operations';
import Button from 'react-bootstrap/Button';
import { Wrapper, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <Wrapper>
      <Text>{email}</Text>
      <Button
        variant="outline-danger"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Wrapper>
  );
};
