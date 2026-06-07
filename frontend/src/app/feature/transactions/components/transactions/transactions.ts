import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, inputBinding, OnInit, signal, viewChild, ViewContainerRef } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Observable } from 'rxjs';
import { Transaction } from '../../model/transaction.model';
import { AsyncPipe } from '@angular/common';
import { TransactionModal } from '../transaction-modal/transaction-modal';
import { AccountService } from '../../../accounts/services/account.service';
import { Account } from '../../../accounts/model/account.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-transactions',
  imports: [AsyncPipe],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Transactions implements OnInit {
  private transactionService = inject(TransactionService);
  private accountService = inject(AccountService);
  private viewContainer = viewChild.required('transactionModal', { read: ViewContainerRef });
  private cdRef = inject(ChangeDetectorRef);
  

  allTransactions$!: Observable<Transaction[]>

  ngOnInit(): void {
    this.allTransactions$ = this.transactionService.getAllTransactions();
  }

  openNewTransactionModal(): void {
    console.log('get all accounts');

    this.accountService.getAllAccounts().subscribe({
      next: (accounts: Account[]) => {
        const modal = this.viewContainer().createComponent(TransactionModal, {
          bindings: [
            inputBinding('accounts', signal(accounts))
          ]
        });
        modal.instance.show();        
        this.cdRef.detectChanges();
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
      }
    })

  }
}
