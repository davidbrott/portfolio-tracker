package com.brott.portfoliotracker.model.dto;

import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;

public record PriceCreationDTO(
    @NotNull Long assetId, @NotNull BigDecimal price, LocalDate priceDate) {}
