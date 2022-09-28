import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { Li, Button, Text } from './ContactListItem.styled';

function ContactListItem({ name, number, id, onDeleteContact }) {
  return (
    <Li>
      <Avatar name={name} round={true} size={20} />
      <Text>
        {name.slice(1)}: <span>{number}</span>
      </Text>
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
