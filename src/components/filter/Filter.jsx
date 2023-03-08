import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <Input value={filter} onChange={onFilterChange} type="text"></Input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
