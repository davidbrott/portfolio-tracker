package com.brott.portfoliotracker.service;

import com.brott.portfoliotracker.exception.AccountNotFoundException;
import com.brott.portfoliotracker.mapper.AccountMapper;
import com.brott.portfoliotracker.model.dto.AccountCreationDTO;
import com.brott.portfoliotracker.model.dto.AccountDTO;
import com.brott.portfoliotracker.model.entity.Account;
import com.brott.portfoliotracker.repository.AccountRepository;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

  private final AccountRepository accountRepository;
  private final AccountMapper accountMapper;
  private final TransactionService transactionService;

  public AccountServiceImpl(
      AccountRepository accountRepository,
      AccountMapper accountMapper,
      TransactionService transactionService) {
    this.accountRepository = accountRepository;
    this.accountMapper = accountMapper;
    this.transactionService = transactionService;
  }

  @Override
  public AccountDTO save(AccountCreationDTO dto) {
    Account account = this.accountRepository.save(this.accountMapper.toAccount(dto));
    return this.accountMapper.toDto(
        account, calcBalance(account.getInitialBalance(), account.getId()));
  }

  @Override
  public List<AccountDTO> findAll() {
    List<Account> accounts = this.accountRepository.findAll();
    return accounts.stream()
        .map(a -> accountMapper.toDto(a, calcBalance(a.getInitialBalance(), a.getId())))
        .toList();
  }

  @Override
  public AccountDTO findById(Long id) {
    Optional<Account> account = this.accountRepository.findById(id);

    if (account.isPresent()) {
      Account a = account.get();
      return accountMapper.toDto(a, calcBalance(a.getInitialBalance(), a.getId()));
    } else {
      throw new AccountNotFoundException(String.format("Account with id %s does not exist", id));
    }
  }

  @Override
  public Account findEntityById(Long id) {
    Optional<Account> account = this.accountRepository.findById(id);

    if (account.isPresent()) {
      return account.get();
    } else {
      throw new AccountNotFoundException(String.format("Account with id %s does not exists", id));
    }
  }

  @Override
  public void delete(Long id) {
    Optional<Account> account = this.accountRepository.findById(id);

    if (account.isPresent()) {
      this.accountRepository.deleteById(id);
    } else {
      throw new AccountNotFoundException(String.format("Account with id %s does not exists", id));
    }
  }

  private BigDecimal calcBalance(BigDecimal initialBalance, Long accountId) {
    BigDecimal sumIncoming = transactionService.sumIncoming(accountId);
    BigDecimal sumOutgoing = transactionService.sumOutgoing(accountId);

    initialBalance = initialBalance != null ? initialBalance : BigDecimal.ZERO;
    sumIncoming = sumIncoming != null ? sumIncoming : BigDecimal.ZERO;
    sumOutgoing = sumOutgoing != null ? sumOutgoing : BigDecimal.ZERO;

    return initialBalance.add(sumIncoming).subtract(sumOutgoing);
  }
}
