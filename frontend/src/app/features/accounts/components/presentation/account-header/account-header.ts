import { Component, ElementRef, output, viewChild } from '@angular/core';
import { AccountModal } from '../account-modal/account-modal';
import { Account } from '../../../models/account.model';

@Component({
  selector: 'app-account-header',
  imports: [AccountModal],
  templateUrl: './account-header.html',
  styleUrl: './account-header.scss'
})
export class AccountHeader {
  accountModal = viewChild<AccountModal>('modal');

  // accountCreated = output<Account>;

  accountCreated = output<Account>();

  openAccountModal(): void {
    this.accountModal()!.open();
  }
}
