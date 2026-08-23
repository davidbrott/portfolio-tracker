import { Pipe, PipeTransform } from '@angular/core';
import { Account } from '../../../shared/models/account.model';

@Pipe({
  name: 'accountName'
})
export class AccountNamePipe implements PipeTransform {
  transform(accountId: number | undefined, accounts: Account[]): string {
    const account = accounts.find((acc) => acc.id !== undefined && acc.id === accountId);

    if (account) {
      return account.name;
    } else {
      return '';
    }
  }
}
