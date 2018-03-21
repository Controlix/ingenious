import { GoalCategory } from './goal-category';

export class Goal {

  alias: string;
  amount: number;
  category: GoalCategory;

  constructor(alias?: string,
              amount?: number,
              category?: GoalCategory) {
    this.alias = alias || '';
    this.amount = amount === undefined ? 1 : amount;
    this.category = category;
  }
}
