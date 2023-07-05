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
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetContact, setTargetContact] = useState({});

  const toggleOpen = () => setIsModalOpen(!isModalOpen);

  const handleClick = e => {
    const id = e.currentTarget.parentNode.parentNode.dataset.id;
    const targetContact = visibleContacts.find(contact => contact.id === id);
    setTargetContact(targetContact);
    toggleOpen();
  };
	
	console.log(isLoading)
  return (
    <>
      <SortedBtns />
      {isLoading ? (
        <Loader color={'#0fc1dd'} size={'50'} />
      ) : (
        <List>
          {visibleContacts.map(({ name, number, id }) => {
            return (
              <ListItem data-id={id} key={id}>
                {name}: {number}
                <BtnWrapper>
                  <Btn type="button" onClick={handleClick}>
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
                  <Modal toggleOpen={toggleOpen} contactInfo={targetContact} />
                )}
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ContactList;
