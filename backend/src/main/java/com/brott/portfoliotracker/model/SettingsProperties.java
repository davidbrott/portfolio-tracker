package com.brott.portfoliotracker.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties
@ConfigurationProperties(prefix = "settings")
@Getter
@Setter
public class SettingsProperties {

  private String dateFormat;

  private String currencyFormat;
}
