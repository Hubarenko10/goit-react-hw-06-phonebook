import { Label, Input, Header } from './FilterStyle';
import { changeFilter } from 'redux/filterSlice';
import { useSelector,useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilter = e => {dispatch(changeFilter(e.target.value))}
  return (
    <Label>
      <Header>Find contacts by name</Header>
      <Input type="text" value={filter} onChange={setFilter} />
    </Label>
  );
};

