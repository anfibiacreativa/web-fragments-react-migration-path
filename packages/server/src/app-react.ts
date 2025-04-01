import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { FragmentGateway } from 'web-fragments/gateway';
import { getNodeMiddleware } from 'web-fragments/gateway/node';
import { createPaymentIntent, getPaymentStatus } from './payment-service-mock.js';

const PORT = process.env.PORT || 8080;
const storeFragmentEndpoint =
  process.env.STORE_FRAGMENT_ENDPOINT || 'http://127.0.0.1:4175';
const cartFragmentEndpoint =
  process.env.CART_FRAGMENT_ENDPOINT || 'http://127.0.0.1:4173';

// start the gateway
const gateway = new FragmentGateway({
  prePiercingStyles: `<style id="fragment-piercing-styles" type="text/css">
      web-fragment-host[data-piercing="true"] {
        z-index: 1;

        &.store {
          width: calc(100% - 72px);
          position: relative;
          inset: 0;
          top: 269px;
          left: 0;
          z-index: 0;
          box-sizing: border-box;

          @media (min-width: 900px) and (max-width: 1023px) {
            width: 536px;
            left: -166px;
          }


          @media (min-width: 1024px) {
            width: 527px;
            left: -166px;
          }
        }
      }
    </style>`,
});

// register fragment: nuxt
gateway.registerFragment({
  fragmentId: 'store',
  prePiercingClassNames: ['store'],
  routePatterns: ['/store/:_*', '/_fragment/nuxt/:_*'],
  endpoint: storeFragmentEndpoint,
  onSsrFetchError: () => ({
    response: new Response(
      `<p id="store-fragment-not-found">
         <style>#store-fragment-not-found { color: red; font-size: 2rem; }</style>
         Store fragment could not be loaded
       </p>`,
      { headers: [['content-type', 'text/html']] },
    ),
  }),
});

// register fragment: qwik
gateway.registerFragment({
  fragmentId: 'cart',
  prePiercingClassNames: ['cart'],
  routePatterns: ['/cart/:_*', '/_fragment/qwik/:_*'],
  endpoint: cartFragmentEndpoint,
  onSsrFetchError: () => ({
    response: new Response(
      `<p id="cart-fragment-not-found">
         <style>#cart-fragment-not-found { color: red; font-size: 2rem; }</style>
         Cart fragment could not be loaded
       </p>`,
      { headers: [['content-type', 'text/html']] },
    ),
  }),
});

export function app(): express.Express {
  const app = express();

  app.use(express.json()); // Add body-parser middleware
  app.use(getNodeMiddleware(gateway, { mode: 'development' }));

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const reactAppDistFolder = path.resolve(__dirname, './react-shell-app');
  const staticReactIndexHtmlPath = path.resolve(
    reactAppDistFolder,
    'index.html',
  );

  app.set('view engine', 'html');
  app.set('views', reactAppDistFolder);

  // serve static files
  app.use(
    express.static(reactAppDistFolder, {
      maxAge: '1y',
      index: 'index.html',
    }),
  );
  console.log('Serving static files from:', staticReactIndexHtmlPath);

  // to simplify the example, we are adding the api calls to the same server
  // but in a real world example, you can deploy the api on a different server
  // or use a serverless function
  // API Routes
  app.get('/api', (req, res) => {
    res.json({ status: 'Payment service is running' });
  });

  app.post('/api/create-payment', (req, res) => {
    const { amount, currency, userId } = req.body;
    if (!amount || !currency || !userId) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    const paymentIntent = createPaymentIntent({ amount, currency, userId });
    res.status(201).json(paymentIntent);
  });

  app.get('/api/payment-status/:paymentId', (req, res) => {
    const { paymentId } = req.params;
    if (!paymentId) {
      res.status(400).json({ error: 'Payment ID is required' });
      return;
    }
    const status = getPaymentStatus(paymentId);
    if (!status) {
      res.status(404).json({ error: 'Payment not found' });
      return;
    }
    res.json({ paymentId, status });
  });

  // serve React app for unmatched routes
  app.get(/(.*)/, (req, res) => {
    res.sendFile(staticReactIndexHtmlPath);
  });

  return app;
}

function run(): void {
  app().listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

run();
