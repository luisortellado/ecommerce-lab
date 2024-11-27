import { ProductCatalogViewModel } from "./viewModel/ProductCatalogViewModel";
import { ProductCatalogView } from "./view/ProductCatalogView";
import { Product } from "./model/product";

export function runProductCatalog(): void {
  // Create ViewModel
  const viewModel = new ProductCatalogViewModel();
  // Create View
  const view = new ProductCatalogView(viewModel);

  console.log("Running product catalog feature:");
  // Add Product
  viewModel.addProduct(new Product("1", "Laptop", 1000, 10));
  viewModel.addProduct(new Product("2", "Phone", 500, 20));
  // Update Product Quantity
  viewModel.updateProductQuantity("1", 8);

  // Explicitly showing the current state (optional)
  console.log("\nFinal catalog state:");
  view.render();
}
