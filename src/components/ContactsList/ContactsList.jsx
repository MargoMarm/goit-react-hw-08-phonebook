import { List, ListItem, DeleteBtn, BtnWrapper } from './ContactsList.styled';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { deleteContact } from 'redux/contacts/operation';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import SortedBtns from 'components/SortedBtns/SortedBtns';

const ContactList = () => {
  let visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      <SortedBtns />
      <List>
        {visibleContacts.map(({ name, phone, id }) => {
          return (
            <ListItem key={id}>
              {name}: {phone}
              <BtnWrapper>
                <DeleteBtn
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <RiDeleteBin2Line size="20" />
                </DeleteBtn>
              </BtnWrapper>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ContactList;
