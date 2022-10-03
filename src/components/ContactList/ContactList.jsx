import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/contactsSelectors';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import ListGroup from 'react-bootstrap/ListGroup';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <ListGroup as="ol" numbered>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactListItem key={id} name={name} number={number} id={id} />
            );
          })}
        </ListGroup>
      )}
    </>
  );
}
