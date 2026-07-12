import { Component, ElementRef, output, signal, viewChild } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { TransactionType } from '../../../enum/transaction-type.enum';
import { Transaction } from '../../../models/transaction.model';
import { Modal } from 'bootstrap';

interface TransferData {
   bookingDate: string;
   fromAccountId: number;
   toAccountId: number;
   amount: number;
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
    fromAccountId: 0,
    toAccountId: 0,
    amount: 0,
    note: ''
  })

  transferForm = form(this.transferModel);

  transactionCreated = output<Transaction>();

  private bootstrapModal!: Modal;

  open(): void {
    this.bootstrapModal = new Modal(this.modal()!.nativeElement);
    this.bootstrapModal.show();
  }

  createTransfer(): void {
    const transaction: Transaction = {
      type: TransactionType.TRANSFER,
      ...this.transferModel()
    }

    this.transactionCreated.emit(transaction);
    this.bootstrapModal.hide();
  }
}
