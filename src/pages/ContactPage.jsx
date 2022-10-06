import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const ContactPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>ADD NEW CONTACTS</h1>
            <ContactForm />
          </Col>
          <Col>
            <h2>Your contacts</h2>
            <Filter />
            <ContactList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
