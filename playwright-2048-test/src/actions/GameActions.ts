import { Page } from '@playwright/test';
import { GamePage } from '../pages/GamePage';
import { saveToLocalStorage } from '../utils/storage';

export class GameActions {
  private game: GamePage;

  constructor(private page: Page) {
    this.game = new GamePage(page);
  }

  async dismissWelcomeTooltipIfVisible() {
    if (await this.game.closeButton.isVisible()) {
      await this.game.closeButton.click();
      await this.page.waitForTimeout(200);
    }
  }

  async navigateToGame() {
    await this.page.goto('/');
    await this.dismissWelcomeTooltipIfVisible();
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async getScore(): Promise<number> {
    const scoreText = await this.game.scoreBox.innerText();
    return parseInt(scoreText);
  }

  async getTileNumbers(): Promise<number[]> {
    const texts = await this.game.tileValues.allTextContents();
    return texts.map(Number);
  }

  async pressRandomKeys(count: number) {
    const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    for (let i = 0; i < count; i++) {
      const key = keys[Math.floor(Math.random() * keys.length)];
      await this.page.keyboard.press(key);
    }
  }

  async performMovesAndStoreResults(count: number) {
    await this.pressRandomKeys(count);

    const score = await this.getScore();
    const highestTile = await this.getHighestTile();

    await saveToLocalStorage(this.page, 'finalScoreAndTile', { score, highestTile });
  }

  async clickNewGame() {
    await this.game.newGameButton.click();
  }

  async openTutorial() {
    await this.game.menuButton.click();
    await this.game.tutorialButton.click();
  }

  async clickSwapTilesButton() {
    await this.game.swapButton.click();
  }

  async hoverSwapTilesButton() {
    await this.game.swapButton.hover();
  }

  async getHighestTile(): Promise<number> {
    const tileValues = await this.getTileNumbers();
    return Math.max(...tileValues);
  }

  async getSwapTooltip(): Promise<string> {
    return await this.game.swapTooltip.innerText();
  }

  async captureScreenshot(filename: string) {
    await this.page.screenshot({ path: filename });
  }

  async waitForTilesToSettle() {
    await this.page.waitForTimeout(500);
  }
}
