import { ShoppingCart } from "./ShoppingCart";
import { DefaultPricingStrategy } from "./PricingStrategy";
import { ConsolePaymentProcessor } from "./PaymentProcessor";

export function runShoppingCart(): void {
  const cart = new ShoppingCart();
  const pricingStrategy = new DefaultPricingStrategy();
  const paymentProcessor = new ConsolePaymentProcessor();

  cart.addItem({ name: "Laptop", price: 1000, quantity: 1 });
  cart.addItem({ name: "Mouse", price: 50, quantity: 2 });

  console.log("Running shopping cart feature:");
  const total = pricingStrategy.calculateTotal(cart.getItems());
  paymentProcessor.processPayment(total);
}
