package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.AssetType;
import java.math.BigDecimal;

public record GroupedAssetDTO(
        String name, String isin, String ticker, AssetType type, BigDecimal amount,
        BigDecimal quantity, BigDecimal unitPrice
) {}
