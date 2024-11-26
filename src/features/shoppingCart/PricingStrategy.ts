import { CartItem } from "./ShoppingCart";

export interface PricingStrategy {
  calculateTotal(items: CartItem[]): number;
}

export class DefaultPricingStrategy implements PricingStrategy {
  calculateTotal(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
