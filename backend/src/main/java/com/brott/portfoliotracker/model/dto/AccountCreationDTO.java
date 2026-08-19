package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.AccountType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

public record AccountCreationDTO(
    @NotBlank String name,
    @NotNull AccountType type,
    BigDecimal initialBalance,
    BigDecimal currentBalance,
    @NotBlank String bankName) {}
