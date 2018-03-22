import {Component, OnInit} from '@angular/core';
import {Expense} from '../domain/expense';
import {BudgetService} from '../domain/budget-service';
import {PieChartService} from '../pie-chart/pie-chart.service';
import {PieChartSliceInfo} from '../pie-chart/pie-chart-slice-info';
import {IncomeExpenseBase} from '../domain/income-expense-base';
import * as moment from 'moment';
import {SimulationResponseService} from '../domain/simulation-response.service';
import {Goal} from "../domain/goal";

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: []
})
export class OverviewComponent implements OnInit {
  incomes: any;
  expenses: any;
  totalSavings: any;
  monthlySaving: number;
  monthlyAmountToGoal: number;
  goal : Goal;
  responseTitle : string;
  responseContent : string;

  constructor(
    private budgetService: BudgetService,
    private simulationResponseService: SimulationResponseService,
    private pieChartService: PieChartService
  ) {}

  ngOnInit() {
    this.budgetService.getMonthlyIncomes('bob')
      .subscribe(res => this.incomes = this.toPieChartViewData(res.data));
    this.budgetService.getMonthlyExpenses('bob')
      .subscribe(res => this.expenses = this.toPieChartViewData(res.data));
    this.budgetService.getTotalsavings('bob')
      .subscribe(res => this.totalSavings = this.toPieChartViewData(res.data));
    this.simulationResponseService.goalDefined$.subscribe(goal =>
    {
      this.goal = goal;
      this.simulate();
    });
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
    let targetDate = moment(this.goal.target, 'DD/MM/YYYY');
    let nbOfMonths = targetDate.diff(new Date(), 'months');
    let totalIncome = 0;
    let totalExpenses = 0;
    let savingsSum = 0;
    totalExpenses = this.expenses.datasets[0].data.reduce((previous, current)=> previous + current);
    totalIncome = this.incomes.datasets[0].data.reduce((previous, current)=> previous + current);
    savingsSum = this.totalSavings.datasets[0].data.reduce((previous, current)=> previous + current);
    let totalPotentialSaving = ((totalIncome - totalExpenses) * nbOfMonths) + savingsSum;
    let possibleMonthsNbToGoal = (this.goal.amount - totalPotentialSaving)/(totalIncome - totalExpenses)
    if(possibleMonthsNbToGoal < nbOfMonths || possibleMonthsNbToGoal < 0)
    {
      this.responseTitle = this.simulationResponseService.getSimulationResponse(0).positive.title;
      this.responseContent = this.simulationResponseService.getSimulationResponse(0).positive.content;
    }
    if(possibleMonthsNbToGoal > nbOfMonths && possibleMonthsNbToGoal - nbOfMonths > 60)
    {
      this.responseTitle = this.simulationResponseService.getSimulationResponse(0).negative.impossible.title;
      this.responseContent = this.simulationResponseService.getSimulationResponse(0).negative.impossible.content;
    }
    if(possibleMonthsNbToGoal > nbOfMonths && possibleMonthsNbToGoal - nbOfMonths <= 60)
    {
      this.responseTitle = this.simulationResponseService.getSimulationResponse(Number.parseInt(possibleMonthsNbToGoal - nbOfMonths)).negative.shortPeriod.extendPeriod.title;
      this.responseContent = this.simulationResponseService.getSimulationResponse(Number.parseInt(possibleMonthsNbToGoal - nbOfMonths)).negative.shortPeriod.extendPeriod.content;
    }
    console.log(totalPotentialSaving);
    console.log(possibleMonthsNbToGoal);
  }
}

