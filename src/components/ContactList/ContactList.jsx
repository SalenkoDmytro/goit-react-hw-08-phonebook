import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contactsSelectors';
import { Loader } from 'components/Loader/Loader';

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <List>
      {isLoading && <Loader />}
      {!isLoading &&
        contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} name={name} number={number} id={id} />
          );
        })}
    </List>
  );
}

export default ContactList;
