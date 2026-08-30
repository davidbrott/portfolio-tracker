import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Settings } from '../../shared/models/settings.model';
import { Observable } from 'rxjs';
import { APPLICATION_ENDPOINTS } from '../application.constants';

@Service()
export class SettingsService {
  private readonly http = inject(HttpClient);

  getSettings(): Observable<Settings> {
    return this.http.get<Settings>(APPLICATION_ENDPOINTS.GET_SETTINGS);
  }
}
