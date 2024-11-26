export class CartItem {
  constructor(
    public name: string,
    public price: number,
    public quantity: number
  ) {}
}

export class ShoppingCart {
  private items: CartItem[] = [];

  addItem(item: CartItem): void {
    this.items.push(item);
    console.log("Item added:", item);
  }

  getItems(): CartItem[] {
    return this.items;
  }
}
