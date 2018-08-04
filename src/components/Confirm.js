import React from 'react';
import PropTypes from 'prop-types';

const Confirm = props => (
  <div className="Home">
    <button onClick={props.confirm}type="button">
      Confirmar
    </button>
  </div>
);

Confirm.propTypes = {
  confirm: PropTypes.func.isRequired,
};

export default Confirm;
