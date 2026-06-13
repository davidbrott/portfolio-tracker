import { Routes } from '@angular/router';
import { Shell } from './core/layout/shell/shell';

export const routes: Routes = [
    {
        path: '',
        component: Shell,
        children: [
            {
                path: 'accounts',
                loadComponent: () => import('./features/accounts/components/account-table/account-table').then(m => m.AccountTable)
            },
             {
                path: 'transactions',
                loadComponent: () => import('./features/transactions/components/transaction-table/transaction-table').then(m => m.TransactionTable)
            }
        ]

    }
];
