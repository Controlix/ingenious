import { Injectable } from '@angular/core';
import { PieChartSliceInfo } from './pie-chart-slice-info';
import * as randomColor from 'randomColor';

@Injectable()
export class PieChartService {

  constructor() { }

  getPieChartViewData(pieChartSlices: PieChartSliceInfo[]): any {
    const labels = [];
    const data = [];
    const bgColors = randomColor({count: pieChartSlices.length});
    const hoverBgColors = randomColor({count: pieChartSlices.length});

    for (const slice of pieChartSlices) {
      labels.concat(slice.name);
      data.concat(slice.value);
    }

    return {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: bgColors,
          hoverBackgroundColor: hoverBgColors
        }
      ]
    };
  }

  getPieChartSliceInfo(): PieChartSliceInfo[] {
    return [
      new PieChartSliceInfo('Savings', 6000),
      new PieChartSliceInfo('Food', 750),
      new PieChartSliceInfo('Rent', 800),
      new PieChartSliceInfo('Car', 400),
    ];
  }
}
