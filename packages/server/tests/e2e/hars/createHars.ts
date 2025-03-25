import { test } from '@playwright/test';

test('Generate HAR for payment service and fragment request', async ({ page, browser }) => {
  const context = await browser.newContext();

  // payment service harness
  await context.routeFromHAR('./payment.har', { update: true });
  const paymentPage = await context.newPage();
  await paymentPage.goto('http://localhost:4000/store/catalogue');

  // simulate the payment request
  await paymentPage.evaluate(async () => {
    await fetch('http://localhost:3000/create-payment', {
      method: 'POST',
      body: JSON.stringify({ amount: 49.99, currency: 'EUR', userId: 'fake_user_id' }),
    });
  });

  // fragment request harness
  await context.routeFromHAR('./fragment.har', { update: true });

  const fragmentPage = await context.newPage();
  await fragmentPage.goto('http://localhost:4000/store/catalogue');

  // Simulate fragment asset request
  const response = await fragmentPage.request.get('http://localhost:4000/_fragment/qwik/assets/build/some-file.js');
  console.log(`Fragment request status: ${response.status()}`);


  // Close context
  await context.close();
});
