import { Component, inject, OnInit, signal } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';
import { Transaction } from '../../../models/transaction.model';
import { HttpErrorResponse } from '@angular/common/http';
import { TransactionTable } from "../../presentation/transaction-table/transaction-table";

@Component({
  selector: 'app-transaction',
  imports: [TransactionTable],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss',
})
export class TransactionComponent implements OnInit {
  allTransactions = signal<Transaction[]>([])

  private readonly transactionService = inject(TransactionService);

  ngOnInit(): void {
    this.loadAllTransactions();
  }

  private loadAllTransactions(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (transactions: Transaction[]) => this.allTransactions.set(transactions),
      error: (error: HttpErrorResponse) => console.error('An error occurred while requesting all transactions', error)
    })
  }
}
