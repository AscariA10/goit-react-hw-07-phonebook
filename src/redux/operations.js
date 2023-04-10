import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://64303f49b289b1dec4c49656.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
   try {
      const response = await axios.get('/contacts');
      const data = response.data;
      console.log(data);
      return data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
   try {
      const name = contact.name;
      const phoneNumber = contact.number;
      const response = await axios.post('/contacts', { name, phoneNumber });
      const data = response.data;
      console.log(data);
      return data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
   try {
      const response = await axios.delete(`/contacts/${id}`);
      const data = response.data;
      console.log(data);
      return data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

// export async function getContact() {
//    try {
//       const response = await axios.get('/contacts');
//       const data = response.data;
//       console.log(data);
//       return data;
//    } catch (error) {
//       console.error(error);
//    }
// }

// export async function addContact() {
//    try {
//       const response = await axios.post(BASE_URL, { name: 'name', contact: 'contact' });
//       console.log(response);
//    } catch (error) {
//       console.error(error);
//    }
// }

// export async function deleteContact() {
//    try {
//       const response = await axios.delete(BASE_URL, { name: 'name', contact: 'contact' });
//       console.log(response);
//    } catch (error) {
//       console.error(error);
//    }
// }
