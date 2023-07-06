import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterInput, Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        placeholder="Name"
        onChange={handleChange}
      ></FilterInput>
    </Label>
  );
};

export default Filter;
