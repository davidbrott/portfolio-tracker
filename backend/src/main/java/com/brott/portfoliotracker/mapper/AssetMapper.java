package com.brott.portfoliotracker.mapper;

import com.brott.portfoliotracker.model.dto.AssetCreationDTO;
import com.brott.portfoliotracker.model.dto.AssetDTO;
import com.brott.portfoliotracker.model.entity.Asset;
import org.springframework.stereotype.Component;

@Component
public class AssetMapper {

  public AssetDTO toDto(Asset asset) {
    return new AssetDTO(
        asset.getId(),
        asset.getName(),
        asset.getIsin(),
        asset.getTicker(),
        asset.getType()
    );
  }

  public Asset toAsset(AssetCreationDTO dto) {
    Asset asset = new Asset();
    asset.setName(dto.name());
    asset.setType(dto.type());
    asset.setIsin(dto.isin());
    asset.setTicker(dto.ticker());

    return asset;
  }
}
