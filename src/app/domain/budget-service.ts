import {Injectable} from '@angular/core';
import {Income} from './income';
import {HttpClient} from '@angular/common/http';
import {Expense} from './expense';

@Injectable()
export class BudgetService {

  constructor(private http: HttpClient) {
  }

  getIncomes(user: string): Promise<Income[]> {
    return this.http.get<any>('assets/data/' + user + '/' + 'incomes.json')
      .toPromise()
      .then(res => <Income[]> res.data)
      .then(data => data);
  }

  getExpenses(user: string): Promise<Expense[]> {
    return this.http.get<any>('assets/data/' + user + '/' + 'expenses.json')
      .toPromise()
      .then(res => <Expense[]> res.data)
      .then(data => data);
  }
}
