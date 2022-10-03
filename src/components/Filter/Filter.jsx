import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filter/filterSlice';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(addFilter(value));
  };

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          Find contacts by name
        </InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          type="text"
          name="filter"
          onChange={handleChange}
        />
      </InputGroup>
    </>
  );
}
