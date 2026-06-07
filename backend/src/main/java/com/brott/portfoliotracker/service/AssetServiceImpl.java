package com.brott.portfoliotracker.service;

import com.brott.portfoliotracker.exception.AssetNotFoundException;
import com.brott.portfoliotracker.mapper.AssetMapper;
import com.brott.portfoliotracker.model.dto.AssetCreationDTO;
import com.brott.portfoliotracker.model.dto.AssetDTO;
import com.brott.portfoliotracker.model.entity.Asset;
import com.brott.portfoliotracker.repository.AssetRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class AssetServiceImpl implements AssetService {

  private final AssetRepository assetRepository;

  private final AssetMapper assetMapper;

  public AssetServiceImpl(AssetRepository assetRepository, AssetMapper assetMapper) {
    this.assetRepository = assetRepository;
    this.assetMapper = assetMapper;
  }

  @Override
  public AssetDTO save(AssetCreationDTO dto) {
    Asset asset = assetMapper.toAsset(dto);
    return assetMapper.toDto(assetRepository.save(asset));
  }

  @Override
  public List<AssetDTO> findAll() {
    List<Asset> assets = assetRepository.findAll();
    return assets.stream().map(assetMapper::toDto).toList();
  }

  @Override
  public AssetDTO findById(Long id) {
    Optional<Asset> asset = assetRepository.findById(id);

    if (asset.isPresent()) {
      return assetMapper.toDto(asset.get());
    } else {
      throw new AssetNotFoundException(String.format("Asset with %s does not exist", id));
    }
  }

  @Override
  public void delete(Long id) {
    assetRepository.deleteById(id);
  }
}
