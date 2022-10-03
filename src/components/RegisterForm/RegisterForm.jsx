import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Form.Group className="mb-3" controlId="registerFormName">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="name"
          name="name"
          pattern="[A-Za-z]{5,}"
          title="Choose unique username"
          required
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerFormEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Example characters@characters.domain
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerFormPhone">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="outline-primary" type="submit">
        Create account
      </Button>
    </Form>
  );
};
