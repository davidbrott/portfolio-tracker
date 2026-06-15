import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { TRANSACTION_ENDPOINTS } from '../transaction.constants';

@Service()
export class TransactionService {
    private readonly http = inject(HttpClient);

    getAllTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(TRANSACTION_ENDPOINTS.GET_ALL);
    }
}
