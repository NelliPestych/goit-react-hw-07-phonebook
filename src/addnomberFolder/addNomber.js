import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import operations from "../operations";

class AddNomber extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value, 
    });
  };

  handleChangeNumber = (e) => {
    this.setState({
      number: e.target.value, 
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddTask(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name 
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          Number
          <input
            type="text"
            value={this.state.number}
            onChange={this.handleChangeNumber}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddTask: operations.addContact,
};

export default connect(null, mapDispatchToProps)(AddNomber);
