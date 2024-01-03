import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './service/main-service.service';
import { NgModule } from '@angular/core';
import { RecentOrdersComponent } from './shared/recent-orders/recent-orders.component';
import { TopCardComponent } from './shared/top-card/top-card.component';
import { UserRegistrationsComponent } from './shared/user-registrations/user-registrations.component';
import { AreaFillGraphComponent } from './shared/charts/area-fill-graph/area-fill-graph.component';
import { DonutChartComponent } from './shared/charts/donut-chart/donut-chart.component';
import { BarChartComponent } from './shared/charts/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCardComponent,
    RecentOrdersComponent,
    UserRegistrationsComponent,
    AreaFillGraphComponent,
    DonutChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
