import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  text-align: center;
  justify-content: baseline;
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.colors.gray};
  max-width: 300px;
  border-radius: 7px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  margin: 0 0 0 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 82px;
  margin-left: auto;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &:active {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
