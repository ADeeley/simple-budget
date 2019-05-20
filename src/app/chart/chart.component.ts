import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../shared/services/transaction.service';
import { GroupTotals } from '../shared/models/groupTotals.model';

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
  }

  processTotals(totals: GroupTotals) {
    const groups = this.transactionService.groups;
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    groups.forEach(group => {
      this.doughnutChartLabels.push(group);
      this.doughnutChartData.push(totals[group]);
    });
    console.log(this.doughnutChartData);
    console.log(this.doughnutChartLabels);
  }

  subscribeToTransactions() {
    this.transactionService.onGroupTotalChange.subscribe((totals) => {
      this.processTotals(totals);
    });
  }


  ngOnInit() {
    console.log('chart init');
    this.processTotals(this.transactionService.getGroupTotals());
    this.subscribeToTransactions();
  }
}
