import { Component, Input, OnInit } from '@angular/core';
import { PieChartSliceInfo } from './pie-chart-slice-info';
import { PieChartService } from './pie-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() pieChartSlices: PieChartSliceInfo[];
  pieChartData: any = null;
  data: any;

  constructor(private pieChartService: PieChartService) {}

  ngOnInit() {
    this.data = {
      labels: ['A','B','C'],
      datasets: [
        {
          data: [300, 50, 100],
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
    this.pieChartData = {
      labels: ['A','B','C'],
      datasets: [
        {
          data: [300, 50, 100],
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
    };//this.pieChartService.getPieChartViewData(this.pieChartSlices);
  }

}
