import { Routes } from '@angular/router';
import { Shell } from './core/layout/shell/shell';
import { LoginComponent } from './features/login/components/login/login.component';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: Shell,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'accounts',
        loadChildren: () =>
          import('./features/accounts/account.routes').then((m) => m.ACCOUNT_ROUTES)
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./features/transactions/transaction.routes').then((m) => m.TRANSACTION_ROUTES)
      },
      {
        path: 'assets',
        loadChildren: () => import('./features/assets/asset.routes').then((m) => m.ASSET_ROUTES)
      }
    ]
  }
];
