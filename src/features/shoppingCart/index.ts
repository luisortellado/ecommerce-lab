import { CartItem } from "./models/CartItem";
import { ShoppingCartService } from "./services/ShoppingCardService";

const cart = new ShoppingCartService();
cart.addItem(new CartItem("Product A", 10, 2));
cart.addItem(new CartItem("Product B", 20, 1));
cart.calculateTotal();
cart.checkout();
