package com.brott.portfoliotracker.controller;

import com.brott.portfoliotracker.model.dto.AssetCreationDTO;
import com.brott.portfoliotracker.model.dto.AssetDTO;
import com.brott.portfoliotracker.service.AssetService;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/assets")
@CrossOrigin(origins = "http://localhost:4200")
public class AssetController {

  private final AssetService assetService;

  public AssetController(
      AssetService assetService) {
    this.assetService = assetService;
  }

  @GetMapping("/")
  public List<AssetDTO> findAll() {
    return assetService.findAll();
  }

  @PostMapping("/")
  public AssetDTO createAsset(
      @RequestBody
      AssetCreationDTO dto) {
    return assetService.save(dto);
  }
}
