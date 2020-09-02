import { createAction } from '@reduxjs/toolkit';
// import types from "./types";
// import { uuid } from "uuidv4";

const addContactRequest = createAction("contact/addRequest");
const addContactSuccess = createAction("contact/addSuccess");
const addContactError = createAction("contact/addError");

const fetchContactRequest = createAction("contact/fetchRequest");
const fetchContactSuccess = createAction("contact/fetchSuccess");
const fetchContactError = createAction("contact/fetchError");

const removeContactRequest = createAction("contact/removeRequest");
const removeContactSuccess = createAction("contact/removeSuccess");
const removeContactError = createAction("contact/removeError");

const inputChangeContact = createAction("contact/search");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  inputChangeContact,
};
