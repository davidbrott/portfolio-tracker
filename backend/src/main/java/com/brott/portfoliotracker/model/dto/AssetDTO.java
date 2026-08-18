package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.AssetType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public record AssetDTO(
    Long id,
    String name,
    String isin,
    String ticker,
    @Enumerated(EnumType.STRING) AssetType type) {}
