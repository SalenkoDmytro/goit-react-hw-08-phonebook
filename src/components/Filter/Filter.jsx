import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';

function Filter({ onChange }) {
  return (
    <label>
      Find contacts by name
      <FilterStyled type="text" name="filter" onChange={onChange} />
    </label>
  );
}

Filter.propTypes = { onChange: PropTypes.func.isRequired };

export default Filter;
