import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../actions";
import contactSelectors from "../contacts-selectors";

const Filter = ({ searchAll, inputChangeContact }) => (
  <div>
    <input
      type="text"
      value={searchAll}
      onChange={(e) => inputChangeContact(e.target.value)}
    />
  </div>
);

const mapStateToProps = (state) => ({
  searchAll: contactSelectors.getFilter(state),
});

const mapDispatchToProps = {
  inputChangeContact: actions.inputChangeContact,
};

Filter.propTypes = {
  searchAll: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
