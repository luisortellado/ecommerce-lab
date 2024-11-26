import { Product } from "./domain/Product";
import { InMemoryProductRepository } from "./infrastructure/InMemoryProductRepository";
import { ProductService } from "./application/ProductService";

// Crear instancia del repositorio en memoria
const repository = new InMemoryProductRepository();

// Crear servicio usando el repositorio
const productService = new ProductService(repository);

// Agregar productos
const product1 = new Product("1", "Laptop", 1000, 10);
const product2 = new Product("2", "Phone", 500, 20);

productService.addProduct(product1);
productService.addProduct(product2);

// Listar productos
productService.listProducts();

// Actualizar un producto
const updatedProduct = new Product("1", "Gaming Laptop", 1200, 8);
productService.updateProduct(updatedProduct);

// Listar productos después de actualizar
productService.listProducts();

// Eliminar un producto
productService.deleteProduct("2");

// Listar productos después de eliminar
productService.listProducts();
