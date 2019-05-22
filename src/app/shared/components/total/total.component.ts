import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.sass']
})
export class TotalComponent implements OnInit {
  sumTotal = '0.00';


  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.sumTotal = this.transactionService.getSumTotal().toString();
    this.transactionService.onSumTotalChange.subscribe((sum: number) => { this.sumTotal = sum.toString(); });
  }

}
