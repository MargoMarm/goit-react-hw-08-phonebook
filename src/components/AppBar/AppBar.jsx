import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { Header } from './AppBar.styled';
import { UseAuth } from 'hooks/useAuth';

const AppBar = () => {
	const { isLoggedIn } = UseAuth();
	
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
