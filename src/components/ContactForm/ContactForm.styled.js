import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormWrap = styled(Form)`
  padding: 20px;
  background-color: #faf9f9;
  border: 1px solid #faf9f9;
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

export const InputStyled = styled(Field)`
  margin-left: auto;
  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 7px;

  &:focus {
    outline: none;
    border: 2px solid rgb(26, 140, 193);
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: #181818;
  color: #fff;
  border: 1px solid black;
  border-radius: 82px;
  min-height: 30px;
  min-width: 150px;

  &:active {
    color: #181818;
    background-color: #faf9f9;
  }
`;
