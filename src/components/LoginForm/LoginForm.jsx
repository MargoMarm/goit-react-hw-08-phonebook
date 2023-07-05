import { useDispatch } from 'react-redux';
import { Button, Form, Input } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = e => {
	  e.preventDefault();
	  const form = e.currentTarget;
    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
	 };
	  console.log(userData)
	  dispatch(logIn(userData));
	  
  };
  return (
    <Form autoComplete="off" onSubmit={handleLogin}>
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit" >
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;
