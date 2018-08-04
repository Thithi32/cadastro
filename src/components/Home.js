import React from 'react';
import PropTypes from 'prop-types';

const Home = props => (
  <div className="Home">
    <button onClick={props.register} type="button">
      Cadastrar
    </button>
  </div>
);

Home.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Home;
