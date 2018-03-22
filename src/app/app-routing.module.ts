import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'edit-profile', component: ProfileComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '**', component: LoginComponent }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
