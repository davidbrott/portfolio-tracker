import { Component, ElementRef, output, signal, viewChild } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { TransactionType } from '../../../enum/transaction-type.enum';
import { Transaction } from '../../../models/transaction.model';
import { Modal } from 'bootstrap';
import { Asset } from '../../../../assets/models/asset.model';
import { TranslatePipe } from '@ngx-translate/core';
import { Account } from '../../../../../shared/models/account.model';

interface TransferData {
  bookingDate: string;
  type: TransactionType;
  fromAccountId: string;
  toAccountId: string;
  assetId: number;
  amount: number;
  quantity: number;
  unitPrice: number;
  fees: number;
  taxes: number;
  note: string;
}

@Component({
  selector: 'app-transaction-modal',
  imports: [FormField, TranslatePipe],
  templateUrl: './transaction-modal.html',
  styleUrl: './transaction-modal.scss'
})
export class TransactionModal {
  modal = viewChild<ElementRef>('modal');
  transferModel = signal<TransferData>({
    bookingDate: '',
    type: TransactionType.TRANSFER,
    fromAccountId: '',
    toAccountId: '',
    assetId: 0,
    amount: 0,
    quantity: 0,
    unitPrice: 0,
    fees: 0,
    taxes: 0,
    note: ''
  });

  transferForm = form(this.transferModel);
  selectedTransactionType = signal<TransactionType>(TransactionType.TRANSFER);
  assets = signal<Asset[]>([]);
  accounts = signal<Account[]>([]);

  transactionCreated = output<Transaction>();

  readonly transactionType = TransactionType;

  private bootstrapModal!: Modal;

  open(assets: Asset[], accounts: Account[]): void {
    this.assets.set(assets);
    this.accounts.set(accounts);
    this.bootstrapModal = new Modal(this.modal()!.nativeElement);
    this.bootstrapModal.show();
  }

  createTransfer(): void {
    const transaction: Transaction = {
      ...this.transferModel(),
      fromAccountId: parseInt(this.transferModel().fromAccountId, 10),
      toAccountId: parseInt(this.transferModel().toAccountId, 10)
    };

    this.transactionCreated.emit(transaction);
    this.bootstrapModal.hide();
  }

  selectTransactionType(event: Event): void {
    const transactionType = (event.target as HTMLSelectElement).value;

    switch (transactionType) {
      case TransactionType.TRANSFER:
        this.selectedTransactionType.set(TransactionType.TRANSFER);
        break;
      case TransactionType.BUY:
        this.selectedTransactionType.set(TransactionType.BUY);
        break;
    }
  }
}
