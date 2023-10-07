import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const AddContactToForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FieldInput = styled(Field)`
  border: 1px solid #0434f5;
  border-radius: 10px;
  min-width: 130px;
  height: 18px;
  padding: 6px;
  margin: 8px;
`;

export const ErrorMes = styled(ErrorMessage)`
  color: #f80505;
  font-size: 16px;
`;

export const Label = styled.label`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
  color: #000000;
`;

export const ButtontToAddContact = styled.button`
  padding: 10px;
  margin: 16px;
  border-radius: 20px;
  font-size: 16px;
  background-color: #cefb04;
  border-color: #0213ff;
  cursor: pointer;

  :hover {
    background-color: #0213ff;
    border-color: #cefb04;
    color: #fff;
  }
`;

// import styled from 'styled-components';

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
// `;

// export const Input = styled.input`
//   padding: 10px;
//   margin-bottom: 10px;
//   border-radius: 6px;
//   border: none;
//   outline: 0;
//   background-color: #fff;
//   box-shadow: 0 1px 6px 0 #20212447;
// `;

// export const Text = styled.p`
//   margin-bottom: 15px;
// `;

// export const ButtontToAddContact = styled.button`
//   padding: 10px;
//   margin: 16px;
//   border-radius: 20px;
//   font-size: 16px;
//   background-color: #cefb04;
//   border-color: #0213ff;
//   cursor: pointer;

//   :hover {
//     background-color: #0213ff;
//     border-color: #cefb04;
//     color: #fff;
//   }
// `;
