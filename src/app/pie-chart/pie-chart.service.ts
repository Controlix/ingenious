import {Injectable} from '@angular/core';
import {PieChartSliceInfo} from './pie-chart-slice-info';
import * as randomColor from 'randomColor';

@Injectable()
export class PieChartService {

  constructor() { }

  getPieChartViewData(pieChartSlices: PieChartSliceInfo[]): any {
    let labels = [];
    let data = [];
    const bgColors = randomColor({count: pieChartSlices.length});
    const hoverBgColors = randomColor({count: pieChartSlices.length});

    for (const slice of pieChartSlices) {
      labels = labels.concat(slice.name);
      data = data.concat(slice.value);
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
}
