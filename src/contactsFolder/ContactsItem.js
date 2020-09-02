import React from "react";
import PropTypes from "prop-types";
import operations from "../operations";
import { connect } from "react-redux";
import contactSelectors from "../contacts-selectors";

const ContactsItem = ({ name, number, onRemoveTask }) => (
    <li>
      <p>
        {name} {number}
      </p>
      <button type="button" onClick={onRemoveTask}>
        Удалить
      </button>
    </li>
);

ContactsItem.propTypes = {
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
};

const mapState = (state, ownProps) => {
  const contact = contactSelectors.getContactById(state, ownProps.id);
   return {
     ...contact,
   };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveTask: () => dispatch(operations.removeContacts(ownProps.id)),
});

export default connect(mapState, mapDispatchToProps)(ContactsItem);
