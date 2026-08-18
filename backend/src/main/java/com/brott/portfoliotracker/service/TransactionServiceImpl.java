package com.brott.portfoliotracker.service;

import com.brott.portfoliotracker.exception.TransactionNotFoundException;
import com.brott.portfoliotracker.mapper.TransactionMapper;
import com.brott.portfoliotracker.model.dto.TransactionCreationDTO;
import com.brott.portfoliotracker.model.dto.TransactionDTO;
import com.brott.portfoliotracker.model.entity.Account;
import com.brott.portfoliotracker.model.entity.Asset;
import com.brott.portfoliotracker.model.entity.Transaction;
import com.brott.portfoliotracker.repository.AccountRepository;
import com.brott.portfoliotracker.repository.AssetRepository;
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

  private final AssetRepository assetRepository;

  private final TransactionMapper transactionMapper;

  public TransactionServiceImpl(
      TransactionMapper transactionMapper,
      TransactionRepository transactionRepository,
      AccountRepository accountRepository,
      AssetRepository assetRepository) {
    this.transactionMapper = transactionMapper;
    this.transactionRepository = transactionRepository;
    this.accountRepository = accountRepository;
    this.assetRepository = assetRepository;
  }

  @Override
  @Transactional
  public TransactionDTO save(TransactionCreationDTO dto) {
    TransactionDTO transactionDTO = null;

    Optional<Account> fromAccount = this.accountRepository.findById(dto.fromAccountId());

    if (fromAccount.isEmpty()) {
      throw new RuntimeException(); // TODO Error
    }

    Account fromAcc = fromAccount.get();

    BigDecimal fromCurrentBalance =
        fromAcc.getCurrentBalance() != null ? fromAcc.getCurrentBalance() : BigDecimal.ZERO;

    switch (dto.type()) {
      case TRANSFER:
        Optional<Account> toAccount = this.accountRepository.findById(dto.toAccountId());

        if (toAccount.isEmpty()) {
          throw new RuntimeException(); // TODO Error
        }

        Account toAcc = toAccount.get();
        BigDecimal toCurrentBalance =
            toAcc.getCurrentBalance() != null ? toAcc.getCurrentBalance() : BigDecimal.ZERO;

        fromAcc.setCurrentBalance(fromCurrentBalance.subtract(dto.amount()));
        toAcc.setCurrentBalance(toCurrentBalance.add(dto.amount()));

        this.accountRepository.save(fromAcc);
        this.accountRepository.save(toAcc);

        transactionDTO = saveTransaction(dto, fromAcc, toAcc, null);
        break;

      case BUY:
        System.out.println("Create BUY Transaction");
        fromAcc.setCurrentBalance(fromCurrentBalance.subtract(dto.amount()));

        this.accountRepository.save(fromAcc);
        Optional<Asset> asset = this.assetRepository.findById(dto.assetId());

        System.out.println("ASSET FOUND");

        if (asset.isEmpty()) {
          throw new RuntimeException(); // TODO Error
        }

        transactionDTO = saveTransaction(dto, fromAcc, null, asset.get());

        break;
    }

    // TODO
    /*
    SELL,
    DIVIDEND,
    INTEREST,
    DEPOSIT,
    WITHDRAWAL
         */

    return transactionDTO;
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

  private TransactionDTO saveTransaction(
      TransactionCreationDTO dto, Account fromAccount, Account toAccount, Asset asset) {
    Transaction transaction =
        this.transactionRepository.save(
            transactionMapper.toTransaction(dto, fromAccount, toAccount, asset));
    return transactionMapper.toDto(transaction);
  }
}
