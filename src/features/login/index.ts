import { UserService } from "./model/UserService";
import { ConsoleLoginView } from "./view/LoginView";
import { LoginPresenter } from "./presenter/LoginPresenter";

// Create dependencies
const userService = new UserService();
const loginView = new ConsoleLoginView();
const loginPresenter = new LoginPresenter(userService, loginView);

// Simulate login attempts
loginPresenter.login("lucho", "password1"); // Correct
loginPresenter.login("lucho", "wrongpassword"); // Incorrect
loginPresenter.login("unknown", "password"); // User unknown
