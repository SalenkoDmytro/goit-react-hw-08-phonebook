import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Li, Button, Text } from './ContactListItem.styled';

function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <Li>
      <Avatar name={name} round={true} size={20} />
      <Text>
        {name.slice(1)}: <span>{number}</span>
      </Text>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
