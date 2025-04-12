import { test, expect } from '@playwright/test';

// Actions
import { GameActions } from '../actions/GameActions';

test('User swaps two tiles and see tooltip with 0 uses left', async ({ page }) => {
  const actions = new GameActions(page);

  await actions.navigateToGame();
  await actions.clickNewGame();

  await actions.pressRandomKeys(10);

  await actions.clickSwapTilesButton();

  const tiles = await actions.getSwappableTiles();
  expect(tiles.length).toBeGreaterThanOrEqual(2);

  await tiles[0].click();
  await tiles[1].click();

  await actions.hoverSwapTilesButton();

  const tooltipVisible = await actions.isSwapTooltipVisible();
  expect(tooltipVisible).toBe(true);

  const tooltipText = await actions.getSwapTooltip();
  expect(tooltipText).toContain('0 uses left');
});
