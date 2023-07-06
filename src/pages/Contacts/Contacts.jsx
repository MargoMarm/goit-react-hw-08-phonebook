import { Title, Message, ContactsWrapper, Section } from './Contacts.styled';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operation';
import { useContacts } from 'hooks/useContact';

const Contacts = () => {
	const dispatch = useDispatch();
	const { contacts } = useContacts();

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
