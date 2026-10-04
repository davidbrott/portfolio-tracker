import { TransactionType } from '../enum/transaction-type.enum';

export interface Transaction {
  id?: number;
  bookingDate: string;
  type: TransactionType;
  fromAccountId: number;
  toAccountId: number | null;
  assetId?: number;
  amount: number;
  quantity?: number;
  unitPrice?: number;
  fees?: number;
  taxes?: number;
  note: string;
}
