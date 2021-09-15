export const fetchQuote = async () => {
  const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const [quote] = await res.json();
  console.log(quote);

  return {
    quote: quote.quote,
    name: quote.character,
    image: quote.image,
  };
};
