// src/pages/GamePage.ts

import { Page, Locator } from '@playwright/test';

export class GamePage {
  readonly scoreBox: Locator;
  readonly tileValues: Locator;
  readonly newGameButton: Locator;
  readonly menuButton: Locator;
  readonly tutorialButton: Locator;
  readonly swapButton: Locator;
  readonly swapTooltip: Locator;
  readonly closeButton: Locator;

  constructor(public page: Page) {
    this.scoreBox = page.locator('.shrink-1.truncate').first();
    this.tileValues = page.locator('.tile .tile-inner');
    this.newGameButton = page.getByRole('button', { name: 'New Game' });
    this.menuButton = page.getByRole('button', { name: 'Menu' });
    this.tutorialButton = page.getByText('Tutorial');
    this.swapButton = page.getByRole('button', { name: 'SWAP TWO TILES' });
    this.swapTooltip = page.locator('.tile-swap-tooltip');
    this.closeButton = this.page.locator('.tooltip-material button.absolute');
  }
}
