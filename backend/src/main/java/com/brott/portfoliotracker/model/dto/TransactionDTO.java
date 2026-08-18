package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.TransactionType;
import jakarta.annotation.Nullable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.math.BigDecimal;
import java.time.LocalDate;

public record TransactionDTO(
    Long id,
    LocalDate bookingDate,
    @Enumerated(EnumType.STRING) TransactionType type,
    Long fromAccountId,
    @Nullable Long toAccountId,
    @Nullable Long assetId,
    BigDecimal amount,
    BigDecimal quantity,
    BigDecimal unitPrice,
    BigDecimal fees,
    BigDecimal taxes,
    String note) {}
