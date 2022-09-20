import styled from 'styled-components';

export const FormWrap = styled.form`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 7px;
  max-width: 300px;
  text-align: center;
`;

export const Label = styled.label`
  margin-top: 20px;
  display: flex;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

export const InputStyled = styled.input`
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 7px;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentColor};
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 82px;
  min-height: 30px;
  min-width: 150px;

  &:active {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
