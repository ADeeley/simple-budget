import { Component, OnInit, Input } from '@angular/core';
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
  @Input() editable = false;


  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionGroups = this.transactionService.Transactions;
    this.groupsAvailable = this.transactionService.groups;
  }

  editTransaction(group: string, index: number) {
    console.log(`Group: ${group}, Index: ${index}`);
    this.transactionService.startEditTransaction(group, index);
  }
}
