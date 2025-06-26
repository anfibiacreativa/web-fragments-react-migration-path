type Payment = {
  id: string;
  amount: number;
  currency: string;
  userId: string;
  status: 'pending' | 'completed';
};

const mockPayments = new Map<string, Payment>();

// create a payment
export function createPaymentIntent({
  amount,
  currency,
  userId,
}: {
  amount: number;
  currency: string;
  userId: string;
}): Payment {
  const paymentId = `pi_${Math.random().toString(36).substr(2, 9)}`;
  const payment: Payment = {
    id: paymentId,
    amount,
    currency,
    userId,
    status: 'pending',
  };

  mockPayments.set(paymentId, payment);
  return payment;
}

// get the payment status
export function getPaymentStatus(paymentId: string): 'pending' | 'completed' | null {
  const payment = mockPayments.get(paymentId);
  return payment ? payment.status : null;
}
