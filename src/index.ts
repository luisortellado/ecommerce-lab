import { runShoppingCart } from "./features/shoppingCart";
import { runLogin } from "./features/login";
import { runProductCatalog } from "./features/productCatalog";
import { runProductManagement } from "./features/productManagement";

function main() {
  console.log("Starting application...");

  // Run shopping cart feature
  runShoppingCart();
  console.log("\n"); // Separator between features

  // Run login feature
  runLogin();
  console.log("\n"); // Separator between features

  // Run product catalog feature
  runProductCatalog();
  console.log("\n"); // Separator between features

  // Run product management feature
  runProductManagement();
  console.log("\n"); // Separator between features
}

main();
