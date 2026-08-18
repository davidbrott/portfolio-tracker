import { Component, ElementRef, output, signal, viewChild } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Modal } from 'bootstrap';
import { Account } from '../../../models/account.model';
import { AccountType } from '../../../enum/account-type.enum';

interface AccountData {
  name: string;
  bankName: string;
  initialBalance: number;
}

@Component({
  selector: 'app-account-modal',
  imports: [FormField],
  templateUrl: './account-modal.html',
  styleUrl: './account-modal.scss'
})
export class AccountModal {
  modal = viewChild<ElementRef>('modal');
  accountModel = signal<AccountData>({
    name: '',
    bankName: '',
    initialBalance: 0
  });

  accountCreated = output<Account>();

  accountForm = form(this.accountModel);

  private bootstrapModal!: Modal;

  open(): void {
    this.bootstrapModal = new Modal(this.modal()!.nativeElement);
    this.bootstrapModal.show();
  }

  createAccount(): void {
    const account: Account = {
      ...this.accountModel(),
      type: AccountType.CASH
    };

    this.accountCreated.emit(account);
    this.bootstrapModal.hide();
  }
}
