import {Injectable} from '@angular/core';
import {Income} from './income';
import {HttpClient} from '@angular/common/http';
import {Expense} from './expense';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BudgetService {

  constructor(private http: HttpClient) {
  }

  getMonthlyIncomes(user: string): Observable<any> {
    return this.http.get('assets/data/' + user + '/' + 'incomes.json');
  }

  getMonthlyExpenses(user: string): Observable<any> {
    return this.http.get('assets/data/' + user + '/' + 'expenses.json');
  }

  getTotalsavings(user: string): Observable<any> {
    return this.http.get('assets/data/' + user + '/' + 'savings.json');
  }
}
