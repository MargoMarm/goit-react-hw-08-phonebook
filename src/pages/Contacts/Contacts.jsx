import { Title, Message, ContactsWrapper } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactForm/ContactForm';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
		  <Title>Contacts</Title>
		  <ContactForm/>
      <ContactsWrapper>
        {contacts.length > 0 ? (
          <ContactsList />
        ) : (
          <Message>Add your first contact</Message>
        )}
      </ContactsWrapper>
    </>
  );
};

export default Contacts;
