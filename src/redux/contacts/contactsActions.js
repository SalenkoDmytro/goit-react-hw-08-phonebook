import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from './contactsTypes';

export const addContacts = contact => {
  return { type: ADD_CONTACT, payload: contact };
};

export const updateContacts = id => {
  return { type: UPDATE_CONTACT, payload: id };
};

export const deleteContacts = id => {
  return { type: DELETE_CONTACT, payload: id };
};
