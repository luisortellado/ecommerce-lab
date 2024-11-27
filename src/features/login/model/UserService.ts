export class UserService {
  private users = new Map<string, string>([
    ["lucho", "password1"],
    ["lucho2", "password2"],
  ]);

  authenticate(username: string, password: string): boolean {
    const storedPassword = this.users.get(username);
    console.log(storedPassword, "stlrafdsf");
    return storedPassword === password;
  }
}
