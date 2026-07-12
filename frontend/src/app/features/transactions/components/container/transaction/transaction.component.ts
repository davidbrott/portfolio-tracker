import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';
import { Transaction } from '../../../models/transaction.model';
import { HttpErrorResponse } from '@angular/common/http';
import { TransactionTable } from "../../presentation/transaction-table/transaction-table";
import { FeatureHeader } from "../../../../../shared/components/feature-header/feature-header.component";
import { TransactionModal } from "../../presentation/transaction-modal/transaction-modal";

@Component({
  selector: 'app-transaction',
  imports: [TransactionTable, FeatureHeader, TransactionModal],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent implements OnInit {
  transactionModal = viewChild<TransactionModal>('transactionModal');
  allTransactions = signal<Transaction[]>([])

  private readonly transactionService = inject(TransactionService);

  ngOnInit(): void {
    this.loadAllTransactions();
  }

  openTransactionModal(): void {
    this.transactionModal()?.open();
  }

  createTransaction(transaction: Transaction): void {
    this.transactionService.createTransaction(transaction).subscribe({
      next: (transaction: Transaction) => this.allTransactions.update(transactions => [...transactions, transaction]),
      error: (error: HttpErrorResponse) => console.error('An error occurred while creating a new transaction', error)
    })
  }

  private loadAllTransactions(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (transactions: Transaction[]) => this.allTransactions.set(transactions),
      error: (error: HttpErrorResponse) => console.error('An error occurred while requesting all transactions', error)
    })
  }
}
