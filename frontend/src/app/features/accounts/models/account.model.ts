import { AccountType } from "../enum/account-type.enum";

export interface Account {
  id?: number;
  name: string;
  initialBalance: number;
  currentBalance?: number;
  bankName: string;
  type: AccountType;
}