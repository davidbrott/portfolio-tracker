package com.brott.portfoliotracker.service;

import com.brott.portfoliotracker.model.dto.PriceCreationDTO;
import com.brott.portfoliotracker.model.dto.PriceDTO;
import java.util.List;

public interface PriceService {

  PriceDTO save(PriceCreationDTO price);

  List<PriceDTO> findByAssetId(Long assetId);

  void delete(Long id);
}
