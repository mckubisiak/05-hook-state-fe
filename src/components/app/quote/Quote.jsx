import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ name, image, quote }) => (
  <>
    <h3>{name}</h3>
    <img src={image} alt={name} />
    <p>{quote}</p>
  </>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Quote;
