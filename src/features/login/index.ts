import { UserService } from "./model/UserService";
import { ConsoleLoginView } from "./view/LoginView";
import { LoginPresenter } from "./presenter/LoginPresenter";

export function runLogin(): void {
  // Create dependencies
  const userService = new UserService();
  const loginView = new ConsoleLoginView();
  const loginPresenter = new LoginPresenter(userService, loginView);
  // Simulate login attempts
  console.log("Running login feature:");
  loginPresenter.login("user1", "password1");
  loginPresenter.login("user1", "wrongpassword");
}
