import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];

  constructor() { }

  get Transactions(): Transaction[] {
    return this.transactions;
  }


  addTransaction(newTransaction: Transaction): void {
    this.transactions.push(newTransaction);
    console.log(this.transactions);
  }

  removeTransaction(id: number): void {

  }

}
