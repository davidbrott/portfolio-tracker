import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationStore } from '../../application.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private readonly translate = inject(TranslateService);
  private readonly authService = inject(AuthenticationService);
  private readonly applicationStore = inject(ApplicationStore);
  private readonly router = inject(Router);

  changeLanguage(): void {
    const currentLang = this.translate.getCurrentLang();
    this.translate.use(currentLang === 'en' ? 'de' : 'en');
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.applicationStore.setLoggedIn(false);
        this.router.navigateByUrl('/login');
      },
      error: (error: HttpErrorResponse) => {
        console.error('Logout failed:', error);
      }
    });
  }
}
