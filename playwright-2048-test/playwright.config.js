// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',
  use: {
    baseURL: 'https://play2048.co',
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'on',
  },
  reporter: [['html', { open: 'never' }]],
});
