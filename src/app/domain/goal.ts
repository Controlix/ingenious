import { GoalCategory } from './goal-category';

export class Goal {

  alias: string;
  amount: number;
  target: Date;
  category: GoalCategory;

  constructor(alias?: string,
              amount?: number,
              target?: Date,
              category?: GoalCategory) {
    this.alias = alias || '';
    this.amount = amount === undefined ? 1 : amount;
    this.target = target === undefined ? this.oneYearFromNow() : target;
    this.category = category || null;
  }

  private oneYearFromNow(): Date {
    const now = new Date();
    return new Date(new Date().setFullYear(now.getFullYear() + 1));
  }
}
