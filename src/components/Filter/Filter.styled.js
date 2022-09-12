import styled from 'styled-components';

export const FilterStyled = styled.input`
  margin-left: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 7px;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 5px;
  }
`;
