import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Account } from '../../../models/account.model';

@Component({
  selector: 'app-account-table',
  imports: [AsyncPipe],
  templateUrl: './account-table.html',
  styleUrl: './account-table.scss',
})
export class AccountTable implements OnInit {
  accounts$!: Observable<Account>;

  private readonly accountService = inject(AccountService);

  ngOnInit(): void {
    this.accounts$ = this.accountService.getAccounts();
  }
}
