import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContacts: (state, { payload }) => {
      const toDelete = state.contacts.findIndex(({ id }) => id === payload);

      state.contacts.splice(toDelete, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
