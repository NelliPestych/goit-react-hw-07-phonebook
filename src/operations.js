import axios from "axios";
import actions from "./actions";

const addContact = ({ name, number }) => dispatch => {
  dispatch(actions.addContactRequest());

  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then(response => dispatch(actions.addContactSuccess(response.data)))
    .catch(error => dispatch(actions.addContactError(error)));
};


const fetchContacts = () => dispatch => {
    dispatch(actions.fetchContactRequest());
  
    axios
      .get("http://localhost:2000/contacts")
      .then(response => dispatch(actions.fetchContactSuccess(response.data)))
      .catch(error => dispatch(actions.fetchContactError(error)));
  };

  const removeContacts = id => dispatch => {
    dispatch(actions.removeContactRequest());
  
    axios
      .delete(`http://localhost:2000/contacts/${id}`)
      .then(() => dispatch(actions.removeContactSuccess(id)))
      .catch(error => dispatch(actions.removeContactError(error)));
  };

export default {
  addContact,
  fetchContacts,
  removeContacts,
};
