import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./FadeStyles.css";
import ContactsItem from "./ContactsItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactSelectors from "../contacts-selectors";

const Contacts = ({ contactsAll }) => (
  <TransitionGroup component="ul" className="fade">
    {contactsAll.map(({ id }) => (
      <CSSTransition key={id} timeout={250} classNames="fade">
        <ContactsItem
          id={id}
          key={id}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

Contacts.propTypes = {
  contactsAll: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    contactsAll: contactSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(Contacts);
