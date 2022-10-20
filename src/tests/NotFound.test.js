import React from 'react';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('tests the NotFound component', () => {
  it('checks if there is an h2 containing the text "Page requested not found"', () => {
    const { history } = renderWithRouter(<App />);
    const invalidUrl = '/digimons_are_much_better_lol';
    act(() => {
      history.push(invalidUrl);
    });

    const notFoundMsg = screen.getByRole('heading', { level: 2, name: 'Page requested not found' });

    expect(notFoundMsg).toBeInTheDocument();
  });

  it('checks if there is an img with the expected src', () => {
    const { history } = renderWithRouter(<App />);
    const invalidUrl = '/digimons_are_much_better_lol';
    act(() => {
      history.push(invalidUrl);
    });

    const sadPikachuImg = screen.getByRole('img');
    const expectedImgSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(sadPikachuImg.getAttribute('src')).toBe(expectedImgSrc);
  });
});
