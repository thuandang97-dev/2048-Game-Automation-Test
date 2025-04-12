import { Page } from '@playwright/test';

export async function saveToLocalStorage(
  page: Page,
  storageKey: string,
  storageValue: any
): Promise<void> {
  await page.evaluate(
    ([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [storageKey, storageValue]
  );
}

export async function clearLocalStorage(page: Page): Promise<void> {
  await page.evaluate(() => localStorage.clear());
}

export async function getFromLocalStorage<T>(page: Page, key: string): Promise<T | null> {
  return await page.evaluate((k) => {
    const value = localStorage.getItem(k);
    return value ? JSON.parse(value) : null;
  }, key);
}

export async function removeFromLocalStorage(page: Page, key: string): Promise<void> {
  await page.evaluate((k) => {
    localStorage.removeItem(k);
  }, key);
}
