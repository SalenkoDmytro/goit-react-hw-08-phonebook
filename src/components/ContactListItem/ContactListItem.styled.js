import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  padding: 5px;
  background-color: #faf9f9;
  max-width: 300px;
  border-radius: 7px;
  & + & {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 82px;
  margin-left: auto;

  &:active {
    color: white;
    background-color: black;
  }
`;
