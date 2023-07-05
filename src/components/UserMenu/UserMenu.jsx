import { UseAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button, UserMenuWrapper, UserName } from './UserMenu.styled';

const UserMenu = () => {
	const { user } = UseAuth();
	const dispatch = useDispatch();
	
	const handleLogOut = () => {
		dispatch(logOut());
	}

  return (
    <UserMenuWrapper>
      <UserName>Welcome,{user.name}</UserName>
      <Button type="button" onClick={handleLogOut}>Logout</Button>
    </UserMenuWrapper>
  );
};

export default UserMenu;
