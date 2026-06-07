import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Accounts } from './feature/accounts/components/accounts/accounts';
import { Transactions } from "./feature/transactions/components/transactions/transactions";

@Component({
  selector: 'app-root',
  imports: [Accounts, Transactions],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
