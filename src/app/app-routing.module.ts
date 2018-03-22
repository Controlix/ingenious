import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'edit-profile', component: ProfileComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
