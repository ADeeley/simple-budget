import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTransactionComponent } from './shared/components/add-transaction/add-transaction.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from './shared/services/transaction.service';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './shared/components/list/list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ChartComponent } from './shared/components/chart/chart.component';
import { TotalComponent } from './shared/components/inout/inout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTransactionComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    ErrorPageComponent,
    ChartComponent,
    TotalComponent,
    DashboardComponent,
    AboutComponent,
    TransactionsComponent,
    FooterComponent
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
