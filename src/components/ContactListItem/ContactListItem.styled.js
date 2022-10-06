import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Avatar from 'react-avatar';

export const Li = styled(ListGroup.Item)`
  display: flex;
  text-align: center;
  border-radius: 7px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  margin: 0;
  margin-left: 10px;
  font-size: 22px;
`;
export const Number = styled.span`
  margin-left: 50px;
  font-weight: 700;
`;

export const ButtonStyled = styled(Button)`
  margin-left: auto;
`;

export const AvatarStyled = styled(Avatar)`
  margin-left: 10px;
`;
