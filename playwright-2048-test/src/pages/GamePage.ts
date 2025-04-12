import { Page, Locator } from '@playwright/test';

export class GamePage {
  readonly activeButton: Locator;
  readonly closeButton: Locator;
  readonly doOverText: Locator;
  readonly menuButton: Locator;
  readonly newGameButton: Locator;
  readonly powerupsText: Locator;
  readonly readyDialog: Locator;
  readonly scoreBox: Locator;
  readonly startButton: Locator;
  readonly startPlayingButton: Locator;
  readonly swapButton: Locator;
  readonly swapIconButton: Locator;
  readonly swapTooltip: Locator;
  readonly tileValues: Locator;
  readonly tutorialButton: Locator;

  constructor(public page: Page) {
    this.activeButton = page.locator('button.bg-leather.shadow-button');
    this.closeButton = page.locator('.tooltip-material button.absolute');
    this.doOverText = page.locator('text=Need a do-over?');
    this.menuButton = page.locator('div.col-\\[left\\] button');
    this.newGameButton = page.getByRole('button', { name: 'New Game' });
    this.powerupsText = page.locator('text=Powerups!');
    this.readyDialog = page.locator('text=You’re Ready');
    this.scoreBox = page.locator('.shrink-1.truncate').first();
    this.startButton = page.locator('button', { hasText: 'Start New Game' });
    this.startPlayingButton = page.locator('button', { hasText: 'Start Playing' });
    this.swapButton = page.locator('button.bg-leather.shadow-button').nth(1);
    this.swapIconButton = page.locator('button').filter({
      has: page.locator('svg path[d*="M18 9h.53"]'),
    });
    this.swapTooltip = page.locator('.tile-swap-tooltip');
    this.tileValues = page.locator('.tile .tile-inner');
    this.tutorialButton = page.getByText('Tutorial');
  }
}
