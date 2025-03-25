// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

const useLocalServer = true;

export default defineConfig({
  testDir: './tests/e2e',
  testMatch: '*.spec.ts',
  timeout: 180000,
  expect: { timeout: 5000 },
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4000',
    browserName: 'chromium',
    trace: 'on-first-retry',
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: [
    {
      command: 'cd ../qwik-shopping-cart && pnpm preview',
      url: 'http://localhost:4173',
      reuseExistingServer: useLocalServer,
    },
    {
      command: 'cd ../analog-product-catalog && pnpm preview',
      url: 'http://localhost:4174',
      reuseExistingServer: useLocalServer,
    },
    {
      command: 'pnpm run build && pnpm run server:start',
      url: 'http://localhost:4000',
      reuseExistingServer: useLocalServer,
    }
],
});
