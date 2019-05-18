import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[];

  constructor() { }

  get Transactions(): Transaction[] {
    return this.transactions;
  }

/*   total(): number {
  }

  addTransaction(id: number): void {

  }

  removeTransaction(id: number): void {

  } */

}
