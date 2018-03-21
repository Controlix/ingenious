import {Component, OnInit} from '@angular/core';
import { Car } from '../domain/car';
import { CarService} from '../services/carservice';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  providers: [CarService]
})
export class OverviewComponent implements OnInit{
  incomes: Object;
  expenses: Object;
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

export class PrimeCar implements Car {

  constructor(public vin?, public year?, public brand?, public color?) {}
}
