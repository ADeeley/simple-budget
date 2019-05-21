import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionGroup } from '../models/transactionGroup.model';
import { Subject } from 'rxjs';
import { GroupTotals } from '../models/groupTotals.model';
import { TransactionDetail } from '../models/transactionDetail.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  public onGroupTotalChange = new Subject<GroupTotals>();
  public onSumTotalChange = new Subject<number>();
  public onEditTransaction = new Subject<TransactionDetail>();
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

  getGroupTotals(): GroupTotals {
    const groups = Object.keys(this.transactionGroups);
    const totals: GroupTotals = {};

    groups.forEach((group) => {
      totals[group] = this.transactionGroups[group].reduce((total, current) => total + +current.amount, 0);
    });
    console.log(totals);

    return totals;
  }

  getSumTotal(): number {
    const groups = Object.keys(this.transactionGroups);
    let sumTotal = 0;

    groups.forEach((group) => {
      sumTotal += this.transactionGroups[group].reduce((total, current) => total + +current.amount, 0);
    }, 0);
    console.log(`Sum Total: ${sumTotal}`);

    return sumTotal;
  }

  addTransaction(group: string, newTransaction: Transaction): void {
    this.transactionGroups[group].push(newTransaction);
    this.onGroupTotalChange.next(this.getGroupTotals());
    this.onSumTotalChange.next(this.getSumTotal());
    console.log(this.transactionGroups);
  }

  startEditTransaction(group: string, index: number): void {
    const transaction = this.transactionGroups[group][index];
    this.onEditTransaction.next({ index, group, transaction });
  }

  updateTransaction(group: string, index: number): void {

  }

  removeTransaction(group: string, index: number): void {
    console.log(`Deleting transaction: ${index} in ${group}`);
    this.transactionGroups[group].splice(index, 1);
  }

}
