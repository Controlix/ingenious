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
import {ChartModule} from "primeng/chart";
import {PieChartComponent} from "./pie-chart/pie-chart.component";
import {OverviewComponent} from "./overview/overview.component";

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    OverviewComponent
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

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
