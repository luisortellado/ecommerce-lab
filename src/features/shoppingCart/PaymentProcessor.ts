export interface PaymentProcessor {
  processPayment(amount: number): void;
}

export class ConsolePaymentProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount}`);
  }
}
