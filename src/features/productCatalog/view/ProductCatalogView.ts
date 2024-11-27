import { ProductCatalogViewModel } from "../viewModel/ProductCatalogViewModel";

export class ProductCatalogView {
  constructor(private viewModel: ProductCatalogViewModel) {
    // Suscribe to change in view model
    this.viewModel.subscribe(() => this.render());
  }

  // Show the product catalog
  render(): void {
    const products = this.viewModel.getProducts();
    console.log("Product Catalog:");
    products.forEach((product) =>
      console.log(
        `ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`
      )
    );
  }
}
