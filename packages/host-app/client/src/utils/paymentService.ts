import { sharedPost } from './post'; // Import your sharedPost function

// Dynamically determine the API URL based on the environment
const PAYMENT_API_URL =
  import.meta.env.VITE_PAYMENT_API_URL ||
  'http://localhost:3000/create-payment';

// Define the request structure for the payment API
export interface PaymentRequest {
  amount: number;
  currency: string;
  userId: string;
}

export interface PaymentResponse {
  success: boolean;
  transactionId: string;
  message: string;
}

export const processPayment = async (
  paymentData: PaymentRequest,
): Promise<PaymentResponse> => {
  try {
    const response: PaymentResponse = (await sharedPost(
      PAYMENT_API_URL,
      paymentData,
    )) as PaymentResponse;
    return response;
  } catch (error) {
    console.error('Payment processing failed:', error);
    throw new Error(
      `Failed to process the payment due to ${error}. Please try again.`,
    );
  }
};
