import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpsonsQuote from '../containers/SimpsonsQuote';

describe('simpson quote container', () => {
  it('button that displays random quote on click', async () => {
    render(<SimpsonsQuote />);

    const fetchButton = screen.getByRole('button', { name: 'fetch quote' });
  });
});
