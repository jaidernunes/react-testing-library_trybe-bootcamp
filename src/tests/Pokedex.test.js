import React from 'react';
// import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Pokedex component tests', () => {
  it('verifies the names on the type filter buttons', () => {
    renderWithRouter(<App />);
    const electricButton = screen.getByRole('button', { name: /electric/i });
    const fireButton = screen.getByRole('button', { name: /fire/i });
    const bugButton = screen.getByRole('button', { name: /bug/i });
    const poisonButton = screen.getByRole('button', { name: /poison/i });
    const psychicButton = screen.getByRole('button', { name: /psychic/i });
    const normalButton = screen.getByRole('button', { name: /normal/i });
    const dragonButton = screen.getByRole('button', { name: /dragon/i });

    expect(electricButton).toBeInTheDocument();
    expect(fireButton).toBeInTheDocument();
    expect(bugButton).toBeInTheDocument();
    expect(poisonButton).toBeInTheDocument();
    expect(psychicButton).toBeInTheDocument();
    expect(normalButton).toBeInTheDocument();
    expect(dragonButton).toBeInTheDocument();
  });

  it('verifies if all type filter buttons (except All button) have data-testid attribute, ', () => {
    renderWithRouter(<App />);
    const electricButton = screen.getByRole('button', { name: /electric/i });
    const fireButton = screen.getByRole('button', { name: /fire/i });
    const bugButton = screen.getByRole('button', { name: /bug/i });
    const poisonButton = screen.getByRole('button', { name: /poison/i });
    const psychicButton = screen.getByRole('button', { name: /psychic/i });
    const normalButton = screen.getByRole('button', { name: /normal/i });
    const dragonButton = screen.getByRole('button', { name: /dragon/i });
    const allButton = screen.getByRole('button', { name: /all/i });

    const testId = 'data-testid';
    const pkmnTypeBtn = 'pokemon-type-button';

    expect(electricButton).toHaveAttribute(testId, pkmnTypeBtn);
    expect(fireButton).toHaveAttribute(testId, pkmnTypeBtn);
    expect(bugButton).toHaveAttribute(testId, pkmnTypeBtn);
    expect(poisonButton).toHaveAttribute(testId, pkmnTypeBtn);
    expect(psychicButton).toHaveAttribute(testId, pkmnTypeBtn);
    expect(normalButton).toHaveAttribute(testId, pkmnTypeBtn);
    expect(dragonButton).toHaveAttribute(testId, pkmnTypeBtn);
    expect(allButton).not.toHaveAttribute(testId, pkmnTypeBtn);
  });

  it('verifies if the All button is clickable', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: /all/i });

    expect(allButton).toBeEnabled();
  });
});
