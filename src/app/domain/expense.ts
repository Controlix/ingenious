import {IncomeExpenseBase, IncomeExpenseType} from './income-expense-base';

export class Expense extends IncomeExpenseBase {

  readonly type: IncomeExpenseType = IncomeExpenseType.EXPENSE;
}

export class Expenses {

  items: Expense[];

  constructor(items: Expense[]) {
    this.items = items;
  }

  get total(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.amount;
    }
    return total;
  }


}
