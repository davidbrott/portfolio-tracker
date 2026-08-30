package com.brott.portfoliotracker.controller;

import com.brott.portfoliotracker.model.SettingsProperties;
import com.brott.portfoliotracker.model.dto.SettingsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/settings")
public class SettingsController {

  @Autowired private SettingsProperties settings;

  @GetMapping("/")
  public SettingsDTO getSettings() {
    return new SettingsDTO(this.settings.getDateFormat(), this.settings.getCurrencyFormat());
  }
}
