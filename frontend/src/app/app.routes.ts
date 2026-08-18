import { Routes } from '@angular/router';
import { Shell } from './core/layout/shell/shell';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
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
