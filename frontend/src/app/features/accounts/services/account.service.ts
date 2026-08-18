import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ACCOUNT_ENDPOINTS } from '../account.constants';
import { Account } from '../models/account.model';

@Service()
export class AccountService {
  private readonly http: HttpClient = inject(HttpClient);

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(ACCOUNT_ENDPOINTS.GET_ALL);
  }

  createAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(ACCOUNT_ENDPOINTS.CREATE, account);
  }

  deleteAccount(id: number): Observable<void> {
    return this.http.delete<void>(ACCOUNT_ENDPOINTS.DELETE(id));
  }
}
