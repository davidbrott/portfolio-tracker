package com.brott.portfoliotracker.mapper;

import com.brott.portfoliotracker.model.dto.PriceCreationDTO;
import com.brott.portfoliotracker.model.dto.PriceDTO;
import com.brott.portfoliotracker.model.entity.Asset;
import com.brott.portfoliotracker.model.entity.Price;
import org.springframework.stereotype.Component;

@Component
public class PriceMapper {

  public PriceDTO toDto(Price price) {
    return new PriceDTO(
        price.getId(), price.getAsset().getId(), price.getPrice(), price.getPriceDate());
  }

  public Price toPrice(PriceCreationDTO dto, Asset asset) {
    Price price = new Price();
    price.setPriceDate(dto.priceDate());
    price.setPrice(dto.price());
    price.setAsset(asset);

    return price;
  }
}
