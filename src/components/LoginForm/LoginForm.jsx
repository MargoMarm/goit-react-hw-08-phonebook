import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FiLogIn } from 'react-icons/fi';
import { Button, Form, Input } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(logIn(userData));
  };
  return (
    <Form autoComplete="off" onSubmit={handleLogin}>
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit">
        <span>Log In</span> <FiLogIn size="20" />
      </Button>
    </Form>
  );
};

export default LoginForm;
