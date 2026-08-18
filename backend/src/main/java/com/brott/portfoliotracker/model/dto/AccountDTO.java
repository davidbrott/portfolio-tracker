package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.AccountType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import java.math.BigDecimal;

public record AccountDTO(
    Long id,
    String name,
    @Enumerated(EnumType.STRING) AccountType type,
    BigDecimal initialBalance,
    BigDecimal currentBalance,
    String bankName) {}
