import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { ContactsForm } from './ContactsForm/ContactsForm';
import {
  ContactTitle,
  Container,
  PhoneBookTitle,
  Wrapper,
} from './Global.styled';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <PhoneBookTitle>Phonebook</PhoneBookTitle>
        <ContactsForm />
        <ContactTitle>Contacts</ContactTitle>
        <ContactFilter />
        <ContactList />
      </Container>
    </Wrapper>
  );
};
