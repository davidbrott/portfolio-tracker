package com.brott.portfoliotracker.model.dto;

import com.brott.portfoliotracker.model.AssetType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AssetCreationDTO(
    @NotBlank String name, String isin, String ticker, @NotNull AssetType type) {}
