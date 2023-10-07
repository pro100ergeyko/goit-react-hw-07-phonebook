import { useSelector } from 'react-redux';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { ContactsForm } from './ContactsForm/ContactsForm';
import {
  ContactTitle,
  Container,
  PhoneBookTitle,
  Wrapper,
} from './Global.styled';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Wrapper>
      <Container>
        <PhoneBookTitle>Phonebook</PhoneBookTitle>
        <ContactsForm />
        {contacts.length > 0 && (
          <>
            <ContactTitle>Contacts</ContactTitle>
            <ContactFilter />
            <ContactList />
          </>
        )}
      </Container>
    </Wrapper>
  );
};
