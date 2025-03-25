import { test, expect } from '@playwright/test';

// not sure if this is failing because iframes are hidden.
// need to investigate

test.describe('Iframes are created test', () => {

  test('Check for hidden iframes', async ({ page }) => {
    await page.goto('/store/catalog');

    // check that frames are in place and reframed
    const iframes = page.locator('iframe[hidden]');
    await expect(iframes).toHaveCount(2);

    for (let i = 0; i < 2; i++) {
      const frame = iframes.nth(i).contentFrame();
      console.log(frame, '### frame');
      const headTitle = frame.locator('head > title');
      await expect(headTitle).toHaveText('');
      await expect.poll(() =>
        frame.locator('body > script').count()
      ).toBeGreaterThan(0);
    }
  });
});
