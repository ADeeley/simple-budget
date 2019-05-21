import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrls: ['./inout.component.sass']
})
export class InoutComponent implements OnInit {
  sumTotal = '0.00';


  constructor(private transactionService: TransactionService) { }

  zeroFill(num: number): string {
    return num.toString() + '.00';
  }

  ngOnInit() {
    this.sumTotal = this.transactionService.getSumTotal().toFixed(2);
    this.transactionService.onSumTotalChange.subscribe((sum: number) => { this.sumTotal = sum.toFixed(2); });
  }

}
