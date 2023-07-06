import { useDispatch } from 'react-redux';
import { sortByAdded, sortByName } from 'redux/contacts/contactSlice';
import { SortBtn, BtnWrapper } from './SortedBtns.styled';
import { useContacts } from 'hooks/useContact';
import {
TbSortAscendingLetters,
  TbSortDescendingLetters,
  TbSortAscending2,
  TbSortDescending2,
} from 'react-icons/tb';

const SortedBtns = () => {
	const dispatch = useDispatch();
  const {sortedAlphabetic} = useContacts();
  const {recentlyAdded }= useContacts();
  return (
    <BtnWrapper>
      <SortBtn onClick={() => dispatch(sortByName())}>
        Sort by name
        {sortedAlphabetic ? (
          <TbSortDescendingLetters size="20" />
        ) : (
          <TbSortAscendingLetters size="20" />
        )}
      </SortBtn>
      <SortBtn onClick={() => dispatch(sortByAdded())}>
        Recently added{' '}
        {recentlyAdded ? (
          <TbSortAscending2 size="20" />
        ) : (
          <TbSortDescending2 size="20" />
        )}
      </SortBtn>
    </BtnWrapper>
  );
};

export default SortedBtns;
