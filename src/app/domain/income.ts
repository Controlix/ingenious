import { IncomeExpenseBase, IncomeExpenseType } from './income-expense-base';

export class Income extends IncomeExpenseBase {

  readonly type: IncomeExpenseType = IncomeExpenseType.INCOME;
}
