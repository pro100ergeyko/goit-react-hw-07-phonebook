import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  AddContactToForm,
  ButtontToAddContact,
  ErrorMes,
  FieldInput,
  Label,
} from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
    .required(),
  number: Yup.string()
    .min(5, 'Too short  phone number')
    .max(10, 'Too long phone number')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required(),
});

const initialValue = { name: '', number: '' };

export const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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

  const handleAddContact = ({ name, number }) => {
    if (handleFindDublicate({ name, number })) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContacts({ name, number }));
  };

  return (
    <Formik
      initialValues={initialValue}
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
          <FieldInput type="tel" name="number" placeholder="000-00-00" />
          <ErrorMes name="number" component="div" />
        </Label>
        <ButtontToAddContact type="submit">Add contact</ButtontToAddContact>
      </AddContactToForm>
    </Formik>
  );
};
