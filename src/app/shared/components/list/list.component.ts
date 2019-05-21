import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { TransactionGroup } from '../../models/transactionGroup.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  transactionGroups: TransactionGroup;
  groupsAvailable: string[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionGroups = this.transactionService.Transactions;
    this.groupsAvailable = this.transactionService.groups;
  }

  editTransaction(group: string, index: string) {
    console.log(`Group: ${group}, Index: ${index}`);
    this.transactionService.editTransaction(group, index);
  }
}
