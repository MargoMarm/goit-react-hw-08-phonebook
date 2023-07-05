import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
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
