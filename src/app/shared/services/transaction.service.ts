import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionGroup } from '../models/transactionGroup.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionGroups: TransactionGroup = {
    food: [],
    entertainment: [],
    bills: [],
    misc: [],
  };

  constructor() { }

  get Transactions(): TransactionGroup {
    return this.transactionGroups;
  }

  get groups(): string[] {
    return Object.keys(this.transactionGroups);
  }

  addTransaction(group: string, newTransaction: Transaction): void {
    this.transactionGroups[group].push(newTransaction);
    console.log(this.transactionGroups);
  }

  removeTransaction(id: number): void {

  }

}
