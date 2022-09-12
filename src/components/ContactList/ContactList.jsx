import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              id={id}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
