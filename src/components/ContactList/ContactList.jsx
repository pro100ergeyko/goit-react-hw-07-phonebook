import { useDispatch, useSelector } from 'react-redux';
import { IoPersonRemove } from 'react-icons/io5';
import { deleteContact } from 'redux/contactsSlice';
import { Btn, Item, Span } from './ContactList.styled';
import { getContacts, getFilters } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const dispatch = useDispatch();

  const handleDeletContacts = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContact = () => {
    const normalizedFilterQuery = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterQuery)
    );
  };

  const fitterContacts = getFilteredContact();

  return (
    <ul>
      {fitterContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Span>{name}:</Span>
            <Span>{number}</Span>
            <Btn type="button" onClick={() => handleDeletContacts(id)}>
              <IoPersonRemove size="14" />
            </Btn>
          </Item>
        );
      })}
    </ul>
  );
};
