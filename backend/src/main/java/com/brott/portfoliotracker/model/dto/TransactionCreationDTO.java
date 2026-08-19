package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.TransactionType;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;

public record TransactionCreationDTO(
    LocalDate bookingDate,
    @NotNull TransactionType type,
    @NotNull Long fromAccountId,
    Long toAccountId,
    Long assetId,
    @NotNull BigDecimal amount,
    BigDecimal quantity,
    BigDecimal unitPrice,
    BigDecimal fees,
    BigDecimal taxes,
    String note) {}
