import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { TRANSACTION_ENDPOINTS } from '../transaction.constants';
import { Account } from '../../../shared/models/account.model';

@Service()
export class TransactionService {
  private readonly http = inject(HttpClient);

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(TRANSACTION_ENDPOINTS.CREATE, transaction);
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(TRANSACTION_ENDPOINTS.GET_ALL_TRANSACTIONS);
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(TRANSACTION_ENDPOINTS.GET_ALL_ACCOUNTS);
  }
}
