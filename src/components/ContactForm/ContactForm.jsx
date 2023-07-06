import { useDispatch } from 'react-redux';
import { Input, AddButton, Form, Title } from './ContactForm.styled';
import { RiContactsLine } from 'react-icons/ri';
import Notiflix from 'notiflix';
import  Loader  from '../Loader/Loader';
import { addContact } from 'redux/contacts/operation';
import { useContacts } from 'hooks/useContact';

const ContactForm = () => {
  const dispatch = useDispatch();
	const { contacts } = useContacts();
  const {isLoading} = useContacts();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    const contact = { name: name.value, number: number.value };
    if (contacts.find(existingContact => existingContact.name === name.value)) {
      Notiflix.Notify.failure(`${contact.name} is already in your contacts`);
    } else {
      dispatch(addContact(contact));
    }
    e.target.reset();
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        />
        <AddButton type="submit">
          <span>Add contacts </span>
          {isLoading ? (
            <Loader color={'#ffffff'} size={'20'} />
          ) : (
            <RiContactsLine size="20" />
          )}
        </AddButton>
      </Form>
    </>
  );
};

export default ContactForm;
