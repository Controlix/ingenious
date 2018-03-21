import { Injectable } from '@angular/core';
import { PieChartSliceInfo } from './pie-chart-slice-info';
import * as randomColor from 'randomColor';

@Injectable()
export class PieChartService {

  constructor() { }

  getPieChartViewData(pieChartSlices: PieChartSliceInfo[]): any {
    const labels = [];
    const data = [];
    const bgColors = [];
    const hoverBgColors = [];
    for (const slice of pieChartSlices) {
      labels.concat(slice.name);
      data.concat(slice.value);
      bgColors.concat(randomColor());
      hoverBgColors.concat(randomColor());
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

  private pieChartViewData(slice: PieChartSliceInfo) : any {
    return null;
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
