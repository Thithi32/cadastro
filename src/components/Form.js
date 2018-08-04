import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Form">
        Hello Form
        <button onClick={this.props.save}type="button">
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  save: PropTypes.func.isRequired,
};

export default Form;
