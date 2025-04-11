// src/pages/GamePage.ts

import { Page, Locator } from '@playwright/test';

export class GamePage {
  readonly closeButton: Locator;
  readonly menuButton: Locator;
  readonly newGameButton: Locator;
  readonly scoreBox: Locator;
  readonly startButton: Locator;
  readonly swapButton: Locator;
  readonly swapTooltip: Locator;
  readonly tileValues: Locator;
  readonly tutorialButton: Locator;

  constructor(public page: Page) {
    this.closeButton = this.page.locator('.tooltip-material button.absolute');
    this.menuButton = page.getByRole('button', { name: 'Menu' });
    this.newGameButton = page.getByRole('button', { name: 'New Game' });
    this.scoreBox = page.locator('.shrink-1.truncate').first();
    this.startButton = page.locator('button', { hasText: 'Start New Game' });
    this.swapButton = page.getByRole('button', { name: 'SWAP TWO TILES' });
    this.swapTooltip = page.locator('.tile-swap-tooltip');
    this.tileValues = page.locator('.tile .tile-inner');
    this.tutorialButton = page.getByText('Tutorial');
  }
}
