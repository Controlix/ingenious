import {IncomeExpenseBase, IncomeExpenseType} from './income-expense-base';

export class Expense extends IncomeExpenseBase {

  readonly type: IncomeExpenseType = IncomeExpenseType.EXPENSE;
}
