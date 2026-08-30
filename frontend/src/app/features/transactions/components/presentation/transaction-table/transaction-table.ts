import { Component, input } from '@angular/core';
import { Transaction } from '../../../models/transaction.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { AccountNamePipe } from '../../../pipes/account-name.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { Account } from '../../../../../shared/models/account.model';
import { Settings } from '../../../../../shared/models/settings.model';

@Component({
  selector: 'app-transaction-table',
  imports: [DatePipe, CurrencyPipe, AccountNamePipe, TranslatePipe],
  templateUrl: './transaction-table.html',
  styleUrl: './transaction-table.scss'
})
export class TransactionTable {
  transactions = input<Transaction[]>([]);
  accounts = input<Account[]>([]);
  settings = input<Settings | null>(null);
}
