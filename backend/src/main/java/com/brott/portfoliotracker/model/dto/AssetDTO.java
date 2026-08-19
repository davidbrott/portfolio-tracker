package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.AssetType;

public record AssetDTO(Long id, String name, String isin, String ticker, AssetType type) {}
