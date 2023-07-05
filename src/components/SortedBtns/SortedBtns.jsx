import {
  sortByAdded,
  sortByName,
} from 'redux/contacts/contactsSlice';
import {
  selectSortedAlphabetic,
  selectRecentlyAdded,
} from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
  TbSortAscending2,
  TbSortDescending2,
} from 'react-icons/tb';
import { SortBtn, BtnWrapper } from './SortedBtns.styled';

const SortedBtns = () => {
  const sortedAlphabetic = useSelector(selectSortedAlphabetic);
  const recentlyAdded = useSelector(selectRecentlyAdded);
  const dispatch = useDispatch();
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
