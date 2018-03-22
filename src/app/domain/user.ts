export class User {

  email: string;
  name: string;
  username: string;
  age: number;
  dependentPersons: number;

  constructor(email?: string, name?: string, username?: string, dependentPersons?: number) {
    this.email = email;
    this.name = name;
    this.username = username;
    this.dependentPersons = dependentPersons;
  }
}
