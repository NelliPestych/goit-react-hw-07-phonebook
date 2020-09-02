// import types from "./types";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import actions from "./actions";

const addContact = (state, action) => {
  return [...state, action.payload];
};

const removeContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const items = createReducer([], {
  [actions.fetchContactSuccess]: (state, action) => action.payload,
  [actions.addContactSuccess]: addContact,
  [actions.removeContactSuccess]: removeContact,
});

const filter = createReducer('', {
  [actions.inputChangeContact]: (state, action) => action.payload,
});

 const loading = createReducer(false, {
  [actions.fetchContactRequest]: () => true,
   [actions.addContactRequest]: () => true,
   [actions.removehContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.fetchContactSuccess]: () => false,
  [actions.removeContactSuccess]: () => false,
  [actions.addContactError]: () => false,
   [actions.fetchContactError]: () => false,
  [actions.removeContactError]: () => false,
 });

export default combineReducers({
  items,
  filter,
  loading,
});

