import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Pokemon.js component tests:', () => {
  it('verifies the card generated has the all expected info', () => {
    renderWithRouter(<App />);

    const pikachuName = screen.getByText(/pikachu/i);
    const pikachuType = screen.getByTestId('pokemon-type');
    const pikachuWeight = screen.getByText(/average weight: 6\.0 kg/i);
    const pikachuImg = screen.getByAltText(/pikachu sprite/i);
    const pikachuImgUrl = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    expect(pikachuName).toBeInTheDocument();
    expect(pikachuType.innerHTML).toBe('Electric');
    expect(pikachuWeight).toBeInTheDocument();
    expect(pikachuImg).toHaveAttribute('src', pikachuImgUrl);
  });

  it('verifies if there is a "More details" link and its destination', () => {
    const { history } = renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toHaveAttribute('href', '/pokemons/25');

    userEvent.click(moreDetails);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('verifies if the favorited pokemon gets the expected icon on its card', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const favoriteCheckbox = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(favoriteCheckbox);

    const favoriteStar = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(favoriteStar).toHaveAttribute('src', '/star-icon.svg');
  });
});
