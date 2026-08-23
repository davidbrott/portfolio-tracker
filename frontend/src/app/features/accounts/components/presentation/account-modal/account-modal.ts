import { Component, ElementRef, output, signal, viewChild } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Modal } from 'bootstrap';
import { TranslatePipe } from '@ngx-translate/core';
import { AccountType } from '../../../../../shared/enums/account-type.enum';
import { Account } from '../../../../../shared/models/account.model';

interface AccountData {
  name: string;
  bankName: string;
  type: AccountType;
  initialBalance: number;
}

@Component({
  selector: 'app-account-modal',
  imports: [FormField, TranslatePipe],
  templateUrl: './account-modal.html',
  styleUrl: './account-modal.scss'
})
export class AccountModal {
  modal = viewChild<ElementRef>('modal');
  accountModel = signal<AccountData>({
    name: '',
    bankName: '',
    type: AccountType.CHECKING_ACCOUNT,
    initialBalance: 0
  });

  accountCreated = output<Account>();

  accountForm = form(this.accountModel);

  readonly accountType = AccountType;

  private bootstrapModal!: Modal;

  open(): void {
    this.bootstrapModal = new Modal(this.modal()!.nativeElement);
    this.bootstrapModal.show();
  }

  createAccount(): void {
    this.accountCreated.emit(this.accountModel());
    this.bootstrapModal.hide();
  }
}
