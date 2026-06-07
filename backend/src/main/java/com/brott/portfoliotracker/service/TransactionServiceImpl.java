package com.brott.portfoliotracker.service;

import com.brott.portfoliotracker.exception.TransactionNotFoundException;
import com.brott.portfoliotracker.mapper.TransactionMapper;
import com.brott.portfoliotracker.model.dto.TransactionCreationDTO;
import com.brott.portfoliotracker.model.dto.TransactionDTO;
import com.brott.portfoliotracker.model.entity.Account;
import com.brott.portfoliotracker.model.entity.Transaction;
import com.brott.portfoliotracker.repository.AccountRepository;
import com.brott.portfoliotracker.repository.TransactionRepository;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TransactionServiceImpl implements TransactionService {

  private final TransactionRepository transactionRepository;

  private final AccountRepository accountRepository;

  private final TransactionMapper transactionMapper;

  public TransactionServiceImpl(
      TransactionMapper transactionMapper,
      TransactionRepository transactionRepository,
      AccountRepository accountRepository) {
    this.transactionMapper = transactionMapper;
    this.transactionRepository = transactionRepository;
    this.accountRepository = accountRepository;
  }

  @Override
  @Transactional
  public TransactionDTO save(TransactionCreationDTO dto) {
    Optional<Account> fromAccount = this.accountRepository.findById(
        dto.fromAccountId());
    Optional<Account> toAccount = this.accountRepository.findById(
        dto.toAccountId());

    if (fromAccount.isEmpty() || toAccount.isEmpty()) {
      throw new RuntimeException(); //TODO Error
    }

    Account fromAcc = fromAccount.get();
    Account toAcc = toAccount.get();

    BigDecimal fromCurrentBalance =
        fromAcc.getCurrentBalance() != null ? fromAcc.getCurrentBalance() : BigDecimal.ZERO;
    BigDecimal toCurrentBalance =
        toAcc.getCurrentBalance() != null ? toAcc.getCurrentBalance() : BigDecimal.ZERO;

    fromAcc.setCurrentBalance(fromCurrentBalance.subtract(dto.amount()));
    toAcc.setCurrentBalance(toCurrentBalance.add(dto.amount()));

    this.accountRepository.save(fromAcc);
    this.accountRepository.save(toAcc);

    Transaction t = this.transactionRepository.save(
        transactionMapper.toTransaction(dto, fromAcc, toAcc, null));
    return transactionMapper.toDto(t);

  }

  @Override
  public List<TransactionDTO> findAll() {
    List<Transaction> transactions = this.transactionRepository.findAll();
    return transactions.stream().map(transactionMapper::toDto).toList();
  }

  @Override
  public TransactionDTO findById(Long transactionId) {
    Optional<Transaction> transaction = transactionRepository.findById(transactionId);

    if (transaction.isPresent()) {
      return transactionMapper.toDto(transaction.get());
    } else {
      throw new TransactionNotFoundException(
          String.format("Transaction with %s does not exist", transactionId));
    }
  }

  @Override
  public BigDecimal sumIncoming(Long accountId) {
    return transactionRepository.sumIncoming(accountId);
  }

  @Override
  public BigDecimal sumOutgoing(Long accountId) {
    return transactionRepository.sumOutgoing(accountId);
  }

}
