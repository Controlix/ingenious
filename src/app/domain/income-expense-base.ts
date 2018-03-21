import {Income} from './income';

export abstract class IncomeExpenseBase {

  abstract readonly type: IncomeExpenseType;

  name: string;
  amount: number;
  category: string[];

  constructor(name?: string,
              amount?: number,
              category?: string[]) {
    this.name = name || '';
    this.amount = amount  === undefined ? 1 : amount;
    this.category = category || [];
  }
}

export enum IncomeExpenseType {
  INCOME,
  EXPENSE
}
