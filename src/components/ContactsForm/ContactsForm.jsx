import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import {
  AddContactToForm,
  ButtontToAddContact,
  ErrorMes,
  FieldInput,
  Label,
} from './ContactsForm.styled';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
    .required(),
  number: Yup.string()
    .min(5, 'Too short  phone number')
    .max(12, 'Too long phone number')
    .matches(
      /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,12}$/,
      'Invalid phone number format'
    )
    .required(),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFindDublicate = ({ name, number }) => {
    const trimName = name.toLowerCase().trim();
    const trimNumber = number.trim();

    const dublicate = contacts.find(
      contact =>
        contact.name.toLowerCase().trim() === trimName ||
        contact.number.trim() === trimNumber
    );
    return Boolean(dublicate);
  };

  const handleAddContact = ({ name, number }, reser) => {
    if (handleFindDublicate({ name, number })) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        handleAddContact({ ...values });
        resetForm();
      }}
      validationSchema={ContactsSchema}
    >
      <AddContactToForm>
        <Label>
          Name
          <FieldInput type="text" name="name" placeholder="Name" />
          <ErrorMes name="name" component="div" />
        </Label>
        <Label>
          Number
          <FieldInput type="tel" name="number" placeholder="000-000-0000" />
          <ErrorMes name="number" component="div" />
        </Label>
        <ButtontToAddContact type="submit">Add contact</ButtontToAddContact>
      </AddContactToForm>
    </Formik>
  );
};
