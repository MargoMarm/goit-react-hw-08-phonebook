import { List, ListItem, Btn, BtnWrapper } from './ContactsList.styled';
import Modal from '../Modal/Modal';
import { RiDeleteBin2Line, RiEditLine } from 'react-icons/ri';
import { deleteContact } from 'redux/contacts/operation';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import SortedBtns from 'components/SortedBtns/SortedBtns';
import { useState } from 'react';
import { Loader } from 'components/Loader/Loader';

const ContactList = () => {
  let visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleOpen = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <SortedBtns />
      <List>
        {visibleContacts.map(({ name, number, id }) => {
          return (
            <ListItem key={id}>
              {name}: {number}
              <BtnWrapper>
                <Btn type="button" onClick={toggleOpen}>
                  <RiEditLine size="20" />
                </Btn>
                <Btn
                  delete
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  {isLoading ? <Loader /> : <RiDeleteBin2Line size="20" />}
                </Btn>
              </BtnWrapper>
              {isModalOpen && (
                <Modal
                  toggleOpen={toggleOpen}
                  contactInfo={{ name, number, id }}
                />
              )}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ContactList;
