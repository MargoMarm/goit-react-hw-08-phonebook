import { UseAuth } from "hooks/useAuth";
import { Link } from "./Navigation.styled";

const Navigation = () => {
	const { isLoggedIn } = UseAuth();
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;
