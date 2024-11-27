import { Product } from "./domain/Product";
import { InMemoryProductRepository } from "./infrastructure/InMemoryProductRepository";
import { ProductService } from "./application/ProductService";

export function runProductManagement(): void {
  const repository = new InMemoryProductRepository();
  const productService = new ProductService(repository);

  console.log("Running product management feature:");

  // Add products
  const product1 = new Product("1", "Laptop", 1000, 10);
  const product2 = new Product("2", "Phone", 500, 20);

  productService.addProduct(product1);
  productService.addProduct(product2);

  // List all products
  console.log("\nInitial product list:");
  productService.listProducts();

  // Update a product
  console.log("\nUpdating product quantity...");
  const updatedProduct = new Product("1", "Laptop", 1000, 8);
  productService.updateProduct(updatedProduct);

  // List products after the update
  console.log("\nProduct list after update:");
  productService.listProducts();

  // Delete a product
  console.log("\nDeleting a product...");
  productService.deleteProduct("2");

  // List products after deletion
  console.log("\nFinal product list:");
  productService.listProducts();
}
