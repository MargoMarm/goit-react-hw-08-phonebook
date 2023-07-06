import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {GiArchiveRegister} from 'react-icons/gi'
import { Button, Form, Input } from './RegisterForm.styled';

const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
	  e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
	}
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Username" />
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit">
        <span>Register</span> <GiArchiveRegister size="20"/>
      </Button>
    </Form>
  );
};

export default RegisterForm;
