import { CartItem } from "../models/CartItem";

export class ShoppingCartService {
  private items: CartItem[] = [];

  addItem(item: CartItem): void {
    this.items.push(item);
    console.log("Item added:", item);
  }

  calculateTotal(): number {
    const total = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    console.log("Total price:", total);
    return total;
  }

  checkout(): void {
    const total = this.calculateTotal();
    console.log("Processing payment for total:", total);
  }
}
