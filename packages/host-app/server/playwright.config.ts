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
    baseURL: 'http://localhost:8080',
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
      command: 'pnpm i && pnpm build && pnpm start',
      url: 'http://localhost:8080',
      reuseExistingServer: useLocalServer,
    },
  ],
});
