import Fastify, { FastifyInstance } from 'fastify';
import fastifyCors from '@fastify/cors';
import { createPaymentIntent, getPaymentStatus } from './mockStripe';

export const createServer = (): FastifyInstance => {
  const fastify = Fastify();
  console.log('Creating server');

  // Register CORS plugin
  fastify.register(fastifyCors, {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'], // Specify allowed HTTP methods
  });

  // Health check route
  fastify.get('/', async () => {
    return { status: 'Payment service is running' };
  });

  // Create payment route
  fastify.post('/create-payment', async (request, reply) => {
    const { amount, currency, userId } = request.body as {
      amount: number;
      currency: string;
      userId: string;
    };

    if (!amount || !currency || !userId) {
      return reply.status(400).send({ error: 'Missing required fields' });
    }

    const paymentIntent = createPaymentIntent({ amount, currency, userId });
    return reply.status(201).send(paymentIntent);
  });

  // Get payment status route
  fastify.get('/payment-status/:paymentId', async (request, reply) => {
    const { paymentId } = request.params as { paymentId: string };

    if (!paymentId) {
      return reply.status(400).send({ error: 'Payment ID is required' });
    }

    const status = getPaymentStatus(paymentId);
    if (!status) {
      return reply.status(404).send({ error: 'Payment not found' });
    }

    return reply.send({ paymentId, status });
  });

  return fastify;
};
