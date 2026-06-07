package com.brott.portfoliotracker.service;

import com.brott.portfoliotracker.model.dto.AssetCreationDTO;
import com.brott.portfoliotracker.model.dto.AssetDTO;
import java.util.List;

public interface AssetService {

  AssetDTO save(AssetCreationDTO asset);

  List<AssetDTO> findAll();

  AssetDTO findById(Long id);

  void delete(Long id);
}
