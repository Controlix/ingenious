import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  private usersById: { [key: number]: string } = {1: 'bob', 2: 'cathy', 3: 'mike'};

  private user: string;

  constructor(private http: HttpClient) {
  }

  setCurrentUser(userId: number) {
    this.user = this.usersById[userId];
  }

  getCurrentUser(): Observable<any> {
    return this.http.get('assets/data/' + this.user + '/' + 'profile.json');
  }

}
