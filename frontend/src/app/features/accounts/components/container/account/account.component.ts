import { Component, inject } from '@angular/core';
import { AccountHeader } from "../../presentation/account-header/account-header";
import { AccountTable } from "../../presentation/account-table/account-table";
import { AccountService } from '../../../services/account.service';
import { Account } from '../../../models/account.model';

@Component({
  selector: 'app-account',
  imports: [AccountHeader, AccountTable],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  accountService = inject(AccountService);

  createAccount(account: Account): void {
    console.log(JSON.stringify(account));

    this.accountService.createAccount(account).subscribe();
  }
}
