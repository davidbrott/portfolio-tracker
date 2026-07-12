package com.brott.portfoliotracker.service;

import com.brott.portfoliotracker.exception.PriceNotFoundException;
import com.brott.portfoliotracker.mapper.PriceMapper;
import com.brott.portfoliotracker.model.dto.PriceCreationDTO;
import com.brott.portfoliotracker.model.dto.PriceDTO;
import com.brott.portfoliotracker.model.entity.Asset;
import com.brott.portfoliotracker.model.entity.Price;
import com.brott.portfoliotracker.repository.AssetRepository;
import com.brott.portfoliotracker.repository.PriceRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class PriceServiceImpl implements PriceService {

  private final PriceRepository priceRepository;

  private final AssetRepository assetRepository;

  private final PriceMapper priceMapper;

  public PriceServiceImpl(PriceRepository priceRepository, AssetRepository assetRepository,
      PriceMapper priceMapper) {
    this.priceRepository = priceRepository;
    this.assetRepository = assetRepository;
    this.priceMapper = priceMapper;
  }

  @Override
  public PriceDTO save(PriceCreationDTO dto) {
    Optional<Asset> asset = assetRepository.findById(dto.assetId());

    if (asset.isEmpty()) {
      throw new PriceNotFoundException(
          String.format("Asset with id %s does not exist", dto.assetId()));
    }

    Price price = priceMapper.toPrice(dto, asset.get());
    Price p = priceRepository.save(price);

    return priceMapper.toDto(p);
  }

  @Override
  public List<PriceDTO> findByAssetId(Long assetId) {
    List<Price> prices = priceRepository.findByAssetId(assetId);

    return prices.stream().map(priceMapper::toDto).toList();
  }

  @Override
  public void delete(Long id) {
    priceRepository.deleteById(id);
  }
}
