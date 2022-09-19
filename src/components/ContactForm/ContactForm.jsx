import { Component } from 'react';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
// import Notiflix from 'notiflix';
import { FormWrap, InputStyled, Label, Button } from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      // render={message => Notiflix.Notify.failure(message)}
    />
  );
};

class ContactForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = { name: '', number: '' };

  // schema = yup.object().shape({
  //   name: yup.string().min(6).max(20).required(),
  //   number: yup.string().min(6).max(11).required(),
  // });

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit({ ...values, id: nanoid() });
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.handleSubmit}
        // validationSchema={this.schema}
      >
        <FormWrap>
          <Label>
            Name
            <InputStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <FormError name="name" />
          </Label>

          <Label>
            Number
            <InputStyled
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <FormError name="number" />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormWrap>
      </Formik>
    );
  }
}

export default ContactForm;
