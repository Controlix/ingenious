import {Component, OnInit} from '@angular/core';
import {Expense} from '../domain/expense';
import {CarService} from '../services/carservice';
import {BudgetService} from '../domain/budget-service';
import {PieChartService} from '../pie-chart/pie-chart.service';
import {PieChartSliceInfo} from '../pie-chart/pie-chart-slice-info';
import {IncomeExpenseBase} from '../domain/income-expense-base';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [CarService]
})
export class OverviewComponent implements OnInit {
  incomes: any;
  expenses: any;

  constructor(private budgetService: BudgetService, private pieChartService: PieChartService) {}

  ngOnInit() {
    this.budgetService.getMonthlyIncomes('bob')
      .then(res => this.incomes = this.toPieChartViewData(res));
    this.budgetService.getMonthlyExpenses('bob')
      .then(res => this.expenses = this.toPieChartViewData(res));
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
}

