import React, { Component } from 'react';
import { Home, Form, Confirm } from '.';

// Pages
const HOME = 'home';
const FORM = 'form';
const CONFIRM = 'confirm';

export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = { page: HOME };
  }

  register() {
    this.setState({ page: FORM });
  }

  save(person) {
    // Check if person is valid

    // Goto to Confirm page
    this.setState({
      page: CONFIRM,
      person,
    });
  }

  confirm(person) {
    console.log('sent',person);
    alert("Sent");
  }

  render() {
    return (
      <div className="Router">
        { this.state.page === HOME && <Home register={this.register} /> }
        { this.state.page === FORM && <Form save={this.save} person={this.state.person} /> }
        { this.state.page === HOME && <Confirm confirm={this.confirm} /> }
      </div>
    );
  }
}
