import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operation';
import {
  BtnClose,
  ModalWindow,
  Overlay,
  Form,
  Input,
  AddButton,
  Icon,
} from './Modal.styled';
import { RiContactsLine } from 'react-icons/ri';

const Modal = ({ contactInfo, onClick }) => {
	const { name, number, id } = contactInfo;
	console.log(name, number)
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
	  const contact = { name: name.value, number: number.value, id };
	  console.log(contact)
    dispatch(editContact(contact));
  };
	
    
	
  return (
    <Overlay>
      <ModalWindow>
        <Form onSubmit={handleSubmit}>
        <BtnClose onClick={onClick}><Icon size="30"/></BtnClose>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            defaultValue={name}
          />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number"
            defaultValue={number}
          />
          <AddButton type="submit">
            <span>Edit contacts </span> <RiContactsLine size="20" />
          </AddButton>
        </Form>
      </ModalWindow>
    </Overlay>
  );
};

export default Modal;
