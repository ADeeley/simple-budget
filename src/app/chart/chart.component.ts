import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../shared/services/transaction.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit {
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartType = 'doughnut';

  constructor(private transactionService: TransactionService) {
    const groups = this.transactionService.groups;
    const totals = this.transactionService.getGroupTotals();
    groups.forEach(group => {
      this.doughnutChartLabels.push(group);
      this.doughnutChartData.push(totals[group]);
    });
  }

  ngOnInit() { }
}
