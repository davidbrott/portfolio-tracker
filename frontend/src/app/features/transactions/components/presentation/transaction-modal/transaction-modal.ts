import { Component, ElementRef, output, signal, viewChild } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { TransactionType } from '../../../enum/transaction-type.enum';
import { Transaction } from '../../../models/transaction.model';
import { Modal } from 'bootstrap';
import { Asset } from '../../../../assets/models/asset.model';

interface TransferData {
   bookingDate: string;
   type: TransactionType;
   fromAccountId: number;
   toAccountId: number;
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
  imports: [FormField],
  templateUrl: './transaction-modal.html',
  styleUrl: './transaction-modal.scss',
})
export class TransactionModal {
  modal = viewChild<ElementRef>('modal');  
  transferModel = signal<TransferData>({
    bookingDate: '',
    type: TransactionType.TRANSFER,
    fromAccountId: 0,
    toAccountId: 0,
    assetId: 0,
    amount: 0,
    quantity: 0,
    unitPrice: 0,
    fees: 0,
    taxes: 0,
    note: ''
  })

  transferForm = form(this.transferModel);
  selectedTransactionType = signal<TransactionType>(TransactionType.TRANSFER);
  assets = signal<Asset[]>([]);

  transactionCreated = output<Transaction>();

  readonly transactionType = TransactionType;

  private bootstrapModal!: Modal;

  open(assets: Asset[]): void {
    this.assets.set(assets);
    this.bootstrapModal = new Modal(this.modal()!.nativeElement);
    this.bootstrapModal.show();
  }

  createTransfer(): void {
    // const transaction: Transaction = {
    //   type: TransactionType.TRANSFER,
    //   ...this.transferModel()
    // }

    // this.transactionCreated.emit(transaction);
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
