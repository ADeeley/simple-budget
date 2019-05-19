import { Transaction } from './transaction.model';

export interface TransactionGroup {
  [s: string]: Transaction[];
}
