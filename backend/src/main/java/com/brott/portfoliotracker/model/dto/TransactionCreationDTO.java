package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.TransactionType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.math.BigDecimal;
import java.time.LocalDate;

public record TransactionCreationDTO(LocalDate bookingDate,
                                     @Enumerated(EnumType.STRING) TransactionType type,
                                     Long fromAccountId, Long toAccountId, Long assetId,
                                     BigDecimal amount
    , BigDecimal quantity, BigDecimal unitPrice, BigDecimal fees, BigDecimal taxes, String note) {

}
