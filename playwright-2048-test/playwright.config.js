// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'on',
  },
  reporter: [['html', { open: 'never' }]],
});
