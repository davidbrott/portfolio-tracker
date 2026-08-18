package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.AccountType;
import java.math.BigDecimal;

public record AccountCreationDTO(
    String name,
    AccountType type,
    BigDecimal initialBalance,
    BigDecimal currentBalance,
    String bankName) {}
