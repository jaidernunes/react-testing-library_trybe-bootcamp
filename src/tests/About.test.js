import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('About page tests:', () => {
  it('checks if there is an h2 with text "About Pokédex"', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    const h2About = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(h2About).toBeInTheDocument();
  });

  it('checks if there is an img with the expected src', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    const pokedexImg = screen.getByRole('img', { alt: 'Pokédex' });
    const pokedexImgSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(pokedexImg.getAttribute('src')).toBe(pokedexImgSrc);
  });

  it('checks if there are two paragraphs with text about the Pokédex', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    const pr1 = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémons');
    const pr2 = screen.getByText('One can filter Pokémons by type, and see more details for each one of them');

    expect(pr1).toBeInTheDocument();
    expect(pr2).toBeInTheDocument();
  });
});
