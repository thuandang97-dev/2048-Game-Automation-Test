import { Page } from '@playwright/test';
import { GamePage } from '../pages/GamePage';
import { saveToLocalStorage, clearLocalStorage } from '../utils/storage';
import { StorageKey } from '../constants/StorageKey';

export class GameActions {
  private game: GamePage;

  constructor(private page: Page) {
    this.game = new GamePage(page);
  }

  async navigateToGame() {
    await this.page.goto('/');
    await this.dismissWelcomeTooltipIfVisible();
  }

  async dismissWelcomeTooltipIfVisible() {
    const closeButton = this.page.locator('.tooltip-material button.absolute');

    if (await closeButton.isVisible()) {
      await closeButton.click();
      await this.page.waitForTimeout(200);
    }
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

    await saveToLocalStorage(this.page, StorageKey.FinalScoreAndTile, { score, highestTile });
  }

  async getFromLocalStorage<T>(key: string): Promise<T | null> {
    return await this.page.evaluate((k) => {
      const value = localStorage.getItem(k);
      return value ? JSON.parse(value) : null;
    }, key);
  }

  async removeFromLocalStorage(key: string): Promise<void> {
    await this.page.evaluate((k) => {
      localStorage.removeItem(k);
    }, key);
  }

  async clearAllLocalStorage(): Promise<void> {
    await clearLocalStorage(this.page);
  }

  async clickNewGame() {
    await this.game.newGameButton.click();

    await this.game.startButton.waitFor({ state: 'visible' });
    await this.game.startButton.click();

    await this.clearAllLocalStorage();
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

  async isDoOverVisible(): Promise<boolean> {
    return await this.game.doOverText.isVisible();
  }

  async clickUndoButton() {
    await this.game.activeButton.click();
  }

  async isPowerupsVisible(): Promise<boolean> {
    return await this.game.powerupsText.isVisible();
  }

  async isReadyDialogVisible(): Promise<boolean> {
    return await this.game.readyDialog.isVisible();
  }

  async isStartPlayingButtonVisible(): Promise<boolean> {
    return await this.game.startPlayingButton.isVisible();
  }

  async startPlaying() {
    await this.game.startPlayingButton.click();
  }
}
