import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from 'components/redux/operations';

const contactsSlice = createSlice({
   name: 'contacts',
   initialState: {
      items: [],
      isLoading: false,
      error: null,
   },
   extraReducers: {
      [fetchContacts.pending](state) {
         state.isLoading = true;
      },
      [fetchContacts.fulfilled](state, action) {
         state.isLoading = false;
         state.error = null;
         state.items = action.payload;
      },
      [fetchContacts.rejected](state, action) {
         state.isLoading = false;
         state.error = action.payload;
      },
      [addContact.pending](state) {
         state.isLoading = true;
      },
      [addContact.fulfilled](state, action) {
         state.isLoading = false;
         state.error = null;
         state.items.push(action.payload);
      },
      [addContact.rejected](state, action) {
         state.isLoading = false;
         state.error = action.payload;
      },
   },
});

// export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// const contactSlice = createSlice({
//    name: 'contacts',
//    initialState: [],
//    reducers: {
//       addContact(state, action) {
//          state.push(action.payload);
//       },
//       deleteContact(state, action) {
//          const index = state.findIndex(contact => contact.name === action.payload);
//          state.splice(index, 1);
//       },
//    },
// });

// export const { addContact, deleteContact } = contactSlice.actions;

// export const contactsReducer = contactSlice.reducer;
