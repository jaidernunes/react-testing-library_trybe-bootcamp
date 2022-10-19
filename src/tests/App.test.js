import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('App component tests', () => {
  it('verifies the 3 links in the nav', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favLink = screen.getByRole('link', { name: /favorite pokémons/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favLink).toBeInTheDocument();
  });

  it('verifies if clicking on Home takes the user to /', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });

    userEvent.click(homeLink);

    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  it('verifies if clicking on About takes the user to /about', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    userEvent.click(aboutLink);

    const { pathname } = history.location;

    expect(pathname).toBe('/about');
  });

  it('verifies if clicking on Favorite Pokémons takes the user to /favorites', () => {
    const { history } = renderWithRouter(<App />);
    const favLink = screen.getByRole('link', { name: /favorite pokémons/i });

    userEvent.click(favLink);

    const { pathname } = history.location;

    expect(pathname).toBe('/favorites');
  });
});
