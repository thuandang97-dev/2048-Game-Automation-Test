import { test, expect } from '@playwright/test';
import { GameActions } from '../actions/GameActions';
import { StorageKey } from '../constants/StorageKey';

test('User resets the game and validates reset', async ({ page }) => {
  const actions = new GameActions(page);

  await actions.navigateToGame();
  await actions.performMovesAndStoreResults(5);

  const scoreBefore = await actions.getScore();
  const stateBefore = await actions.getFromLocalStorage(StorageKey.FinalScoreAndTile);

  console.log('scoreBefore', scoreBefore);
  console.log('stateBefore', stateBefore);

  expect(scoreBefore).toBeGreaterThan(0);
  expect(stateBefore).not.toBeNull();

  await actions.clickNewGame();

  const scoreAfter = await actions.getScore();
  const stateAfter = await actions.getFromLocalStorage(StorageKey.FinalScoreAndTile);

  expect(scoreAfter).toBe(0);
  expect(stateAfter).toBeNull();
});
