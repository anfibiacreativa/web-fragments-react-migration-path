# Playwright Installation Guide

To run the tests, ensure your fragments are deployed and all required environment variables are correctly set.

Install Playwright by running:

```bash
pnpm install @playwright/test --save-dev
npx playwright install
```

This will install Playwright and the necessary browser binaries.

## Run the tests

To run the tests, make sure the sever is running on port 8080

```bash
cd packages/server
pnpm build && pnpm start
```

