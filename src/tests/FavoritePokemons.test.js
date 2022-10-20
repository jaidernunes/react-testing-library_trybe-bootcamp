import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Test the FavoritePokemons component ', () => {
  it('checks if the message "No favorite pokemon found"', () => {
    renderWithRouter(<App />);
    const favLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favLink);

    const noFavMsg = 'No favorite pokemon found';
    const msgEl = screen.getByText(noFavMsg);

    expect(msgEl).toBeInTheDocument();
  });

  it('checks if Pikachu is added to the favorites', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByText(/more details/i);
    userEvent.click(moreDetails);

    const isFav = screen.getByText('Pokémon favoritado?');
    userEvent.click(isFav);

    const favLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favLink);

    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });
});
