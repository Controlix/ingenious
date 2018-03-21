import {Component, Input, OnInit} from '@angular/core';
import { PieChartSliceInfo } from './pie-chart-slice-info';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() pieChartSlices: PieChartSliceInfo[];

  constructor() {}

  ngOnInit() {}

}
