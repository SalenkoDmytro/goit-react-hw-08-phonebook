import PropTypes from 'prop-types';
import { Li, Button } from './ContactListItem.styled';

function ContactListItem({ name, number, id, onDeleteContact }) {
  return (
    <Li>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
