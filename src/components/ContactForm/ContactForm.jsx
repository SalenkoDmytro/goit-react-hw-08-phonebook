import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contacts/operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { Notification } from 'components/Toast/Toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const [show, setShow] = useState(false);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      reset();
      return Notiflix.Notify.failure(`${name} is already in contacts`);
    }

    Notiflix.Notify.success(`You have added ${name} to contacts`);
    // setShow(true);
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="contactFormName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter contact name"
        />
        <Form.Text className="text-muted">
          We will save your contacts. Only you can see them.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactFormPhone">
        <Form.Label>Number</Form.Label>
        <Form.Control
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Phone number"
        />
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};
