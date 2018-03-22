export class User {

  email: string;
  name: string;
  username: string;
  age: number;
  dependentPersons: number;

  constructor(email?: string, name?: string, username?: string, age?: number, dependentPersons?: number) {
    this.email = email || '';
    this.name = name || '';
    this.username = username || '';
    this.dependentPersons = dependentPersons === undefined ? 0 : dependentPersons;
    this.age = age === undefined ? 1 : age;
  }
}
