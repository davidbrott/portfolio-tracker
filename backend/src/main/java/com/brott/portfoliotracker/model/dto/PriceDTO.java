package com.brott.portfoliotracker.model.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public record PriceDTO(Long id, Long assetId, BigDecimal price, LocalDate priceDate) {}
