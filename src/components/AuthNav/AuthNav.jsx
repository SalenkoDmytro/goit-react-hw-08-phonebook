import { useNavigate } from 'react-router-dom';
import { LinkStyled, Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <LinkStyled
        variant="outline-success"
        onClick={() => navigate('/register')}
      >
        Register
      </LinkStyled>
      <LinkStyled variant="success" onClick={() => navigate('/login')}>
        Log In
      </LinkStyled>
    </Wrapper>
  );
};
