import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
  <>
    <p>Fetch a random Simpsons quote</p>
    <button onClick={onClick} aria-label="fetch quote">Load</button>
  </>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Load;


