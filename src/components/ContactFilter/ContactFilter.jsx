import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FindLabel } from './ContactFilter.styled';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(setFilter(evt.target.value.trim()));
  };

  return (
    <>
      <FindLabel>Find contacts by name</FindLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </>
  );
};
