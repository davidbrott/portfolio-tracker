import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';
import { Transaction } from '../../../models/transaction.model';
import { HttpErrorResponse } from '@angular/common/http';
import { TransactionTable } from '../../presentation/transaction-table/transaction-table';
import { FeatureHeader } from '../../../../../shared/components/feature-header/feature-header.component';
import { TransactionModal } from '../../presentation/transaction-modal/transaction-modal';
import { AssetService } from '../../../../assets/services/asset.service';
import { Asset } from '../../../../assets/models/asset.model';
import { AccountService } from '../../../../accounts/services/account.service';
import { Account } from '../../../../../shared/models/account.model';

@Component({
  selector: 'app-transaction',
  imports: [TransactionTable, FeatureHeader, TransactionModal],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent implements OnInit {
  transactionModal = viewChild<TransactionModal>('transactionModal');
  allTransactions = signal<Transaction[]>([]);
  allAccounts = signal<Account[]>([]);

  private allAssets = signal<Asset[]>([]);
  private readonly transactionService = inject(TransactionService);
  private readonly assetService = inject(AssetService);

  ngOnInit(): void {
    this.loadAllTransactions();
    this.loadAllAssets();
    this.loadAllAccounts();
  }

  openTransactionModal(): void {
    this.transactionModal()?.open(this.allAssets(), this.allAccounts());
  }

  createTransaction(transaction: Transaction): void {
    this.transactionService.createTransaction(transaction).subscribe({
      next: (transaction: Transaction) =>
        this.allTransactions.update((transactions) => [...transactions, transaction]),
      error: (error: HttpErrorResponse) =>
        console.error('An error occurred while creating a new transaction', error)
    });
  }

  private loadAllTransactions(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (transactions: Transaction[]) => this.allTransactions.set(transactions),
      error: (error: HttpErrorResponse) =>
        console.error('An error occurred while requesting all transactions', error)
    });
  }

  private loadAllAssets(): void {
    this.assetService.getAllAssets().subscribe({
      next: (assets: Asset[]) => this.allAssets.set(assets),
      error: (error: HttpErrorResponse) =>
        console.error('An error occurred while requesting all assets', error)
    });
  }

  private loadAllAccounts(): void {
    this.transactionService.getAllAccounts().subscribe({
      next: (accounts: Account[]) => this.allAccounts.set(accounts),
      error: (error: HttpErrorResponse) =>
        console.error('An error occurred while requesting all accounts', error)
    });
  }
}
