import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class InMemoryProductRepository implements ProductRepository {
  private products: Map<string, Product> = new Map();

  addProduct(product: Product): void {
    this.products.set(product.id, product);
  }

  getProductById(id: string): Product | undefined {
    return this.products.get(id);
  }

  getAllProducts(): Product[] {
    return Array.from(this.products.values());
  }

  updateProduct(product: Product): void {
    if (!this.products.has(product.id)) {
      throw new Error(`Product with ID ${product.id} does not exist.`);
    }
    this.products.set(product.id, product);
  }

  deleteProduct(id: string): void {
    this.products.delete(id);
  }
}
