import { Component } from 'react';
import Notiflix from 'notiflix';
import ContactForm from './ContactForm/';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parcedContacts = JSON.parse(contacts);
    if (parcedContacts) this.setState({ contacts: parcedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  handleData = newContacts => {
    const { contacts } = this.state;
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === newContacts.name.toLowerCase()
      )
    )
      return Notiflix.Notify.failure(
        `${newContacts.name} is already in contacts`
      );

    this.setState({ contacts: [newContacts, ...contacts] });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = idToDelete => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idToDelete),
    }));
  };

  render() {
    const visibleContacts = this.handleFilter();

    return (
      <div style={{ padding: 40 }}>
        <h1 style={{ marginTop: 0 }}>Phonebook</h1>
        <ContactForm onSubmit={this.handleData} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContacts}
        />
      </div>
    );
  }
}

export default App;
