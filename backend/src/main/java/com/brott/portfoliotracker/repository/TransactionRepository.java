package com.brott.portfoliotracker.repository;

import com.brott.portfoliotracker.model.dto.GroupedAssetDTO;
import com.brott.portfoliotracker.model.entity.Transaction;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

  @Query("select sum(amount) from Transaction t where t.toAccount.id = :accountId")
  BigDecimal sumIncoming(Long accountId);

  @Query("select sum(amount) from Transaction t where t.fromAccount.id = :accountId")
  BigDecimal sumOutgoing(Long accountId);

  @Query(
      "select new com.brott.portfoliotracker.model.dto.GroupedAssetDTO(t.asset.name, t.asset.isin, t.asset.ticker, t.asset.type, sum(t.amount), sum(t.quantity), sum(t.unitPrice)) from Transaction t group by t.asset.name")
  List<GroupedAssetDTO> groupByAssets();
}
