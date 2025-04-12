import { expect, test } from '@playwright/test';

// Actions
import { GameActions } from '../actions/GameActions';

// Constants
import { StorageKey } from '../constants/StorageKey';

test('User verifies game state persistence after reloading', async ({ page }) => {
  const actions = new GameActions(page);

  await actions.navigateToGame();
  await actions.performMovesAndStoreResults(5);

  const scoreBefore = await actions.getScore();
  const stateBefore = await actions.getFromLocalStorage(StorageKey.FinalScoreAndTile);

  await page.reload();

  const scoreAfter = await actions.getScore();
  const stateAfter = await actions.getFromLocalStorage(StorageKey.FinalScoreAndTile);

  expect(scoreAfter).toEqual(scoreBefore);
  expect(stateAfter).toEqual(stateBefore);
});
