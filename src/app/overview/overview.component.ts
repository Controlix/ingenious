import {Component, OnInit} from '@angular/core';
import {Expense} from '../domain/expense';
import {CarService} from '../services/carservice';
import {BudgetService} from '../domain/budget-service';
import {PieChartService} from '../pie-chart/pie-chart.service';
import {PieChartSliceInfo} from '../pie-chart/pie-chart-slice-info';
import {IncomeExpenseBase} from '../domain/income-expense-base';
import * as moment from 'moment';
import {SimulationService} from '../services/simulation.service';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [CarService]
})
export class OverviewComponent implements OnInit {
  incomes: any;
  expenses: any;
  totalSavings: any;
  monthlySaving: number;
  monthlyAmountToGoal: number;

  constructor(
    private budgetService: BudgetService,
    private simulationService: SimulationService,
    private pieChartService: PieChartService
  ) {}

  ngOnInit() {
    this.budgetService.getMonthlyIncomes('bob')
      .subscribe(res => this.incomes = this.toPieChartViewData(res.data));
    this.budgetService.getMonthlyExpenses('bob')
      .subscribe(res => this.expenses = this.toPieChartViewData(res.data));
    this.budgetService.getTotalsavings('bob')
      .subscribe(res => this.totalSavings = this.toPieChartViewData(res.data));
    this.simulationService.goalDefined$.subscribe(goal => console.log(goal));
  }

  private toPieChartViewData(items: IncomeExpenseBase[]): any {
    let slices: PieChartSliceInfo[] = [];
    for (const item of items) {
      slices = slices.concat(new PieChartSliceInfo(item.name, item.amount));
    }

    return this.pieChartService.getPieChartViewData(slices);
  }

  handleExpenseChange(event, index) {
    this.expenses.datasets[0].data[index] = event.value;
    this.expenses = Object.assign({}, this.expenses);
  }

  handleIncomeChange(event, index) {
    this.incomes.datasets[0].data[index] = event.value;
    this.incomes = Object.assign({}, this.incomes);
  }
  handleCapitalChange(event, index) {
    this.totalSavings.datasets[0].data[index] = event.value;
    this.totalSavings = Object.assign({}, this.incomes);
  }
  simulate() {
    let goalAmount = 50000;
    let targetDate = moment('30/04/2020', 'DD/MM/YYYY');
    let nbOfMonths = targetDate.diff(new Date(), 'months');
    let totalIncome = 0;
    let totalExpenses = 0;
    let savingsSum = 0;
    totalExpenses = this.expenses.datasets[0].data.reduce((previous, current)=> previous + current);
    totalIncome = this.incomes.datasets[0].data.reduce((previous, current)=> previous + current);
    savingsSum = this.totalSavings.datasets[0].data.reduce((previous, current)=> previous + current);
    let totalPotentialSaving = ((totalIncome - totalExpenses) * nbOfMonths) + savingsSum;
    let possibleMonthsNbToGoal = (goalAmount - totalPotentialSaving)/(totalIncome - totalExpenses)
    if(possibleMonthsNbToGoal < nbOfMonths)
    {
      console.log("To achieve your goal you need ", possibleMonthsNbToGoal + " months")
    }
    if(possibleMonthsNbToGoal)
    {
      console.log("Your goal is achievable, don\'t forget to take insurance to be safe ");
    }
    console.log(totalPotentialSaving);
    console.log(possibleMonthsNbToGoal);
  }
}

