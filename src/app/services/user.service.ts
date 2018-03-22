import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  private user = 'bob';

  constructor(private http: HttpClient) {
  }

  setCurrentUser(user: string) {
    this.user = user;
  }

  getCurrentUser(): Observable<any> {
    return this.http.get('assets/data/' + this.user + '/' + 'profile.json');
  }

}
