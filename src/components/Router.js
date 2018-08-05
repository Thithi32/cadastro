import React, { Component } from 'react';
import axios from 'axios';

import { Home, Form, Confirm } from '.';

// Pages
const HOME = 'home';
const FORM = 'form';
const CONFIRM = 'confirm';

class Router extends Component {
  constructor(props) {
    super(props);
    // Start from Home page
    this.state = { page: HOME };

    this.register = this.register.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  register() {
    // Goto to Form page
    this.setState({ page: FORM });
  }

  edit() {
    // Goto to Form page
    this.setState({ page: FORM });
  }

  save(person) {
    // Goto to Confirm page
    this.setState({
      page: CONFIRM,
      person,
    });
  }

  confirm() {
    if (this.state.person) {
      const formData = new FormData(this.state.person);
      axios.post(
        'upload_file',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      alert('Cadastro enviado');
    }
  }

  render() {
    return (
      <div className="Router">
        { this.state.page === HOME &&
          <Home register={this.register} />
        }
        { this.state.page === FORM &&
          <Form save={this.save} person={this.state.person} />
        }
        { this.state.page === CONFIRM &&
          <Confirm confirm={this.confirm} edit={this.edit} person={this.state.person} />
        }
      </div>
    );
  }
}

export default Router;
