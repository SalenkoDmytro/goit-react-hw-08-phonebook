import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  Li,
  Text,
  ButtonStyled,
  AvatarStyled,
  Number,
} from './ContactListItem.styled';
import Notiflix from 'notiflix';

export function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <Li variant="light">
      <AvatarStyled name={name} round={true} size={30} />
      <Text>
        {name}: <Number>{number}</Number>
      </Text>

      <ButtonStyled
        variant="danger"
        type="button"
        onClick={() => {
          Notiflix.Notify.failure(`You have removed ${name} from contacts`);

          dispatch(deleteContact(id));
        }}
        size="sm"
      >
        Delete
      </ButtonStyled>
    </Li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
