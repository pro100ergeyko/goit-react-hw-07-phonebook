import { useDispatch, useSelector } from 'react-redux';
import { IoPersonRemove } from 'react-icons/io5';
import { Btn, Item, Span } from './ContactList.styled';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const fitterContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeletContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {isLoading && !error ? (
        <Loader />
      ) : fitterContacts.length === 0 && !error ? (
        <p>The Phonebook is empty. Add your first contact.</p>
      ) : (
        fitterContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Span>{name}:</Span>
              <Span>{number}</Span>
              <Btn
                type="button"
                onClick={() => handleDeletContacts(id)}
                disabled={isLoading}
              >
                <IoPersonRemove size="14" />
              </Btn>
            </Item>
          );
        })
      )}
    </ul>
  );
};
