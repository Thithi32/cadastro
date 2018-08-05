import React from 'react';
import PropTypes from 'prop-types';

const FormItem = props => (
  <div className="FormItem" style={{ margin: '20px 0' }}>
    <label>
      { props.label }
      <div>
        { props.children }
      </div>
    </label>
  </div>
);

FormItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default FormItem;
