import { Transaction } from './transaction.model';

export interface TransactionDetail {
  index: number;
  group: string;
  transaction: Transaction;
}
