import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSelectors';
import { deleteContacts } from 'redux/contactsSlice';

function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  let contacts = useSelector(getContacts);

  const handleFilter = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDeleteContacts = idToDelete => {
    dispatch(deleteContacts(idToDelete));
  };

  return (
    <List>
      {contacts.length > 0 &&
        handleFilter().map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              id={id}
              onDeleteContact={handleDeleteContacts}
            />
          );
        })}
    </List>
  );
}

export default ContactList;
