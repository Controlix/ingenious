import {Injectable} from '@angular/core';
import {Goal} from '../domain/goal';
import {Subject} from 'rxjs/Subject';
import {SimulationResult} from './simulation';
import * as moment from 'moment';
import {Income} from '../domain/income';
import {Expense} from '../domain/expense';

@Injectable()
export class SimulationService {
  private goalDefined: Subject<Goal> = new Subject<Goal>();

  goalDefined$ = this.goalDefined.asObservable();

  constructor() {
  }

  simulateGoal(goal: Goal) {
    this.goalDefined.next(goal);
  }

  simulate(goal: Goal, incomes: number[], expenses: number[], savings: number[]): SimulationResult[] {
    const targetDate = moment(goal.target, 'DD/MM/YYYY');
    const nbOfMonths = targetDate.diff(new Date(), 'months');

    let totalIncome = 0;
    let totalExpenses = 0;
    let savingsSum = 0;

    totalExpenses = expenses.reduce((previous, current) => previous + current);
    totalIncome = incomes.reduce((previous, current) => previous + current);
    savingsSum = savings.reduce((previous, current) => previous + current);

    const totalPotentialSaving = ((totalIncome - totalExpenses) * nbOfMonths) + savingsSum;
    const possibleMonthsNbToGoal = (goal.amount - totalPotentialSaving) / (totalIncome - totalExpenses);

    let res: SimulationResult[] = [];

  // Sure no problem
    if (possibleMonthsNbToGoal < nbOfMonths || possibleMonthsNbToGoal < 0) {
      res = res.concat(new SimulationResult('Congratulation, your goal is possible', 'Don\'t forget to take insurance to be covered in case of unexpected issues. ING has a set of products that can answer to your different needs and situations. \n If you still have more saving account you don\'t need you can open an investment account. With ING investment pays from 3% to 10%  depending gon the risk profile'));
    }

    // Not in the next 5 years
    if (possibleMonthsNbToGoal > nbOfMonths && possibleMonthsNbToGoal - nbOfMonths > 60) {
      res = res.concat(new SimulationResult('Sorry your incomes and savings cannot allow you to achieve this goal or to get a loan', 'Sorry your incomes and savings cannot allow you to achieve this goal or to get a loan'));
    }

    // You have some work
    if (possibleMonthsNbToGoal > nbOfMonths && possibleMonthsNbToGoal - nbOfMonths <= 60) {
      const nbMonths = Number.parseInt('' + (possibleMonthsNbToGoal - nbOfMonths));
      res = res.concat(new SimulationResult('Your actual situation can\'t allow to to achieve your goal in the date wanted, you can apply for a loan from ING or another bank', 'Your actual situation can\'t allow to to achieve your goal in the date wanted, you can apply for a loan from ING or another bank'));
      res = res.concat(new SimulationResult('The actual configuration of the goal and your financial situation doesn\'t allow you to achieve your goal in the date wanted please extend the date to make it possible',
        'The actual configuration of the goal and your financial situation doesn\'t allow you to achieve your goal in the date wanted, you can postpone the date by ' + nbMonths +
        "month(s), or take a loan.\\nING can provide you very competitive rates compared to the other bank in addition to the quality of its services and advices"));
    }

    return res;
  }
}

