import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {AppComponent} from './app.component';
import {SliderModule} from 'primeng/slider';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { GoalCreateDialogComponent } from './goal-create-dialog/goal-create-dialog.component';
import {ChartModule} from 'primeng/chart';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {OverviewComponent} from './overview/overview.component';
import {ProfileModule} from './profile/profile.module';
import {NavbarComponent} from './shared/layout/navbar/navbar.component';
import {UserService} from './services/user.service';
import {MenubarModule} from 'primeng/menubar';
import {PieChartService} from './pie-chart/pie-chart.service';
import {BudgetService} from './domain/budget-service';
import {GoalService} from './services/goal.service';
import {CalendarModule, DropdownModule} from 'primeng/primeng';
import {SimulationService} from './services/simulation.service';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    GoalCreateDialogComponent,
    OverviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    SliderModule,
    HttpClientModule,
    InputTextModule,
    ChartModule,
    DialogModule,
    ButtonModule,
    ProfileModule,
    MenubarModule,
    ProfileModule,
    CalendarModule,
    DropdownModule,
    AppRoutingModule
  ],
  providers: [UserService, PieChartService, BudgetService, GoalService, SimulationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
