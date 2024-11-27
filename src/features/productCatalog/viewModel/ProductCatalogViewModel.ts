import { Product } from "../model/product";

type Observer = () => void;

export class ProductCatalogViewModel {
  private products: Product[] = [];
  private observers: Observer[] = [];

  // Add new product to the catalog
  addProduct(product: Product): void {
    this.products.push(product);
    this.notifyObservers();
  }

  // Update the product quantity
  updateProductQuantity(id: string, quantity: number): void {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      product.quantity = quantity;
      this.notifyObservers();
    }
  }

  // Get all products
  getProducts(): Product[] {
    return this.products;
  }

  // Suscribe a changes
  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  // Notify the subscribers
  private notifyObservers(): void {
    this.observers.forEach((observer) => observer());
  }
}
