import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const LinkStyled = styled(Button)`
  & + & {
    margin-left: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
