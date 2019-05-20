import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'add', component: AddTransactionComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'not-found', component: ErrorPageComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
