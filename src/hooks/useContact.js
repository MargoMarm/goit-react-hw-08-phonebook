import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectRecentlyAdded,
  selectSortedAlphabetic,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const sortedAlphabetic = useSelector(selectSortedAlphabetic);
  const recentlyAdded = useSelector(selectRecentlyAdded);

  return {
    contacts,
    visibleContacts,
    error,
    isLoading,
    sortedAlphabetic,
    recentlyAdded,
  };
};
