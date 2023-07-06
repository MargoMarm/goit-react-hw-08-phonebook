import { Title, Message, ContactsWrapper, Section } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operation';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Section>
      <div>
        <ContactForm />
        <Filter />
      </div>
      <div>
        <Title>Contacts</Title>
        <ContactsWrapper>
          {contacts.length > 0 ? (
            <ContactsList />
          ) : (
            <Message>Add your first contact</Message>
          )}
        </ContactsWrapper>
      </div>
    </Section>
  );
};

export default Contacts;
