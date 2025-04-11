import { test, expect } from '@playwright/test';
import { GameActions } from '../actions/GameActions';

test('User launches and verifies the game', async ({ page }) => {
  const actions = new GameActions(page);

  await actions.navigateToGame();

  const title = await actions.getTitle();
  expect(title).toContain('2048');

  const tileValues = await actions.getTileNumbers();
  expect(tileValues.every((val) => val === 2 || val === 4)).toBeTruthy();
});

test('User verifies the initial game state', async ({ page }) => {
  const actions = new GameActions(page);

  await actions.navigateToGame();

  const score = await actions.getScore();
  expect(score).toBe(0);
});
