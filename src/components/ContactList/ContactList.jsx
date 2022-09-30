import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contactsSelectors';

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} name={name} number={number} id={id} />
          );
        })}
    </List>
  );
}

export default ContactList;
