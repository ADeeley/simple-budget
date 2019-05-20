import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../shared/services/transaction.service';
import { TransactionGroup } from '../shared/models/transactionGroup.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  editMode = false;
  transactionGroups: TransactionGroup;
  groupsAvailable: string[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionGroups = this.transactionService.Transactions;
    this.groupsAvailable = this.transactionService.groups;
  }

  editTransaction() {
    this.editMode = true;
    console.log('test');
  }
}
