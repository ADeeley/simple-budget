import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from './shared/services/transaction.service';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ChartComponent } from './chart/chart.component';
import { InoutComponent } from './inout/inout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTransactionComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    ErrorPageComponent,
    ChartComponent,
    InoutComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
