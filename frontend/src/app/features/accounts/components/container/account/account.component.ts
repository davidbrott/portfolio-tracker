import { Component, inject, OnInit, signal } from '@angular/core';
import { AccountHeader } from '../../presentation/account-header/account-header';
import { AccountTable } from '../../presentation/account-table/account-table';
import { AccountService } from '../../../services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Account } from '../../../../../shared/models/account.model';

@Component({
  selector: 'app-account',
  imports: [AccountHeader, AccountTable],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  accounts = signal<Account[]>([]);

  private readonly accountService = inject(AccountService);

  ngOnInit(): void {
    this.loadAccounts();
  }

  createAccount(account: Account): void {
    this.accountService.createAccount(account).subscribe({
      next: (account: Account) => this.accounts.update((accounts) => [...accounts, account]),
      error: (error: HttpErrorResponse) =>
        console.error('An error occurred while creating a new account', error)
    });
  }

  private loadAccounts(): void {
    this.accountService.getAccounts().subscribe({
      next: (accounts: Account[]) => this.accounts.set(accounts),
      error: (error: HttpErrorResponse) =>
        console.error('An error occurred while requesting the accounts', error)
    });
  }
}
