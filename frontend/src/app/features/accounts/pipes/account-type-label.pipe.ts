import { Pipe, PipeTransform } from '@angular/core';
import { AccountType } from '../../../shared/enums/account-type.enum';

@Pipe({
  name: 'accountTypeLabel'
})
export class AccountTypeLabelPipe implements PipeTransform {
  transform(type: AccountType): string {
    let result = '';

    switch (type) {
      case AccountType.CHECKING_ACCOUNT:
        result = 'Girokonto';
        break;
      case AccountType.SAVINGS_ACCOUNT:
        result = 'Tagesgeldkonto';
        break;
      case AccountType.FIXED_DEPOSIT:
        result = 'Festgeldkonto';
        break;
      default:
        result = '';
    }

    return result;
  }
}
