import { Component, inject, input, OnInit } from '@angular/core';
import { Account } from '../../../models/account.model';

@Component({
  selector: 'app-account-table',
  imports: [],
  templateUrl: './account-table.html',
  styleUrl: './account-table.scss',
})
export class AccountTable {
  accounts = input<Account[]>();
}
