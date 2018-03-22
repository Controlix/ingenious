import {IncomeExpenseBase, IncomeExpenseType} from './income-expense-base';

export class Income extends IncomeExpenseBase {

  readonly type: IncomeExpenseType = IncomeExpenseType.INCOME;
}

export class Incomes {

  items: Income[];

  constructor(items: Income[]) {
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
