import {Component, OnInit} from '@angular/core';
import { Expense} from '../domain/expense';
import { CarService} from '../services/carservice';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [CarService]
})
export class OverviewComponent implements OnInit{
  incomes: any;
  expenses: any;
  constructor(private carService: CarService) {
    this.expenses = {
      labels: ['Food','Rent','Leisure'],
      datasets: [
        {
          data: [800, 750, 300],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    this.incomes = {
      labels: ['Salary','Other'],
      datasets: [
        {
          data: [3200, 1550],
          backgroundColor: [
            "#FF6384",
            "#36A2EB"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB"
          ]
        }]
    };
  }

  ngOnInit() {
  }
  handleExpenseChange(event, index) {
    this.expenses.datasets[0].data[index] = event.value;
    this.expenses = Object.assign({}, this.expenses, );
  }
  handleIncomeChange(event, index) {
    this.incomes.datasets[0].data[index] = event.value;
    this.incomes = Object.assign({}, this.incomes, );
  }
}

