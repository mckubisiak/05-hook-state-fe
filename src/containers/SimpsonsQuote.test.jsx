import React from 'react';
import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import SimpsonsQuote from '../containers/SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockServer = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          quote: 'howdy parnar',
          character: 'Kubi-doo',
          image: 'example.com/image.png',
        },
      ])
    );
  })
);

describe('simpson quote container', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('button that displays random quote on click', async () => {
    render(<SimpsonsQuote />);

    const fetchButton = screen.getByRole('button', { name: 'fetch quote' });

    fireEvent.click(fetchButton);

    return waitFor(() => {
      screen.getByText('howdy parnar');
    });
  });
});
