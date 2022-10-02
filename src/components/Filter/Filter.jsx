import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filter/filterSlice';
import { FilterStyled } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(addFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <FilterStyled type="text" name="filter" onChange={handleChange} />
    </label>
  );
}
