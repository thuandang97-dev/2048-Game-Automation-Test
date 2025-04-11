import { test, expect } from '@playwright/test';
import { GameActions } from '../actions/GameActions';

test('User verifies game state persistence after reloading', async ({ page }) => {
  const actions = new GameActions(page);

  await actions.navigateToGame();
  await actions.performMovesAndStoreResults(5);

  const scoreBefore = await actions.getScore();
  const stateBefore = await page.evaluate(() => localStorage.getItem('finalScoreAndTile'));

  await page.reload();

  const scoreAfter = await actions.getScore();
  const stateAfter = await page.evaluate(() => localStorage.getItem('finalScoreAndTile'));

  expect(scoreAfter).toEqual(scoreBefore);
  expect(stateAfter).toEqual(stateBefore);
});
