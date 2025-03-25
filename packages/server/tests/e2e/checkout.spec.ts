import { test, expect } from '@playwright/test';

test.describe('Checkout Tests', () => {
  const PAYMENT_ENDPOINT = 'http://localhost:3000/create-payment';
  const HAR_PATH = './packages/polylithic-app/shell-prod-server/tests/e2e/'

  test('Add to cart and proceed to checkout', async ({ page }) => {
    await page.goto('/store/catalog');

    // click add to cart button
    await page.click('button:has-text("Add to Cart")');
    // verify new item added to cart
    await page.waitForTimeout(2000);
    const cartItemsCount = await page.locator('li.cart-item').count();
    await expect.poll(() => cartItemsCount).toBeGreaterThan(0);

    // Intercept POST request to payment service
    await page.routeFromHAR(`${HAR_PATH}hars/payment.har`, {
      url: PAYMENT_ENDPOINT,
      update: true,
      updateContent: 'embed',
    });

    // Click proceed to checkout button
    await page.click('button:has-text("Proceed to checkout")');

    // Verify progress bar behavior
    const progressBar = page.locator('div.progress-bar');
    await expect(progressBar).toBeVisible();
    await page.waitForTimeout(20000);
    await expect(progressBar).not.toBeVisible();
    // Verify cart items are cleared
    await expect.poll(() =>
      page.locator('li.cart-item').count()
    ).toBeLessThanOrEqual(0);
  });
});
