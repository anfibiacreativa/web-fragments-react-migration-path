import { test, expect } from '@playwright/test';

test.describe('Shell Application Tests', () => {

  test('Homepage should display correct elements', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('.list > .listItem > a');
    await expect(links).toHaveCount(2);
    await expect(links.nth(0)).toHaveText('Go to Store');
    await expect(links.nth(1)).toHaveText('Go to Cart (isolated view)');
  });

  test('Banner should be displayed', async ({ page }) => {
    await page.goto('/');

    const banner = page.locator('div.banner');
    await expect(banner).toBeVisible();
    const bgImage = await banner.evaluate(el => getComputedStyle(el, '::before').backgroundImage);
    expect(bgImage).toMatch(/url\(.*\)/);
  });

  test('Store page should display correct elements and handle requests', async ({ page }) => {
    await page.goto('/store/catalog');

    // check for <fragment-outlet> elements to be in place
    const fragmentOutlets = page.locator('fragment-outlet');
    await expect.poll(() =>
      fragmentOutlets.count()
    ).toBeGreaterThanOrEqual(2);

    // intercept and validate _fragment requests
    await page.route(/_fragment.*/, route => {
      route.continue();
    });
    const fragmentOutletIds = await fragmentOutlets.evaluateAll(outlets => outlets.map(outlet => outlet.getAttribute('fragment-id')));
    for (const id of fragmentOutletIds) {
      const response = await page.request.get(`/_fragment/${id}/assets/**`);
      expect(response.status()).toBe(200);
    }
  });

  test('Quantity is updated for items', async ({ page }) => {
    await page.goto('/store/catalogue');

    await page.click('button:has-text("Add to Cart")');
    const item = page.locator('li.cart-item').first();
    await expect(item).toBeVisible();

    const quantityInput = item.locator('.quantity-input');
    const increaseButton = item.locator('.quantity-controls .btn').nth(1);
    const decreaseButton = item.locator('.quantity-controls .btn').nth(0);

    await expect(quantityInput).toHaveValue('2');


    await increaseButton.click();
    await expect(quantityInput).toHaveValue('3');

    await decreaseButton.click();
    await expect(quantityInput).toHaveValue('2');

    await decreaseButton.click();
    await expect(quantityInput).toHaveValue('1');
  });

});
