package com.brott.portfoliotracker.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import com.brott.portfoliotracker.mapper.AccountMapper;
import com.brott.portfoliotracker.model.AccountType;
import com.brott.portfoliotracker.model.dto.AccountCreationDTO;
import com.brott.portfoliotracker.model.dto.AccountDTO;
import com.brott.portfoliotracker.model.entity.Account;
import com.brott.portfoliotracker.repository.AccountRepository;
import java.math.BigDecimal;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class AccountServiceTest {

  @Mock private AccountRepository accountRepository;

  @Mock private AccountMapper accountMapper;

  @Mock private TransactionService transactionService;

  @InjectMocks private AccountServiceImpl accountService;

  @Test
  void shouldReturnDTOAfterSave() {
    // Arrange
    AccountCreationDTO mockDto =
        new AccountCreationDTO(
            "account",
            AccountType.SAVINGS_ACCOUNT,
            new BigDecimal(0),
            new BigDecimal(10000),
            "bank");
    Account mockAccount = new Account();
    mockAccount.setName("account");
    mockAccount.setType(AccountType.SAVINGS_ACCOUNT);
    mockAccount.setInitialBalance(new BigDecimal(0));
    mockAccount.setBankName("bank");

    Account savedAccount = new Account();
    savedAccount.setId(1L);
    savedAccount.setName("account");
    savedAccount.setType(AccountType.SAVINGS_ACCOUNT);
    savedAccount.setInitialBalance(new BigDecimal(0));
    savedAccount.setBankName("bank");

    AccountDTO accountDto =
        new AccountDTO(
            1L,
            "account",
            AccountType.SAVINGS_ACCOUNT,
            new BigDecimal(0),
            new BigDecimal(50),
            "bank");

    when(accountMapper.toAccount(mockDto)).thenReturn(mockAccount);
    when(accountRepository.save(mockAccount)).thenReturn(savedAccount);

    when(transactionService.sumIncoming(1L)).thenReturn(new BigDecimal(100));
    when(transactionService.sumOutgoing(1L)).thenReturn(new BigDecimal(50));
    when(accountMapper.toDto(savedAccount, new BigDecimal(50))).thenReturn(accountDto);

    // Act
    AccountDTO dto = accountService.save(mockDto);

    // Assert
    assertEquals("bank", dto.bankName());
  }

  @Test
  void shouldReturnAccountById() {
    // Arrange
    Account mockAccount =
        new Account(
            1L,
            "account",
            AccountType.SAVINGS_ACCOUNT,
            new BigDecimal(1000),
            new BigDecimal(10000),
            "bank");
    when(accountRepository.findById(1L)).thenReturn(Optional.of(mockAccount));

    // Act
    Account result = accountService.findEntityById(1L);

    // Assert
    assertEquals("account", result.getName());
  }
}
