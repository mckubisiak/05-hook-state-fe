import React, { useState } from 'react';
import Load from '../components/app/quote/Load';
import Quote from '../components/app/quote/Quote';
import { fetchQuote } from '../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const quote = await fetchQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <>
      <Load onClick={handleClick} />
      {loading ? (
        <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />
      ) : (
        quote && (
          <Quote quote={quote.quote} name={quote.name} image={quote.image} />
        )
      )}
    </>
  );
};

export default SimpsonsQuote;
