import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private httpClient: HttpClient = inject(HttpClient);

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>('http://localhost:8080/api/accounts/');
  }

  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>('http://localhost:8080/api/accounts/', account);
  }
  
}
