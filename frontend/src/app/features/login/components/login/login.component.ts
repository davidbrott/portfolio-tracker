import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { ApplicationStore } from '../../../../core/application.store';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

interface LoginFormModel {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormField, FormsModule, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginModel = signal<LoginFormModel>({
    username: '',
    password: ''
  });

  loginForm = form(this.loginModel);

  private readonly authenticationService = inject(AuthenticationService);
  private readonly applicationStore = inject(ApplicationStore);
  private readonly router = inject(Router);

  login(): void {
    this.authenticationService
      .login(this.loginModel().username, this.loginModel().password)
      .subscribe({
        next: () => {
          this.applicationStore.setLoggedIn(true);
          this.router.navigateByUrl('/accounts');
        },
        error: (error) => console.error('An error occurred during login', error)
      });
  }
}
