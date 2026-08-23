import { Component, output, viewChild } from '@angular/core';
import { AccountModal } from '../account-modal/account-modal';
import { TranslatePipe } from '@ngx-translate/core';
import { Account } from '../../../../../shared/models/account.model';

@Component({
  selector: 'app-account-header',
  imports: [AccountModal, TranslatePipe],
  templateUrl: './account-header.html',
  styleUrl: './account-header.scss'
})
export class AccountHeader {
  accountModal = viewChild<AccountModal>('modal');
  accountCreated = output<Account>();

  openAccountModal(): void {
    this.accountModal()!.open();
  }
}
