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

  getGroupTotals() {
    const groups = Object.keys(this.transactionGroups);
    const totals: { [s: string]: number } = {};
    groups.forEach((group) => {
      totals[group] = this.transactionGroups[group].reduce((total, current) => total + +current.amount, 0);
    });
    console.log(totals);
    return totals;
  }

  addTransaction(group: string, newTransaction: Transaction): void {
    this.transactionGroups[group].push(newTransaction);
    console.log(this.transactionGroups);
  }

  removeTransaction(id: number): void {

  }

}
