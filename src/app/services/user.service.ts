import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { User } from '../domain/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() {}

  getCurrentUser(): Observable<User> {
    return Observable.of(new User('jane.doe@example.com', 'Jane Doe', 'janedoe'));
  }
}
