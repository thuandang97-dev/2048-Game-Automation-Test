import { test, expect } from '@playwright/test';

// Actions
import { GameActions } from '../actions/GameActions';

// TODO:
// Unable to retrieve the highest tile value because the game board is rendered using SVG and Canvas,
// and tile values are not accessible via standard DOM text extraction.
//
// POSSIBLE SOLUTIONS: (I'm researching)
// 1. Capture a screenshot of the canvas or the entire board using `page.screenshot()`.
// 2. Use an OCR (e.g., Tesseract.js) to extract the tile values from the screenshot.

test('User simulates gameplay with 10 random moves', async ({ page }) => {
  const actions = new GameActions(page);

  await actions.navigateToGame();

  await actions.performMovesAndStoreResults(10);

  await actions.waitForTilesToSettle();

  const score = await actions.getScore();

  expect(score).toBeGreaterThanOrEqual(0);

  await actions.captureScreenshot('screenshots/after-10-random-moves.png');
});
