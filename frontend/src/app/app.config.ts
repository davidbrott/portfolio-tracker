import {
  LOCALE_ID,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideAppInitializer,
  inject
} from '@angular/core';
import { provideRouter } from '@angular/router';

import localeDe from '@angular/common/locales/de';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom, tap } from 'rxjs';
import { SettingsService } from './core/services/settings.service';
import { ApplicationStore } from './core/application.store';

registerLocaleData(localeDe, 'de-DE');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideAppInitializer(() => {
      const settingsService = inject(SettingsService);
      const applicationStore = inject(ApplicationStore);
      return firstValueFrom(
        settingsService
          .getSettings()
          .pipe(tap((settings) => applicationStore.updateSettings(settings)))
      );
    }),
    provideRouter(routes),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      }),
      lang: 'de',
      fallbackLang: 'de'
    }),
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
};
