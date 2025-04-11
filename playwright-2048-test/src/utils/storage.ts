import { Page } from '@playwright/test';

export async function saveToLocalStorage(page: Page, storageKey: string, storageValue: any) {
  await page.evaluate(
    ([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [storageKey, storageValue]
  );
}
