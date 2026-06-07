package com.brott.portfoliotracker.mapper;

import com.brott.portfoliotracker.model.dto.AccountCreationDTO;
import com.brott.portfoliotracker.model.dto.AccountDTO;
import com.brott.portfoliotracker.model.entity.Account;
import java.math.BigDecimal;
import org.springframework.stereotype.Component;

@Component
public class AccountMapper {

  public AccountDTO toDto(Account account, BigDecimal balance) {
    return new AccountDTO(
        account.getId(),
        account.getName(),
        account.getType(),
        account.getInitialBalance(),
        balance,
        account.getBankName());
  }

  public Account toAccount(AccountCreationDTO dto) {
    Account account = new Account();
    account.setName(dto.name());
    account.setType(dto.type());
    account.setInitialBalance(dto.initialBalance());
    account.setBankName(dto.bankName());

    return account;
  }
}
