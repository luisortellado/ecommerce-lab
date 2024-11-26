import { CartItem, ShoppingCart } from "./ShoppingCart";
import { DefaultPricingStrategy } from "./PricingStrategy";
import { ConsolePaymentProcessor } from "./PaymentProcessor";

class ShoppingCartService {
  constructor(
    private cart: ShoppingCart,
    private pricingStrategy: DefaultPricingStrategy,
    private paymentProcessor: ConsolePaymentProcessor
  ) {}

  calculateTotal(): number {
    const items = this.cart.getItems();
    const total = this.pricingStrategy.calculateTotal(items);
    console.log("Total calculated:", total);
    return total;
  }

  checkout(): void {
    const total = this.calculateTotal();
    this.paymentProcessor.processPayment(total);
  }
}

// Crear las dependencias
const cart = new ShoppingCart();
const pricingStrategy = new DefaultPricingStrategy();
const paymentProcessor = new ConsolePaymentProcessor();
const cartService = new ShoppingCartService(
  cart,
  pricingStrategy,
  paymentProcessor
);

// Agregar artículos al carrito
cart.addItem(new CartItem("Laptop", 1000, 1));
cart.addItem(new CartItem("Mouse", 50, 2));

// Calcular el total y realizar el pago
cartService.calculateTotal();
cartService.checkout();
