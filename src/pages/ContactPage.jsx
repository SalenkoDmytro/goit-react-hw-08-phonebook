import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const ContactPage = () => {
  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactPage;
