import React, { Component } from "react";
import AddNomber from "../addnomberFolder/addNomber";
import Contacts from "../contactsFolder/Contacts";
import Filter from "../filterFolder/Filter";
import { CSSTransition } from "react-transition-group";
import "./MyStyles.css";
import { connect } from "react-redux";
import operations from "../operations";
import contactSelectors from "../contacts-selectors";

class Phonebook extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div>
        {this.props.loadingContacts && <h1>Loading contacts...</h1>}
        <CSSTransition
          in={true}
          appear={true}
          classNames="my"
          timeout={500}
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>
        <AddNomber />
        <p>Search</p>
        <Filter />
        <p>Contacts</p>
        <Contacts />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingContacts: contactSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: operations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
