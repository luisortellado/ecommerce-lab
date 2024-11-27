import { UserService } from "../model/UserService";
import { LoginView } from "../view/LoginView";

export class LoginPresenter {
  constructor(private userService: UserService, private loginView: LoginView) {}

  login(username: string, password: string): void {
    const isAuthenticated = this.userService.authenticate(username, password);
    if (isAuthenticated) {
      this.loginView.showLoginSuccess();
    } else {
      this.loginView.showLoginError();
    }
  }
}
