import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../shared/services/transaction.service';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrls: ['./inout.component.sass']
})
export class InoutComponent implements OnInit {
  sumTotal = 0;


  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.sumTotal = this.transactionService.getSumTotal();
    this.transactionService.onSumTotalChange.subscribe((sum: number) => { this.sumTotal = sum; });

  }

}
