package com.brott.portfoliotracker.mapper;

import com.brott.portfoliotracker.model.dto.TransactionCreationDTO;
import com.brott.portfoliotracker.model.dto.TransactionDTO;
import com.brott.portfoliotracker.model.entity.Account;
import com.brott.portfoliotracker.model.entity.Asset;
import com.brott.portfoliotracker.model.entity.Transaction;
import jakarta.annotation.Nullable;
import org.springframework.stereotype.Component;

@Component
public class TransactionMapper {

  public TransactionDTO toDto(Transaction transaction) {
    Long assetId = null;
    if (transaction.getAsset() != null) {
      assetId = transaction.getAsset().getId();
    }

    return new TransactionDTO(
        transaction.getId(),
        transaction.getBookingDate(),
        transaction.getType(),
        transaction.getFromAccount().getId(),
        transaction.getToAccount().getId(),
        assetId,
        transaction.getAmount(),
        transaction.getQuantity(),
        transaction.getUnitPrice(),
        transaction.getFees(),
        transaction.getTaxes(),
        transaction.getNote()
    );
  }

  public Transaction toTransaction(TransactionCreationDTO dto, Account fromAccount,
      Account toAccount, @Nullable Asset asset) {
    Transaction t = new Transaction();
    t.setBookingDate(dto.bookingDate());
    t.setType(dto.type());
    t.setFromAccount(fromAccount);
    t.setToAccount(toAccount);
    if (asset != null) {
      t.setAsset(asset);
    }
    t.setAmount(dto.amount());
    t.setQuantity(dto.quantity());
    t.setUnitPrice(dto.unitPrice());
    t.setFees(dto.fees());
    t.setTaxes(dto.taxes());
    t.setNote(dto.note());

    return t;
  }
}
