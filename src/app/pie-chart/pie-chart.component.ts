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

  constructor(private pieChartService: PieChartService) {}

  ngOnInit() {
    this.pieChartData = this.pieChartService.getPieChartViewData(this.pieChartSlices);
  }

}
