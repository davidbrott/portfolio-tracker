import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { APPLICATION_ENDPOINTS } from '../application.constants';
import { Observable } from 'rxjs/internal/Observable';

@Service()
export class AuthenticationService {
  private readonly http = inject(HttpClient);

  login(username: string, password: string): Observable<void> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<void>(APPLICATION_ENDPOINTS.LOGIN, formData);
  }

  logout(): Observable<void> {
    return this.http.post<void>(APPLICATION_ENDPOINTS.LOGOUT, {});
  }
}
