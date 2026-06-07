import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction } from '../model/transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private httpClient = inject(HttpClient);

  getAllTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>('http://localhost:8080/api/transactions/');
  }
  
}
