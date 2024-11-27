export interface LoginView {
  showLoginSuccess(): void;
  showLoginError(): void;
}

export class ConsoleLoginView implements LoginView {
  showLoginSuccess(): void {
    console.log("Login successful!");
  }

  showLoginError(): void {
    console.log("Login failed. Please check your credentials.");
  }
}
