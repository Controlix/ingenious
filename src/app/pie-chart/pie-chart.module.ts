import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartService } from './pie-chart.service';
import { PieChartComponent } from './pie-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PieChartComponent],
  providers: [PieChartService]
})
export class PieChartModule {}
