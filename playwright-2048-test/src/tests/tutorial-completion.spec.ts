import { test, expect } from '@playwright/test';
import { GameActions } from '../actions/GameActions';

// TODO:
// Unable to swap 2 tiles because I cannot perform the exact actions on the SVG.

test('User follows the tutorial and captures screenshot', async ({ page }) => {
  const actions = new GameActions(page);

  await actions.navigateToGame();
  await actions.openTutorial();
  await actions.pressRandomKeys(20);

  expect(await actions.isDoOverVisible()).toBe(true);
  await actions.clickUndoButton();

  expect(await actions.isPowerupsVisible()).toBe(true);
  await actions.clickSwapTilesButton();

  expect(await actions.isReadyDialogVisible()).toBe(true);
  expect(await actions.isStartPlayingButtonVisible()).toBe(true);
  await actions.startPlaying();

  await actions.captureScreenshot('tutorial-finished.png');
});
