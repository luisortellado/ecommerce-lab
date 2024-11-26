import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class ProductService {
  constructor(private repository: ProductRepository) {}

  addProduct(product: Product): void {
    this.repository.addProduct(product);
    console.log("Product added:", product);
  }

  listProducts(): void {
    const products = this.repository.getAllProducts();
    console.log("All products:", products);
  }

  updateProduct(product: Product): void {
    this.repository.updateProduct(product);
    console.log("Product updated:", product);
  }

  deleteProduct(id: string): void {
    this.repository.deleteProduct(id);
    console.log(`Product with ID ${id} deleted.`);
  }
}
