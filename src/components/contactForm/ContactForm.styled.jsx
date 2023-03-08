import styled from 'styled-components';
import { Field } from 'formik';

const Input = styled(Field)`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 10px;
  padding: 10px 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 40px;
`;

const InputName = styled.p`
  margin: 0 0 12px;
`;

const Button = styled.button`
  display: block;
  padding: 12px 25px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 10px;
  &:hover,
  &:focus {
    background-color: #2641b5;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 10px;
    scale: 1.1;
  }
`;

export { InputName, Button, Label, Input };
