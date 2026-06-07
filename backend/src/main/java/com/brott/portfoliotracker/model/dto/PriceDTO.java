package com.brott.portfoliotracker.model.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PriceDTO {

  private Long id;

  private Long assetId;

  private BigDecimal price;

  private LocalDate priceDate;
}
