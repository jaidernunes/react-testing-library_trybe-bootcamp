import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('PokemonDetails.js component tests:', () => {
  it('verifies if only the expected elements are on the page', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const pkmnDetailsTitle = screen.getByRole('heading', { level: 2, name: /pikachu details/i });
    const summaryTitle = screen.getByRole('heading', { level: 2, name: /summary/i });
    const locationsTitle = screen.getByRole('heading', { level: 2, name: /Game Locations of Pikachu/i });
    const summaryText = screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);

    expect(pkmnDetailsTitle).toBeInTheDocument();
    expect(summaryTitle).toBeInTheDocument();
    expect(locationsTitle).toBeInTheDocument();
    expect(summaryText).toBeInTheDocument();
    expect(moreDetails).not.toBeInTheDocument();
  });

  it('verifies the imgs in the "Game Locations" section', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const maps = screen.getAllByAltText('Pikachu location');

    expect(maps[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(maps[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('verifies favorite checkbox is working as expected', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const favoriteCheckbox = screen.getByLabelText(/pokémon favoritado\?/i);
    userEvent.click(favoriteCheckbox);

    const favoriteStar = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(favoriteStar).toBeInTheDocument();

    userEvent.click(favoriteCheckbox);
    expect(favoriteStar).not.toBeInTheDocument();
  });
});
