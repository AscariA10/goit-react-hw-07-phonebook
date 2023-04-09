import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/operations';

import { getContacts } from 'components/redux/selectors';

import { useState } from 'react';
import { Formik } from 'formik';
import { Form, Field, FieldLabel, FormButton } from './ContactInputForm.styled';

export const ContactInputForm = () => {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

   const { items } = useSelector(getContacts);

   const contactList = items;

   const dispatch = useDispatch();

   function formSubmit(event) {
      event.preventDefault();
      if (contactCheck(name)) {
         return alert(`${name} alredy in contacts`);
      }
      dispatch(addContact(name));
      setName('');
      setNumber('');
   }

   function contactCheck(uncheckedContact) {
      return contactList.some(element => {
         return element.name?.toLowerCase() === uncheckedContact.toLowerCase();
      });
   }

   function onChangeFunction(event) {
      switch (event.target.name) {
         case 'name':
            setName(event.currentTarget.value);
            break;
         case 'number':
            setNumber(event.currentTarget.value);
            break;
         default:
            return;
      }
   }

   return (
      <Formik initialValues={name}>
         <Form onSubmit={formSubmit}>
            <FieldLabel>
               Name
               <Field
                  name="name"
                  type="text"
                  value={name}
                  // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  // title="Name may contain only letters, apostrophe, dash and spaces."
                  onChange={onChangeFunction}
                  required
               />
            </FieldLabel>
            <FieldLabel>
               Tel.Number
               <Field
                  type="tel"
                  name="number"
                  value={number}
                  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={onChangeFunction}
               />
            </FieldLabel>
            <FormButton type="submit">submit</FormButton>
         </Form>
      </Formik>
   );
};

ContactInputForm.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};
