// import ContactForm from './ContactForm/ContactForm';
import Contacts from '../pages/Contacts/Contacts';
// import Filter from './Filter/Filter';
// import { WrapperContent } from './App.styled';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operation';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { selectError, selectIsLoading } from 'redux/selectors';
import Layout from './Layout/Layout';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Home from 'pages/Home/Home';
import { UseAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
	const dispatch = useDispatch();
	const { isRefreshing } = UseAuth;

	useEffect(() => {
		dispatch(refreshUser())
	},[dispatch])

	return (
		isRefreshing ? (<b>Refreshing user...</b>) : (
			
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
	  )
 
  );
};
