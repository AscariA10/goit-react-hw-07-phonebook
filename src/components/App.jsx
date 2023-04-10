import { ContactInputForm } from './ContactInputForm/ContactInputForm';
import { ContactList } from './ContactList/ContactList';
import { FilterForm } from './FilterForm/FilterForm';
import { Wrapper } from './App.styled';

import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch]);

   return (
      <Wrapper>
         <ContactInputForm />
         <FilterForm />
         <ContactList />
      </Wrapper>
   );
};
