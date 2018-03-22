import {Component, OnInit} from '@angular/core';
import {BudgetService} from '../domain/budget-service';
import {PieChartService} from '../pie-chart/pie-chart.service';
import {PieChartSliceInfo} from '../pie-chart/pie-chart-slice-info';
import {IncomeExpenseBase} from '../domain/income-expense-base';
import {SimulationService} from '../simulation/simulation.service';
import {Goal} from '../domain/goal';
import {SimulationResults} from '../simulation/simulation';

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
  goal: Goal;
  responseTitle: string;
  responseContent: string;
  simulations: SimulationResults;

  constructor(private budgetService: BudgetService,
              private simulationResponseService: SimulationService,
              private pieChartService: PieChartService) {
  }

  ngOnInit() {
    this.budgetService.getMonthlyIncomes('bob')
      .subscribe(res => this.incomes = this.toPieChartViewData(res.data));
    this.budgetService.getMonthlyExpenses('bob')
      .subscribe(res => this.expenses = this.toPieChartViewData(res.data));
    this.budgetService.getTotalsavings('bob')
      .subscribe(res => this.totalSavings = this.toPieChartViewData(res.data));
    this.simulationResponseService.goalDefined$.subscribe(goal => {
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
    this.simulations = this.simulationResponseService.simulate(this.goal, this.incomes.datasets[0].data, this.expenses.datasets[0].data,
      this.totalSavings === undefined ? [] : this.totalSavings.datasets[0].data);

    console.log('simulations', this.simulations);
  }
}

