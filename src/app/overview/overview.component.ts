import {Component, OnInit} from '@angular/core';
import {BudgetService} from '../domain/budget-service';
import {PieChartService} from '../pie-chart/pie-chart.service';
import {PieChartSliceInfo} from '../pie-chart/pie-chart-slice-info';
import {IncomeExpenseBase} from '../domain/income-expense-base';
import {SimulationService} from '../simulation/simulation.service';
import {Goal} from '../domain/goal';
import {Incomes} from '../domain/income';
import {Expenses} from '../domain/expense';
import {SimulationResult} from '../simulation/simulation';
import {UserService} from '../services/user.service';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: []
})
export class OverviewComponent implements OnInit {
  incomesPieChart: any;
  expensesPieChart: any;
  totalSavingsPieChart: any;

  monthlySaving: number;
  monthlyAmountToGoal: number;
  goal: Goal;
  responseTitle: string;
  responseContent: string;
  simulations: SimulationResult[];

  incomes: Incomes;
  expenses: Expenses;
  savings: number;

  constructor(private budgetService: BudgetService,
              private simulationResponseService: SimulationService,
              private userService: UserService,
              private pieChartService: PieChartService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(user => {
      const userName = user.name;
        this.budgetService.getMonthlyIncomes(userName)
          .subscribe(res => {
            this.incomes = new Incomes(res.data);
            this.incomesPieChart = this.toPieChartViewData(this.incomes.items);
          });
        this.budgetService.getMonthlyExpenses(userName)
          .subscribe(res => {
            this.expenses = new Expenses(res.data);
            this.expensesPieChart = this.toPieChartViewData(this.expenses.items);
          });
        this.budgetService.getTotalsavings(userName)
          .subscribe(res => {
            this.savings = res.data === undefined ? 0 : res.data[0].amount;
            this.totalSavingsPieChart = this.toPieChartViewData(res.data === undefined ? {} : res.data);
          });
        this.simulationResponseService.goalDefined$.subscribe(goal => {
          this.goal = goal;
          this.simulate();
        });
      }
    );
  }

  private toPieChartViewData(items: IncomeExpenseBase[]): any {
    let slices: PieChartSliceInfo[] = [];
    for (const item of items) {
      slices = slices.concat(new PieChartSliceInfo(item.name, item.amount));
    }

    return this.pieChartService.getPieChartViewData(slices);
  }

  handleExpenseChange(event, index) {
    this.expensesPieChart.datasets[0].data[index] = event.value;
    this.expensesPieChart = Object.assign({}, this.expensesPieChart);
  }

  handleIncomeChange(event, index) {
    this.incomesPieChart.datasets[0].data[index] = event.value;
    this.incomesPieChart = Object.assign({}, this.incomesPieChart);
  }

  handleCapitalChange(event, index) {
    this.totalSavingsPieChart.datasets[0].data[index] = event.value;
    this.totalSavingsPieChart = Object.assign({}, this.incomesPieChart);
  }

  simulate() {
    this.simulations = this.simulationResponseService.simulate(this.goal, this.incomes, this.expenses, this.savings || 0);
  }
}

