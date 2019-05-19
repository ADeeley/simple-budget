import { Component, OnInit } from '@angular/core';
import { Transaction } from '../shared/models/transaction.model';
import { TransactionService } from '../shared/services/transaction.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  transactions: Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactions = this.transactionService.Transactions;
  }

}
