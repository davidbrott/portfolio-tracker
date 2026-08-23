import { Component, inject, input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AccountTypeLabelPipe } from '../../../pipes/account-type-label.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { Account } from '../../../../../shared/models/account.model';

@Component({
  selector: 'app-account-table',
  imports: [CurrencyPipe, AccountTypeLabelPipe, TranslatePipe],
  templateUrl: './account-table.html',
  styleUrl: './account-table.scss'
})
export class AccountTable {
  accounts = input<Account[]>();
}
