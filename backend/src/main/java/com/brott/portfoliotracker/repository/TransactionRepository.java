package com.brott.portfoliotracker.repository;

import com.brott.portfoliotracker.model.entity.Transaction;
import java.math.BigDecimal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

  @Query("select sum(amount) from Transaction t where t.toAccount.id = :accountId")
  BigDecimal sumIncoming(Long accountId);

  @Query("select sum(amount) from Transaction t where t.fromAccount.id = :accountId")
  BigDecimal sumOutgoing(Long accountId);
}
