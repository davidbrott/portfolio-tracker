package com.brott.portfoliotracker.controller;

import com.brott.portfoliotracker.model.dto.PriceCreationDTO;
import com.brott.portfoliotracker.model.dto.PriceDTO;
import com.brott.portfoliotracker.service.PriceService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/prices")
public class PriceController {

  private final PriceService priceService;

  public PriceController(PriceService priceService) {
    this.priceService = priceService;
  }

  @PostMapping("/")
  public PriceDTO createPrice(@Valid @RequestBody PriceCreationDTO dto) {
    return priceService.save(dto);
  }

  @GetMapping("/{assetId}")
  public List<PriceDTO> findAll(@PathVariable Long assetId) {
    return priceService.findByAssetId(assetId);
  }
}
