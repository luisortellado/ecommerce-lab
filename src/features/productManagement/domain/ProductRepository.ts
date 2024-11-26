import { Product } from "./Product";

export interface ProductRepository {
  addProduct(product: Product): void;
  getProductById(id: string): Product | undefined;
  getAllProducts(): Product[];
  updateProduct(product: Product): void;
  deleteProduct(id: string): void;
}
