package com.brott.portfoliotracker.service;

import com.brott.portfoliotracker.model.dto.TransactionCreationDTO;
import com.brott.portfoliotracker.model.dto.TransactionDTO;
import java.math.BigDecimal;
import java.util.List;

public interface TransactionService {

  TransactionDTO save(TransactionCreationDTO dto);

  List<TransactionDTO> findAll();

  TransactionDTO findById(Long transactionId);

  BigDecimal sumIncoming(Long accountId);

  BigDecimal sumOutgoing(Long accountId);

  // TODO Delete
}
